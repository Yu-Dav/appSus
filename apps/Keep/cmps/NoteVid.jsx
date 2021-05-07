import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'


export function NoteVid({ note, onDeleteNote, onPinNote, onOpenClr, onChangeNoteClr, onOpenEditModal }) {
    return (
        // add overflow hidden in css. 
        // responsive sizing is needed.
        <div className="note-preview note-vid " style={{ backgroundColor: note.style.backgroundColor }}>
            <div className="iframe-container">

                <iframe className="responsive-iframe"
                    src={`https://www.youtube.com/embed/${note.info.url}`}>
                </iframe>
            </div>
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote}
                onOpenClr={onOpenClr} note={note} onOpenEditModal={onOpenEditModal} />
            {note.isStyleEditing && <NoteBcgClr noteId={note.id} onChangeNoteClr={onChangeNoteClr} />}

        </div>
    )
}


// width="220" height="115"