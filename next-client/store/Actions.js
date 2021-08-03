
export const ACTIONS = {
    AUTH: "AUTH",
    AUTH_READY: "AUTH_READY",
    AUTH_TYPE: "AUTH_TYPE",
    GET_PRODUCTS: "GET_PRODUCTS",
    ADD_POST: "ADD_POST",
    EDIT_POST: "EDIT_POST",
    DELETE_POST: "DELETE_POST",
    ADD_CART:"ADD_CART",
    DELETE_CART:"DELETE_CART"
}

// export const addToCart = (product, cart) => {
//     // Determina si todos los elementos en el array satisfacen una condición
//     const check = cart.every(item => {
//         return item.id !== product.id
//     })
//     console.log('mostro el toast')
//     if(!check) return (showToast("Cuidado","Elemento ya ha sido agregado","info")) 
//     console.log('siguio')

//     return ({ type: 'ADD_CART', payload: {...product, cantidad:1}}) 
// }