import { NoteActions } from './NoteActions.jsx'

export class NoteEditContent extends React.Component {
    state = {
        input: '',
    }
    handleChange = (ev) => {
        // console.log('Change being handled')
        const field = ev.target.name
        let value = ev.target.value
        this.setState({ ...this.state, [field]: value })
    }
    render() {
        console.log('content edit props =', this.props)
        const { input } = this.state
        return (
            // <div className="modal-wrapper">

            <div className="edit-modal flex align-center space-btw " >
                <h1>Edit note</h1>
                <div className="input-container flex flex-column align-center">
                    <label htmlFor="editInput">Enter the new content:</label>
                    <input autocomplete="off" type="text" name="input" id="editInput" value={input} onChange={this.handleChange} />
                </div>
                <NoteActions noteId={this.props.noteId} onDeleteNote={this.props.onDeleteNote} onPinNote={this.props.onPinNote}
                onOpenClr={this.props.onOpenClr} />
                <div className="flex btn-container ">
                    <button className="btn btn-cancel" onClick={() => this.props.onOpenEditModal()}>Cancel</button>
                    <button className="btn btn-confirm" onClick={() => this.props.onSaveEditChange(input)}>Save</button>
                </div>
            </div >
            // </div>
        )
    }
}
