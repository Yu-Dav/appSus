
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
        // console.log('content edit props =', this.props)
        const { input } = this.state
        return (
            <div className="edit-modal flex space-btw " >
                editing content
                <input type="text" name="input" id="" value={input} onChange={this.handleChange} />
                <button className="btn btn-confirm" onClick={() => this.props.onSaveEditChange(input)}>Save</button>
                <button className="btn btn-cancel" onClick={() => this.props.onOpenEditModal()}>Cancel</button>
            </div>
        )
    }
}
