var defaultRoutes = require('febone-kit/lib/default-routes');

module.exports = (app, opts) => {
    app.push(($) => {
        return $.next();
    });

    defaultRoutes(app, opts);
};