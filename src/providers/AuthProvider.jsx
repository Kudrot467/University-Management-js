import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';
 export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
                console.log(currentUser);
                setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        createUser,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

    

};
AuthProvider.propTypes={
    children:PropTypes.node
}


export default AuthProvider;