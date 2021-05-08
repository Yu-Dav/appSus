import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVid } from './NoteVid.jsx'
import { NoteAud } from './NoteAud.jsx'

export function NotesList({ notes, onDeleteNote, onPinNote, onOpenClr, onChangeNoteClr, onOpenEditModal,onCloseClr }) {
    const DynamicCmp = (note) => {

        switch (note.type) {
            case 'noteText':
                return <NoteTxt key={note.id} note={note} onDeleteNote={onDeleteNote}
                    onPinNote={onPinNote} onOpenClr={onOpenClr} onChangeNoteClr={onChangeNoteClr}
                    onOpenEditModal={onOpenEditModal} onCloseClr={onCloseClr}/>
            case 'noteImg':
                return <NoteImg key={note.id} note={note} onDeleteNote={onDeleteNote}
                    onPinNote={onPinNote} onOpenClr={onOpenClr} onChangeNoteClr={onChangeNoteClr}
                    onOpenEditModal={onOpenEditModal} onCloseClr={onCloseClr}/>
            case 'noteTodos':
                return <NoteTodos key={note.id} note={note} onDeleteNote={onDeleteNote}
                    onPinNote={onPinNote} onOpenClr={onOpenClr} onChangeNoteClr={onChangeNoteClr}
                    onOpenEditModal={onOpenEditModal} onCloseClr={onCloseClr}/>
            case 'noteVid':
                return <NoteVid key={note.id} note={note} onDeleteNote={onDeleteNote}
                    onPinNote={onPinNote} onOpenClr={onOpenClr} onChangeNoteClr={onChangeNoteClr}
                    onOpenEditModal={onOpenEditModal} onCloseClr={onCloseClr}/>
            case 'noteAud':
                return <NoteAud key={note.id} note={note} onDeleteNote={onDeleteNote}
                onPinNote={onPinNote} onOpenClr={onOpenClr} onChangeNoteClr={onChangeNoteClr}
                onOpenEditModal={onOpenEditModal} onCloseClr={onCloseClr}/>
            default:
                return console.log('not supported yet')
        }
    }
    if (!notes.length) return (
        <div></div>
    )
    return (
        <div className="notes-list container">
            {notes.map(note => DynamicCmp(note))}

        </div>
    )
}
