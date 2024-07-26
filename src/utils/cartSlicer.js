import {createSlice} from "@reduxjs/toolkit";

const cartSlicer = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            const deleteIndex = state.items.findIndex((item) => {
              return item.id == action.payload
            });

            state.items.splice(deleteIndex, 1)
        },
        clearCart: (state) => {
            state.items = []
        }
    }
});


export const {addItem, removeItem, clearCart} = cartSlicer.actions
export default cartSlicer.reducer;