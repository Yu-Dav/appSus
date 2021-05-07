import { NoteActions } from './NoteActions.jsx'
import { NoteBcgClr } from './NoteBcgClr.jsx'


export function NoteTodos({ note,onDeleteNote, onPinNote, onOpenClr, onChangeNoteClr, onOpenEditModal }) {
    const { todos, label } = note.info

    function onMarkTodo(ev) {
        console.log ('target is: =',ev.target.innerText)
        ev.target.classList.toggle('todo-clicked')
    }

    return (
        <div className="note-preview" style={{backgroundColor: note.style.backgroundColor}}>
            <h1>{label}</h1>
            <ul>
                {todos.map((todo, idx) => {
                    return <li key={idx} onClick={(ev) => onMarkTodo(ev)}>{todo.txt}</li>
                })}
            </ul>
            <NoteActions onDeleteNote={onDeleteNote}  onPinNote={onPinNote} 
            onOpenClr={onOpenClr} note={note} onOpenEditModal={onOpenEditModal} />
            {note.isStyleEditing && <NoteBcgClr noteId={note.id} onChangeNoteClr={onChangeNoteClr}/>}

        </div>
    )
}
