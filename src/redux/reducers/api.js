import ACTIONS from 'redux/actionTypes'

const initState = {
  apiError: null,
}

const apiReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.API.SIGNUP_SUCCESS:
      console.log(action.type)
      return {
        ...state,
        token: action.payload.token,
      }
    case ACTIONS.API.SIGNUP_ERROR:
      console.log('Error during shop creating via api')
      return {
        ...state,
        apiError: action.payload,
      }
    default:
      return state
  }
}

export default apiReducer
