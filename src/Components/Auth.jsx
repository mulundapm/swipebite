import React, { useState } from 'react'
import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
// import { useAuth } from '../Contexts/Auth'
import { Link } from 'react-router-dom';

function Auth() {
    // const { currentUser, userLoggedIn } = useAuth()
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false)

    const signInWithGoogle = async () =>{
        if (!isSigningIn)
        try{
            setIsSigningIn(true)
        await signInWithPopup(auth, googleProvider)} catch(err){
            console.error(err)
        }
    }

    const logout = async () =>{
        try{
        await signOut(auth)
        setIsSigningIn(false)}
         catch(err){
            console.error(err)
        }
    } 

return (
    <div>
        {/* <input type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" placeholder='Password'onChange={(e)=> setPassword(e.target.value)} type="password"/>
        <button onClick={signUp}>Sign up</button>
        <input type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" placeholder='Password'onChange={(e)=> setPassword(e.target.value)} type="password"/>
        <button onClick={signIn}>Sign in</button> */}
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <button onClick={()=>{logout().then(()=> <Link to="/"/>)}}>Log out</button>
        <h4>Logged in as: {auth?.currentUser?.displayName}</h4>
    </div>
)
}

export default Auth