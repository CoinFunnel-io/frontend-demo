import axios from 'axios'
import ENV from 'config/env'

async function signUp({ storeName, email, password }) {
  const options = {
    method: 'POST',
    url: `${ENV.API_URL}/api/create_merchant`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      name: storeName,
      email,
      password,
    },
  }
  try {
    const response = await axios(options)
    const data = await response.data
    console.log('data.token :', data.token)
    return data.token
  } catch (error) {
    throw error
  }
}

async function signIn({ email, password }) {
  const options = {
    method: 'POST',
    url: `${ENV.API_URL}/api/create_auth_token`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      email,
      password,
    },
  }
  try {
    const response = await axios(options)
    const data = await response.data
    console.log('data.token :', data.token)
    return data.token
  } catch (error) {
    throw error
  }
}

export default { signUp, signIn }
