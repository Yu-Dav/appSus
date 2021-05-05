import { NoteActions } from './NoteActions.jsx'

export function NoteTxt({ note, onDeleteNote, onPinNote}) {
    // console.log ('var =',note)
    return (
        <div className="note-preview">
            {/* <p contentEditable="true"> */}
            <p >
                {note.info.txt}
            </p>
            <NoteActions onDeleteNote={onDeleteNote}  onPinNote={onPinNote} noteId={note.id}/>
            {/* hardcoded  */}
        </div>
    )
}
