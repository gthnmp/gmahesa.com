"use client"
import { FcGoogle } from "react-icons/fc"
import { signIn, signOut } from "next-auth/react"
import React from "react"
import { BsGithub, BsDiscord, BsFacebook } from "react-icons/bs"
import {BiLogOut} from 'react-icons/bi'

export function SignOut ({children} : {children : React.ReactNode}){
  return (
    <button onClick={() => signOut()} className="w-full flex items-center justify-center gap-3 bg-[#171515] px-3 py-3 rounded-md border-[1px] border-neutral-700">
      <BiLogOut className="scale-150" /> 
      {children}
    </button>
  )
}

export function GoogleAuthentication ({children} : {children : React.ReactNode}){
  return (
    <button onClick={() => {signIn('google')}} className="w-full flex items-center justify-center gap-3 bg-white text-black px-3 py-3 rounded-md border-[1px] border-neutral-700">
      <FcGoogle className="scale-150" /> 
      {children}
    </button>
  )
}

export function GithubAuthentication ({children} : {children : React.ReactNode}){
  return (
    <button onClick={() => signIn("github")} className="w-full flex items-center justify-center gap-3 bg-[#171515] px-3 py-3 rounded-md border-[1px] border-neutral-700">
      <BsGithub className="scale-150" /> 
      {children}
    </button>
  )
}

export function DiscordAuthentication ({children} : {children : React.ReactNode}){
  return (
    <button onClick={() => signIn("discord")} className="w-full flex items-center justify-center gap-3 bg-[#7289da] px-3 py-3 rounded-md border-[1px] border-neutral-700">
      <BsDiscord className="scale-150" />
      {children}
    </button>
  )
}
