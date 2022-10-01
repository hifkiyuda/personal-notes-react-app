import React from "react";

function SearchNote({ onSearch }) {
  return (
    <section className="search-note">
      <input className="input-field" type="text" placeholder="Enter note title ..." onInput={onSearch} />
    </section>
  );
}

export default SearchNote;