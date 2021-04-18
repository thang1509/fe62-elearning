import {LOGIN_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS} from '../constants/auth'

import authAPI from '../services/authAPI'

export function login(values){
    return async (dispatch)=>{
        dispatch({type:LOGIN_REQUEST});
        try{
            const {data} = await authAPI.login(values);

            // Luu thong tin user xuong localStorage de giu trang thai dang nhap khi user tat trang web
            localStorage.setItem("useInfo",JSON.stringify(data));


            dispatch({
                type:LOGIN_SUCCESS,
                payload:{data}});
        }catch(error){
            dispatch({
                type:LOGIN_FAILURE,
                payload:{error:error.reponse.data},
            })
        }
    }
}