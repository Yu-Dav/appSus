import { Loading } from '../../../cmps/Loading.jsx'

import { keepService } from '../services/keep-service.js'
import { NotesAdd } from '../cmps/NotesAdd.jsx'
import { NotesList } from '../cmps/NotesList.jsx'
import { NoteEditContent } from '../cmps/NoteEditContent.jsx'

import { eventBusService } from '../../../services/event-bus-service.js'


export class KeepApp extends React.Component {
    state = {
        notes: null,
        noteEdit: {
            isEditing: false,
            editNoteId: null
        }
    }
    componentDidMount() {
        keepService.query().then(notes => {
            setTimeout(() => this.setState({ notes }), 1000)
        })
    }

    loadNotes() {
        keepService.query().then(notes => this.setState({ notes }), 1000)

    }
    onOpenEditModal = (noteId) => {
        this.setState({ ...this.state, noteEdit: { isEditing: true, editNoteId: noteId } })
    }
    onSaveEditChange = (input) => {
        const id = this.state.noteEdit.editNoteId
        keepService.onEditNote(input, id).then(res => {
            this.setState({ ...this.state, noteEdit: { isEditing: false, editNoteId: null } })
            this.loadNotes()
        })
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
        eventBusService.emit('show-user-msg', {txt:'note added!',type:'success'})
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

                {this.state.noteEdit.isEditing && <NoteEditContent onSaveEditChange={this.onSaveEditChange} />}


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


