"use client"

import SearchCard from "@/app/components/searchCard";
import SearchFullCard from "@/app/components/searchFullCards";
import SearchMiniCard from "@/app/components/searchMiniCard";
import UseReferences from "@/app/hooks/useReference";
import { FetchingByInput } from "@/app/services/anilistFetching";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

function DebounceQuery(query : string) {
    
    const [newQuery, setNewQuery] = useState<string>("")
    
    useEffect(() => {
        const interval = setTimeout(() => {
            setNewQuery(query)
        }, 500)

        return () => clearTimeout(interval)
    }, [query])

    return useQuery({
        queryKey : ["bebounce_query", query],
        queryFn : () => FetchingByInput({input : query}),
        refetchOnMount : false,
        refetchOnWindowFocus : false,
        enabled : !!newQuery.trim()
    })
}

export default function SearchPage() {

    const pathname = usePathname()
    const router = useRouter()
    const routerParams = useSearchParams()
    
    const [query, setQ] = useState<string>(routerParams.get("q") || "")
    const [records, setRecords] = useState<Record<string, string>>({});
    const [isFunctionActive, setIsFunctionActive] = useState<boolean>(false)
    const {data : queryData, isLoading, isFetching} = DebounceQuery(query)
    const {inputRef, isActive, setActive} = UseReferences()
    
    useEffect(() => {
        const interval = setTimeout(() => {
            if (query.length === 0) {
                setIsFunctionActive(false)
                setRecords(prev => ({
                    ...prev,
                    ["f"] : ""
                }))
            }
            SearchQuery(records)
        }, 500);
    
        return () => clearTimeout(interval);
    }, [query, isFunctionActive]);

    function SetQuerys(e : ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setQ(value)
        setRecords(prev => ({
            ...prev,
            ["q"] : value
        }))
    }

    function ActiveFunction() {
        setIsFunctionActive(true)
        setRecords(prev => ({
            ...prev,
            ["f"] : "series"
        }))
    }

    function DeactivateFunction() {
        setIsFunctionActive(false)
        setRecords(prev => ({
            ...prev,
            ["f"] : ""
        }))
    }

    function SearchQuery(params : typeof records) {
        
        const barParams = new URLSearchParams(window.location.search)
        Object.entries(params).forEach(([key, value]) => {
            
            if (value) {
                barParams.set(key, value)
            }else{
                barParams.delete(key)
            }
        })

        const newParams = Array.from(barParams.entries()
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)).join("&")

        router.replace(pathname + `?${newParams}`, {scroll : false})
    }

    return(
        <main className="min-h-screen">
            <div className="bg-[#141519] py-2">
                <div className="py-6 px-20">
                    <div className={`mx-auto w-[55rem] transition-colors border-b ${isActive ? "border-b-orange-600" : "border-b-gray-600"}`}>
                        <div className="py-2">
                            <input ref={inputRef} onClick={() => setActive(true)}
                                value={query.length > 0 ? query : ""}
                                onChange={SetQuerys}
                                className={`w-full sticky top-0 bg-[#141519] text-white text-2xl font-semibold outline-none`} 
                                placeholder="Buscar...">
                            </input>     
                        </div>
                    </div>
                </div>
            </div>
            <section className="mx-auto w-[65%] px-12">
                {!isFunctionActive ? <div>
                    {queryData === undefined || queryData?.length === 0 ? <></> 
                : isLoading || isFetching ? <div>...Loading</div> 
                :   <>
                        <SearchCard queryData={queryData}/>
                        <h1 className="pt-8 text-xl font-bold pb-4">Series</h1>
                        <SearchMiniCard queryData={queryData}/>
                        {queryData?.length > 6 ? 
                            <button onClick={ActiveFunction} className="text-start pt-4">{`Ver mas`}</button> 
                        : <></>}
                    </>
                }
                </div> : 
                <div className="py-8">
                    <button onClick={DeactivateFunction}>Todos los resultados</button>
                    <SearchFullCard queryData={queryData}/>
                </div>}
            </section>
        </main>
    )
}