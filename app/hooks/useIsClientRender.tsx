import { useEffect, useState } from "react"

export default function UseClientRender() {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])

    return {isClient}
}