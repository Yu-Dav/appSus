import { keepService } from '../services/keep-service.js'

import { NotesAdd } from '../cmps/NotesAdd.jsx'

export class KeepApp extends React.Component {
    state = {
        notes: null
    }

    componentDidMount() {
        this.loadNotes()
    }


    loadNotes() {
        keepService.query().then(notes => {
            setTimeout(() => this.setState({ notes }), 1000)
        })
    }

    render() {
        if (!this.state.notes) return <div>Loading....</div>;
        return (
            <section className="notes-app">
                <NotesAdd />
            </section>
        )
    }
}
