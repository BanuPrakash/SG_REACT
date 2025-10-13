import type { CartReducerType } from "../context/CartContextProvider";
import type CartItem from "../models/CartItem";
type Action = {
    'type': 'ADD_TO_CART',
    payload: CartItem
} | {
    type: 'INCREMENT',
    payload: number
} | {
    type: 'CLEAR_CART'
}

// type Action = {
//     type: string,
//     payload: any
// }
export default function cartReducer(state: CartReducerType , action: Action): CartReducerType {
    /*
        {
            type: 'ADD_TO_CART',
            payload: {"id": 5, "title": "A", price:2324, qty: 1, amount: 2324}
        }
    */
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                cartItems: [...state.cartItems, action.payload],
                total: state.total + action.payload.amount,
                quantity: state.quantity + 1
            }
        /*
            {
                type: 'INCREMENT',
                payload: 5
            }
        */
        case 'INCREMENT':
            return state;
        /*
            {
                type: 'CLEAR_CART'
            }
        */
        case 'CLEAR_CART':
            return  {
                cartItems: [],
                total: 0,
                quantity: 0
            }
        default:
            return state;
    }
}