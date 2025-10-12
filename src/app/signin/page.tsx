"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  // Check if response is ok BEFORE parsing JSON
  if (!res.ok) {
   setError( "Login failed"); return;
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
  console.error("Login error:", err);
  setError("Something went wrong");
}
  };

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    //   <form
    //     onSubmit={handleSignin}
    //     className="bg-gray-800 p-6 rounded-xl shadow-md space-y-4 w-80"
    //   >
    //     <h2 className="text-xl font-bold text-center">Sign In</h2>

    //     <input
    //       type="text"
    //       placeholder="Username"
    //       name="username"
    //       className="w-full p-2 rounded bg-gray-700"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       required
    //     />

    //     <input
    //       type="password"
    //       placeholder="Password"
    //       className="w-full p-2 rounded bg-gray-700"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />

    //     {error && <p className="text-red-400 text-sm">{error}</p>}

    //     <button
    //       type="submit"
    //       className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded"
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>
    <div
      className="relative bg-[url('/background.jpg')] bg-cover bg-center text-white min-h-screen overflow-hidden"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M50 0 L75 25 L75 75 L50 100 L25 75 L25 25 Z\' fill=\'%23a855f7\' fill-opacity=\'0.2\'/%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen z-10">
        <div className="relative w-full max-w-3xl bg-white/10 backdrop-blur-md p-10  shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-purple-400 tracking-wide mb-2">UH SMM</h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Login</h2>
          </div>

          <form onSubmit={handleSignin} className="space-y-6">
            {/* Row for email & password */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full">
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-gray-300 text-center">
            Donot have an account?
            <a href="/signup" className="text-purple-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>


    </div>
  );
}
