import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'


export function NoteTodos({ note,onDeleteNote, onPinNote, onOpenClr, onChangeNoteClr }) {
    const { todos, label } = note.info
    return (
        <div className="note-preview">
            <h1>{label}</h1>
            <ul>
                {todos.map((todo, idx) => {
                    return <li key={idx}>{todo.txt}</li>
                })}
            </ul>
            <NoteActions onDeleteNote={onDeleteNote}  onPinNote={onPinNote} 
            onOpenClr={onOpenClr} note={note} />
            {note.isStyleEditing && <NoteBcgClr onChangeNoteClr={onChangeNoteClr}/>}

        </div>
    )
}
