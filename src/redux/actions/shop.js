import * as EthereumjsUtil from 'ethereumjs-util'
import ACTIONS from 'redux/actionTypes'
import selectors from 'redux/selectors'
import apiMerchantService from 'services/api-merchant-service'

const create = ({ storeName, walletAddress }) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const state = getState()
  const uid = selectors.users.currentId(state)
  if (!uid) {
    dispatch({
      type: ACTIONS.SHOP_SIGNUP_ERROR,
      payload: 'First, you should login or signup user account',
    })
    return false
  }

  if (!storeName) {
    dispatch({
      type: ACTIONS.SHOP_SIGNUP_ERROR,
      payload: 'Store name is empty. Please type it in.',
    })
    return false
  }

  if (!walletAddress) {
    dispatch({
      type: ACTIONS.SHOP_SIGNUP_ERROR,
      payload: 'Wallet address is empty. Please type it in.',
    })
    return false
  }

  if (!EthereumjsUtil.isValidAddress(walletAddress)) {
    dispatch({
      type: ACTIONS.SHOP_SIGNUP_ERROR,
      payload: 'Wallet address is invalid. Double check and try again.',
    })
    return false
  }

  try {
    const firestore = getFirestore()
    const newStore = await firestore.collection('stores').add({
      storeName,
      walletAddress,
    })
    await firestore
      .collection('users')
      .doc(uid)
      .set({ storeId: newStore.id })
    dispatch({
      type: ACTIONS.SHOP_SIGNUP_SUCCESS,
    })
  } catch (error) {
    dispatch({ type: ACTIONS.SHOP_SIGNUP_ERROR, error })
    return false
  }

  // API: creating shop in the API database
  try {
    let email = JSON.parse(localStorage.getItem('email'))
    let password = JSON.parse(localStorage.getItem('password'))
    let token = await apiMerchantService.signUp({ storeName, email, password })
    console.log('created token', token)
    dispatch({ type: ACTIONS.API.SIGNUP_SUCCESS, payload: { token } })
    return true
  } catch (error) {
    dispatch({ type: ACTIONS.API.SIGNUP_ERROR, error })
    return false
  }
}

const update = ({ storeId, data }) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    await firestore
      .collection('stores')
      .doc(storeId)
      .update(data)
  }
}

export default { create, update }
