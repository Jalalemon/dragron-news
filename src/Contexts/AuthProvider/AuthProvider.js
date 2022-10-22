import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.init';
import{getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('user state on the change', currentUser);
            
        })
        return () => unsubscribe();
    }, [])
    const authInfo = {user, logOut, signIn, providerLogin}
    return (
        <div>
          <AuthContext.Provider value={authInfo}>
        {
            children
        }
          </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;