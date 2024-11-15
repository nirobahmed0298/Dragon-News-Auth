import React, { createContext, useEffect, useState } from 'react';
import { auth } from './../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export let AuthContext = createContext();
const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading, setloading] = useState(true);
    let createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    let LogIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    let updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser,updateData);
    }

    let LogOut = () => {
        setloading(true)
        return signOut(auth);
    }

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser)
            setloading(false)
            return () => {
                unsubscribe();
            }
        })
    }, [])

    let authInfo = {
        user,
        setUser,
        createUser,
        LogIn,
        updateUserProfile,
        LogOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;