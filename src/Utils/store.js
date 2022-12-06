import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import rootReducer from '../Modules/Reducers'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
// const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export const store = createStore(rootReducer)
// export const persistor = persistStore(store)