import { NoteActions } from './NoteActions.jsx'

export function NoteImg({ note ,onDeleteNote, onPinNote }) {
    return (
        <div className="note-preview">
            {note.info.title}
            <img src={note.info.url} alt=""/>
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote} noteId={note.id} />
        </div>
    )
}
