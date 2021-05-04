import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVid } from './NoteVid.jsx'

export function NotesList({ notes }) {

    const DynamicCmp = (note) => {
        // console.log('note =', note)
        switch (note.type) {
            case 'NoteText':
                return <NoteTxt key={note.id} note={note} />
            case 'NoteImg':
                return <NoteImg key={note.id} note={note} />
            case 'NoteTodos':
                return <NoteTodos key={note.id} note={note} />
            case 'NoteVid':
                return <NoteVid key={note.id} note={note} />
            // case 'NoteAud':
            //     return <NoteAud {note} />
            default:
                return console.log('not supported yet')
        }
    }

    console.log('notes =', notes)
    return (
        <div className="notes-list container">
            {notes.map(note => DynamicCmp(note))}
            
        </div>
    )
}
