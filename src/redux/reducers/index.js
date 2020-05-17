import * as ReactReduxFirebase from 'react-redux-firebase'
import * as Redux from 'redux'
import * as ReduxFirestore from 'redux-firestore'
import apiReducer from './api'
import authReducer from './auth'
import shopReducer from './shop'
import walletReducer from './wallet'

export default Redux.combineReducers({
  auth: authReducer,
  api: apiReducer,
  firestore: ReduxFirestore.firestoreReducer,
  firebase: ReactReduxFirebase.firebaseReducer,
  wallet: walletReducer,
  shop: shopReducer,
})
