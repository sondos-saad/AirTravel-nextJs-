import { NextResponse } from "next/server"

export async function POST(req) {
    const {message} = req.json()
    if(!message){
        return NextResponse.json(
            {message: 'Message is required'},
            {status: 400}
        )
    }
}