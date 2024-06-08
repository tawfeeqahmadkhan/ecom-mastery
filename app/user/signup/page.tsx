"use client"
import { useState } from 'react';
import Head from 'next/head';
import Link from "next/link"
import { toast, ToastContainer,Slide } from "react-toastify";

const SignUp = () => {
    const [fullname, setfullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ fullname?:string,username?: string, email?: string, password?: string }>({});

    const validateForm = () => {
        const newErrors: {fullname?:string, username?: string, email?: string, password?: string } = {};

        if (!fullname) {
            newErrors.username = 'Full Name is required';
        }
        if (!username) {
            newErrors.username = 'Username is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        
          const res = await fetch("/api/user/signup", {
            method: "POST",
    
            headers: {
              "Content-Type": "application/json",
            },
    
            body: JSON.stringify({
              fullname,
              username,
              email,
              password,
            }),
          });
    
          const data = await res.json();
    
          if (data.message === "User Created Succesfully") {
            toast.success("User Created Succesfully");
            setfullname("")
            setEmail("")
            setUsername("")
            setPassword("")
            
    
          } else {
            toast.error(data.message);
          }
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <>
                <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Slide}
            />
        
       
        <div className='w-screen'>
           
            <Head>
                <title className=''>Sign Up</title>
            </Head>
            <div className="container min-w-full min-h-screen">
                <h1 className='text-3xl mb-6'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='border-2 border-black  w-6/12 m-auto rounded-xl p-16'>
                    <div>
                        <label htmlFor="fullname">Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            value={fullname}
                            onChange={(e) => setfullname(e.target.value)}
                            className="w-full p-4 mt-2 leading-tight text-gray-700 border border-black rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-4 mt-2 leading-tight text-gray-700 border border-black rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 mt-2 leading-tight text-gray-700 border border-black  rounded-md focus:outline-none focus:border-indigo-500"
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
                            className="w-full p-4  mt-2 leading-tight text-gray-700 border border-black  rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        {errors.password && <p className="error">{errors.password}</p>}

                    </div>
                    <span>Already a user?
                        <Link href="/user/login" className='text-blue-900 ml-1'>
                            Log in
                        </Link></span>
                    <button type="submit">Sign Up</button>
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

        </>
    );
};

export default SignUp;
