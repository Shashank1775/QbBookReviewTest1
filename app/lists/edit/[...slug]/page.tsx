'use client'

import ChangeListForm from "@/components/nav/changeListForm";
import NavBar from "@/components/nav/navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditForm({ params }: { params: { slug: string[] } }) {
    const listId = params.slug[0];
    const [list, setList] = useState(null);

    useEffect(() => {
        axios.get(`/api/lists?id=${listId}`).then(response => {
            setList(response.data);
        }).catch(error => {
            console.error("Error fetching book data:", error);
        });
    }, [listId]);
    
    if (!list) {
        return (
        <NavBar>
            <div>
                Loading...
            </div>
        </NavBar>);
    }

    return (
        <NavBar>
            <ChangeListForm {...list}/>
        </NavBar>
    );

}