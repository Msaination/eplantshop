import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], 
        //numOfItems: 1
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
  
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
            state.numOfItems += 1;
        },
        removeItem: (state, action) => {
            const { name, quantity } = action.payload;
            state.items = state.items.filter(item => item.name !== name);
            state.numOfItems -= quantity;         
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                const adjustQuantity = quantity - existingItem.quantity;
                state.numOfItems += adjustQuantity;
                existingItem.quantity = quantity;
            }
        },
    },
});
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
