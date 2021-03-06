const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AboutUs } from './pages/About.jsx'
import { KeepApp } from './apps/Keep/pages/KeepApp.jsx'
import { EmailApp } from './apps/Email/pages/EmailApp.jsx'


export function App() {
    return (
        <Router>
            <AppHeader />
            <main>
                <Switch>
            
                    <Route component={KeepApp} path="/keep" />
                    <Route component={EmailApp} path="/email" />
                    <Route component={AboutUs} path="/about" />
                    <Route component={Home} path="/" />
                </Switch>
            </main>
            <footer className="app-footer">
                &copy; Yuval David &amp; Noga Jacobi 
            </footer>
        </Router>
    )
}

