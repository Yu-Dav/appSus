import { Loading } from '../../../cmps/Loading.jsx'

import { keepService } from '../services/keep-service.js'
import { NotesAdd } from '../cmps/NotesAdd.jsx'
import { NotesList } from '../cmps/NotesList.jsx'

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
    onOpenEditModal = (noteId) => {
        console.log('Opening modal for =', noteId)
    }
    onPinNote = (noteId) => {
        keepService.pinNote(noteId).then(res => this.loadNotes())
    }
    onOpenClr = (noteId) => {
        keepService.onOpenClrCmp(noteId).then(res => this.loadNotes())
    }
    onChangeNoteClr = (noteId, clr) => {
        keepService.changeNoteClr(noteId, clr).then(res => this.loadNotes())
    }
    onDeleteNote = (noteId) => {
        keepService.deleteNote(noteId).then(res => this.loadNotes())
    }
    onAddNewNote = (ev, note) => {
        ev.preventDefault()
        if (!note.input) return
        keepService.addNewNote(note).then(res => this.loadNotes())
    }
    render() {
        const notes = this.state.notes
        if (!notes) return <Loading />;
        return (
            <section className="notes-app">
                <NotesAdd onAddNewNote={this.onAddNewNote} />

                <NotesList notes={notes.filter(note => note.isPinned)} onDeleteNote={this.onDeleteNote}
                    onPinNote={this.onPinNote} onOpenClr={this.onOpenClr} onChangeNoteClr={this.onChangeNoteClr}
                    onOpenEditModal={this.onOpenEditModal} />

                <NotesList notes={notes.filter(note => !note.isPinned)} onDeleteNote={this.onDeleteNote}
                    onPinNote={this.onPinNote} onOpenClr={this.onOpenClr} onChangeNoteClr={this.onChangeNoteClr}
                    onOpenEditModal={this.onOpenEditModal} />
            </section>
        )
    }
}
