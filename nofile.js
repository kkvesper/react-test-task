let kit = require('nokit');

module.exports = (task, option) => {
    option('--port <number>, -p', 'the port of dev server', 7000)

    task('dev default', 'run on dev mode', ['devServe'])

    task('devServe', ['devBuild'], 'run the dev server', kit.async(function * (opts) {
        const { flow, static, select, serverHelper, url } = kit.require('proxy')
        const app = flow()
        const handler = serverHelper()

        handler.watch('dist/app.js')

        app.push(handler)

        app.push($ => {
            if (/text\/html/.test($.req.headers['accept']))
                $.body = kit.readFileSync('src/index.html') + handler.browserHelper
            else
                return $.next()
        })

        app.push(select('/', static('dist')))

        yield app.listen(opts.port)
        kit.logs(`listen on port ${opts.port}`)
        kit.xopen(`http://127.0.0.1:${opts.port}`)
    }))

    task('devBuild', 'dev build project to dist directory', kit.async(function * () {
        const webpackConf = 'tools/webpack/development.js'
        const webpackLogPrefix = 'webpack | :blue'

        // webpack: the first cold build
        yield kit.spawn('webpack', ['--config', webpackConf], {
            prefix: webpackLogPrefix
        })

        // webpack: watch files changes
        kit.spawn('webpack', ['--config', webpackConf, '-w'], {
            prefix: webpackLogPrefix
        })
    }))
}