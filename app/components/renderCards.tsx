"use client"

import Image from "next/image";
import { AnilistProps, Recommendations } from "../types";
import Link from "next/link";
import { Add, Play, Save } from "./icons";
import { ListProps, useStoreList } from "../store/store";
import { useEffect, useState } from "react";
import { useToastContext } from "../context/createToastContext";

export default function RenderCard({cardsData, recoms, props} : {cardsData? : AnilistProps[] | undefined, recoms? : Recommendations | undefined, props?: string}) {

    const {addToTheList, list, removeFromTheList} = useStoreList()
    const [isClient, setIsClient] = useState<boolean>(false)
    /* const {addToTheList, list, removeFromTheList} = useListContext() */
    const {showToast} = useToastContext()
    
    useEffect(() => {
        setIsClient(true)
    }, [])
    
    function handleList(listItem : ListProps) {
        const isItemInList = list.find(items => items.id === listItem.id)

        if (isItemInList) {
            removeFromTheList(listItem)
            showToast({
                message : "ha sido eliminado a la lista",
                title : listItem.title,
                type : "added"
            })
        }else{
            addToTheList(listItem)
            showToast({
                message : "ha sido añadido a la lista",
                title : listItem.title,
                type : "remove"
            })
        }
    }

    function IsInTheList(id : number) {
        return list.some(items => items.id === id)
    }
    
    return(
        <>
            {cardsData && cardsData?.map((items) => (
                <li className={`relative group/items-carousel min-h-full overflow-hidden ${props}`} key={items.id}>
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
                        <button onClick={() => handleList({id : items.id, chapters : items.episodes, image : items.coverImage.extraLarge ? items.coverImage.extraLarge : items.bannerImage, title : items.title.english ? items.title.english : items.title.native})}>
                        {isClient ? <Save color={`${IsInTheList(items.id) ? "red" : "orange"}`}/> : <></>}
                        </button>
                        <Add color="orange"/>
                    </div>
                </li>
            ))} 
            {recoms && recoms.nodes.map(({mediaRecommendation}) => (
                <li className={`relative group/items-carousel min-h-full overflow-hidden ${props}`} key={mediaRecommendation.id}>
                <Link href={`${mediaRecommendation.id}`} className="grid gap-2 snap-start transition-all h-full">
                <Image 
                    className="aspect-[9/13] object-cover 
                    transition-all 
                    duration-300 rounded-sm 
                    delay-1000 
                    ease-in-out group-hover/items-carousel:min-h-full"  
                    src={mediaRecommendation.coverImage.extraLarge}
                    width={500} height={465} alt={`Image for ${mediaRecommendation.title}`} loading="lazy"
                    />
                    <p className="break-words text-sm font-semibold group-hover/items-carousel:hidden">
                        {mediaRecommendation.title.english !== null ? mediaRecommendation.title.english : mediaRecommendation.title.native}
                    </p>
                    <span className="text-gray-500 text-xs flex group-hover/items-carousel:hidden">Sub | Dob</span>
                    <div className="absolute bg-[#141517] transition-opacity duration-200 ease-in-out w-full h-full opacity-0 group-hover/items-carousel:opacity-95 group/hover-items">
                        <div className="group-hover/hover-items:grid gap-4 text-xs p-3 h-full group-hover/hover-items:justify-between">
                            <div className="grid h-full z-50">
                                <div className="flex flex-col gap-6 h-full">
                                    <p className="break-words group-hover/hover-items:block text-lg font-semibold">
                                        {mediaRecommendation.title.english !== null ? mediaRecommendation.title.english : mediaRecommendation.title.native}
                                    </p>
                                    <div className="flex flex-col gap-1">
                                        <span className="group-hover/hover-items:block">{(mediaRecommendation.meanScore / 20).toFixed(1)}</span>
                                    </div>
                                    <p className="line-clamp-5 text-sm">{mediaRecommendation.description?.replace(/<\/?(br|li|i|)>/g, '')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="hidden absolute bottom-3 left-3 gap-4 group-hover/items-carousel:flex">
                    <Play color="orange"/>
                    <button onClick={() => handleList({id : mediaRecommendation.id, chapters : mediaRecommendation.episodes, image : mediaRecommendation.coverImage.extraLarge ? mediaRecommendation.coverImage.extraLarge : mediaRecommendation.bannerImage, title : mediaRecommendation.title.english ? mediaRecommendation.title.english : mediaRecommendation.title.native})}>
                    {isClient ? <Save color={`${IsInTheList(mediaRecommendation.id) ? "red" : "orange"}`}/> : <></>}
                    </button>
                    <Add color="orange"/>
                </div>
            </li>
            ))}
        </>
    )
}