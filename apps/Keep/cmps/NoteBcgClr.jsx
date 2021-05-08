// import React from 'react'

export function NoteBcgClr({ onChangeNoteClr, noteId }) {
    const clr1 = '#e17474'
    const clr2 = '#b4b4da'
    const clr3 = '#dcdc6f'
    const clr4 = '#ffa500'
    const clr5 = '#ffc0cb'
    const clr6 = '#84c484'
    // const clr7 = '#b8c4ad'
    // console.log('De colors =', clr1, clr2, clr3, clr4, clr5, clr6)
    return (
        <div className="note-edit-bcg">
            {/* <span style={{ backgroundColor: clr7 }} onClick={() => onChangeNoteClr(noteId, clr7)}></span> */}
            <span style={{ backgroundColor: clr1 }} onClick={() => onChangeNoteClr(noteId, clr1)}></span>
            <span style={{ backgroundColor: clr2 }} onClick={() => onChangeNoteClr(noteId, clr2)}></span>
            <span style={{ backgroundColor: clr3 }} onClick={() => onChangeNoteClr(noteId, clr3)} ></span>
            <span style={{ backgroundColor: clr4 }} onClick={() => onChangeNoteClr(noteId, clr4)}></span>
            <span style={{ backgroundColor: clr5 }} onClick={() => onChangeNoteClr(noteId, clr5)}></span>
            <span style={{ backgroundColor: clr6 }} onClick={() => onChangeNoteClr(noteId, clr6)}></span>
        </div>
    )
}