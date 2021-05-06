import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'


export function NoteImg({ note ,onDeleteNote, onPinNote, onChangeNoteBcgClr }) {
    return (
        <div className="note-preview">
            {note.info.title}
            <img src={note.info.url} alt=""/>
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote}
             onChangeNoteBcgClr={onChangeNoteBcgClr} note={note} />
            {note.isStyleEditing && <NoteBcgClr/>}

        </div>
    )
}
