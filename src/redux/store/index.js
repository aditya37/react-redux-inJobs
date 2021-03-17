import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import asyncStorage from '@react-native-community/async-storage';
import AuthMiddleware from '../middleware';
import RootReducer from '../reducers';

// For connection to remote-dev
const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'InJobs Debug',
  hostname: 'localhost',
  port: 8000,
});

// Redux persist config
const persistConfig = {
  key: 'root',
  storage: asyncStorage,
  blacklist: ['loginReducer', 'registerReducer'],
  whitelist: ['profileReducer'] // uncomment this if want to persist reducers
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

// Creating store
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk, AuthMiddleware)),
);
// set persistor
const persistor = persistStore(store);

export {persistor, store};
