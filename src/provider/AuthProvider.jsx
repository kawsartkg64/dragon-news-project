import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createusers = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInuser =(email ,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut= () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscrive = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('observing Current User Inside' , currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscrive
        }
    },[])

    const authInfo = {
        user,
        loading,
        createusers,
        signInuser,
        logOut

    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;