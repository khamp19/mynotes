import React, { Component } from 'react';
import NewNote from './components/newNote';
import NotesMenu from './components/notesMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewNote />
        <NotesMenu />
      </div>
    );
  }
}

export default App;
