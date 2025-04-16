"use client"

import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import Image from "next/image"
import StartButton from "../../components/buttonStart"
import { Add, Options, Play, Save, Share } from "../../components/icons"
import { FetchingAnilistById, FetchingRecommendationSeries } from "../../services/anilistFetching"
import Cards from "../../components/cards"
import { useLayoutEffect, useRef, useState } from "react"
import Link from "next/link"
import { ListProps } from "@/app/context/createContext"
import { useStoreList } from "@/app/store/store"
import { useToastContext } from "@/app/context/createToastContext"

export default function PageId() {

    const [expanded, setExpanded] = useState<boolean>(true)
    const [dynamicH, setDynamicH] = useState<number>(0)
    const refHeight = useRef<HTMLDivElement>(null)
    const params = useParams<{id : string}>()
    const {addToTheList, list, removeFromTheList} = useStoreList()
    const {showToast} = useToastContext()

    const {data : dataById, isLoading, isFetching} = useQuery({
        queryKey : ["Data_By_Id"],
        queryFn : () => FetchingAnilistById({id : Number(params.id)}),
        refetchOnMount : true,
        refetchOnWindowFocus : false
    })

    useLayoutEffect(() => {
        if (!refHeight.current) return;
    
        const updateHeight = () => {
            setDynamicH(refHeight.current!.scrollHeight);
        };
    
        requestAnimationFrame(updateHeight);
    
        const heightObserver = new ResizeObserver(updateHeight);
        heightObserver.observe(refHeight.current);
    
        return () => heightObserver.disconnect();
    }, [dataById]);

    const testImage = "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=100,width=1920/keyart/GY5P48XEY-backdrop_wide"

    const {data : dataRecommendations} = useQuery({
        queryKey : ["Data_Recommends"],
        queryFn : () => FetchingRecommendationSeries({id : Number(params.id)}),
    })

    function handleSerie(serieData : ListProps) {
        const isInTheList = list.find(items => items.id === serieData.id)

        if (!isInTheList) {
            addToTheList(serieData)
            showToast({
                message : "ha sido añadido a la lista",
                title : serieData.title,
                type : "added"
            })
        }else{
            removeFromTheList(serieData)
            showToast({
                message : "ha sido eliminado a la lista",
                title : serieData.title,
                type : "remove"
            })
        }
    }
    
    if (isLoading || isFetching) return "Loading..."

    return (
        <main className="relative">
            <section className="relative flex flex-col h-[90vh]">
                {dataById?.map(items => (
                    <section className="z-10 pt-20" key={items.id}>
                         <div className="absolute inset-0 bg-gradient-to-t from-black to-black -z-20 w-full top-[73%]"></div>
                         <div className="absolute inset-0 bg-gradient-to-r from-black opacity-90 to-transparent -z-20 right-[47%]"></div>
                         <div className="absolute inset-0 bg-gradient-to-l opacity-85 from-black to-transparent -z-20 left-[80%]"></div>
                        {items.bannerImage ?
                        <Image priority className="absolute w-full inset-0 h-full -z-30 object-cover" src={items.bannerImage} alt={`Image for ${items.bannerImage}`} height={0} width={1920}/> :
                            
                        <Image className="absolute w-[25%]" src={items.coverImage.extraLarge} alt={`Image for ${items.title.english}`} height={0} width={1920}/>
                        } 
                        <div className="absolute inset-0 inset-y-[12rem] top-[50%] bg-gradient-to-t from-black to-transparent -z-20"></div>   
                        <section className="grid px-20">
                            <div className="grid grid-cols-12 main-serie pb-10 area-primary items-end">
                                <div className="black-area h-full"></div>
                                <div className="grid gap-5 main-area-serie">
                                    <h1 className="text-3xl">{items.title.english}</h1>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-500 text-sm flex">Sub | Dob</span>
                                            <div className="flex gap-3">
                                                {items.genres.map((items, id) => (
                                                    <Link key={id} href={`/genres/${items.toLowerCase()}`}>
                                                        <button className="cursor-pointer">{items}</button>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <span>Average: {Math.floor(items.averageScore / 20).toFixed(1)}</span>
                                    </div>

                                    <div className="flex gap-8">
                                        <div className='flex gap-3 z-20'>
                                            <button className='uppercase bg-[#F47535] text-black font-medium px-3 flex items-center gap-2 cursor-pointer'>
                                                <Play color="black"/> <p className='uppercase text-sm font-medium'>Comenzar a ver E1</p> 
                                            </button>
                                            <button onClick={() => handleSerie({
                                                title : items.title.english ? items.title.english : items.title.native  ,
                                                chapters : items.episodes,
                                                id : items.id,
                                                image : items.coverImage.extraLarge
                                            })} className='border-4 border-[#F47521] border-solid p-[.45rem] cursor-pointer'>
                                                <Save color='#F47521'/>
                                            </button>
                                        </div>
                                        <div className="flex gap-5">
                                            <Add color="orange" witdh={25}/>
                                            <Share color="orange" witdh={25}/>
                                            <Options color="orange" witdh={18}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div ref={refHeight} className={`grid relative grid-cols-12 area-secondary ${expanded ? "h-[70px] overflow-hidden" : `h-[${dynamicH}px] block`}`}>
                                <div className="grid descripcion-sect">
                                    <p className="text-[0.95rem]">{items.description.replace(/<\/?(br|li|i|)>/g, '')}</p>
                                </div>
                                
                                <div className="flex flex-col gap-3 text-sm genres-item">
                                    <div className="flex">
                                        <p>Genres: </p>
                                        <div className="flex gap-3 mx-3">
                                            {items.genres.map((items, id) => (
                                                <Link key={id} href={`/genres/${items}`}>
                                                    <button className="cursor-pointer">{items}</button>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
    
                                    <p>Subtitles: Español (América Latina), English, Deutsch, Español (España), Français, Italiano, Português (Brasil), Русский, العربية</p>
                                    <p>Subtitles: Español (América Latina), English, Deutsch, Español (España), Français, Italiano, Português (Brasil), Русский, العربية</p>
                                </div>
                            </div>
                            
                            <button 
                            onClick={() => setExpanded(!expanded)} 
                            className={`text-sm w-full items-start z-50 flex text-orange-700 ${!expanded ? "py-4" : "pt-4 pb-8" }`}>
                                {!expanded ? "Menos detalles" : "Mas detalles"}
                                <div className={`${expanded ? "absolute inset-0 top-[65%] bg-gradient-to-t from-black to-transparent -z-20" : ""}`}></div>   
                            </button>
                        </section>
                    </section>
                ))}
            <Cards recoms={dataRecommendations?.recommendations}/>
            </section>
        </main>
    )   
}