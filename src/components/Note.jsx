import React, { useState } from 'react'
import './note.css';

export default function Note({note,setNote,noteString}) {
  function ChangeHandler(e){
    setNote(e.target.value);
  }
  return (
    <div>
      <h2>All notes</h2>
      <textarea className='notesInput' onChange={ChangeHandler} defaultValue={localStorage.getItem("Note") }></textarea>
    </div>
  )
}
