"use client"

import { useEffect, useRef, useState } from "react"

export default function UseReferences() {
    const inputRef = useRef<HTMLElement | null>(null)
    const [isActive, setActive] = useState<boolean>(false)

    function handleOutsideClick(e : MouseEvent) {
        if (inputRef.current && !inputRef.current.contains(e.target as Element)) {
            setActive(false)
        }
    }
    
    useEffect(() => {
        
        if (!isActive) return;

        document.addEventListener("click", handleOutsideClick)

        return () => document.removeEventListener("click", handleOutsideClick)
    }, [isActive])

    return {inputRef, isActive, setActive}
}