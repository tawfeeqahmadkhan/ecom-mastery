"use client"
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string, password?: string }>({});

    const validateForm = () => {
        const newErrors: { email?: string, password?: string } = {};

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', { email, password });
            // Handle form submission, e.g., send data to API
        }
    };

    return (
        <div className='w-screen'>
            <Head>
                <title>Login</title>
            </Head>
            <div className="container min-w-full min-h-screen">
                <h1 className='text-3xl mb-6'>Login</h1>
                <form onSubmit={handleSubmit} className='border-2 border-black w-6/12 m-auto rounded-xl p-16'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 mt-2 leading-tight text-gray-700 border border-black rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 mt-2 leading-tight text-gray-700 border border-black rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <span>Not a user?
                        <Link href="/user/signup" className='text-blue-900 ml-1'>
                            Sign Up
                        </Link>
                    </span>
                    <button type="submit">Login</button>
                </form>
            </div>
            <style jsx>{`
                .container {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 1em;
                    text-align: center;
                }
                form {
                    display: flex;
                    flex-direction: column;
                }
                div {
                    margin-bottom: 1em;
                }
                label {
                    margin-bottom: 0.5em;
                    color: #333333;
                    display: block;
                }
                input {
                    font-size: 1em;
                    width: 90%;
                    box-sizing: border-box;
                }
                .error {
                    color: red;
                    font-size: 0.8em;
                    margin-top: 0.5em;
                }
                button {
                    width: 40%;
                    margin: 10px auto;
                    padding: 0.7em;
                    color: #fff;
                    background-color: #000; 
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                }
                button:hover {
                    background-color: #333; 
                }
            `}</style>
        </div>
    );
};

export default Login;
