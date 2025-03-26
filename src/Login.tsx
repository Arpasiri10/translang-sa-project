import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // Initialize Firebase authentication and navigation
    const auth = getAuth();
    const navigate = useNavigate();

    // State variables for managing authentication state, email, password, and error messages
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle sign-in with Google
    const signInWithGoogle = async () => {
        setAuthing(true);

        // Use Firebase to sign in with Google
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setAuthing(false);
            });
    }

    // Function to handle sign-in with email and password
    const signInWithEmail = async () => {
        setAuthing(true);
        setError('');

        // Use Firebase to sign in with email and password
        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                // console.log(response.user.uid);
                console.log(response)
                navigate('/Form');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setAuthing(false);
            });
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl'>
                {/* Left half of the screen - background styling */}
                <div className='md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-10'>
                    <div className='text-center'>
                        <h1 className='text-6xl font-extrabold text-white'>Langsync</h1>
                        <p className='text-2xl text-white mt-4'>Connect and Learn</p>
                    </div>
                </div>

                {/* Right half of the screen - login form */}
                <div className='md:w-1/2 p-10'>
                    <div className='max-w-md mx-auto'>
                        {/* Header section with title and welcome message */}
                        <div className='mb-8'>
                            <h3 className='text-4xl font-bold mb-2'>Login</h3>
                            <p className='text-gray-600'>Welcome Back! Please enter your details.</p>
                        </div>

                        {/* Input fields for email and password */}
                        <div className='mb-6'>
                            <input
                                type='email'
                                placeholder='Email'
                                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input
                                type='password'
                                placeholder='Password'
                                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        {/* Button to log in with email and password */}
                        <div className='mb-4'>
                            <button
                                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2 transition duration-300 ease-in-out transform hover:scale-105'
                                onClick={signInWithEmail}
                                disabled={authing}>
                                Log In With Email and Password
                            </button>
                        </div>

                        {/* Display error message if there is one */}
                        {error && <div className='text-red-500 mb-4'>{error}</div>}

                        {/* Divider with 'OR' text */}
                        <div className='flex items-center justify-center relative py-4'>
                            <div className='w-full h-[1px] bg-gray-300'></div>
                            <p className='text-gray-500 bg-white px-2 absolute'>OR</p>
                        </div>

                        {/* Button to log in with Google */}
                        <button
                            className='w-full bg-white border border-gray-300 text-gray-700 font-semibold rounded-md py-2 flex items-center justify-center mt-4 transition duration-300 ease-in-out transform hover:scale-105'
                            onClick={signInWithGoogle}
                            disabled={authing}>
                            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
                            Log In With Google
                        </button>

                        {/* Link to sign up page */}
                        <div className='text-center mt-8'>
                            <p className='text-gray-600'>Don't have an account? <a href='/register' className='text-blue-600 hover:underline'>Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;