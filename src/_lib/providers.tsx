'use client'
import React from 'react'
import { Hydrate, MutationCache, QueryCache, QueryClient, QueryClientProvider, dehydrate } from 'react-query'

const Providers = ({ children }: {children: React.ReactNode }) => {
 

    const mutationCache = new MutationCache({
        onError: (error, _variables, _context, mutation) => {
        // If this mutation has an onError defined, skip this
        if (mutation.options.onError) return;
        // any error handling code...
        //   toast.error(`Something went wrong: ${error.message}`);

        }
    });
  
    const queryCache = new QueryCache ({
        onError: (error: any, _variables: any, _context: any, query: any) => {
        // If this query has an onError defined, skip this
        if (query.options.onError) return;
        // any error handling code...
        //   toast.error(`Something went wrong: ${error.message}`);

        }
    });

    const queryClient = new QueryClient({ mutationCache, queryCache });
    const dehydratedState = dehydrate(queryClient)
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        {children}
      </Hydrate>
    </QueryClientProvider>
  )
}

export default Providers;