import { FetchingAnilist } from "../services/anilistFetching";
import Cards from "./cards";

export default async function CardsServer() {
    try {

        const serverData = await FetchingAnilist()    
        return <Cards cardsData={serverData}/>
    } catch (error) {
        console.error("Error al obtener datos de AniList:", error);
        return <p>No se pudieron cargar los datos de AniList.</p>;
    }
}