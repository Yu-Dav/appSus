import { NotesAddSelect } from './NotesAddSelect.jsx'

export class NotesAdd extends React.Component {
    state = {
        noteType: 'noteText',
        input: '',
    }
    getPlaceholder() {
        let txt = 'What\'s on your mind?'
        if (!this.state) return txt
        const { noteType } = this.state
        if (noteType === 'noteImg') txt = 'Add image URL'
        if (noteType === 'noteVid') txt = 'Add video URL'
        if (noteType === 'noteAud') txt = 'Add audio URL'
        if (noteType === 'noteTodos') txt = 'Add tasks seperated by a comma'
        return txt
    }
    handleChange = (ev) => {
        const field = ev.target.name
        let value = ev.target.value
        this.setState({ ...this.state, [field]: value })
    }
    onInputBlur = () => {
        console.log('Input blurred =')
        this.setState({
            noteType: 'noteText',
            input: ''
        })
    }
    render() {
        const { noteType, input } = this.state
        return (
            <section className="notes-add container ">
                <form className="flex justify-center align-center space-btw"
                    onSubmit={() => {
                        this.props.onAddNewNote(event, this.state)
                        this.setState({ ...this.state, input: '' })
                    }}>

                    <input type="text" name="input" placeholder={this.getPlaceholder()}
                        autoComplete="off" value={input} onChange={this.handleChange} onBlur={this.onInputBlur} />

                    {/* <button className="btn">Save</button> */}

                    <NotesAddSelect handleChange={this.handleChange} />
                </form>
            </section>
        )
    }
}
