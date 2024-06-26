"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { ReactNode } from 'react'

const TanstackProvider = ({children} : {children : ReactNode}) => {
    const queryClient = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient} >
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}

export default TanstackProvider
