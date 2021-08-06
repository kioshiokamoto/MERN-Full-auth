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
    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      }
    case ACTIONS.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => {
          return product._id !== action.payload
        })
      }
    case ACTIONS.EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map(product => {
          if (product._id === action.payload._id) {
            return action.payload
          } else {
            return product
          }
        })
      }
    case ACTIONS.ADD_ALL_CART:
      return{
        ...state,
        cart:[ ...action.payload]
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
    case ACTIONS.INCREASE_NUMBER_PRODUCT:
      return{
        ...state,
        cart: state.cart.map( item => {
            if(item.id === action.payload.id){
                item.cantidad +=1
            }
            return item
          }
        )
      }
    case ACTIONS.DECREASE_NUMBER_PRODUCT:
      return{
        ...state,
        cart: state.cart.map( item => {
            if(item.id === action.payload.id){
                item.cantidad -=1
            }
            return item
          }
        )
      }
    default:
      return state
  }
}

export default reducers