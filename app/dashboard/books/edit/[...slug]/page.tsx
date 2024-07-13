'use client'

import CallNavbar from "@/components/dashboard/callnavbar";
import ChangeBookForm from "@/components/dashboard/changebookform";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditForm({ params }: { params: { slug: string[] } }) {
    const bookid = params.slug[0];
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`/api/newbook?id=${bookid}`).then(response => {
            setBook(response.data);
        }).catch(error => {
            console.error("Error fetching book data:", error);
        });
    }, [bookid]);
    
    if (!book) {
        return (
        <CallNavbar>
            <div>
                Loading...
            </div>
        </CallNavbar>);
    }

    return (
        <CallNavbar>
            <h1>Edit Form</h1>
            <h1>{bookid}</h1>
            <h1>{book.sorting}</h1>
            <div>
                <ChangeBookForm {...book}/>
            </div>
        </CallNavbar>
    );
}
