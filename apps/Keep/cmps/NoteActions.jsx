import { eventBusService } from '../../../services/event-bus-service.js'

const { Link } = ReactRouterDOM

export function NoteActions({ note, onDeleteNote, onPinNote, onOpenClr, onOpenEditModal }) {
    // console.log('note =', note)
    if (!note) return <div></div>
    let url = note.info.txt
    if (note.type === 'noteVid' || note.type === 'noteImg') url = note.info.url
    if (note.type === 'noteTodos') url = note.info.todos.map(todo => ' ' + todo.txt)
    return (
        <div className="note-actions">

            {/* Pin note */}

            <i onClick={() => onPinNote(note.id)} className={note.isPinned ? "pinned fas fa-thumbtack" : "fas fa-thumbtack"}
                title="Pin to top"></i>

            {/* Open color pallete */}

            <i onClick={() => onOpenClr(note.id)}
                title="Change background color" className="fas fa-palette"></i>

            {/* Edit */}
            {/* <i onClick={() => onOpenEditModal(note)} */}
            <i onClick={() => onOpenEditModal(note.id)}
                title="Edit" className="fas fa-edit"></i>

            {/* Delete */}
            <i onClick={() => onDeleteNote(note.id)}
                title="Delete" className="fa fa-trash-alt"></i>

            {/* via email */}
            <Link to={`/email?body=${url}`}>
                <i onClick={() => { eventBusService.emit('show-user-msg', { txt: 'Sending note via email', type: 'success' }) }}
                    title="Send via email" className="fas fa-at"></i>
            </Link>

        </div>
    )
}

{/* /email/compose?subject=my note&body= note about the rain */ }
{/* <Link to={`/car/${car.id}/${car.vendor}`}>Details</Link> */ }
// className={this.state.clicked === 'noteImg' ? "clicked fas fa-image": "fas fa-image"}