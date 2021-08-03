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
    case ACTIONS.ADD_CART:
      return{
        ...state,
        cart:[ action.payload,...state.cart]
      }
    case ACTIONS.DELETE_CART:
      return{
        ...state,
        cart: state.cart.filter( item => item.id !== action.payload)
      }
    default:
      return state
  }
}

export default reducers