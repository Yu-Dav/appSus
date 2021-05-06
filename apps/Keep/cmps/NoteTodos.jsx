import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'


export function NoteTodos({ note,onDeleteNote, onPinNote, onChangeNoteBcgClr }) {
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
            onChangeNoteBcgClr={onChangeNoteBcgClr} note={note}/>
            {note.isStyleEditing && <NoteBcgClr/>}

        </div>
    )
}
