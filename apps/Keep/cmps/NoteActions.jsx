
export function NoteActions({ noteId, onDeleteNote, onPinNote }) {
    return (
        <div>
            <i onClick={() => onPinNote(noteId)} title="Bookmark note" className="fa fa-bookmark"></i>
            <i title="Change background color" className="fas fa-palette"></i>
            <i onClick={() => onDeleteNote(noteId)} title="Delete" className="fa fa-trash-alt"></i>
        </div>
    )
}
