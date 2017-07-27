import '@blueprintjs/core/dist/blueprint.css'
import 'dom4' // @blueprintjs's peer dependency

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Router, Switch } from 'react-router'
import browserHistory from '../lib/browserHistory'

import App from '../view/app'
import Contacts from '../view/contacts'
import Edit from '../view/edit'

// Config Route Here
function renderRouter () {
    return <Router history={browserHistory}>
        <App>
            <Switch>
                <Route path="/" exact component={Contacts}></Route>
                <Route path="/edit" exact component={Edit}></Route>
            </Switch>
        </App>
    </Router>
}

ReactDOM.render(renderRouter(), window['app'])
