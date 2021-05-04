const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AboutUs } from './pages/About.jsx'
import {KeepApp} from './apps/Keep/pages/KeepApp.jsx'
import {EmailApp} from './apps/Email/pages/EmailApp.jsx'


export function App() {
    return (
        <Router>
            <AppHeader />
            <main>
                <Switch>
                    <Route component={KeepApp} path="/keep" />
                    <Route component={EmailApp} path="/mail" />
                    <Route component={AboutUs} path="/about" />
                    <Route component={Home} path="/" />
                    {/* If we want to send props to a route: */}
                    {/* <Route render={(props)=> <AboutUs {...props} name="popo"/>} path="/about" /> */}
                </Switch>
            </main>
            <footer className="app-footer">
                coffeerights &copy;
            </footer>
        </Router>
    )
}

