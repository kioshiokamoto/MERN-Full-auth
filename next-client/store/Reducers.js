/* istanbul ignore file */
import { ACTIONS } from "./Actions"

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.AUTH:
      return {
        ...state,
        auth: action.payload
      }
    case ACTIONS.AUTH_READY:
      return {
        ...state,
        authReady: action.payload
      }
    case ACTIONS.AUTH_TYPE:
      return {
        ...state,
        authType: action.payload
      }
    case ACTIONS.USER:
      return {
        ...state,
        user: action.payload
      }
    case ACTIONS.GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload]
      }
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload]
      }
    case ACTIONS.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }
    case ACTIONS.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => {
          return post.id !== action.payload
        })
      }
    case ACTIONS.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return action.payload
          } else {
            return post
          }
        })
      }
    case ACTIONS.UPDATE_NAME:
      return {
        ...state,
        auth: {
          ...state.auth,
          user: {
            ...state.auth.user,
            us_nombre: action.payload.name,
            us_apellido: action.payload.lastname
          }
        }
      }
    case ACTIONS.UPDATE_IMAGE:
      return {
        ...state,
        auth: {
          ...state.auth,
          user: {
            ...state.auth.user,
            avatar: action.payload
          }
        }
      }
    default:
      return state
  }
}

export default reducers