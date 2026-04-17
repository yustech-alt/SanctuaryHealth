import { Alert, Button } from "@heroui/react"
import { Input, Checkbox } from "@heroui/react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e) {
    return
  }

  return (
    <div className="bg-[#FAFAFA] pb-[80px] p-[64px] w-full md:w-[70%] lg:w-[65%] rounded-[20px] flex flex-col gap-[16px]">
      <div className="mb-[40px]">
        <h1 className="text-zinc-900 text-3xl font-bold">Welcome Back</h1>
        <div className="text-[#3D4A41] text-neutral-700 text-sm font-normal font-['Manrope'] leading-5">Enter your credentials to access your vitality dashboard</div>
      </div>
      <form onSubmit={handleLogin} className="flex flex-col gap-[24px] bg-white/0 rounded-[20px] shadow-[0px_32px_64px_-12px_rgba(0,108,70,0.08)] p-[32px]">
        <Input 
          label="Email" 
          labelPlacement="outside"
          placeholder="Enter your email" 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          isRequired
        />
        <Input 
          label="Password" 
          labelPlacement="outside"
          placeholder="Enter your password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          type="password" 
          isRequired
        />
        <a className="text-emerald-800 text-xs font-semibold text-right">Forgot Password?</a>
        <Button 
          color="success"
          type="submit"
          isLoading={isLoading}
          className="text-white font-bold bg-[#5C97F8]"
        >
          Login
        </Button>
        <div className="border-t border-gray-300 my-2"></div>
        <Button 
          className="rounded-[16px] bg-initial border border-gray-300" 
          color="default" 
          variant="flat"
          startContent={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path></svg>}
        >
          Sign in with Google
        </Button>
      </form>
      <p className="text-center mt-4">
        Don't have an account? <Link className="text-green-500 font-bold" to="/auth/signup">Sign up</Link>
      </p>
    </div>
  )
}
