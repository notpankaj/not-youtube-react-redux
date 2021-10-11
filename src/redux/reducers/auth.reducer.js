import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

const initialState = {
    accessToken: sessionStorage.getItem('ytc-access-token') || null ,
    user :  JSON.parse(sessionStorage.getItem('ytc-user-profile')) || null,
    loading: false
}

export const authReducer = (prevState = initialState,action) => {

    const {type,payload} = action;

    switch(type){
        case LOGIN_REQUEST :{
            return {
                ...prevState,
                user: null,
                loading: true
            } 
        }
        case LOGIN_SUCCESS :{
            return {...prevState, 
                accessToken : payload,
                loading :false
            }
        }
        case LOGIN_FAIL :{
            return {...prevState, 
                accessToken : null,
                loading :false,
                error: payload,
            }
        }
        case LOAD_PROFILE : {
            return {
                ...prevState,
                user: payload,
            }
        }
        case LOGOUT : {

            return {
                ...prevState,
                user: null,
                accessToken: null,
                loading: false,
            }
        }
        default : {
            return prevState;
        }
    }

}