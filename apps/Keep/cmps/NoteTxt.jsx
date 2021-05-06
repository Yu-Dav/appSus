import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'

export function NoteTxt({ note, onDeleteNote, onPinNote, onOpenClr, onChangeNoteClr, onOpenEditModal}) {
    // console.log ('var =',note)
    return (
        <div style={{backgroundColor: note.style.backgroundColor}} className="note-preview">
            <p>
                {note.info.txt}
            </p>
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote} 
            onOpenClr={onOpenClr} note={note} onOpenEditModal={onOpenEditModal}/>
            {note.isStyleEditing && <NoteBcgClr noteId={note.id} onChangeNoteClr={onChangeNoteClr}/>}
        </div>
    )
}
