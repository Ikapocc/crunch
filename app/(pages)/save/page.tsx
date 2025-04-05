"use client"

import { Delete, Favorite } from "@/app/components/icons";
import UseClientRender from "@/app/hooks/useIsClientRender";
import { useStoreList } from "@/app/store/store"
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    
    const {list, removeFromTheList} = useStoreList()
    const {isClient} = UseClientRender()
    
    return(
        <div className="flex flex-col gap-5 max-w-[60rem] mx-auto max-lg:px-12 py-20">
            <p className="text-xl font-bold">Actividad Reciente</p>
            {isClient && 
            <ul className="grid grid-cols-4 max-md:grid-cols-3 gap-8 relative">
                {list.map(items => (
                    <div key={items.id}>
                        <li className="min-h-[300px] flex flex-col justify-between my-8">
                            <Link href={`/${items.id}`} key={items.id}>
                                <div className="flex flex-col gap-3">
                                    <Image className="max-h-[8rem] object-cover object-[100%_25%]" src={items.image} alt={`${items.title} image`} width={200} height={500}/>
                                    <h1 className="text-sm font-bold">{items.title}</h1>
                                    <span className="text-xs text-gray-400">Chapters {items.chapters}</span>
                                </div>
                            </Link> 
                            <div className="flex justify-between">
                                <span className="text-gray-500 text-sm flex flex-col">Sub | Dob</span>
                                <div className="flex items-center gap-3">
                                    <Favorite />
                                    <button onClick={() => removeFromTheList(items)}>
                                        <Delete />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>}
        </div>
    )
}