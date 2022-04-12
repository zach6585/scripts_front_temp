import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from './reducers/rootreducer';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };
  
const pReducer = persistReducer(persistConfig, reducer);



export const store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);