"use client";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function PlayerProfile({params}: any) { 
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
            <p className="text-4xl">Roller:  
            <span className="p-2 ml-2 rounded">{params.id}</span></p>
            <hr />
            <h2 className="text-xl font-bold mb-2">Game Stats</h2>
            <p><strong>Win %:</strong> {params.gamesPlayed ? ((params.gamesWon / params.gamesPlayed) * 100).toFixed(1) + '%' : '0%'}</p>
            <p><strong>Games Won:</strong> {params.gamesWon || 0}</p>
            <p><strong>Games Played:</strong> {params.gamesPlayed || 0}</p>
            <a href="/play">
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:font-bold">
                Play Cee-Lo
                </button>
            </a>
            <hr />
            <button
            onClick= {logout}
            className="m-2 px-4 py-2 rounded bg-white-500 hover:bg-red-700 hover:text-white font-bold">Logout</button>
        </div> 
    )
}

