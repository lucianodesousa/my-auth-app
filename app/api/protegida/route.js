import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";



export async function GET() {
const session = await getServerSession(authOptions)
if(!session) return NextResponse.json({message: "Você não está logado",  session: {...session}})

return  NextResponse.json({message: "Você está logado",  session: {...session}})

}