import axios from 'axios';

export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTE = 'GET_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const getAllNotes = () => {
  const promise = axios.get('http://localhost:8080/notes');
  return {
    type: GET_ALL_NOTES,
    payload: promise
  };
};

export const addNote = (noteData) => {
  const promise = axios.post('http://localhost:8080/notes', noteData);
  return {
    type: ADD_NOTE,
    payload: promise
  };
};

export const getNote = (id) => {
  const promise = axios.get(`http://localhost:8080/notes/${id}`);
  return {
    type: GET_NOTE,
    payload: promise
  };
};

export const deleteNote = (id) => {
  console.log('delete note');
  const promise = axios.delete(`http://localhost:8080/notes/${id}`);
  return {
    type: DELETE_NOTE,
    payload: promise
  };
};

export const updateNote = (id, noteData) => {
  const promise = axios.put(`http://localhost:8080/notes/${id}`, {
    data: {
      id,
      noteData
    }
  });
  return {
    type: UPDATE_NOTE,
    payload: promise
  };
};
