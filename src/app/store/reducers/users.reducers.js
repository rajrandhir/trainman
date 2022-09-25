import * as actionTypes from "../actions/actionTypes";
 
const initialState = {
    userData:[],
    loading: false,
    error: null
};
const userReducer = (state = initialState, action) =>{
    switch(action.type) {
        case actionTypes.PENDING_USER_DATA:
            {
                return {
                    ...state,
                     loading:'true'
                }
            }
        case actionTypes.GET_USERS_DATA:
        {
            return{
                ...state,
                userData: action.payload,
                loading:"false"
            }
        }
        case actionTypes.GET_ERRORS:
            {
                return{
                    ...state,
                    loading:'false',
                    error:action.payload
                }
            }
            default :
            return state
    }
}
export default userReducer;