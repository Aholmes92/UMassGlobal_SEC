"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function ProfilePage() { 
    
    const router = useRouter()
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
        }
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
        <hr /> 
        <button
        onClick= {logout}
        className="m-2 px-4 py-2 rounded bg-white-500 hover:bg-red-700 hover:text-white font-bold">Logout</button>
        </div>
    )
}