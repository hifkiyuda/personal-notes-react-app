import React from "react";
import ArchiveButton from "./buttons/ArchiveButton";
import DeleteButton from "./buttons/DeleteButton";
import MoveButton from "./buttons/MoveButton";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ isArchived, title, createdAt, body, id, onDelete, onArchived, onMove }) {
  const archived = isArchived;

  if(!archived) {
    return (
      <article className="note-item">
        <NoteItemBody title={title} createdAt={createdAt} body={body} />
        <div className="note-item__buttons">
          <DeleteButton id={id} onDelete={onDelete} />
          <ArchiveButton id={id} onArchived={onArchived} />
        </div>
      </article>
    );
  } else {
    return (
      <article className="note-item">
        <NoteItemBody title={title} createdAt={createdAt} body={body} />
        <div className="note-item__buttons">
          <DeleteButton id={id} onDelete={onDelete} />
          <MoveButton id={id} onMove={onMove} />
        </div>
      </article>
    );
  }
}

export default NoteItem;