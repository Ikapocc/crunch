"use client"

import { Filters } from "@/app/components/icons"
import UseReferences from "../hooks/useReference"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation";

interface FiltersCompProps {
    tag : string, 
    dataSelects : string[],
    sendFilters : (filters : Record<number, string>) => void
}
 
export const FiltersComp : React.FC<FiltersCompProps> = ({dataSelects, sendFilters, tag}) => {
    const {inputRef, isActive, setActive} = UseReferences()
    const [selectedGenres, setSelectedGenres] = useState<Record<number, string>>({})
    const path = usePathname()
    const route = useRouter()

    useEffect(() => {
        const interval = setTimeout(() => {
            UpdateBar(selectedGenres)
            sendFilters(selectedGenres)
        }, 500)

        return () => clearTimeout(interval)
    }, [selectedGenres])

    //In-Place update
    function UpdateGenres(key : number, value : string) {
        setSelectedGenres(prev => {
            if (!prev[key]) {
                return {
                    ...prev,
                    [key] : value
                }
            }else{
                return {
                    ...prev,
                    [key] : ""
                }
            }
        })
    }

    function UpdateBar(filters : typeof selectedGenres) {
        const params = new URLSearchParams(window.location.search)

        if (Object.keys(filters).length > 0) {
            Object.entries(filters).map(([key, value]) => {
                if (value) {
                    params.set(key, value)
                }else{
                    params.delete(key)
                }
            })
        }

        const routeParams = Array.from(
            params.entries()
            .map(([key, value]) =>{
                //refresh update
                setSelectedGenres(prev => {
                    return {
                        ...prev,
                        [key] : value
                    }
                })
                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                
            })).join("&").trim()

        route.replace(path + `?${routeParams}`, {scroll : false})
    }
       
    return(
        <div className="mx-3 flex justify-between">
            <h2 className="text-3xl">{tag.toUpperCase().slice(0, 1) + tag.slice(1)}</h2>
            <section className="relative">
                <button onClick={() => setActive(!isActive)} 
                className={`flex flex-col items-center gap-3 text-lg text-gray-400 hover:opacity-95 px-2 ${isActive ? "bg-[#23252b]" : ""}`}>
                    <div className="flex gap-2 p-2">
                        <Filters />
                        Filters
                    </div>
                </button>
                <div 
                    ref={inputRef}
                    className={`text-white h-auto min-w-[300px] ${isActive ? "block" : "hidden"}
                    absolute items-start gap-4 px-2 pt-2 pb-4 right-0 bg-[#23252b] z-50`
                    }>
                    <h3 className="font-bold text-lg mb-3">Genres</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {dataSelects.map((items, idx) => (
                            <div key={idx}>
                                <label className="flex gap-3 items-center w-full text-sm">
                                    <input onChange={() => UpdateGenres(idx, items)} checked={selectedGenres[idx] ? true : false} type="checkbox" name={items} value={items}></input>
                                    {items}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
