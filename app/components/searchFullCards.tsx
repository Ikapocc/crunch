import Link from "next/link";
import { AnilistProps } from "../types";
import Image from "next/image";

export default function SearchFullCard({queryData} : {queryData : AnilistProps[] | undefined}) {
    return(
        <section>
            <p className="text-xl font-bold py-8">Solo series</p>
            <ul className="grid grid-cols-3 gap-4">
                {queryData?.map(items => (
                    <li key={items.id}>
                        <Link href={`${items.id}`}>
                            <div className="flex gap-4">
                                <Image className="object-cover max-w-[85px]" src={items.coverImage.extraLarge} alt={`Iamge for ${items.title.english}`} width={1920} height={500}/>
                                <div className="flex flex-col">
                                    <div className="flex flex-col h-full justify-center gap-2">
                                        <div>
                                            <p className="text-sm font-bold">{items.title.english ? items.title.english : items.title.native}</p>
                                            <p className="text-xs text-gray-500">{items.episodes} Episodes</p>
                                        </div>
                                        <span className="text-gray-500 text-sm flex group-hover/items-carousel:hidden">Sub | Dob</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}