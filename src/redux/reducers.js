// import all actions from actions.js
import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './actions';

// the initial state hard coded
const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialFilterState = '';

export const contactsReducer = (state = initialContactsState, action) => {
  // Use switch case to know what action in state to be change
  switch (action.type) {
    // Add Contact
    case ADD_CONTACT:
      // add new contact to the existing contacts state ... means spread
      return [...state, action.payload];
    // Delete Contact
    case DELETE_CONTACT:
      // which id to delete from payload pass to reducer
      return state.filter(contact => contact.id !== action.payload);
    // default state if no change
    default:
      return state;
  }
};

// filterReducer
export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    // set filter action
    case SET_FILTER:
      return action.payload;
    default:
      // default state if no change
      return state;
  }
};
