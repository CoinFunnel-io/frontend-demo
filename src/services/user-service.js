import axios from 'axios'
import ENV from 'config/env'

async function login(email, password) {
  const options = {
    method: 'POST',
    url: `${ENV.API_URL}/frontend/login`,
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
    localStorage.setItem('token', JSON.stringify(data.token))
    localStorage.setItem('email', JSON.stringify(email))
    return data.token
  } catch (error) {
    throw error
  }
}

async function signup(email, password) {
  const options = {
    method: 'POST',
    url: `${ENV.API_URL}/frontend/login`,
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
    localStorage.setItem('token', JSON.stringify(data.token))
    localStorage.setItem('email', JSON.stringify(email))
    return data.token
  } catch (error) {
    throw error
  }
}

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  // TODO: dispatch method to clear the state
}

export default { login, logout, signup }
