"use client"

import { lazy, Suspense, useRef } from "react";
import { AnilistProps, Recommendations } from "../types";
import { ArrowBack, ArrowForward } from "./icons";
/* import RenderCard from "./renderCards";
 */
const RenderCard = lazy(() => import("./renderCards"))

function offsetValuesFunc(width : number) {
    
    const offsetValues : Record<number, number> = {
        1550 : 130,
        1500 : 120, 
        1200 : 80,
        940 : 85,
        680 : 50,
        400 : 60
    }
    
    return Object.entries(offsetValues)
    .map(([key, values]) => ([Number(key), values])).reduce((acc, [key, value]) => (
        width >= key ? value : acc
    ),0 )
}

export default function Cards({cardsData, recoms} : {cardsData? : AnilistProps[] | undefined, recoms? : Recommendations | undefined}) {

    const carouselSlideSeries = useRef<null | HTMLDivElement>(null)
        
    const ITEMS_PER_VIEW = 1;

    function MoveForwardCarousel() {
        if (carouselSlideSeries.current !== null) {
                    
            const {clientWidth} = carouselSlideSeries.current
            const offset = offsetValuesFunc(clientWidth)
            
            carouselSlideSeries.current.scrollBy({left : ((clientWidth - offset) * ITEMS_PER_VIEW), behavior : "smooth"})
        }
    }
    
    function MoveBackwardCarousel() {
    if (carouselSlideSeries.current !== null) {
        const {clientWidth} = carouselSlideSeries.current
        const offset = offsetValuesFunc(clientWidth)
        carouselSlideSeries.current.scrollBy({left : ((-clientWidth + offset) * ITEMS_PER_VIEW), behavior : "smooth"})
    }
    }
    
    return(
        <section className="relative z-20 snap-x grid py-6 items-center gap-6">
            <div className="absolute inset-[-9.1rem] bg-gradient-to-r from-black opacity-95 z-10 to-transparent w-[13%]"></div>
            <button onClick={MoveBackwardCarousel} className="absolute flex left-3 z-20"> 
                <ArrowForward />
            </button>
            <div className="grid gap-2 xl:px-20 md:px-10 sm:px-8 px-4 z-10">
                <p className="text-2xl font-bold">Temporada de invierno de 2025</p>
                <p className="text-gray-400">Simulcasts de invierno de 2025 !</p>
            </div>
            <div ref={carouselSlideSeries} className="overflow-x-scroll scrollbar-hide">
                <ul className="grid grid-flow-col auto-cols xl:pl-20 md:pl-10 sm:pl-8 pl-4 gap-5 w-[90%]">
                    <Suspense fallback={<div>...Loading</div>}>
                        <RenderCard cardsData={cardsData} recoms={recoms}/>
                    </Suspense>
                </ul>
            </div>
            <button onClick={MoveForwardCarousel} className="absolute flex justify-between right-0 z-10 ">
                <ArrowBack />
            </button>
            <div className="absolute inset-0 bg-gradient-to-l opacity-70 left-[96%] from-black to-transparent"></div>
        </section>
    )
}