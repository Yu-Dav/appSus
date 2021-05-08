// import React from 'react'
const { NavLink, withRouter } = ReactRouterDOM
import { UserMsg } from './UserMsg.jsx'



export class AppHeader extends React.Component {
    state = {
        isMenuOpen: false
    }

    toggleMenu=()=>{
        console.log('opening/closing');
        this.setState({isMenuOpen:!this.state.isMenuOpen})
    }

    render() {
        const {isMenuOpen} = this.state;
        return (
            <header>
                <nav className="app-header container flex space-btw align-center">
                    <div className="bounce-in-top">
                        <img src="assets/img/logo.png" alt="logo" />
                        <h2 className="title">.appSus </h2>
                    </div>
                    <UserMsg />
                    <button className="btn-menu" onClick={this.toggleMenu}>☰</button>
                    <ul className ={isMenuOpen ? "clean-list flex hamburg" : "clean-list flex"}>
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
