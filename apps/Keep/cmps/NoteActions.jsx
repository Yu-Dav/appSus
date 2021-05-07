const { Link } = ReactRouterDOM


export function NoteActions({ note, onDeleteNote, onPinNote, onOpenClr, onOpenEditModal }) {
    // console.log('note =', note)
    let url = note.info.txt
    if (note.type === 'noteVid') url = note.info.url
    if (note.type === 'noteImg') url = note.info.url
    return (
        <div className="note-actions">
            {/* clr of a pinned note should be changed by class */}
            <i onClick={() => onPinNote(note.id)} className={note.isPinned ? "pinned fas fa-thumbtack" : "fas fa-thumbtack"}
                title="Pin to top"></i>

            <i onClick={() => onOpenClr(note.id)}
                title="Change background color" className="fas fa-palette"></i>

            <i onClick={() => onOpenEditModal(note.id)}
                title="Edit" className="fas fa-edit"></i>

            <i onClick={() => onDeleteNote(note.id)}
                title="Delete" className="fa fa-trash-alt"></i>
            <Link to={`/email?body=${url}`}>
                <i>share</i>

            </Link>


        </div>
    )
}


{/* /email/compose?subject=my note&body= note about the rain */}
{/* <Link to={`/car/${car.id}/${car.vendor}`}>Details</Link> */}
// className={this.state.clicked === 'noteImg' ? "clicked fas fa-image": "fas fa-image"}