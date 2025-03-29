import Image from "next/image";

export default function Banners({image} : {image : string}) {
    return(
        <section className="w-full flex items-center justify-center py-20 px-6">
            <Image src={image} alt="small section" height={100} width={1305}/>
        </section>
    )
}