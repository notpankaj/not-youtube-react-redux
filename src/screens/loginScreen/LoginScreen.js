import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { login } from "../../redux/actions/auth.action";
import "./_loginScreen.scss"

const LoginScreen = () => {

    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);
  
    const history = useHistory();

    useEffect(() => {
        if(accessToken){
            history.push('/');
        }      
    }, [accessToken,history])

    const handleLogin = () => {
        dispatch(login())
    }



    return (
     <div className="login">
         <div className="login__container">
             <img 
                src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' 
                alt="" 
            />
             <button onClick={handleLogin}>Login with GOOGLE</button>
             <p>This project is made with yt data api</p>
         </div>
     </div>
    )
}

export default LoginScreen
