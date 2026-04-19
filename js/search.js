/**
 * Cross-chapter search functionality for srbog.tepedu.dk
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.getElementById('search-toggle');
    const searchDropdown = document.getElementById('search-dropdown');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchToggle || !searchDropdown || !searchInput || !searchResults) return;

    let chaptersData = [];
    const chapters = [
        { url: 'index.html', title: 'Introduktion til Finansielt Salg' },
        { url: 'klassisk.html', title: 'Klassisk Salg' },
        { url: 'losning.html', title: 'Løsningssalg og SPIN' },
        { url: 'kommunikation.html', title: 'Kommunikation i Finansiel Rådgivning' },
        { url: 'challenger.html', title: 'Challenger Salg' },
        { url: 'pitching.html', title: 'Pitching' },
        { url: 'pipeline.html', title: 'Pipeline' },
        { url: 'portefolje.html', title: 'Porteføljesalg' },
        { url: 'salgsteknikker.html', title: 'Sammenligning af Salgsteknikker' }
    ];

    // Toggle search dropdown
    searchToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        searchDropdown.classList.toggle('show');
        if (searchDropdown.classList.contains('show')) {
            searchInput.focus();
            loadChaptersData();
        }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!searchToggle.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.remove('show');
        }
    });

    // Prevent closing when clicking inside dropdown
    searchDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Load content from all chapters
    async function loadChaptersData() {
        if (chaptersData.length > 0) return;

        searchResults.innerHTML = '<div class="search-no-results">Indlæser søgedata...</div>';

        const isLocalFile = window.location.protocol === 'file:';
        if (isLocalFile) {
            searchResults.innerHTML = '<div class="search-no-results" style="color: #eb3349;">Søgning virker kun på en server.</div>';
            return;
        }

        try {
            const promises = chapters.map(async (chapter) => {
                try {
                    const response = await fetch(chapter.url);
                    if (response.ok) {
                        const html = await response.text();
                        return processHtml(html, chapter);
                    }
                    return null;
                } catch (e) {
                    return null;
                }
            });

            const results = await Promise.all(promises);
            chaptersData = results.filter(data => data !== null);

            if (chaptersData.length === 0) {
                searchResults.innerHTML = '<div class="search-no-results">Kunne ikke hente data.</div>';
            } else {
                searchResults.innerHTML = '<div class="search-no-results">Indtast søgeord foroven</div>';
                if (searchInput.value.trim().length >= 2) {
                    searchInput.dispatchEvent(new Event('input'));
                }
            }
        } catch (err) {
            searchResults.innerHTML = '<div class="search-no-results">Fejl ved indlæsning.</div>';
        }
    }

    function processHtml(html, chapter) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const article = doc.querySelector('article');
        if (!article) return null;

        const headings = article.querySelectorAll('h1, h2, h3, h4');
        headings.forEach(h => {
            if (!h.id) {
                let text = h.innerText.replace(/^[\d.]+\s+/, '').trim();
                h.id = text.replace(/\s+/g, '-').toLowerCase();
            }
        });

        const elements = article.querySelectorAll('h1, h2, h3, h4, p, .term-title, .term-definition, .legal-term, td');
        const contentItems = [];
        let currentAnchorId = '';

        elements.forEach(el => {
            const text = el.innerText ? el.innerText.trim() : el.textContent.trim();
            if (text.length > 3) {
                if (/^H[1-4]$/.test(el.tagName) && el.id) {
                    currentAnchorId = el.id;
                }

                let id = el.id;
                if (!id) {
                    const parentWithId = el.closest('[id]');
                    if (parentWithId) id = parentWithId.id;
                }
                if (!id && currentAnchorId) id = currentAnchorId;

                contentItems.push({
                    text: text,
                    id: id || '',
                    tag: el.tagName
                });
            }
        });

        return {
            url: chapter.url,
            title: chapter.title,
            items: contentItems
        };
    }

    // Search logic
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();

        if (query.length < 2) {
            searchResults.innerHTML = '<div class="search-no-results">Indtast mindst 2 tegn</div>';
            return;
        }

        if (chaptersData.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">Indlæser data...</div>';
            return;
        }

        const matches = [];
        chaptersData.forEach(chapter => {
            chapter.items.forEach(item => {
                if (item.text.toLowerCase().includes(query)) {
                    matches.push({
                        chapterTitle: chapter.title,
                        url: chapter.url,
                        text: item.text,
                        id: item.id
                    });
                }
            });
        });

        // Sort matches: current page first
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        matches.sort((a, b) => {
            if (a.url === currentFile && b.url !== currentFile) return -1;
            if (b.url === currentFile && a.url !== currentFile) return 1;
            return 0;
        });

        displayResults(matches, query);
    });

    function displayResults(matches, query) {
        if (matches.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">Ingen resultater fundet for "' + query + '"</div>';
            return;
        }

        const limitedMatches = matches.slice(0, 50);

        searchResults.innerHTML = limitedMatches.map(match => {
            const index = match.text.toLowerCase().indexOf(query);
            const start = Math.max(0, index - 40);
            const end = Math.min(match.text.length, index + query.length + 60);
            let snippet = match.text.substring(start, end);

            if (start > 0) snippet = '...' + snippet;
            if (end < match.text.length) snippet = snippet + '...';

            const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp('(' + escapedQuery + ')', 'gi');
            snippet = snippet.replace(regex, '<mark style="background: rgba(26, 58, 92, 0.2); color: inherit; padding: 0 2px;">$1</mark>');

            const fullLink = match.id ? `${match.url}#${match.id}` : match.url;

            return `
                <a href="${fullLink}" class="search-result-item" onclick="handleResultClick(event, '${match.url}', '${match.id}')">
                    <span class="search-result-chapter">${match.chapterTitle}</span>
                    <span class="search-result-title">${match.text.substring(0, 60)}${match.text.length > 60 ? '...' : ''}</span>
                    <span class="search-result-context">${snippet}</span>
                </a>
            `;
        }).join('');
    }

    window.handleResultClick = (event, url, id) => {
        const query = searchInput.value.trim();
        if (query) localStorage.setItem('pendingSearchHighlight', query);
        if (id) localStorage.setItem('pendingSearchScroll', id);

        searchDropdown.classList.remove('show');

        const currentPath = window.location.pathname;
        const currentFile = currentPath.split('/').pop() || 'index.html';
        const normCurrent = (currentFile === '' || currentFile === '/') ? 'index.html' : currentFile;

        if (normCurrent === url) {
            event.preventDefault();
            if (id) scrollToElement(id);
            highlightAllOccurrences(query);
            const targetUrl = id ? `${url}#${id}` : url;
            history.pushState(null, null, targetUrl);
        }
    };

    function highlightAllOccurrences(query) {
        if (!query || query.length < 2) return;

        document.querySelectorAll('.search-highlight-persistent').forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });

        const article = document.querySelector('article');
        if (!article) return;

        const walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT, null, false);
        const nodes = [];
        let node;
        while (node = walker.nextNode()) {
            if (node.parentElement.tagName !== 'SCRIPT' && node.parentElement.tagName !== 'STYLE') {
                nodes.push(node);
            }
        }

        const regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');

        nodes.forEach(textNode => {
            const text = textNode.nodeValue;
            if (regex.test(text)) {
                const span = document.createElement('span');
                span.innerHTML = text.replace(regex, '<span class="search-highlight-persistent">$1</span>');
                textNode.parentNode.replaceChild(span, textNode);
            }
        });
    }

    function scrollToElement(id) {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            element.classList.add('search-target-flash');
            setTimeout(() => element.classList.remove('search-target-flash'), 2000);

            history.pushState(null, null, `#${id}`);
        }
    }

    // Handle scroll and highlight on landing
    const pendingScroll = localStorage.getItem('pendingSearchScroll');
    const pendingHighlight = localStorage.getItem('pendingSearchHighlight');

    if (pendingScroll || pendingHighlight) {
        const initLanding = () => {
            if (pendingHighlight) {
                localStorage.removeItem('pendingSearchHighlight');
                highlightAllOccurrences(pendingHighlight);
            }

            if (pendingScroll) {
                localStorage.removeItem('pendingSearchScroll');

                let attempts = 0;
                const attemptScroll = () => {
                    const element = document.getElementById(pendingScroll);
                    if (element) {
                        setTimeout(() => scrollToElement(pendingScroll), 100);
                        return true;
                    }
                    return false;
                };

                if (!attemptScroll()) {
                    const interval = setInterval(() => {
                        attempts++;
                        if (attemptScroll() || attempts > 20) clearInterval(interval);
                    }, 200);
                }
            }
        };

        if (document.readyState === 'complete') {
            initLanding();
        } else {
            window.addEventListener('load', initLanding);
        }
    }
});
