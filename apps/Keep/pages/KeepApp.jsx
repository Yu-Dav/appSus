import { Loading } from '../../../cmps/Loading.jsx'

import { keepService } from '../services/keep-service.js'
import { NotesAdd } from '../cmps/NotesAdd.jsx'
import { NotesList } from '../cmps/NotesList.jsx'
import { NoteFilter } from '../cmps/NoteFilter.jsx'
import { NoteEditContent } from '../cmps/NoteEditContent.jsx'

import { eventBusService } from '../../../services/event-bus-service.js'


export class KeepApp extends React.Component {
    // removeEvent;

    state = {
        filterBy: null,
        notes: null,
        noteEdit: {
            isEditing: false,
            editNoteId: null
        }
    }
    componentDidMount() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const txtReceived = searchParams.get('body')
        if (txtReceived) {
            keepService.addNewNote({ noteType: 'noteText', input: txtReceived }).then(res => {
                keepService.query().then(notes => {
                    setTimeout(() => this.setState({ notes }), 1000)
                })
            })
        }
        else keepService.query().then(notes => {
            setTimeout(() => this.setState({ notes }), 1000)
        })
    }
    loadNotes() {
        keepService.query(this.state.filterBy).then(notes => this.setState({ notes }), 1000)
    }
    onOpenEditModal = (noteId) => {
        if (this.state.noteEdit.isEditing) return this.setState({ ...this.state, noteEdit: { isEditing: false, editNoteId: null } })
        this.setState({ ...this.state, noteEdit: { isEditing: true, editNoteId: noteId } })
    }
    onSaveEditChange = (input) => {
        const id = this.state.noteEdit.editNoteId
        keepService.onEditNote(input, id).then(res => {
            eventBusService.emit('show-user-msg', { txt: 'Note was changed', type: 'success' })
            this.onOpenEditModal(id)
            // this.setState({ ...this.state, noteEdit: { isEditing: false, editNoteId: null } })
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
        eventBusService.emit('show-user-msg', { txt: 'Note was removed', type: 'success' })
        keepService.deleteNote(noteId).then(res => this.loadNotes())
    }
    onAddNewNote = (ev, note) => {
        ev.preventDefault()
        if (!note.input) return
        eventBusService.emit('show-user-msg', { txt: 'New note added!', type: 'success' })
        keepService.addNewNote(note).then(res => this.loadNotes())
    }
    onSetFilter = (val) => {
        this.setState({ ...this.state, filterBy: val },this.loadNotes)
    }
    render() {
        const { notes } = this.state
        const { isEditing } = this.state.noteEdit
        if (!notes) return <Loading />
        return (
            <section className="notes-app">

                <NotesAdd onAddNewNote={this.onAddNewNote} />

                <NoteFilter onSetFilter={this.onSetFilter}/>

                {isEditing && <NoteEditContent onSaveEditChange={this.onSaveEditChange} onOpenEditModal={this.onOpenEditModal}
                noteId={this.state.noteEdit.editNoteId} onDeleteNote={this.onDeleteNote} onPinNote={this.onPinNote} 
                onOpenClr={this.onOpenClr} onOpenEditModal={this.onOpenEditModal}
                />}

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


