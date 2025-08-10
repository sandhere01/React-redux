import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../reducer/counter'

const configStore = configureStore({
    reducer: {
        newCounter: counterSlice
    }
})
export default configStore