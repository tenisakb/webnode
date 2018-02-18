<<<<<<< HEAD
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from 'redux/reducers';

const persistConfig = {
  key: 'directories',
=======
import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "redux/reducers";

const persistConfig = {
  key: "directories",
>>>>>>> 96146fbce409406283c243842f735c92a2f9185c
  storage
};

export const store = createStore(
  persistReducer(persistConfig, reducer)
);

export const persistor = persistStore(store);
