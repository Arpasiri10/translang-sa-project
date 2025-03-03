import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const [authing, setAuthing] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [error, setError] = useState('');

    const signUpWithGoogle = async () => {
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setAuthing(false);
            });
    };

    const signUpWithEmail = async () => {
        if (!acceptTerms) {
            setError('You must accept the terms and conditions.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setAuthing(true);
        setError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setAuthing(false);
            });
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl'>
                <div className='md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-10'>
                    <div className='text-center'>
                        <h1 className='text-6xl font-extrabold text-white'>Langsync</h1>
                        <p className='text-2xl text-white mt-4'>Join and Learn</p>
                    </div>
                </div>

                <div className='md:w-1/2 p-10'>
                    <div className='max-w-lg mx-auto'>
                        <h3 className='text-4xl font-bold mb-4 text-center'>Register</h3>
                        <p className='text-gray-600 text-center mb-6'>Create an account to get started.</p>

                        {/* Two-column layout for input fields */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                            <input
                                type='text'
                                placeholder='Full Name'
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type='tel'
                                placeholder='Phone Number'
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 col-span-2'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <div className='flex items-center mb-4'>
                            <input
                                type='checkbox'
                                checked={acceptTerms}
                                onChange={(e) => setAcceptTerms(e.target.checked)}
                                className='mr-2'
                            />
                            <label className='text-gray-600'>
                                I accept the <a href='/terms' className='text-blue-600 hover:underline'>Terms and Conditions</a>
                            </label>
                        </div>

                        {error && <div className='text-red-500 mb-4 text-center'>{error}</div>}

                        <button
                            onClick={signUpWithEmail}
                            disabled={authing}
                            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2 transition duration-300 ease-in-out transform hover:scale-105'>
                            Register With Email
                        </button>

                        <div className='flex items-center justify-center relative py-4'>
                            <div className='w-full h-[1px] bg-gray-300'></div>
                            <p className='text-gray-500 bg-white px-2 absolute'>OR</p>
                        </div>

                        <button
                            onClick={signUpWithGoogle}
                            disabled={authing}
                            className='w-full bg-white border border-gray-300 text-gray-700 font-semibold rounded-md py-2 flex items-center justify-center mt-4 transition duration-300 ease-in-out transform hover:scale-105'>
                            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
                            Register With Google
                        </button>

                        <div className='text-center mt-8'>
                            <p className='text-gray-600'>Already have an account? <Link to='/login' className='text-blue-600 hover:underline'>Log In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;