import { ADD_PRODUCTS,REMOVE_PRODUCTS} from '../constants/actiontypes'

export function addProducts(data){
    return{
        type:ADD_PRODUCTS,
        payload:data
    }
}
export function removeProducts(pid){
    return{
        type:REMOVE_PRODUCTS,
        payload:pid
    }
}