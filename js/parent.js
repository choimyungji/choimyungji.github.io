(function() {
    function getTarget() {
        const thisName = document.getElementById('thisName').value;
        return encodeURI(thisName);
    }

    function walkParents(data) {
        const plist = [];
        let target = getTarget();

        for (let i = 0; i < 100; i++) {
            if (target === 'index') {
                break;
            }
            const next = data[target];
            if (!next || !next['parent'] || next['parent'].length < 1) {
                break;
            }
            next['url'] = '/wiki/'.concat(target);
            plist.unshift(next);
            target = encodeURI(next['parent']);
        }

        plist.pop();
        return plist;
    }

    function renderParentList(plist) {
        const container = document.getElementById('parent-list');
        container.textContent = '';

        if (plist == null || plist.length < 1) {
            return;
        }

        const prefix = document.createTextNode('상위 문서: ');
        container.appendChild(prefix);

        for (let i = 0; i < plist.length; i++) {
            const link = document.createElement('a');
            link.href = plist[i].url;
            link.textContent = plist[i].title;
            container.appendChild(link);

            if (i < plist.length - 1) {
                const separator = document.createElement('span');
                separator.textContent = ' - ';
                container.appendChild(separator);
            }
        }
    }

    fetch('/data/wikilist.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data == null) {
                return;
            }
            const plist = walkParents(data);
            renderParentList(plist);
        })
        .catch(function() {
            // Failed to load wiki list
        });
})();
