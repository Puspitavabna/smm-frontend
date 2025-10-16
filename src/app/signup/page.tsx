"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import Ellipse25 from '../../app/assets/Ellipse25.png';
import Boxes from '../../app/assets/Boxes1.png';
import Link from "next/link";
import Image from "next/image";
import './Signup.css'
export default function SignupPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user"); // default role
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, username, password, role }),
            });


            // Check if response is ok BEFORE parsing JSON
            if (!res.ok) {
                setError("Login failed"); return;
            }

            const data = await res.json(); // safe to parse now
            console.log("Login data:", data);

            // Store token and user info
            localStorage.setItem("token", data?.access_token);
            localStorage.setItem("user", JSON.stringify(data));

            // Redirect based on role
            if (data?.role === "admin") {
                router.push("/admin/dashboard");
            } else if (data?.role === "user") {
                router.push("/user/dashboard");
            } else {
                router.push("/dashboard");
            }

        } catch (err) {
            console.error("Signup error:", err);
            setError("Something went wrong");
        }
    };

    return (
        // <div
        //     className="relative bg-[url('/background.jpg')] bg-cover bg-center text-white min-h-screen overflow-hidden"
        //     style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
        // >
        //     <div className="absolute inset-0 opacity-10">
        //         <div
        //             className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M50 0 L75 25 L75 75 L50 100 L25 75 L25 25 Z\' fill=\'%23a855f7\' fill-opacity=\'0.2\'/%3E%3C/svg%3E')] bg-repeat"
        //         ></div>
        //     </div>

        //     <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen z-10">
        //         <div className="relative w-full max-w-3xl bg-white/10 backdrop-blur-md p-10 shadow-2xl border border-white/20">
        //             <div className="text-center mb-8">
        //                 <h1 className="text-2xl font-bold text-purple-400 tracking-wide mb-2">UH SMM</h1>
        //                 <h2 className="text-3xl sm:text-4xl font-bold text-white">Sign Up</h2>
        //             </div>

        //             <form onSubmit={handleSignup} className="space-y-6">
        //                 <div className="flex flex-col sm:flex-row gap-6">
        //                     <div className="w-full">
        //                         <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
        //                             Full Name
        //                         </label>
        //                         <input
        //                             type="text"
        //                             id="name"
        //                             value={name}
        //                             onChange={(e) => setName(e.target.value)}
        //                             className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        //                             placeholder="Enter your full name"
        //                             required
        //                         />
        //                     </div>

        //                     <div className="w-full">
        //                         <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
        //                             Username
        //                         </label>
        //                         <input
        //                             type="text"
        //                             id="username"
        //                             value={username}
        //                             onChange={(e) => setUsername(e.target.value)}
        //                             className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        //                             placeholder="Enter a username"
        //                             required
        //                         />
        //                     </div>
        //                 </div>

        //                 <div className="flex flex-col sm:flex-row gap-6">
        //                     <div className="w-full">
        //                         <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
        //                             Password
        //                         </label>
        //                         <input
        //                             type="password"
        //                             id="password"
        //                             value={password}
        //                             onChange={(e) => setPassword(e.target.value)}
        //                             className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        //                             placeholder="Enter a password"
        //                             required
        //                         />
        //                     </div>

        //                     <div className="w-full">
        //                         <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
        //                             Role
        //                         </label>
        //                         <select
        //                             id="role"
        //                             value={role}
        //                             onChange={(e) => setRole(e.target.value)}
        //                             className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        //                         >
        //                             <option value="user">User</option>
        //                             <option value="admin">Admin</option>
        //                         </select>
        //                     </div>
        //                 </div>

        //                 {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        //                 {success && <p className="text-green-400 text-sm text-center">{success}</p>}

        //                 <div className="flex justify-center">
        //                     <button
        //                         type="submit"
        //                         className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm"
        //                     >
        //                         Sign Up
        //                     </button>
        //                 </div>
        //             </form>

        //             <p className="mt-6 text-sm text-gray-300 text-center">
        //                 Already have an account?
        //                 <a href="/login" className="text-purple-400 hover:underline ml-1">
        //                     Login
        //                 </a>
        //             </p>
        //         </div>
        //     </div>
        // </div>
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h1>Signup</h1>
                <div className="input-group1">
                    <span className="icon"><FaUser /></span>
                    <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="input-group1">
                    <span className="icon"><FaEnvelope /></span>
                    <input type="email" placeholder="Email" name="email" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="input-group1">
                    <span className="icon"><FaLock /></span>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="input-group1">
                    <span className="icon"><FaLock /></span>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="terms" >
                    <input type="checkbox" required style={{ appearance: "auto" }} />
                    <label>I have read and agreed with <a href="#">Terms of service</a></label>
                </div>
                <button type="submit" className="signup-button">Sign up</button>
                <p className="signin-link">
                    Already have an account? <Link href='/signin' className='signin-anchor'>Sign in</Link>
                </p>
            </form>
            <Image src={Boxes} alt="boxes" className='boxes' style={{ position: 'absolute', top: 0, width: '190px', zIndex: 0 }} />
            <Image src={Ellipse25} alt="ellipse24" className='ellipse24' />
        </div>
    );
}
