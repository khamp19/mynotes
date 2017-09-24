import axios from 'axios';

export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTE = 'GET_NOTE';

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
