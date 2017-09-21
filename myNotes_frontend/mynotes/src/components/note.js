import React from 'react';

const Note = ({ note, id, handleGetSingleNote }) => {
  return (
    <div onClick={() => {handleGetSingleNote(note._id)}}>
      <h3>{`${note.title}`}</h3>
      <p>{`${note.content}`}</p>
      <p>{`Created on: ${note.created_at}`}</p>
    </div>
  );
};

export default Note;
