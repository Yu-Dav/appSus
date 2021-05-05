
import { NotesAddSelect } from './NotesAddSelect.jsx'

export class NotesAdd extends React.Component {
    state = {
        noteType: 'noteText',
        input: this.getInput(),
    }

    componentDidUpdate() {
        // console.log ('componentDidUpdate =')
        this.getInput()
    }

    getInput() {
        let txt = 'What\'s on your mind?'
        if (!this.state) return txt
        const { noteType } = this.state
        if (noteType === 'noteImg') txt = 'Add image URL'
        if (noteType === 'noteVid') txt = 'Add video URL'
        if (noteType === 'noteAud') txt = 'Add audio URL'
        if (noteType === 'noteTodos') txt = 'Add tasks'
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


    render() {
        const { noteType, input } = this.state
        // console.log ('rendring occured')
        return (
            <section className="notes-add container ">
                <div className="notes-add flex justify-center align-center">

                    <form className="flex" onSubmit={()=> this.props.onAddNewNote(event,this.state)}>
                        {/* {noteType === ('noteImg' || 'noteVid') && <input placeholder="title" />} */}
                        <input type="text" name="input" value={input} onChange={this.handleChange} />
                        <button>Save</button>
                        <NotesAddSelect handleChange={this.handleChange} />
                    </form>

                </div>
            </section>
        )
    }
}
