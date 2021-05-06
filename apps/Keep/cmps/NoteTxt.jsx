import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'

export function NoteTxt({ note, onDeleteNote, onPinNote, onOpenClr, onChangeNoteClr}) {
    // console.log ('var =',note)
    return (
        <div style={{backgroundColor: note.style.backgroundColor}} className="note-preview">
            {/* <p contentEditable="true"> */}
            <p >
                {note.info.txt}
            </p>
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote} 
            onOpenClr={onOpenClr} note={note} />
            {note.isStyleEditing && <NoteBcgClr onChangeNoteClr={onChangeNoteClr}/>}
        </div>
    )
}
