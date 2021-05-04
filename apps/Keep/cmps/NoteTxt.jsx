import { NoteActions } from './NoteActions.jsx'

export function NoteTxt({ note }) {
    // console.log ('var =',note)
    return (
        <div className="note-preview">
            <p contentEditable="true">
                {note.info.txt}
            </p>
            <NoteActions />
            {/* hardcoded  */}
        </div>
    )
}
