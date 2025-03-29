"use client"

import { useState } from "react"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const ReactQueryProvider = ({children} : {children : React.ReactNode}) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions : {
            queries : {
                refetchOnWindowFocus : true,
                refetchOnMount : true
            }
        }
    }))

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQueryProvider