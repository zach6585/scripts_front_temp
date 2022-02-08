import { combineReducers } from "redux";
import { textReducer } from "./textreducer";
import pageReducer from "./pagereducer";
import userReducer from './userreducer';
import menteeReducer from "./menteereducer";
import { changeReducer } from "./changereducer";

export default combineReducers({pages: pageReducer, texts: textReducer, user: userReducer, mentees: menteeReducer, changes: changeReducer})

