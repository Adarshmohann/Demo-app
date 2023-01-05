import { ADD_PRODUCTS, REMOVE_PRODUCTS } from '../constants/actiontypes';

export const Reducers = (state = [], action) =>{
	switch(action.type){
		case ADD_PRODUCTS:
			return[...state,action.payload];
		case REMOVE_PRODUCTS:
			state = state.filter(i => i.pid !== action.payload)
			return state;
		default:
			return state;       
	}
}