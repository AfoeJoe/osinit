import {ActionTypes,AsyncActionTypes} from '../Actions/Consts'

const initialState = {
    get state(){
        return {
            loading:false,
            organizations:null,
            errors:''
        }
    }
}


export default function reducer(state=initialState.state,action) {
    switch (action.type) {
        case `${ActionTypes.FETCH}${AsyncActionTypes.BEGIN}`:
            return {
                ...state,
                loading:true
            }
        case `${ActionTypes.FETCH}${AsyncActionTypes.SUCCESS}`:
            return {
                organizations: action.payload,
                loading: false,
            };

        case `${ActionTypes.FETCH}${AsyncActionTypes.FAILURE}`:
            return {
                ...state,
                loading: false,
                errors:action.payload
            };
    }
    return state;
}
