const SignInButton = ({signInHandler})=>{
    return(
        <>
            <h2 className="text-2xl font-semibold mb-8">Login with Google</h2>
        <button className="flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={signInHandler}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
            alt="Google logo"
            className="w-6 h-6 mr-3"
          />
          Sign in with Google
        </button>
        </>
    
    )
   

}

export default SignInButton


