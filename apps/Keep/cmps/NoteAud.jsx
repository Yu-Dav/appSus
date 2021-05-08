import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'

export function NoteAud({ note, onDeleteNote, onPinNote, onOpenClr, onChangeNoteClr, onOpenEditModal, onCloseClr }) {
    return (
        <div style={{ backgroundColor: note.style.backgroundColor }} className="note-preview"
            onMouseLeave={() => onCloseClr()}>
            <div className="aud-container">
                <audio controls src={`${note.info.url}`}></audio>
            </div>
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote}
                onOpenClr={onOpenClr} note={note} onOpenEditModal={onOpenEditModal} />
            {note.isStyleEditing && <NoteBcgClr noteId={note.id} onChangeNoteClr={onChangeNoteClr} />}
        </div>
    )
}
