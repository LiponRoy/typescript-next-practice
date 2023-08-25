"use client"
import React, { useState } from 'react';

interface IUser {
    username: string;
    password: string;
}

const Login = () => {

    const [user, setUser] = useState<IUser>({ username: '', password: '' });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleLogin = () => {
        alert(JSON.stringify(user));
    };


    return (
        <div className=" h-screen w-full flex justify-center justify-items-center">
            <h1 className=' mr-2'>Login</h1>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                />

                <button onClick={handleLogin}>Submit</button>
            </div>

        </div>
    );
}

export default Login;
