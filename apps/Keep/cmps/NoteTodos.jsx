import { NoteActions } from './NoteActions.jsx'

export function NoteTodos({ note }) {
    const {todos} = note.info
    return (
        <div className="note-preview">
            {note.info.label}
            <ul>
                {todos.map((todo,idx)=>{
                    return <li key={idx}>{todo.txt}</li>
                })}
            </ul>
            <NoteActions/>
        </div>
    )
}
