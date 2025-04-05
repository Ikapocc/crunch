"use client"

import { FiltersComp } from "@/app/components/filtersComponent"
import Spinner from "@/app/components/spinner"
import { FetchSeriesByGenreTags } from "@/app/services/anilistFetching"
import { useSuspenseInfiniteQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useRef, useState } from "react"

export default function TagServer({tag} : {tag : string}) {

    const [filterGenres, setFilterGenres] = useState<string[]>()
    const reference = useRef<HTMLDivElement | null>(null)
    const path = usePathname().split("/").slice(2).map(items => items.slice(0,1).toUpperCase() + items.slice(1)).join(" / ")

    const {data, isFetching, fetchNextPage, hasNextPage, isSuccess} = useSuspenseInfiniteQuery({
        queryKey : ["tag_query"],
        queryFn :({pageParam = 0}) => FetchSeriesByGenreTags({genre : tag, page : pageParam }),
        initialPageParam : 0,
        getNextPageParam: (lastPage) => {
            return lastPage.pageInfo.hasNextPage ? lastPage.pageInfo.currentPage : undefined
        },
    })

    console.log(data);

    const GenreCollection = [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Ecchi",
        "Fantasy",
        "Hentai",
        "Horror",
        "Mahou Shoujo",
        "Mecha",
        "Music",
        "Mystery",
        "Psychological",
        "Romance",
        "Sci-Fi",
        "Slice of Life",
        "Sports",
        "Supernatural",
        "Thriller"
    ]

    /* useEffect(() => {
        if (!reference.current) return

        const observer = new IntersectionObserver(([entries]) => {
            fetchNextPage()
            
        },{
            root : null,
            rootMargin : "0px",
            threshold : 1
        })

        if (reference.current) {
            observer.observe(reference.current)
        }

        return () => {
            if (reference.current) {
                observer.disconnect()
            }
        }
    }, [fetchNextPage]) */

    function GetFilters(filters : Record<number, string>) {
        setFilterGenres(Object.values(filters).filter(items => items.length > 0));
    }

    const filterData = useMemo(() => {
        
        const allData = data?.pages.map(items => items.media).flat()

        if (filterGenres?.length === 0) return allData
        
        return allData?.filter(items => filterGenres?.every(genres => items.genres.includes(genres))) 
    }, [filterGenres, data?.pages])
    
    return(
        <section className="flex flex-col items-center py-16">
            <h1 className="text-4xl py-8">
                {tag.toUpperCase().slice(0, 1) + tag.slice(1)}
            </h1>
            <section className="flex flex-col">
                <div className="contents w-full">
                    <div className="flex flex-col relative px-12 gap-4 lg:max-w-[70rem] max-lg:w-full mx-auto">
                        <FiltersComp dataSelects={GenreCollection} tag={path} sendFilters={GetFilters}/>
                        <ul className="grid grid-cols-6 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 relative overflow-x-scroll scrollbar-hide">
                            {filterData?.map(items => (
                                <li key={items.id} className="grid mx-3 text-xs relative group/genre-slide transition-all my-6">
                                    <div className="bg-[#141517] absolute inset-0 opacity-0 group-hover/genre-slide:opacity-90 "></div>
                                    <Link className="relative flex flex-col gap-6 group/genre-hover" href={`/${items.id}`} >
                                        <Image className="w-auto object-cover mini-card-image -z-30" quality={90} width={1920} height={500} src={items.coverImage.extraLarge} alt={`image for ${items.title.english}`}/>
                                        <div className="mini-card-props flex flex-col gap-3 h-full line-clamp-6 group-hover/genre-hover:absolute group-hover/genre-hover:px-1 group-hover/genre-hover:py-3">
                                            <p>{items.title.english ? items.title.english : items.title.native}</p>
                                            <span className="text-gray-500 flex group-hover/items-carousel:hidden">Sub | Dob</span>
                                            <p className="hidden group-hover/genre-hover:block">{items.description}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul> 
                    </div>
                    <div ref={reference} className={`w-full h-16 flex items-center justify-center`}>
                        {isFetching || filterData.length < 1 ? <Spinner /> : <></>}
                        {hasNextPage && !isFetching ? <button onClick={() => fetchNextPage()}>More Content...</button> : <></>}
                    </div>
                </div>
            </section>
        </section>
    )
}