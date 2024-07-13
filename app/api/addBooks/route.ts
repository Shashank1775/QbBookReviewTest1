import { NextResponse } from "next/server";
import mongooseConnect from "../../../lib/mongoose";
import NewList from "../../../models/newlist";
import { auth } from "../../../lib/auth";

export async function PUT(request) {
    const session = await auth();
    const userId = session.user.id;
    const { selectedBook, selectedList } = await request.json();
    
    try {
        await mongooseConnect(); // Ensure the database connection is ready

        // Check if the book already exists in the list
        const list = await NewList.findOne({ _id: selectedList, creatorId: userId });

        if (list.books.includes(selectedBook._id)) {
            return NextResponse.json({ message: "Book already exists in the list" });
        }

        // Add the book to the list if it's not a duplicate
        const updatedList = await NewList.updateOne(
            { _id: selectedList, creatorId: userId },
            { $push: { books: selectedBook } }
        );
        console.log("List updated successfully:", updatedList);
        return NextResponse.json({ updatedList });

    } catch (error) {
        console.error("PUT request error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export async function DELETE(request) {
    const session = await auth();
    const userId = session.user.id;
    const { selectedBook, selectedList } = await request.json();
    const bookId = selectedBook._id;
    const selectedListId = selectedList._id

    try {
        await mongooseConnect(); // Ensure the database connection is ready

        // Check if the list exists and belongs to the user
        const list = await NewList.findOne({ _id: selectedListId, creatorId: userId });

        if (!list) {
            return NextResponse.json({ message: "List not found or you don't have permission to modify this list" });
        }
        
        // Remove the book from the list
        const updatedList = await NewList.updateOne(
            { _id: selectedList, creatorId: userId },
            { $pull: { books: { _id: selectedBook._id } } }
        );

        if (updatedList.modifiedCount === 0) {
            return NextResponse.json({ message: "Book not found in the list" });
        }

        console.log("Book removed successfully from the list:", updatedList);
        return NextResponse.json({ message: "Book removed successfully" });

    } catch (error) {
        console.error("DELETE request error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}