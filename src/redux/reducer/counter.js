import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice ({
    name: 'newCounter',
    
    initialState: {
        item: 0
    },

    reducers: {
        increment: (state) => {
            state.item  +=1
        },
        decrement: (d) => {
            d.item -=1
        },
        reset: (res) => {
            res.item = 0
        }
    }

})

export const {increment,decrement, reset} = counterSlice.actions

export default counterSlice.reducer