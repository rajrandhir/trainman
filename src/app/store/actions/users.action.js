import * as actionTypes from './actionTypes';

export const pendingFetch=()=>({
    type:actionTypes.PENDING_USER_DATA
    
});
export const fetchData=(payload)=>({
    type:actionTypes.GET_USERS_DATA,
    payload
});
export const fetchError=(payload)=>({
    type:actionTypes.GET_ERRORS,
    payload
})

export const getAllUsers = ()=>{
    return async (dispatch) =>{
        try {
            dispatch(pendingFetch())
           const res = await fetch("https://jsonplaceholder.typicode.com/users")
           const resResult = await res.json();
        //    console.log(resResult,"mil rha h")
           dispatch(fetchData(resResult))  
        } catch (error) {
            dispatch(fetchError(error))
        }
    }
}