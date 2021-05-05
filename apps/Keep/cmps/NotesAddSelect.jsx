// import React, { Component } from 'react'

{/* // make these options into radio btns, then  */ }
{/* // move into the form, on submit gets the value.  */ }

{/* // class cmp with radio btns, gettign a func onHandleChange in its props */ }

export class NotesAddSelect extends React.Component {
    render() {
        // console.log ('this.props =',this.props)
        return (
            <div className="notes-add-btns">

                <label htmlFor="noteText">
                    <i name="noteText" className="fas fa-txt"></i>
                </label>
                <input defaultChecked type="radio" name="noteType" value="noteText" id="noteText" onChange={this.props.handleChange} />

                <label htmlFor="noteImg">
                    <i className="fas fa-image"></i>
                </label>
                <input type="radio" name="noteType" value="noteImg" id="noteImg" onChange={this.props.handleChange} />

                <label htmlFor="noteVid">
                    <i className="fas fa-video"></i>
                </label>
                <input type="radio" name="noteType" value="noteVid" id="noteVid" onChange={this.props.handleChange} />

                <label htmlFor="noteAud">
                    <i className="fas fa-volume-up"></i>
                </label>
                <input type="radio" name="noteType" value="noteAud" id="noteAud" onChange={this.props.handleChange} />

                <label htmlFor="noteTodos">
                    <i className="fas fa-tasks"></i>
                </label>
                <input type="radio" name="noteType" value="noteTodos" id="noteTodos" onChange={this.props.handleChange} />

            </div>
        )
    }
}
