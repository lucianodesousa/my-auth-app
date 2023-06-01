'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
const  client = ()=>{
    const {data:session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login?callbackUrl=/client')
        },


    })
    console.log(session)
    if(!session){
        return <div>
            <h1>client</h1>
            <p>pagina com segurança</p>
        </div>
    }

    console.log(session)
    console.log(session.user)
    return  (<div className="flex flex-col items-center justify-center min-h-screen py-2 font-bold-text text-2xl
    ">
        Cliente
    </div>)
  
    
}

export default client