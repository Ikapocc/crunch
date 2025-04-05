"use client"

import { AnimatePresence, motion } from "framer-motion";
import { carouselProps } from "../page";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import StartButton from "./buttonStart";
import { ArrowBack, ArrowForward } from "./icons";
import { Progress } from "@/components/ui/progress";


export const AnimateCarousel = () => {
  
  const [isHoverSlide, setIsHoverSlide] = useState<boolean>(false)
  const [activeCarousel, setActiveCarousel] = useState<number>(0)
  const [timer, setTimer] = useState<number>(0)
  const [progressSlideIdx, setProgressSlideIdx] = useState<null | number>(null)
  const actualIndexCarousel = useRef<number>(0)

  const temporalData : carouselProps[] = [
    {
      logo : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=480/CurationAssets/The%20Red%20Ranger%20Becomes%20an%20Adventurer%20in%20Another%20World/SEASON%201/ULTRA-WIDE/TheRedRangerBecomesanAdventurer-S1-UW-Logo.png",
      cover : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920/CurationAssets/The%20Red%20Ranger%20Becomes%20an%20Adventurer%20in%20Another%20World/SEASON%201/ULTRA-WIDE/TheRedRangerBecomesanAdventurer-S1-UW-LTR.png",
      description : "Togo Asagaki era el Ranger Rojo de un heroico escuadrón de Rangers. Durante su batalla final contra una malvada organización, dio su vida para garantizar su victoria. Pero el destino tenía otros planes para él y acabó renaciendo en un mundo completamente distinto. Aceptando su nuevo rol de aventurero, se transforma en Kizuna Red y continúa su lucha por la justicia ayudando a los necesitados."
    },
    {
      logo : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=480/CurationAssets/Possibly%20the%20Greatest%20Alchemist%20of%20All%20Time/SEASON%201/ULTRA-WIDE/PossiblytheGreatestAlchemist-S1-KV1-UW-Logo-EN.png",
      description : "Takumi Iruma termina siendo arrastrado a una invocación heroica, aun cuando él no es ningún héroe. Llamado por error a Mildgard, un mundo fantástico de magia y espadas, Takumi ve en esto la oportunidad de empezar desde cero. Aunque anhela una vida pacífica, la diosa Nolyn le concede la “Alquimia”, una habilidad sumamente poderosa que le permite crear casi cualquier cosa, desde espadas sagradas hasta naves voladoras. ¡Así comienza su aventura a desgana!",
      cover : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920/CurationAssets/The%20100%20Girlfriends%20Who%20Really,%20Really,%20Really,%20Really,%20REALLY%20Love%20You/SEASON%201/ULTRA-WIDE/The100Girlfriends-S1-KV1-UW-LTR.png"
    },
    {
      cover : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920/CurationAssets/The%20Apothecary%20Diaries/SEASON%202/ULTRA-WIDE/ApothecaryDiaries-S2-KV1-UW-LTR.png",
      description : "Obligada a trabajar en el palacio imperial, una joven boticaria aprende los entresijos de la sociedad de la realeza.",
      logo : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=480/CurationAssets/The%20Apothecary%20Diaries/SEASON%202/ULTRA-WIDE/ApothecaryDiaries-S2-KV1-UW-Logo-EN.png"
    },
    {
      cover : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-LTR.png",
      description : "Para dominar sus nuevas habilidades en secreto, Jinwoo debe luchar contra los enemigos más duros de la humanidad para salvar a su madre.",
      logo : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=480/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-Logo.png"
    },
    {
      cover : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920/CurationAssets/Medaka%20Kuroiwa%20is%20Impervious%20to%20My%20Charms/SEASON%201/ULTRA-WIDE/MedakaKuroiwa-S1-KV1-A-UW-LTR.png",
      description : "Para Kawai Mona, conquistar corazones es tan fácil como respirar… o al menos eso creía hasta que llegó Medaka Kuroiwa, el chico nuevo que ni siquiera la voltea a ver. De un día para otro, su vida en la escuela cambia por completo, porque jamás se había topado con alguien que no cayera rendido ante sus encantos. Pero Mona no está dispuesta a rendirse, y cuando decimos que hará de todo, es en serio: ¡llega a puntos tan extremos que no lo vas a creer!",
      logo : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=480/CurationAssets/Medaka%20Kuroiwa%20is%20Impervious%20to%20My%20Charms/SEASON%201/ULTRA-WIDE/MedakaKuroiwa-S1-KV1-UW-Logo-EN.png"
    },
    {
      cover : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920/CurationAssets/Ameku%20MD:%20Doctor%20Detective/SEASON%201/ULTRA-WIDE/AmekuMD-S1-UW-LTR.png",
      description : "El Departamento de Diagnóstico Patológico del Hospital General Ten'ikai se ocupa de los casos que otros médicos consideran demasiado difíciles de tratar. También es el lugar donde surgen extraños misterios, que van desde enfermedades inexplicables hasta insólitos asesinatos que ni siquiera la policía puede resolver. En el centro de todo está Takao Ameku, una brillante doctora decidida a descubrir la verdad que se esconde tras estas anomalías.",
      logo : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=480/CurationAssets/Ameku%20MD:%20Doctor%20Detective/SEASON%201/ULTRA-WIDE/AmekuMD-S1-UW-Logo.png"
    }
]

  useEffect(() => {
      if (!isHoverSlide) {
        const interval = setInterval(() => {
          setTimer(prev => {
            if (prev >= 10) {
              setActiveCarousel(prevIdx => {
                
                const nextSlide = actualIndexCarousel.current >= temporalData.length - 1 ? 0 : actualIndexCarousel.current + 1
                actualIndexCarousel.current = prevIdx
                return nextSlide
              })
              return 0
            }
    
            return prev + 1
          })
        }, 1000)
  
        return () => {
          clearInterval(interval)
        }
      }
      
    }, [temporalData.length, isHoverSlide])

  useEffect(() => {
    actualIndexCarousel.current = activeCarousel
    
  }, [activeCarousel])

  function BackwardCarousel() {
    setActiveCarousel(prev => prev === 0 ? temporalData.length - 1 : prev - 1)
    setTimer(0)
  }

  function ForwardCarousel() {
    setActiveCarousel(prev => prev !== temporalData.length - 1 ? prev + 1 : 0)
    setTimer(0)
  }

  function ChangeProgressSlide(id : number) {
    setActiveCarousel(id)
    setTimer(0)
  }

  function FocusSlide(idx : number) {
    setIsHoverSlide(!isHoverSlide)
    setProgressSlideIdx(prev => {
      return prev === idx ? prev : idx
    })
  }

  function LossFocusSlide() {
    setIsHoverSlide(false)
    setProgressSlideIdx(activeCarousel)
  }
  
  return (
      <section className='grid carousel-area px-20 relative h-[100vh]'>
        <div className="flex absolute items-center justify-between min-w-full min-h-full">
          <div className='z-10 left-3'>
            <button onMouseOver={() => setIsHoverSlide(true)} onMouseOut={() => setIsHoverSlide(false)} onClick={BackwardCarousel}>
              <ArrowForward />
            </button>
          </div>
          <div className='right-3 z-10'>
            <button onMouseOver={() => setIsHoverSlide(true)} onMouseOut={() => setIsHoverSlide(false)} onClick={ForwardCarousel}>
              <ArrowBack />
            </button>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {temporalData.map((items, idx) => (
            idx === activeCarousel && (
              <React.Fragment key={idx}>
                <div  className={`flex flex-col justify-center gap-12 h-[100vh] absolute left-0 pl-20`}>
                  <motion.section 
                    initial={{opacity : 0}}
                    animate={{opacity : 1}}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", damping: 20, duration : 3, stiffness : 100 }}
                    className="grid grid-cols-12 gap-7 area-selector shadow-overlay shadow-overlay-bottom"> 
                    <Image className="absolute inset-0 -z-10 left-0 right-0 aspect-video w-full min-h-full object-cover lg:object-[100%_50%] object-[80%_50%]" quality={90} src={items.cover} alt="items test" width={1920} height={100} objectFit="cover" priority/>
                    <div className='grid hero-icon relative items-center'>
                      <Image className="flex flex-col min-h-full min-w-f object-contain z-10" src={items.logo} alt="items logo" width={400} height={100} priority/>
                    </div>
                    <div className='grid hero-options items-end justify-center h-full custom-rows gap-4 z-50 relative'>
                      <div className="relative grid gap-2">
                        <span className="text-gray-500 text-sm flex flex-col">Sub | Dob</span>
                        <p className='text-[0.88rem] text-white line-clamp-4'>{items.description}</p>
                      </div>
                      <StartButton />
                      <div className="flex items-start gap-2 min-w-full hero-slides-selector mt-8">
                      {temporalData.map((items, idx) => (
                          <Progress
                          key={idx}
                          className={`cursor-pointer max-w-full ${isHoverSlide && (activeCarousel === idx || progressSlideIdx === idx) ? "bg-[#F47521]" : ""} 
                          ${activeCarousel === idx ? "w-[10%] max-md:w-[20%]" : ""}`} 
                          onMouseOver={() => FocusSlide(idx)} onMouseOut={LossFocusSlide} 
                          onClick={() => ChangeProgressSlide(idx)} value={idx === activeCarousel ? Math.ceil(timer * 10) : 0}/>
                        ))}
                    </div>
                    </div>
                  </motion.section>
                </div>
                
              </React.Fragment>
            )
          ))}
          
        </AnimatePresence>
        
      </section> 
    )
}
