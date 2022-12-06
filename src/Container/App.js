import React from 'react';
import { Provider } from 'react-redux';
import Navbar from '../Components/Navbar';
import Dashboard from '../Page/Dashboard';
import './App.css';
import { persistedStore } from '../Utils/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  const callStore = persistedStore;
  const {store, persistor} = callStore;
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <Dashboard />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
