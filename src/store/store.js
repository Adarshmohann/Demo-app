import { createStore } from "redux";
import { Reducers } from '../reducers/productReducer'

export const mystore = createStore(Reducers);