// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

function navClick(tag) {
    var src = '';
    switch (tag) {
        case 'home': src = 'home.html'; break;
        case 'about': src = 'about.html'; break;
        case 'contact': src = 'contact.html'; break;
        case 'portafolio': src = 'portfolio.html'; break;
    }
    var iframe = document.getElementById('content-container');
    iframe.src = src;
    iframe.classList.remove('fadeInLeft');
    iframe.classList.add('fadeOutRight');
    setTimeout( () => {
        iframe.classList.remove('fadeOutRight');
        iframe.classList.add('fadeInLeft');
    }, 100);
}

function proyectoSeleccionado(id) {
    
}