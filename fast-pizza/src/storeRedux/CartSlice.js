import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    cart:[],
}


const cartSlice = createSlice({

    name:'cart',
    initialState,
    reducers:{

        addItems(state, action) {

            state.cart.push(action.payload);
        },

        deleteItems(state, action) {
            state.cart = state.cart.filter((item)=> item.pizzaId != action.payload);
        },

        increaseQuantity(state, action) {
            const items = state.cart.find((item)=> item.pizzaId === action.payload);

            items.quantity++;
            items.totalCartPrice = items.unitPrice * items.quantity;
        },

        decreaseQuantity(state, action) {
            const items = state.cart.find((item)=> item.pizzaId === action.payload);

            items.quantity--;
            items.totalCartPrice = items.unitPrice * items.quantity;
            if (items.quantity === 0) cartSlice.caseReducers.deleteItems(state, action);
        },

        clearCart(state) {
            state.cart = [];
        },
    },

    
});


export const {addItems, deleteItems, increaseQuantity, decreaseQuantity , clearCart} = cartSlice.actions;


export  const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, cur)=> sum + cur.quantity, 0 );

export  const getTotalPrice = (state) => state.cart.cart.reduce((sum, cur)=> sum + cur.totalPrice, 0 );

export const getCart = (state)=> state.cart.cart;

export const getCurrentQuantity = id=> state=> state.cart.cart.find(item=> item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;