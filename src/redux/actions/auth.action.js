import firebase from 'firebase/app'
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../reducers/actionTypes';

export const login = () => async dispatch => {

    dispatch({
        type: LOGIN_REQUEST,
    })

    try {

        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider);
  
        const accessToken = res.credential.accessToken;
        const profile = {
            name : res.additionalUserInfo.profile.name,
            photoUrl : res.additionalUserInfo.profile.picture,
        };
        
        sessionStorage.setItem("ytc-access-token",accessToken);
        sessionStorage.setItem("ytc-user-profile",JSON.stringify(profile));


        dispatch({
            type:LOGIN_SUCCESS,
            payload : accessToken
        })
        dispatch({
            type:LOAD_PROFILE,
            payload : profile
        })
        
    }catch(error){
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
        })

    }
}  



export const logout = () => async dispatch => {

    await auth.signOut();
    dispatch({ type: LOGOUT })

    sessionStorage.removeItem("ytc-access-token");
    sessionStorage.removeItem("ytc-user-profile");

}