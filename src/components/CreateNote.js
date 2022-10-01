import React from "react";

class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const titleLength = event.target.value;
    const limitTitle = this.state.limit;
    const currentLength = titleLength.slice(0, limitTitle);

    this.setState(() => {
      return {
        title: currentLength,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.createNote(this.state);
  }

  render() {
    return (
      <section className='create-note'>
        <p>Remaining characters: <span id='remaininCharacters'>{this.state.limit - this.state.title.length}</span></p>
        <form className='create-note__form' onSubmit={this.onSubmitEventHandler}>
          <input className="input-field" type="text" placeholder="Enter note title ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <textarea className="input-field" type="text" placeholder="Enter your note here ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required />
          <button className="create-note__button" type="submit">Create</button>
        </form>
      </section>
    );
  }
}

export default CreateNote;