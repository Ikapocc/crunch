import { FetchSeriesByGenre } from "../services/anilistFetching";
import Cards from "./cards";

export default async function CardsGenre({genreSerie} : {genreSerie : string}) {
    const serverData = await FetchSeriesByGenre({genre : genreSerie})

    return <Cards cardsData={serverData}/>
}