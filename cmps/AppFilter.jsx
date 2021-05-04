// import React, { Component } from 'react'
import { MailFilter } from './mail-cmps/MailFilter.jsx'
import { KeepFilter } from './keep-cmps/KeepFilter.jsx'

export class AppFilter extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="search">Search:</label>
                <input type="text" id="search"/>
                <MailFilter/>
                <KeepFilter/>
            </div>
        )
    }
}
