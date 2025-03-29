import Link from "next/link";
import { AnilistProps } from "../types";
import Image from "next/image";

export default function SearchCard({queryData} : {queryData : AnilistProps[] | undefined}) {
    return (
        <section className="flex flex-col gap-6">
            <h1 className="pt-8 text-2xl font-bold">Resultados mas relevantes</h1>
            <div className="grid grid-flow-col items-start">
                <ul className="flex gap-8">
                    {queryData?.slice(0, 3).map(items => (
                        <li key={items.id}>
                            <Link href={`${items.id}`}>
                                <div className="grid gap-5">
                                    <Image className="h-[200px] object-cover object-top" src={items.coverImage.extraLarge} width={1920} height={500} alt={`Image for ${items.title.english}`}/>
                                    <p>{items.title.english}</p>
                                    <span className="text-gray-500 text-xs flex group-hover/items-carousel:hidden">Sub | Dob</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}