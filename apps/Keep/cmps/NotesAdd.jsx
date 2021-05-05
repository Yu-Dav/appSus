
import { NotesAddSelect } from './NotesAddSelect.jsx'

export class NotesAdd extends React.Component {
    state = {
        input: 'What\'s on your mind?',
        noteType: 'noteTxt'
    }

    componentDidUpdate() {
        console.log ('componentDidUpdate =')
    }
    

    handleChange = (ev) => {
        console.log ('btn clicked')
        // ev.preventDefault()
        const field = ev.target.name
        let value = ev.target.value
        console.log ('value =',value)
        this.setState({ ...this.state, [field]: value }, () => {
        // this.getNewBook();
    })
}

render() {
    console.log ('rendring occured')
    return (
        <section className="notes-add container ">
            <div className="notes-add flex justify-center align-center">

                <form className="flex">
                    <input type="text" name="input" value={this.state.input} onChange={this.handleChange} />
                    <button>Save</button>
                    <NotesAddSelect handleChange={this.handleChange}/>
                </form>

            </div>
        </section>
    )
}
}
