// import React from 'react'
const { NavLink, withRouter } = ReactRouterDOM




export class AppHeader extends React.Component {
    state = {

    }

    render() {
        return (
            <header>
                <nav className="app-header container flex space-btw align-center">
                    <div className="">
                        <img src="../assets/img/logo.png" alt="logo" />
                        <h2 className="title">.appSus </h2>
                    </div>
                    <ul className="clean-list flex">
                        {/* <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li> */}
                        <li><NavLink exact to="/" >Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink> </li>
                        <li><NavLink to="/Email">Mail</NavLink> </li>
                        <li><NavLink to="/keep">Keep</NavLink> </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
