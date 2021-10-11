import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const items = createReducer([], {
  [actions.addContacts]: (state, action) => [...state, action.payload],
  "contacts/delete": (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  //   "contacts/add": (state, action) => [...state, action.payload],
  //   "contacts/delete": (state, action) =>
  //     state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

// import types from "./types";
// console.log(actions.addContacts.type);

// {
//     phonebook: {
//         items: '',
//         filter: ''
//     }
// }

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

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contacts/changeFilter":
//       return payload;

//     default:
//       return state;
//   }
// };
