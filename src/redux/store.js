// store.js
// import combine reducers
import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import the contact reducer
import { contactsReducer } from '../redux/reducers';
// import the filter reducer
import { filterReducer } from '../redux/reducers';

// Combine reducers
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// Create a store extension to add developer tools
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
