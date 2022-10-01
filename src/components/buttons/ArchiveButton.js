import React from "react";

function ArchiveButton({ id, onArchived }) {
  return (
    <button className="note-item__archive" onClick={() => onArchived(id)}>Archive</button>
  );
}

export default ArchiveButton;