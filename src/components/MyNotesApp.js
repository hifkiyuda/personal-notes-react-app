import React from "react";
import { getInitialData, showFormattedDate } from "../utils/notes";
import ArchivedNote from "./ArchivedNote";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import NoteList from "./NoteList";
import SearchNote from "./SearchNote";

class MyNotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      notesForSearch: getInitialData(),
    };

    this.onCreateNotesHandler = this.onCreateNotesHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
    this.onMoveEventHandler = this.onMoveEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onCreateNotesHandler({ title, body }) {
    this.setState((previousState) => {
      return {
        notes: [
          ...previousState.notes, 
          {
            id: +new Date(),
            createdAt: showFormattedDate(new Date()),
            archived: false,
            title,
            body,
          }
        ],
        notesForSearch: [
          ...previousState.notesForSearch, 
          {
            id: +new Date(),
            createdAt: showFormattedDate(new Date()),
            archived: false,
            title,
            body,
          }
        ],
      }
    })
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const notesForSearch = this.state.notesForSearch.filter((note) => note.id !== id);
    
    this.setState({ notes });
    this.setState({ notesForSearch })
  }

  onArchivedEventHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = true;
      }
      return note;
    })

    const notesForSearch = this.state.notesForSearch.map((note) => {
      if (note.id === id) {
        note.archived = true;
      }
      return note;
    })

    this.setState({ notes });
    this.setState({ notesForSearch });
  }

  onMoveEventHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = false;
      }
      return note;
    })

    const notesForSearch = this.state.notesForSearch.map((note) => {
      if (note.id === id) {
        note.archived = false;
      }
      return note;
    })

    this.setState({ notes });
    this.setState({ notesForSearch });
  }

  onSearchEventHandler(event) {
    const value = event.target.value;
    
    if(value.length !== 0) {
      this.setState(() => {
        return {
          notes: this.state.notesForSearch.filter((note) => note.title.toLowerCase().includes(value.toLowerCase())),
        }
      })
    } else {
      this.setState(() => {
        return {
          notes: this.state.notesForSearch,
        }
      })
    }
  }

  render() {
    const noteIsArchived = this.state.notes.filter((note) => note.archived === true);
    const noteIsNotArchived = this.state.notes.filter((note) => note.archived === false);

    return (
      <>
        <Header />
        <p className="notes-page-title">Create Note</p>
        <CreateNote createNote={this.onCreateNotesHandler} />

        <p className="notes-page-title">Search Note</p>
        <SearchNote onSearch={this.onSearchEventHandler} />

        <p className="notes-page-title">Notes</p>
        <h2 className="notes-title">Current Notes</h2>
        <NoteList notes={noteIsNotArchived} onDelete={this.onDeleteEventHandler} onArchived={this.onArchivedEventHandler} />
        <h2 className="notes-title">Archived Notes</h2>
        <ArchivedNote notes={noteIsArchived} onDelete={this.onDeleteEventHandler} onMove={this.onMoveEventHandler} />
        <Footer />
      </>
    );
  }
}

export default MyNotesApp;