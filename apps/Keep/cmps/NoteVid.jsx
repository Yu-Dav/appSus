import { NoteActions } from './NoteActions.jsx'

export function NoteVid() {
    return (
        // add overflow hidden in css
        <div className="note-preview">
            <iframe width="220" height="115"
                src="https://www.youtube.com/embed/V08j6xzaDrI">
            </iframe>
            <NoteActions/>
        </div>
    )
}
