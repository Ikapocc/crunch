import { useMemo } from "react"
import Banners from "./components/banners"
import CardsGenre from "./components/cardsByGenreServer"
import CardsServer from "./components/cardsServer"
import { AnimateCarousel } from "./components/carousel"
import SingleCardsServer from "./components/singleCardsServer"

export interface carouselProps {
  logo : string,
  cover : string,
  description : string
}

export default function Home() {

  const banners : Record<string, string>  = {
    banner1 : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920/CurationAssets/I'm%20Getting%20Married%20to%20a%20Girl%20I%20Hate%20in%20My%20Class/SEASON%201/MARKETING%20BANNER/ImGettingMarriedtoaGirlIHateinMyClass-S1-KV1-Banner-2100x700-ES.png",
    banner2 : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920/CurationAssets/Blue%20Exorcist/SEASON%203/MARKETING%20BANNER/BlueExorcist-S3C3-KV1-Banner-2100x700-ES.png"
  }

  const genres : string[] = ["Action","Adventure","Comedy","Drama","Fantasy","Horror",
    "Mahou Shoujo","Mecha","Music","Mystery","Psychological","Romance","Sci-Fi",
    "Slice of Life","Sports","Supernatural","Thriller"]

  const numberOfGenres = useMemo(() => {
    return Array.from({ length: 17 }, (_, i) => i).toSorted(() => Math.random() - 0.5).slice(0,5)
  }, [])

  return (
    <main>
      <AnimateCarousel />
      <CardsServer />
      <Banners image={banners.banner2}/>
      <CardsGenre genreSerie={genres[numberOfGenres[0]]}/>
      <Banners image={banners.banner1}/>
      <CardsGenre genreSerie={genres[numberOfGenres[1]]}/>
      <SingleCardsServer/>      
      <CardsGenre genreSerie={genres[numberOfGenres[2]]}/>
      <CardsGenre genreSerie={genres[numberOfGenres[3]]}/>
      <SingleCardsServer/>
      <SingleCardsServer/> 
      <CardsGenre genreSerie={genres[numberOfGenres[4]]}/>
      <SingleCardsServer/>
    </main>
  )
}
