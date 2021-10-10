import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import types from "./types";
import actions from "./actions";
console.log(actions.addContacts.type);

// {
//     phonebook: {
//         items: '',
//         filter: ''
//     }
// }

const items = createReducer([], {
  [actions.addContacts]: (state, action) => [...state, action.payload],
  "contacts/delete": (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  //   "contacts/add": (state, action) => [...state, action.payload],
  //   "contacts/delete": (state, action) =>
  //     state.filter((contact) => contact.id !== action.payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contacts/changeFilter":
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
