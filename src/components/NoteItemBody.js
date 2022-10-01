import React from "react";

function NoteItemBody({ title, createdAt, body }) {
  return (
    <div>
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemBody;