import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllNotes } from '../actions';
import Note from './note';

class NotesMenu extends Component {
  componentDidMount() {
    this.props.getAllNotes();
  }

  getNote = (e) => {
    e.preventDefault();
    const id = this.state._id;
    this.props.dispatch(getNote(id));
    this.setState({
      title:'',
      content:''
    });
  };

  updateNote = (e) => {
    e.preventDefault();
    const noteData = {
      id: this.state._id,
      update: {
        title: this.state.title,
        content: this.state.content
      }
    };
    this.props.dispatch(updateNote(noteData));
    this.setState({
      title: '',
      content: ''
    });
  };

  deleteNote = (e) => {
    e.preventDefault();
    this.props.dispatch(deleteNote(this.state._id));
    this.setState({
      title: '',
      content: '',
    });
  };

  render() {
    return (
      <div className="Notes Menu">
        <ul>
          {this.props.notes.map((note, i) => {
            return (
              <Note note={note} key={i} handleGetSingleNote={this.getNote}/>
            )
          })}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllNotes }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesMenu);
