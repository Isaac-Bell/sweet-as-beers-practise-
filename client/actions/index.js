// import request from 'superagent'

export const NAVIGATE = 'NAVIGATE'
export const SHOW_ERROR = 'SHOW_ERROR'

// navigate will need to receive an active prop in order to toggle between pages
export const navigate = (active) => {
  return {
    type: NAVIGATE
    // toggle between pages
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}
