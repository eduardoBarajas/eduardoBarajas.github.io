// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

function navClick(tag) {
    var src = '';
    switch (tag) {
        case 'home': src = 'home.html'; break;
        case 'about': alert('En desarrollo.'); break; //src = 'about.html'; break;
        case 'contact': alert('En desarrollo.'); break; // src = 'contact.html'; break;
        case 'portafolio': alert('En desarrollo.'); break; // src = 'portfolio.html'; break;
    }
    if (src !== '') {
        var iframe = document.getElementById('content-container');
        iframe.src = src;
        iframe.classList.remove('fadeInLeft');
        iframe.classList.add('fadeOutRight');
        setTimeout( () => {
            iframe.classList.remove('fadeOutRight');
            iframe.classList.add('fadeInLeft');
        }, 100);
    }
}

function websiteClick(site) {
    if (site !== '#') {
        window.open(site);
    } else {
        alert('En desarrollo.');
    }
}

function moreClick(id) {
    alert('En desarrollo.');
}