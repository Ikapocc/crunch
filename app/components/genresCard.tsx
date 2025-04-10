"use client"

import Link from "next/link";
import { Add, ArrowBack, ArrowForward, Play, Save } from "./icons";
import { lazy, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnilistProps } from "../types";

const RenderCard = lazy(() => import("./renderCards"))

export default function GenresCard({data, title} : {data : AnilistProps[] | undefined, title : string}) {

    const windowMove = useRef<HTMLUListElement>(null)
    const path = usePathname()
    const [isMoved, setIsMoved] = useState<number>(0)
    const ITEMS_PER_VIEW = 1;
    
    function MoveRight() {
        
        if (windowMove.current) {

            const {clientWidth} = windowMove.current
            setIsMoved(prev => prev - clientWidth)

            windowMove.current.scrollBy(
                {left : -clientWidth * ITEMS_PER_VIEW,
                behavior : "smooth"
            })
        }
    }

    function MoveLeft() {
                
        if (windowMove.current) {

            const {clientWidth} = windowMove.current
            setIsMoved(prev => prev + clientWidth)
            
            windowMove.current.scrollBy({
                left : clientWidth * ITEMS_PER_VIEW,
                behavior : "smooth"
            })
        }
    }
    
    return(
        <>
            {data?.length <= 6 ? <></> : 
            <div className="mb-[3rem] relative">
                <div className=" contents">
                    <div className="absolute flex items-center bottom-6 justify-between h-full w-full z-20">
                        <button className={`${isMoved > 0 ? "opacity-100" : "opacity-0"}`} onClick={MoveRight}>
                            <ArrowForward />
                        </button>
                        <button onClick={MoveLeft}>
                            <ArrowBack />
                        </button>
                    </div>
                    <div className="flex flex-col relative px-12 gap-4 xl:text-xl lg:text-lg">
                        <div className="flex justify-between mx-3 z-30">
                            <h2>{title}</h2>
                            <Link href={`${path}/${title.toLowerCase()}`}>Ver todo</Link>
                        </div>
                        <ul ref={windowMove} className="grid grid-flow-col auto-cols relative overflow-x-scroll scrollbar-hide z-30">
                            {/* {data?.map(items => (
                                <li key={items.id} className="grid mx-3 text-xs z-50 relative group/genre-slide transition-all">
                                    <div className="bg-[#141517] absolute inset-0 opacity-0 group-hover/genre-slide:grid group-hover/genre-slide:opacity-90 "></div>
                                    <Link className="relative flex flex-col gap-6" href={`/${items.id}`} >
                                        <Image className="w-auto object-cover mini-card-image -z-30" width={1920} height={500} src={items.coverImage.extraLarge} alt={`image for ${items.title.english}`}/>
                                        <div className="mini-card-props flex flex-col gap-3 h-full line-clamp-6 group-hover/genre-slide:absolute group-hover/genre-slide:px-1 group-hover/genre-slide:py-3">
                                            <p>{items.title.english}</p>
                                            <span className="text-gray-500 flex group-hover/genre-slide:hidden">Sub | Dob</span>
                                            <p className="line-clamp-5">{items.description.replace(/<\/?(br|li|i|)>/g, '')}</p>
                                        </div>
                                    </Link>
                                    <div className="flex gap-3">
                                        <Play color="orange"/>
                                        <Save color="orange"/>
                                        <Add color="orange"/>
                                    </div>
                                </li>
                            ))} */}
                            <RenderCard cardsData={data} props="grid mx-3 text-xs relative transition-all"/>
                        </ul> 
                    </div>
                </div>
            </div>}
        </>
    )
}