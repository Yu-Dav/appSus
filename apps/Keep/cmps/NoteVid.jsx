import { NoteActions } from './NoteActions.jsx'

export function NoteVid() {
    return (
        <div className="note-preview">
            <iframe width="150" height="315"
                src="https://www.youtube.com/embed/V08j6xzaDrI">
            </iframe>
            <NoteActions/>
        </div>
    )
}
