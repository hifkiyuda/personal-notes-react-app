import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchived, }) {
  if(notes.length === 0) {
    return (
      <section className="create-some-notes">
        <p>Create some notes</p>
      </section>
    )
  } else {
    return (
      <section className="note-list">
        {
          notes.map((note) => (
            <NoteItem key={note.id} {...note} id={note.id} isArchived={note.archived} onDelete={onDelete} onArchived={onArchived} />
          ))
        }
      </section>
    )
  }
}

export default NoteList;