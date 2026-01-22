(function() {
    function getTarget() {
        const thisName = document.getElementById('thisName').value;
        return thisName;
    }

    function getChildren(data) {
        const thisName = getTarget();
        const list = [];

        Object.keys(data)
            .forEach(function(key) {
                const item = data[key];
                if (item.parent === thisName) {
                    item.url = '/wiki/'.concat(key);
                    item.updated = item.updated.replace(/(^\d{4}.\d{2}.\d{2}).*/, '$1');
                    list.push(item);
                }
            });

        list.sort(function(a, b) {
            return a.title.toLowerCase()
                .localeCompare(b.title.toLowerCase());
        });
        return list;
    }

    function renderChildren(list) {
        const container = document.getElementById('document-list');
        container.textContent = '';

        const ul = document.createElement('ul');
        ul.className = 'post-list';

        for (let i = 0; i < list.length; i++) {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = list[i].url;
            link.className = 'post-link';

            const title = document.createElement('span');
            title.textContent = list[i].title;
            link.appendChild(title);

            const date = document.createElement('div');
            date.className = 'post-meta';
            date.style.cssText = 'float: right;';
            date.textContent = list[i].updated;
            link.appendChild(date);

            if (list[i].summary) {
                const summary = document.createElement('div');
                summary.className = 'post-excerpt';
                summary.textContent = ' - ' + list[i].summary;
                link.appendChild(summary);
            }

            li.appendChild(link);
            ul.appendChild(li);
        }

        container.appendChild(ul);
    }

    fetch('/data/wikilist.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data == null) {
                return;
            }
            const list = getChildren(data);
            renderChildren(list);
        })
        .catch(function() {
            // Failed to load wiki list
        });
})();
