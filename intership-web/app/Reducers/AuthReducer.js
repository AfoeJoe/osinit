import {ActionTypes,AsyncActionTypes} from '../Actions/Consts'

const initialState = {
    get state(){
        return {
            loginStatus:false,
            loading:false,
            error:''
        }
    }
}
export default function reducer(state = initialState.state,action){
    switch (action.type) {
        case `${ActionTypes.LOGIN}${AsyncActionTypes.BEGIN}`:
            return {
                ...state,
                loading:true
            }
        case `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`:
            return {
                loginStatus: true,
                loading: false,
            };
        case `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}`:
            return {
                loading: false,
                loginStatus: false,
                error:action.payload
            };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                loginStatus: false,
            };
    
        default:
            return state;
    }
}