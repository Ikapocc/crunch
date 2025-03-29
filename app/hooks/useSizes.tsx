import { useEffect, useState } from "react"

export default function useChangeSizeHook() {
    const [height, setHeight] = useState<number | null>(null)
    const [width, setWidth] = useState<number | null>(null)

    useEffect(() => {

        function handleResize() {
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
        
    }, [])

    return {height, width}
}