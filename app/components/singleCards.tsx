"use client"

import Image from "next/image";
import { Play, Save } from "./icons";
import { AnilistProps } from "../types";

export default function SingleCards({data} : {data : AnilistProps}) {
    return(
        <section className="flex items-center justify-center pt-2 pb-8 transition-all">
            <div className="grid grid-cols-12 max-w-[90rem] gap-6 xl:px-20 md:px-10 sm:px-8 px-4">
                <div className="flex relative max-md:col-span-4 max-lg:col-span-5 col-span-6 text-center justify-center group/items-single w-full max-h-[20rem]">
                    <div className="absolute inset-0 hidden items-center group-hover/items-single:opacity-65 group-hover/items-single:bg-black group-hover/items-single:grid">
                        <p className="uppercase text-lg">Ir a la serie</p>
                    </div>
                    <Image className="w-full top-20 object-top object-cover" src={data.coverImage.extraLarge} width={650} height={250} alt={`Image for ${data.title}`}/>
                </div>
                <div className="flex flex-col gap-5 mx-3 max-md:col-span-8 max-lg:col-span-7 col-span-6 justify-center">
                    <h3 className="font-bold text-2xl">{data.title.english ? data.title.english : data.title.native}</h3>
                    <span className="text-gray-500 text-sm flex flex-col">Sub | Dob</span>
                    <p className="text-sm line-clamp-3">{data.description.replace(/<\/?(br|li|i|)>/g, '')}</p>
                        <div className='flex max-lg:text-sm max-md:grid gap-3 z-20 min-w-full'>
                            <button className='uppercase max-w-full bg-[#F47535] text-black font-medium py-[.40rem] px-3 flex items-center gap-2'>
                                <Play color="black"/> <p className='uppercase text-sm font-medium'>Comenzar a ver E1</p> 
                            </button>
                            <button className='border-[3px] max-w-full border-[#F47521] border-solid py-[.35rem] px-3 font-bold flex items-center gap-2 text-[#F47521]'>
                                <Save color='#F47521'/>
                                <p>Añadir a favoritos</p>
                            </button>
                        </div>
                </div>
            </div>
        </section>
    )
}