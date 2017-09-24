import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote } from '../actions';
import Panel from 'react-bootstrap/lib/Panel';
import HomeButton from './homeButton';

class NoteDetail extends Component {
  componentDidMount(){
    this.props.getNote(this.props.match.params.id);
  }

  render(){
    if(this.props.selectedNote === null) return null;
    return(
      <div className="noteDetail">
        <Panel>
          <h2>{this.props.selectedNote.title}</h2>
          <p>{this.props.selectedNote.content}</p>
          <p>{`Created on: ${this.props.selectedNote.created_at}`}</p>
          <HomeButton />
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    selectedNote: state.selectedNote
  };
};

export default connect(mapStateToProps, { getNote })(NoteDetail);
