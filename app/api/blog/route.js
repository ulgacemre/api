import {NextResponse} from 'next/server'


// GET, POST, PUT, DELETE, PATCH
// API ROUTES NEXT JS
export async function GET(request) {
    // https://api.publicapis.org/entries

    return NextResponse.json({message: "Hello from GET API - blog"});
}