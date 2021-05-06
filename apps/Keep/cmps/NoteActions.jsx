
export function NoteActions({  note, onDeleteNote, onPinNote, onOpenClr }) {
    console.log('note =', note)
    return (
        <div className="note-actions">
            {/* clr of a pinned note should be changed by class */}
            <i onClick={() => onPinNote(note.id)} className={note.isPinned? "pinned fas fa-thumbtack" : "fas fa-thumbtack"}
                title="Pin to top"></i>

            <i onClick={() => onOpenClr(note.id)}
                title="Change background color" className="fas fa-palette"></i>

            <i onClick={() => onDeleteNote(note.id)}
                title="Delete" className="fa fa-trash-alt"></i>
        </div>
    )
}


// className={this.state.clicked === 'noteImg' ? "clicked fas fa-image": "fas fa-image"}