// import React from 'react'

export function NoteBcgClr({onChangeNoteClr}) {
    return (
        <div className="note-edit-bcg">
            <span style={{ backgroundColor: 'red' }} onClick={() => onChangeNoteClr()}></span>
            <span style={{ backgroundColor: 'blue' }}></span>
            <span style={{ backgroundColor: 'yellow' }}></span>
            <span style={{ backgroundColor: 'orange' }}></span>
            <span style={{ backgroundColor: 'pink' }}></span>
            <span style={{ backgroundColor: 'green' }}></span>
        </div>
    )
}
// onChangeNoteClr={onChangeNoteClr}