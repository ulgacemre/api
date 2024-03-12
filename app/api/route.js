import {NextResponse} from 'next/server'


// GET, POST, PUT, DELETE, PATCH
export async function GET(request) {
    return NextResponse.json({message: "Hello from GET API"});
}

export async function POST(request){
    console.log("request", request);
    return NextResponse.json({message: "Hello from POST API"});
}

export async function PUT(request){
    return NextResponse.json({message: "Hello from PUT API"})
}

export async function DELETE(request){
    return NextResponse.json({message: "Hello from DELETE API"})
}