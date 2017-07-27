var defaultRoutes = require('febone-kit/lib/default-routes');

module.exports = (app, opts) => {
    app.push(($) => {
        if (/text\/html/.test($.req.headers.accept))
            $.req.url = '/';
        return $.next();
    });

    defaultRoutes(app, opts);
};