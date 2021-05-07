// import React from 'react'
const { NavLink, withRouter } = ReactRouterDOM
import { UserMsg } from './UserMsg.jsx'



export class AppHeader extends React.Component {
    state = {

    }

    render() {
        return (
            <header>
                <nav className="app-header container flex space-btw align-center">
                    <div className="bounce-in-top">
                        <img src="assets/img/logo.png" alt="logo" />
                        <h2 className="title">.appSus </h2>
                    </div>
                    <UserMsg />
                    <ul className="clean-list flex">
                        {/* <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li> */}
                        <li><NavLink exact to="/" >Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink> </li>
                        <li><NavLink to="/email">Mail</NavLink> </li>
                        <li><NavLink to="/keep">Keep</NavLink> </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
