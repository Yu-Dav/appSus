import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'


export function NoteVid({ note, onDeleteNote, onPinNote,onChangeNoteBcgClr}) {
    return (
        // add overflow hidden in css
        <div className="note-preview">
            <iframe width="220" height="115"
                src="https://www.youtube.com/embed/V08j6xzaDrI">
            </iframe>
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote} 
            onChangeNoteBcgClr={onChangeNoteBcgClr} note={note} />
            {note.isStyleEditing && <NoteBcgClr/>}

        </div>
    )
}
