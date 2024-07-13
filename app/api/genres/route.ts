import { NextResponse } from "next/server";
import mongooseConnect from "../../../lib/mongoose";
import  Genre  from "../../../models/newGenre";
import { auth } from "../../../lib/auth"


export async function GET(request) {
    const session = await auth();
    const userId = session.user.id;
    const adminId = ['6681baf3edaf2e8a771432a2'];
    
    if (!adminId.includes(userId)) {
        return NextResponse.json({ message: "You are not authorized to view this page" });
    } 
    await mongooseConnect();
    
    try {
        const genreDocument = await Genre.find();
        return NextResponse.json(genreDocument);
    } catch (error) {
        console.error("GET request error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export async function POST(request) {
    const session = await auth();
    const userId = session.user.id;
    const adminId = ['6681baf3edaf2e8a771432a2'];
    if (!adminId.includes(userId)) {
        return NextResponse.json({ message: "You are not authorized to view this page" });
    } 
    try {
        await mongooseConnect(); // Ensure the database connection is ready

        const { name, parent} = await request.json(); // Parse the request body

        // Create a new book document
        const genreDocument = await Genre.create({
            name,
            parent,
        });
        console.log("Book created successfully:", genreDocument);
        return NextResponse.json({ genreDocument });
    } catch (error) {
        console.error("POST request error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export async function DELETE(request) {
    const session = await auth();
    const userId = session.user.id;
    const adminId = ['6681baf3edaf2e8a771432a2'];
    if (!adminId.includes(userId)) {
        return NextResponse.json({ message: "You are not authorized to view this page" });
    } 
    const { id } = await request.json()
    await Genre.deleteOne({ _id: id })
    return NextResponse.json({ message: "Book deleted successfully" })
}
