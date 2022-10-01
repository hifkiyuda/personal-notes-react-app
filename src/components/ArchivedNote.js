import React from "react";
import NoteItem from "./NoteItem";

function ArchivedNote({ notes, onDelete, onMove }) {
  if(notes.length === 0) {
    return (
      <section className="archive-is-empty">
        <p>Archive is empty</p>
      </section>
    )
  } else {
    return (
      <section className="archived-note">
        {
          notes.map((note) => (
            <NoteItem key={note.id} {...note} id={note.id} isArchived={note.archived} onDelete={onDelete} onMove={onMove} />
          ))
        }
      </section>
    );
  }
}

export default ArchivedNote;