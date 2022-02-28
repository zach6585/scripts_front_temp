import { combineReducers } from "redux";
import { textReducer } from "./textreducer";
import pageReducer from "./pagereducer";
import userReducer from './userreducer';
import menteeReducer from "./menteereducer";
import commentReducer from "./commentreducer";
import bodyReducer from "./bodyreducer";

export default combineReducers({pages: pageReducer, texts: textReducer, user: userReducer, mentees: menteeReducer, comments: commentReducer, body: bodyReducer})

