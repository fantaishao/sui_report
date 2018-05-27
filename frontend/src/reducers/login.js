export default function login(state = [], action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          payload: action.success,
        }
        
      case 'LOGIN_REQUEST':
        return {
          ...state,
          payload: action.payload,
        }

      case 'LOG_OUT': 
        return {
          ...state,
          payload: action.payload,
        }
      default:
        return state
    }
  }