import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'


export function NoteVid({ note, onDeleteNote, onPinNote, onOpenClr, onChangeNoteClr, onOpenEditModal }) {
    return (
        // add overflow hidden in css. 
        // responsive sizing is needed.
        <div className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
            <iframe width="220" height="115"
                src={`https://www.youtube.com/embed/${note.info.url}`}>
            </iframe>
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote}
                onOpenClr={onOpenClr} note={note} onOpenEditModal={onOpenEditModal} />
            {note.isStyleEditing && <NoteBcgClr noteId={note.id} onChangeNoteClr={onChangeNoteClr} />}

        </div>
    )
}
