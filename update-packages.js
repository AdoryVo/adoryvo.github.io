const fs = require('fs-extra');

fs.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'dependencies/bootstrap.min.css');
fs.copy('node_modules/bootstrap/dist/css/bootstrap.min.css.map', 'dependencies/bootstrap.min.css.map');
fs.copy('node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'dependencies/fontawesome.min.css');
fs.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'webfonts');

fs.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/js/bootstrap.min.js');
fs.copy('node_modules/jquery/dist/jquery.min.js', 'public/js/jquery.min.js');
fs.copy('node_modules/@popperjs/core/dist/umd/popper.min.js', 'public/js/popper.min.js');
fs.copy('node_modules/@popperjs/core/dist/umd/popper.min.js.map', 'public/js/popper.min.js.map');