<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './redux';
import Root from 'components/root';
=======
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { store, persistor } from "./redux";
import Root from "components/root";
>>>>>>> 96146fbce409406283c243842f735c92a2f9185c

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Root />
    </PersistGate>
  </Provider>
);

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(<App />, document.getElementById("root"));
>>>>>>> 96146fbce409406283c243842f735c92a2f9185c
