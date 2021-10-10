// import { combineReducers } from "redux";
import {
  configureStore,
  // combineReducers,
  // getDefaultMiddleware
} from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./reducer";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const phonebookPersistConfig = {
  key: "phonebook",
  storage,
  blacklist: ["filter"],
};

console.log(process.env.NODE_ENV);

const store = configureStore({
  reducer: {
    phonebook: persistReducer(phonebookPersistConfig, contactsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default {
  store,
  persistor,
};

// const rootReducer = combineReducers({
//   // phonebook: contactsReducer,
//   phonebook: persistReducer(persistConfig, contactsReducer),
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const rootReducer = combineReducers({
//   phonebook: contactsReducer,
// });
// const store = createStore(
//   rootReducer,
//   composeWithDevTools()
// );
// console.log(getDefaultMiddleware());
// const middlewere = [...getDefaultMiddleware(), logger];
