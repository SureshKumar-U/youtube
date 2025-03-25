"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignupButton'

const AuthPage = () => {
   const { data: session} = useSession()
   console.log('session data : ', session);

   const signin = () => {
       signIn("google");
   }

   const signout = () => {
       console.log("Signing out of Google");
       signOut();
   }

   return (



    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     {!session ?  <SignInButton  signInHandler= {signin} /> : <SignOutButton signOutHandler={signout}/> }
  </div>
);
}
export default AuthPage