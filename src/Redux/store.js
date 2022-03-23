import { applyMiddleware, createStore } from "redux";
import { Reducer } from "./reducer";

import thunk from 'redux-thunk'
export const store = createStore(Reducer,applyMiddleware(thunk))

store.subscribe(()=>{
  console.log(store.getState())
})

if (window.Cypress) {
    window.store = store
  }
