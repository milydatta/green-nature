import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {
          // userName: displayName, email
          isSignedIn: true,
          name: displayName,
          email: email
        }
        setLoggedInUser(signedInUser);
        history.replace(from);
    })
    .catch(err =>{
         console.log(err);
        console.log(err.message);
     })
    }


    return (
        <div>
            <h1  className="mt-5 text-center">Login</h1>
            <div className="w-75 text-center login">
            <button  className="form-control input btn btn-success" onClick={handleGoogleSignIn}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;