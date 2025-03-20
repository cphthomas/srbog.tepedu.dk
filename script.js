document.addEventListener("DOMContentLoaded", function() {
  // Chapter number configuration
  const chapterConfig = {
    'index.html': '0',
    'renter.html': '1',
    'renterexcel.html': '2',
    'investering.html': '3',
    'investering_2.html': '4',
    'annuitet.html': '5',
    'afdragsfrit.html': '6',
    'serie.html': '7',
    'kassekredit.html': '8',
    'leverandorkredit.html': '9',
    'leasing.html': '10',


    // Add more files and their chapter numbers
  };

  const menuIcon = document.getElementById('menu-icon');
  const pageMenu = document.getElementById('page-menu');
  const headings = document.querySelectorAll('h1, h2, h3');
  const dropdownItems = document.querySelectorAll('#navbarDropdownMenuLink + .dropdown-menu .dropdown-item');

  // Get current page filename
  let currentUrl = window.location.href;
  currentUrl = currentUrl.split('?')[0].split('#')[0];
  let currentPage = currentUrl.substring(currentUrl.lastIndexOf('/') + 1).toLowerCase();
  if (!currentPage.includes('.')) {
    currentPage = 'index.html';
  }

  // Update dropdown menu items with chapter numbers
  dropdownItems.forEach(item => {
    const href = item.getAttribute('href');
    let filename = href.substring(href.lastIndexOf('/') + 1).split('?')[0].split('#')[0].toLowerCase();
    if (!filename.includes('.')) {
      filename += '.html';
    }
    const chapterNum = chapterConfig[filename];
    if (chapterNum) {
      item.innerHTML = `${chapterNum}. ${item.innerHTML}`;
    }
  });

  // Get the chapter number for current page
  const chapterNum = chapterConfig[currentPage] || '';

  // Counter for subheadings within the current page
  let h2Counter = 0;
  let h3Counters = {};  // Object to store H3 counters for each H2

  // Generate the page menu
  let menuContent = '<div class="menu-toggle"><i class="bi bi-x"></i></div>';
  menuContent += '<ul class="list-unstyled">';
  
  headings.forEach(heading => {
    const tagName = heading.tagName.toLowerCase();
    const indentClass = {
      'h1': 'pl-0',
      'h2': 'pl-3',
      'h3': 'pl-5'
    }[tagName];

    let numberPrefix = '';
    
    // Reset numbering for each new page
    if (tagName === 'h1') {
      h2Counter = 0;
      h3Counters = {};
      numberPrefix = chapterNum + ' ';
    } else if (tagName === 'h2') {
      h2Counter++;
      h3Counters[h2Counter] = 0;
      numberPrefix = chapterNum + '.' + h2Counter + ' ';
    } else if (tagName === 'h3') {
      const currentH2 = h2Counter;
      h3Counters[currentH2] = (h3Counters[currentH2] || 0) + 1;
      numberPrefix = chapterNum + '.' + currentH2 + '.' + h3Counters[currentH2] + ' ';
    }

    // Remove any existing numbers from the heading text
    let headingText = heading.innerText.replace(/^\d+(\.\d+)*\s+/, '');
    
    const id = headingText.replace(/\s+/g, '-').toLowerCase();
    heading.id = id;
    
    // Update the heading in the document
    heading.innerHTML = numberPrefix + headingText;

    menuContent += `<li class="${indentClass}">
                      <a href="#${id}">${numberPrefix}${headingText}</a>
                    </li>`;
  });
  menuContent += '</ul>';
  pageMenu.innerHTML = menuContent;

  // Menu toggle functionality
  const menuToggle = document.querySelector('#page-menu .menu-toggle');
  
  menuToggle?.addEventListener('click', function() {
    document.body.classList.add('menu-hidden');
  });

  menuIcon?.addEventListener('click', function() {
    document.body.classList.remove('menu-hidden');
  });

  // Navigation code
  let pages = ['index.html'];

  dropdownItems.forEach(item => {
    const href = item.getAttribute('href');
    let filename = href.substring(href.lastIndexOf('/') + 1).split('?')[0].split('#')[0].toLowerCase();
    if (!filename.includes('.')) {
      filename += '.html';
    }
    pages.push(filename);
  });

  pages.push('index.html');

  let currentIndex = pages.indexOf(currentPage);
  if (currentIndex === -1) {
    currentIndex = 0;
  }

  const prevLink = document.getElementById('prev-page-link');
  const nextLink = document.getElementById('next-page-link');

  if (prevLink && nextLink) {
    let prevIndex = (currentIndex - 1 + pages.length - 1) % (pages.length - 1);
    prevLink.href = pages[prevIndex];

    let nextIndex = (currentIndex + 1) % (pages.length - 1);
    nextLink.href = pages[nextIndex];

    if (currentPage === pages[pages.length - 2]) {
      nextLink.href = 'index.html';
    }
    if (currentPage === 'index.html' && currentIndex === 0) {
      prevLink.href = pages[pages.length - 2];
    }
  }
});