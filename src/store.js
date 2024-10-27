import { configureStore } from "@reduxjs/toolkit";
import contactReducer from './slice/ContactSlice'

const store = configureStore({
  reducer : {
    contacts : contactReducer
  }
})

// console.log(store.reducer)

export default store;