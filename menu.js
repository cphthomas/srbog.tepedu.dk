// Menu configuration
const menuItems = [
    { href: 'index.html', text: 'Virksomhedens Målsætning' },
    { href: 'costs.html', text: 'Omkostninger' },
    { href: 'price.html', text: 'Prisafsætningsfunktionen' },
    { href: 'elasticity.html', text: 'Elasticitet' },
    { href: 'market.html', text: 'Markedsformer' },
    { href: 'fuld.html', text: 'Fuldkommen Konkurrence' },
    { href: 'monopol.html', text: 'Monopol' },
    { href: 'monopolistisk.html', text: 'Monopolistisk Konkurrence' },
    { href: 'oligopol.html', text: 'Oligopol' },
    { href: 'ordre.html', text: 'Ordre og Marked' },
    { href: 'mfb.html', text: 'Markedsføring' },
    { href: 'knapkapacitet.html', text: 'Knap Kapacitet' },
    { href: 'bidragskalkulation.html', text: 'Bidragskalkulation' },
    { href: 'fordelingskalkulation.html', text: 'Fordelingskalkulation' },
    { href: 'ABC.html', text: 'Activity Based Costing ABC' },
    { href: 'video.html', text: 'Video' }
];

// Function to generate dropdown menu HTML
function generateDropdownMenu() {
    const dropdownMenu = document.querySelector('#navbarDropdownMenuLink + .dropdown-menu');
    if (!dropdownMenu) return;

    // Clear existing items
    dropdownMenu.innerHTML = '';

    // Add menu items
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('a');
        menuItem.className = 'dropdown-item';
        menuItem.href = item.href;
        menuItem.textContent = `${index + 1}. ${item.text}`;
        dropdownMenu.appendChild(menuItem);
    });
}

// Function to get navigation links
function getNavigationLinks() {
    const pages = menuItems.map(item => item.href);
    const currentUrl = window.location.href;
    const currentPage = currentUrl.substring(currentUrl.lastIndexOf('/') + 1).split('?')[0].split('#')[0].toLowerCase();
    const currentIndex = pages.findIndex(page => page.toLowerCase() === currentPage);

    if (currentIndex === -1) {
        return {
            prev: pages[pages.length - 1],
            next: pages[1]
        };
    }

    return {
        prev: pages[(currentIndex - 1 + pages.length) % pages.length],
        next: pages[(currentIndex + 1) % pages.length]
    };
}

// Function to update navigation arrows
function updateNavigationArrows() {
    const links = getNavigationLinks();
    const prevLink = document.getElementById('prev-page-link');
    const nextLink = document.getElementById('next-page-link');

    if (prevLink) prevLink.href = links.prev;
    if (nextLink) nextLink.href = links.next;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateDropdownMenu();
    updateNavigationArrows();
}); 