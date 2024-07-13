'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBook from '@/components/nav/search';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function searchAndDisplay(){
    const [, setBooks] = useState<any[]>([]);
    const [, setSearch] = useState('');
    const [filteredBooks, setFilteredBooks] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/books').then(response => {
            setBooks(response.data);
        });
    }, []);

    function truncateText(text: string, wordLimit: number) {
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return (
        <div className="mt-4 w-full flex flex-col items-start">
            <div className="w-full flex flex-wrap gap-4">
                <div className="w-1/2 p-4 bg-white rounded shadow-lg">
                    <SearchBook setResults={setFilteredBooks} />
                </div>
            </div>
            <div className="mt-4 w-full p-4 bg-white rounded shadow-lg w-1/2">
                <Table className='overflow-y-auto'>
                    <TableCaption>Your search results.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Year</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredBooks.map(book => (
                            <TableRow key={book.id}>
                                <TableCell className="font-medium">{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.year}</TableCell>
                                <TableCell>{truncateText(book.description, 20)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}