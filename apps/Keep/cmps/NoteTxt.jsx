import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'

export function NoteTxt({ note, onDeleteNote, onPinNote, onOpenClr, onChangeNoteClr, onOpenEditModal,onCloseClr}) {
    return (
        <div style={{backgroundColor: note.style.backgroundColor}} className="note-preview note-txt flex flex-column"
        onMouseLeave={() => onCloseClr()}>
            <p>
                {note.info.txt}
            </p>
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote} 
            onOpenClr={onOpenClr} note={note} onOpenEditModal={onOpenEditModal}/>
            {note.isStyleEditing && <NoteBcgClr noteId={note.id} onChangeNoteClr={onChangeNoteClr}/>}
        </div>
    )
}
