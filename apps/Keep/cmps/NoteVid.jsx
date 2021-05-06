import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'


export function NoteVid({ note, onDeleteNote, onPinNote,onOpenClr, onChangeNoteClr}) {
    return (
        // add overflow hidden in css
        <div className="note-preview">
            <iframe width="220" height="115"
                src="https://www.youtube.com/embed/V08j6xzaDrI">
            </iframe>
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote} 
            onOpenClr={onOpenClr} note={note} />
            {note.isStyleEditing && <NoteBcgClr onChangeNoteClr={onChangeNoteClr}/>}

        </div>
    )
}
