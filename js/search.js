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
    } catch (error) {
        // Search initialization failed silently
    }
}

// Perform search
function performSearch(query) {
    if (!window.fuse || !query.trim()) return [];
    
    const results = window.fuse.search(query);
    return results.slice(0, 10); // Return top 10 results
}

// Format search results using safe DOM manipulation
function formatSearchResults(results, container) {
    container.textContent = '';

    if (!results.length) {
        const noResults = document.createElement('div');
        noResults.className = 'search-no-results';
        noResults.textContent = '검색 결과가 없습니다.';
        container.appendChild(noResults);
        return;
    }

    results.forEach(result => {
        const item = result.item;
        const score = Math.round((1 - result.score) * 100);

        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';

        const title = document.createElement('h4');
        title.className = 'search-result-title';

        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.title;
        title.appendChild(link);

        const typeSpan = document.createElement('span');
        typeSpan.className = 'search-result-type';
        typeSpan.textContent = '[' + item.type + ']';
        title.appendChild(typeSpan);

        const summary = document.createElement('p');
        summary.className = 'search-result-summary';
        summary.textContent = item.summary || item.content.substring(0, 100) + '...';

        const meta = document.createElement('div');
        meta.className = 'search-result-meta';

        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'search-result-score';
        scoreSpan.textContent = '일치도: ' + score + '%';
        meta.appendChild(scoreSpan);

        if (item.tags && item.tags.length) {
            const tagsSpan = document.createElement('span');
            tagsSpan.className = 'search-result-tags';
            tagsSpan.textContent = item.tags.join(', ');
            meta.appendChild(tagsSpan);
        }

        resultItem.appendChild(title);
        resultItem.appendChild(summary);
        resultItem.appendChild(meta);
        container.appendChild(resultItem);
    });
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
            formatSearchResults(results, searchResults);
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