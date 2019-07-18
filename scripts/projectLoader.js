function loadProjects(maxProjects) {
    require(['data/proyectos.js'], function(data) {
        // Configuration loaded now, safe to do other require calls
        // that depend on that config.
        var projectCount = 0;
        for (let x = 0; x < 50; x ++) {
            if (typeof data[x.toString()] != 'undefined') {
                console.log(data[x.toString()]);

                var node = `<div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card animated ${data[x.toString()][0]} bounceInUp"><div class="mdl-card__media">` +
                    `<img class="article-image" src="${data[x.toString()][4]}" border="0" alt=""></div><div class="mdl-card__title"><h2 class="mdl-card__title-text">${data[x.toString()][1]}</h2>`+
                    `</div><div class="mdl-card__supporting-text text-justify h-100">${data[x.toString()][2]}</div><div class="row mx-0 my-2">`+
                    `<div class="col-6 col-md-6 col-lg-6"><a class="mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect mdl-button--accent w-100" style="background-color:#259b24;"`+
                    `href="#" onclick="moreClick(${x.toString()})">Ver Mas</a></div><div class="col-6 col-md-6 col-lg-6"><a class="mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect mdl-button--primary w-100"`+
                    `href="#" onclick="websiteClick('${data[x.toString()][8]}')">Sitio Web</a></div></div></div>`;
                document.getElementById('projects-container').innerHTML += node;
                projectCount += 1;
                if (projectCount >= maxProjects) {
                    break;
                }
            }
        }
    });
}

function loadProjectById() {
    require(['data/proyectos.js'], function(data) {
        // Configuration loaded now, safe to do other require calls
        // that depend on that config.
        var projectIndex = +sessionStorage.getItem('currentProjectIndex');
        for (let x = 0; x < 50; x ++) {
            if (typeof data[x.toString()] != 'undefined') {
                if (x === projectIndex) {
                    console.log(data[x.toString()]);
                    document.getElementById('project-title').innerText = data[x.toString()][1];
                    document.getElementById('project-image1').src = data[x.toString()][5];
                    document.getElementById('project-p1').innerText = data[x.toString()][2];
                    document.getElementById('project-p2').innerText = data[x.toString()][2];
                    document.getElementById('project-p3').innerText = data[x.toString()][2];
                    document.getElementById('project-image2').src = data[x.toString()][6];
                    document.getElementById('project-p4').innerText = data[x.toString()][2];
                    document.getElementById('project-p5').innerText = data[x.toString()][2];
                    break;
                }
            }
        }
    });
}

