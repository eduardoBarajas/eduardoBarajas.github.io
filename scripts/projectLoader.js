function loadProjects() {
    require(['data/proyectos.js'], function(data) {
        // Configuration loaded now, safe to do other require calls
        // that depend on that config.
        for (let x = 0; x < 50; x ++) {
            if (typeof data[x.toString()] != 'undefined') {
                console.log(data[x.toString()]);
            }
        }
    });
}

