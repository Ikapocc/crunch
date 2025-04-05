import { FetchSeriesByGenre } from "../services/anilistFetching";
import Cards from "./cards";

export default async function CardsGenre({genreSerie} : {genreSerie : string}) {
    try {
        const serverData = await FetchSeriesByGenre({genre : genreSerie})
        return <Cards cardsData={serverData}/>
    } catch (error) {
        console.error("Error al obtener datos de AniList:", error);
        return <p>No se pudieron cargar los datos de AniList.</p>;
    }
}