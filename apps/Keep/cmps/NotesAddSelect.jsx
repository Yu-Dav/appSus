// import React, { Component } from 'react'

{/* // make these options into radio btns, then  */ }
{/* // move into the form, on submit gets the value.  */ }

{/* // class cmp with radio btns, gettign a func onHandleChange in its props */ }

export class NotesAddSelect extends React.Component {
    state = {
        clicked: 'noteText'
    }

    toggleIconClass = (ev) => {
        this.setState({ clicked: ev.target.dataset.name })
    }

    render() {
        // console.log ('this.props =',this.props)
        return (
            <div className="notes-add-btns">

                <label htmlFor="noteText">
                    <i data-name="noteText" className={this.state.clicked === 'noteText' ? "clicked fas fa-txt" : "fas fa-txt"} onClick={this.toggleIconClass}></i>
                </label>
                <input defaultChecked type="radio" name="noteType" value="noteText" id="noteText" onChange={this.props.handleChange} />

                <label htmlFor="noteImg">
                    <i data-name="noteImg" className={this.state.clicked === 'noteImg' ? "clicked fas fa-image": "fas fa-image"} onClick={this.toggleIconClass}></i>
                </label>
                <input type="radio" name="noteType" value="noteImg" id="noteImg" onChange={this.props.handleChange} />

                <label htmlFor="noteVid">
                    <i data-name="noteVid" className={this.state.clicked === 'noteVid'? "clicked fas fa-video" : "fas fa-video"} onClick={this.toggleIconClass}></i>
                </label>
                <input type="radio" name="noteType" value="noteVid" id="noteVid" onChange={this.props.handleChange} />

                <label htmlFor="noteAud">
                    <i data-name="noteAud" className={this.state.clicked === 'noteAud'? "clicked fas fa-volume-up": "fas fa-volume-up"} onClick={this.toggleIconClass}></i>
                </label>
                <input type="radio" name="noteType" value="noteAud" id="noteAud" onChange={this.props.handleChange} />

                <label htmlFor="noteTodos">
                    <i data-name="noteTodos" className={this.state.clicked === 'noteTodos'? "clicked fas fa-tasks":"fas fa-tasks"} onClick={this.toggleIconClass} ></i>
                </label>
                <input type="radio" name="noteType" value="noteTodos" id="noteTodos" onChange={this.props.handleChange} />

            </div>
        )
    }
}
