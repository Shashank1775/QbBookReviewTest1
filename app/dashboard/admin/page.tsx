"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import CallNavbar from '@/components/dashboard/callnavbar';
import React from 'react';

const ClientComponent = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return router.push('/auth/login')
  }

  // Access the client's name
  const clientName = session?.user?.name || 'Guest';

  return (
    <CallNavbar>
      <div>
        <h1>Welcome, {clientName}</h1>
      </div>
      <div>
      </div>
    </CallNavbar>
    
  )
}

export default ClientComponent;