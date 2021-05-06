import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVid } from './NoteVid.jsx'

export function NotesList({ notes, onDeleteNote, onPinNote,  onChangeNoteBcgClr }) {

    const DynamicCmp = (note) => {
        // console.log('note =', note)
        switch (note.type) {
            case 'noteText':
                return <NoteTxt key={note.id} note={note} onDeleteNote={onDeleteNote} onPinNote={onPinNote}  onChangeNoteBcgClr={onChangeNoteBcgClr}/>
            case 'noteImg':
                return <NoteImg key={note.id} note={note} onDeleteNote={onDeleteNote}  onPinNote={onPinNote}  onChangeNoteBcgClr={onChangeNoteBcgClr}/>
            case 'noteTodos':
                return <NoteTodos key={note.id} note={note} onDeleteNote={onDeleteNote}  onPinNote={onPinNote}  onChangeNoteBcgClr={onChangeNoteBcgClr}/>
            case 'noteVid':
                return <NoteVid key={note.id} note={note} onDeleteNote={onDeleteNote} onPinNote={onPinNote}  onChangeNoteBcgClr={onChangeNoteBcgClr}/>
            // case 'NoteAud':
            //     return <NoteAud {note} />
            default:
                return console.log('not supported yet')
        }
    }

    // console.log('notes =', notes)
    return (
        <div className="notes-list container">
            {notes.map(note => DynamicCmp(note))}
        </div>
    )
}
