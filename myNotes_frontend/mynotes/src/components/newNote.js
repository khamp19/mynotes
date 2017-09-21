import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, updateNote, deleteNote } from '../actions';

class NewNote extends Component{
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    };
  }

  handleTitle = (event) => {
    this.setState({title: event.target.value});
  }

  handleContent = (event) => {
    this.setState({content: event.target.value});
  }

  addNote = (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
    };
    this.props.dispatch(addNote(newNote));
    this.setState({
      title: '',
      content: '',
    });
  };

  render() {
    return(
      <div className="newNoteForm">
        <form>
          Title:
          <input type='text'
            className="newNote"
            placeholder="New Note"
            value={this.state.title}
            onChange={this.handleAddNote} />
          Note Content:
          <input type='text'
            className='newNote'
            placeholder="Input your note here"
            value={this.state.content}
            onChange={this.handleContent} />
          <button color='green' onClick={this.addNote}>Save Note</button>
          <button color='blue' onClick={this.updateNote}>Edit Note</button>
          <button color='red' onClick={this.deleteNote}>Delete Note</button>
        </form>
      </div>
    );
  }
};
export default connect()(NewNote);
