import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import categoryReducer from './Redux/home/Categories'
import trustedUserReducer from './Redux/home/trustedUsers'
import articleStoryReducer from './Redux/home/articleStories'
import  userProfileReducer from './Redux/SimpleUser/UserProfile';
import ArtistData from './Redux/artistProfile/ArtistData';
import { PersistGate } from 'redux-persist/integration/react'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import artistPublicProfile from './Redux/artistProfile/artistPublicProfile';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const appReducer  = combineReducers({
  categories : categoryReducer,
  trustedUser : trustedUserReducer,
  articleStory: articleStoryReducer,
  userProfile : userProfileReducer,
  ArtistData : ArtistData,
  artist_Public_Profile: artistPublicProfile
  
})

const persistedReducer = persistReducer(persistConfig, appReducer )

const store = configureStore({
  reducer : persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
// const store =configureStore({
//   reducer : {
//     categories : categoryReducer,
//     trustedUser : trustedUserReducer,
//     articleStory: articleStoryReducer,
//     userProfile : userProfileReducer,
//     ArtistData : ArtistData,
//   }
// })
let persistor = persistStore(store)
ReactDOM.render(
  <React.Fragment>
    <Router>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
      </Provider>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);
