import { withReduxStateSync } from 'redux-state-sync';

import { combineReducers } from "redux";
import { textReducer } from "./textreducer";
import pageReducer from "./pagereducer";
import userReducer from './userreducer';
import menteeReducer from "./menteereducer";
import commentReducer from "./commentreducer";
import linkReducer from "./linkreducer";

export default withReduxStateSync(combineReducers({pages: pageReducer, texts: textReducer, user: userReducer, mentees: menteeReducer, comments: commentReducer, links: linkReducer}))


