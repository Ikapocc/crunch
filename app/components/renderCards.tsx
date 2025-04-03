"use client"

import Image from "next/image";
import { AnilistProps, Recommendations } from "../types";
import Link from "next/link";
import { Add, Play, Save } from "./icons";
import { ListProps, useStoreList } from "../store/store";
import { useEffect, useState } from "react";

export default function RenderCard({cardsData, recoms} : {cardsData? : AnilistProps[] | undefined, recoms? : Recommendations | undefined}) {

    const {addToTheList, list, removeFromTheList} = useStoreList()
    const [isClient, setIsClient] = useState<boolean>(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    
    function handleList(listItem : ListProps) {
        const isItemInList = list.find(items => items.id === listItem.id)

        if (isItemInList) {
            removeFromTheList(listItem)
        }else{
            addToTheList(listItem)
        }
    }

    function IsInTheList(id : number) {
        return list.some(items => items.id === id)
    }
    
    return(
        <>
            {cardsData && cardsData?.map((items) => (
                <li className="relative group/items-carousel min-h-full overflow-hidden" key={items.id}>
                    <Link href={`${items.id}`} className="grid gap-2 snap-start transition-all h-full">
                    <Image 
                        className="aspect-[9/13] object-cover 
                        transition-all 
                        duration-300 rounded-sm 
                        delay-1000 
                        ease-in-out group-hover/items-carousel:min-h-full"  
                        src={items.coverImage.extraLarge}
                        width={500} height={465} alt={`Image for ${items.title}`} loading="lazy"
                        />
                        <p className="break-words text-sm font-semibold group-hover/items-carousel:hidden">{items.title.english !== null ? items.title.english : items.title.native}</p>
                        <span className="text-gray-500 text-xs flex group-hover/items-carousel:hidden">Sub | Dob</span>
                        <div className="absolute bg-[#141517] transition-opacity duration-200 ease-in-out w-full h-full opacity-0 group-hover/items-carousel:opacity-95 group/hover-items">
                            <div className="group-hover/hover-items:grid gap-4 text-xs p-3 h-full group-hover/hover-items:justify-between">
                                <div className="grid h-full z-50">
                                    <div className="flex flex-col gap-6 h-full">
                                        <p className="break-words group-hover/hover-items:block text-lg font-semibold">{items.title.english !== null ? items.title.english : items.title.native}</p>
                                        <div className="flex flex-col gap-1">
                                            <span className="group-hover/hover-items:block">{(items.meanScore / 20).toFixed(1)}</span>
                                            <p className="group-hover/hover-items:block text-gray-400 text-xs">
                                                {items.airingSchedule.nodes.findLast(items => items.timeUntilAiring <= 0)?.episode} episodes
                                            </p>
                                        </div>
                                        <p className="line-clamp-5 text-sm">{items.description?.replace(/<\/?(br|li|i|)>/g, '')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="hidden absolute bottom-3 left-3 gap-4 group-hover/items-carousel:flex">
                        <Play color="orange"/>
                        <button onClick={() => handleList({id : items.id, chapters : items.episodes, image : items.bannerImage ? items.bannerImage : items.coverImage.extraLarge, title : items.title})}>
                        {isClient ? <Save color={`${IsInTheList(items.id) ? "orange" : "red"}`}/> : <></>}
                        </button>
                        <Add color="orange"/>
                    </div>
                </li>
            ))} 
            {recoms && recoms.nodes.map(({mediaRecommendation}) => (
                <li className="relative" key={mediaRecommendation.id}>
                    <Link href={`${mediaRecommendation.id}`} className="grid gap-2 snap-start transition-all h-full group/items-carousel">
                        <Image
                        className="aspect-[9/13] object-cover 
                        transition-all 
                        duration-300 rounded-sm 
                        delay-1000 
                        ease-in-out group-hover/items-carousel:min-h-full" 
                        src={mediaRecommendation.coverImage.extraLarge} width={235} height={465} alt={`Image for ${mediaRecommendation.title}`} loading="lazy"
                        />
                        <p className="break-words text-sm font-semibold group-hover/items-carousel:hidden">
                            {mediaRecommendation.title.english !== null ? mediaRecommendation.title.english : mediaRecommendation.title.native}
                        </p>
                        <span className="text-gray-500 text-xs flex group-hover/items-carousel:hidden">Sub | Dob</span>
                        <div className="absolute bg-[#141517] transition-opacity duration-200 ease-in-out h-full w-full opacity-0 group-hover/items-carousel:opacity-95 group/hover-items pointer-events-none group-hover/items-carousel:pointer-events-auto">
                            <div className="group-hover/hover-items:grid gap-4 group-hover/hover-items:p-2 h-full group-hover/hover-items:justify-between">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                            <p className="break-words hidden group-hover/hover-items:block font-semibold">
                                                {mediaRecommendation.title.english !== null ? mediaRecommendation.title.english : mediaRecommendation.title.native}
                                            </p>
                                            <span className="hidden group-hover/hover-items:block">
                                                {(mediaRecommendation.meanScore / 20).toFixed(1)}
                                            </span>
                                    </div>
                                    <div className="hidden group-hover/hover-items:block">
                                        <p className="group-hover/hover-items:line-clamp-6 text-sm">{mediaRecommendation.description?.replace(/<\/?(br|li|i|)>/g, '')}</p>
                                    </div>
                                </div>
                                <div className="hidden items-end gap-4 group-hover/hover-items:flex">
                                    <Play color="orange"/>
                                    <button onClick={() => handleList({id : mediaRecommendation.id, chapters : mediaRecommendation.episodes, image : mediaRecommendation.coverImage.extraLarge, title : mediaRecommendation.title})}>
                                        {IsInTheList(mediaRecommendation.id) ? <Save color="red"/> : <Save color="orange"/>}
                                    </button>
                                    <Add color="orange"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </>
    )
}