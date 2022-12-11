import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Modules/Reducers';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


//  storage and key configuration 

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
    "root": rootReducer
})

// Define persisting reducer with and persist configuration 
 
const persistingReducer = persistReducer(persistConfig, reducers)
 
export const store =  configureStore({
    reducer: persistingReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // need to add unnecessary action in a list for avoiding 
                // errors and warninng 
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store)