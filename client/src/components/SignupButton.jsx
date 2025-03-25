const SignOutButton = ({signOutHandler})=>{
    return(
        <>
            <h2 className="text-2xl font-semibold mb-8">Login with Google</h2>
        <button className="flex items-center justify-center bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={signOutHandler}>
       
          SignOut
        </button>
        </>
    
    )
   

}

export default SignOutButton


