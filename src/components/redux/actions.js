// import types from "./types";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContacts = createAction("contacts/add", (data) => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));
// const addContacts = (data) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// });

const deleteContacts = createAction("contacts/delete");
// const deleteContacts = createAction(types.DELETE);
// const deleteContacts = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

const changeFilter = createAction("contacts/changeFilter");
// const changeFilter = createAction(types.CHANGE_FILTER);
// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
export default { addContacts, deleteContacts, changeFilter };
