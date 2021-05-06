
import { NotesAddSelect } from './NotesAddSelect.jsx'

export class NotesAdd extends React.Component {
    state = {
        noteType: 'noteText',
        input: '',
    }

    componentDidUpdate() {
        // console.log ('componentDidUpdate =')
        this.getPlaceholder()
    }

    getPlaceholder() {
        let txt = 'What\'s on your mind?'
        if (!this.state) return txt
        const { noteType } = this.state
        if (noteType === 'noteImg') txt = 'Add image URL'
        if (noteType === 'noteVid') txt = 'Add video URL'
        if (noteType === 'noteAud') txt = 'Add audio URL'
        if (noteType === 'noteTodos') txt = 'Add tasks seperated by comma or space'
        return txt
    }


    handleChange = (ev) => {
        // ev.preventDefault()
        const field = ev.target.name
        let value = ev.target.value
        // console.log ('value =',value)
        this.setState({ ...this.state, [field]: value }, () => {
            // this.getNewBook();
        })
    }

    onInputBlur = () => {
        console.log('Input blurred =')
        this.setState({
            noteType: 'noteText',
            input: ''
        })
    }

    // clear the input after submit
    render() {
        const { noteType, input } = this.state
        // console.log ('rendring occured')
        return (
            <section className="notes-add container ">
                <div className="notes-add ">

                    <form className="flex justify-center align-center space-btw" onSubmit={() => this.props.onAddNewNote(event, this.state)}>
                        <input type="text" name="input" placeholder={this.getPlaceholder()} value={input} onChange={this.handleChange} onBlur={this.onInputBlur} />
                        {/* <button className="btn">Save</button> */}
                        <NotesAddSelect handleChange={this.handleChange} />
                    </form>

                </div>
            </section>
        )
    }
}
