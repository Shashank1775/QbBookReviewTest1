import { NextResponse } from "next/server";
import mongooseConnect from "../../../lib/mongoose";
import NewBook from "../../../models/newbook";
import { auth } from "../../../lib/auth"


export async function GET(request) {
    const session = await auth();
    const userId = session.user.id;
    const adminId = ['6681baf3edaf2e8a771432a2'];
    if (!adminId.includes(userId)) {
        return NextResponse.json({ message: "You are not authorized to view this page" });
    } 
    await mongooseConnect();

    // Parse URL to get query parameters
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    try {
        if (id) {
            const bookDocument = await NewBook.findById(id);
            if (!bookDocument) {
                return NextResponse.json({ message: "Book not found" }, { status: 404 });
            }
            return NextResponse.json(bookDocument);
        }

        const bookDocuments = await NewBook.find();
        return NextResponse.json(bookDocuments);
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

        const { title, author, year, description, link, images, sorting, properties, cGenre} = await request.json(); // Parse the request body

        // Create a new book document
        const bookDocument = await NewBook.create({
            title,
            author,
            year,
            description,
            link,
            images,
            sorting,
            properties,
            genre: cGenre,
        });

        console.log("Book created successfully:", bookDocument);
        return NextResponse.json({ bookDocument });
    } catch (error) {
        console.error("POST request error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export async function PUT(request) {
    const session = await auth();
    const userId = session.user.id;
    const adminId = ['6681baf3edaf2e8a771432a2'];
    if (!adminId.includes(userId)) {
        return NextResponse.json({ message: "You are not authorized to view this page" });
    } 
    const { title, author, year, description, link, _id, images, sorting, properties, cGenre } = await request.json()
    await NewBook.updateOne({ _id }, { title, author, year, description, link, images, sorting, properties, genre: cGenre })
    return NextResponse.json({ message: "Book updated successfully" })
}

export async function DELETE(request) {
    const session = await auth();
    const userId = session.user.id;
    const adminId = ['6681baf3edaf2e8a771432a2'];
    if (!adminId.includes(userId)) {
        return NextResponse.json({ message: "You are not authorized to view this page" });
    } 
    const { id } = await request.json()
    await NewBook.deleteOne({ _id: id })
    return NextResponse.json({ message: "Book deleted successfully" })
}
