import { NextResponse } from 'next/server';
import { auth } from '../../../lib/auth';

export default async function GET(request){
    const session = await auth();
    const userName = session?.user?.name;
    return NextResponse.json(userName)
}