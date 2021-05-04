import { NoteActions } from './NoteActions.jsx'

export function NoteTxt({ note }) {
    // console.log ('var =',note)
    return (
        <div className="note-preview">
            {note.info.txt}
            <NoteActions />
            {/* hardcoded  */}
        </div>
    )
}
