// import React, { Component } from 'react'

export class NoteFilter extends React.Component {

    state = {
        filterBy: ''
    }

    handleChange = (ev) => {
        this.setState({ filterBy: ev.target.value })
        this.props.onSetFilter(ev.target.value)
    }

    render() {
        return (
            <div className="notes-filter container flex justify-center">
                <label htmlFor="filterBy">Filter notes by:</label>

                <select name="filterBy" id="filterBy" onChange={this.handleChange}>
                    <option value="">All</option>
                    <option value="pinned">Pinned</option>
                    <option value="noteText">Text</option>
                    <option value="noteImg">Images</option>
                    <option value="noteVid">Videos</option>
                    <option value="noteAud">Audios</option>
                    <option value="noteTodos">Todo's</option>
                </select>

            </div>
        )
    }
}
