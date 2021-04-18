import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "../constants/auth";

const useInfo = localStorage.getItem("useInfo") ? JSON.parse(localStorage.getItem("useInfo")):null;

const initialState = {
    useInfo,
    isLoading: false,
    error: null,
}

function authReducer(state = initialState, action){
    switch (action.type) {
        case LOGIN_REQUEST:{
            return{...state,isLoading:true, error:null}
        }
        case LOGIN_SUCCESS:{
            return {...state,isLoading:false,useInfo:action.payload.data};
        }
        case LOGIN_FAILURE:{
            return {...state,isLoading:false,error:action.payload.error}
        }
        default:
            return state;
    }
}

export default authReducer