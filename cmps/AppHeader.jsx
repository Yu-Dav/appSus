// import React from 'react'
const { NavLink, withRouter } = ReactRouterDOM


export function AppHeader() {
    return (
        <nav className="app-header flex">
            <h2 className="title">appSus</h2>
            <ul className="clean-list">
                {/* <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li> */}
                <li><NavLink exact to="/" >Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink> </li>
                <li><NavLink to="/mail">Mail</NavLink> </li>
                <li><NavLink to="/keep">Keep</NavLink> </li>
            </ul>
        </nav>
    )
}
