import { NoteActions } from './NoteActions.jsx'

export function NoteTodos({ note,onDeleteNote, onPinNote }) {
    const { todos, label } = note.info
    return (
        <div className="note-preview">
            <h1>{label}</h1>
            <ul>
                {todos.map((todo, idx) => {
                    return <li key={idx}>{todo.txt}</li>
                })}
            </ul>
            <NoteActions onDeleteNote={onDeleteNote}  onPinNote={onPinNote} noteId={note.id}/>
        </div>
    )
}
