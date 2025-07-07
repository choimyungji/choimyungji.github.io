window.searchIndex = [];
window.fuse = null;

// Initialize search
async function initSearch() {
    try {
        const response = await fetch('/data/search-index.json');
        window.searchIndex = await response.json();
        
        const options = {
            keys: [
                { name: 'title', weight: 0.4 },
                { name: 'content', weight: 0.3 },
                { name: 'summary', weight: 0.2 },
                { name: 'tags', weight: 0.1 }
            ],
            threshold: 0.4,
            includeScore: true,
            includeMatches: true,
            minMatchCharLength: 2,
            ignoreLocation: true
        };
        
        window.fuse = new Fuse(window.searchIndex, options);
        console.log('Search initialized with', window.searchIndex.length, 'documents');
    } catch (error) {
        console.error('Failed to initialize search:', error);
    }
}

// Perform search
function performSearch(query) {
    if (!window.fuse || !query.trim()) return [];
    
    const results = window.fuse.search(query);
    return results.slice(0, 10); // Return top 10 results
}

// Format search results
function formatSearchResults(results) {
    if (!results.length) {
        return '<div class="search-no-results">검색 결과가 없습니다.</div>';
    }
    
    return results.map(result => {
        const item = result.item;
        const score = Math.round((1 - result.score) * 100);
        
        return `
            <div class="search-result-item">
                <h4 class="search-result-title">
                    <a href="${item.url}">${item.title}</a>
                    <span class="search-result-type">[${item.type}]</span>
                </h4>
                <p class="search-result-summary">${item.summary || item.content.substring(0, 100) + '...'}</p>
                <div class="search-result-meta">
                    <span class="search-result-score">일치도: ${score}%</span>
                    ${item.tags.length ? `<span class="search-result-tags">${item.tags.join(', ')}</span>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Live search functionality
function setupLiveSearch(inputId, resultsId) {
    const searchInput = document.getElementById(inputId);
    const searchResults = document.getElementById(resultsId);
    
    if (!searchInput || !searchResults) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        searchTimeout = setTimeout(() => {
            const results = performSearch(query);
            searchResults.innerHTML = formatSearchResults(results);
            searchResults.style.display = 'block';
        }, 300);
    });
    
    // Hide results when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.style.display = 'none';
        }
    });
    
    // Show results when focusing on search input
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length >= 2) {
            searchResults.style.display = 'block';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSearch().then(() => {
        // Setup live search for header
        setupLiveSearch('headerSearchInput', 'headerSearchResults');
        
        // Setup live search for search page
        setupLiveSearch('searchInput', 'searchResults');
    });
});