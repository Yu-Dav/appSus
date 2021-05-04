import { NoteActions } from './NoteActions.jsx'

export function NoteImg({ note }) {
    return (
        <div className="note-preview">
            {note.info.title}
            <img src={note.info.url} alt=""/>
            <NoteActions/>
        </div>
    )
}
