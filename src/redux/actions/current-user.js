import PROVIDER from 'constants/auth-provider'
import ACTIONS from 'redux/actionTypes'
import selectors from 'redux/selectors'
import apiMerchantService from 'services/api-merchant-service'

const setShoppingCartOrder = orderId => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const state = getState()
  const currentUserId = selectors.users.currentId(state)
  await getFirebase()
    .collection('users')
    .doc(currentUserId)
    .update({
      shoppingCartOrderId: orderId,
    })
}

////////////////////
// AUTHENTICATION //
////////////////////

const signInWithOAuth = provider => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase()
  try {
    const providerConstructorsMap = {
      [PROVIDER.FACEBOOK]: firebase.auth.FacebookAuthProvider,
      [PROVIDER.GITHUB]: firebase.auth.GithubAuthProvider,
      [PROVIDER.GOOGLE]: firebase.auth.GoogleAuthProvider,
    }

    const _provider = new providerConstructorsMap[provider]()

    await firebase.auth().signInWithRedirect(_provider)
    dispatch({ type: ACTIONS.LOGIN_SUCCESS })
    return true
  } catch (error) {
    dispatch({ type: ACTIONS.LOGIN_ERROR, error })
    return false
  }
}

const signInWithEmail = ({ email, password }) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase()
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    dispatch({ type: ACTIONS.LOGIN_SUCCESS })
  } catch (error) {
    dispatch({ type: ACTIONS.LOGIN_ERROR, error })
    return false
  }

  // API: signing in the API database
  try {
    let token = await apiMerchantService.signIn({
      email,
      password,
    })
    console.log('created token', token)
    dispatch({ type: ACTIONS.API.SIGNUP_SUCCESS, payload: { token } })
    return true
  } catch (error) {
    dispatch({ type: ACTIONS.API.SIGNUP_ERROR, error })
    return false
  }
}

const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  try {
    await firebase.auth().signOut()
    dispatch({ type: ACTIONS.CLEAR_DATA })
  } catch (error) {
    console.log('cannot logout')
    console.log(error.message)
  }
}

const signUpWithEmail = ({ email, password }) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase()
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    dispatch({ type: ACTIONS.SIGNUP_SUCCESS })
    localStorage.setItem('password', JSON.stringify(password))
    localStorage.setItem('email', JSON.stringify(email))
    return true
  } catch (error) {
    dispatch({ type: ACTIONS.SIGNUP_ERROR, error })
    return false
  }
}

export default {
  setShoppingCartOrder,
  signInWithOAuth,
  signInWithEmail,
  signOut,
  signUpWithEmail,
}
