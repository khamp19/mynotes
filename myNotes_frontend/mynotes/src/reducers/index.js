import { combineReducers } from 'redux';
import {
  GET_ALL_NOTES,
  GET_NOTE,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE
} from '../actions';

const notesReducer = (notes = [], action) => {
  switch(action.type) {
    case GET_ALL_NOTES:
      return action.payload.data;
    case GET_NOTE:
      return action.payload.data;
    case ADD_NOTE:
      return action.payload.data;
    case UPDATE_NOTE:
      return action.payload.data;
    case DELETE_NOTE:
      return action.payload.data;
    default:
      return notes;
  }
};

const rootReducer = combineReducers({ notes: notesReducer });
export default rootReducer;
