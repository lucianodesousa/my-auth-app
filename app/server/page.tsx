import {redirect} from "next/navigation";

import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";



export default async function ServerPage() {
const session = await getServerSession(authOptions)

console.log(session)
//precisa de banco de dados para definir o role, e me parece que não funcionou muito bem o authOptions
if(!session)redirect("/login?callbackUrl=/server")
// if(session.user.role!=="admin")redirect("/login?callbackUrl=/server")
// if(session?.user?.role==="admin")
    return (
        <div>
           <p> Adminpage</p>
          <p>{session?.user?.email}</p>  
          <p>{session?.user?.name}</p>  
           <p>{session?.user?.image}</p> 
         </div>
        )
    }