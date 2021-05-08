import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'


export function NoteImg({ note, onDeleteNote, onPinNote, onOpenClr, onChangeNoteClr,onCloseClr }) {
    return (
        <div className="note-preview" style={{backgroundColor: note.style.backgroundColor}}
        onMouseLeave={() => onCloseClr()}>
            {note.info.title}
            <img src={note.info.url} alt="" />
            <NoteActions onDeleteNote={onDeleteNote} onPinNote={onPinNote}
                onOpenClr={onOpenClr} note={note}  />
            {note.isStyleEditing && <NoteBcgClr noteId={note.id} onChangeNoteClr={onChangeNoteClr}/>}

        </div>
    )
}
