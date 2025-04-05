import { FetchingAnilist } from "../services/anilistFetching";
/* import Cards from "./cards"; */
import { lazy, Suspense } from "react"

const Cards = lazy(() => import("./cards"))

export default async function CardsServer() {
    try {

        const serverData = await FetchingAnilist()    
        return (
            <Suspense fallback={<div>Cargando datos</div>}>
                <Cards cardsData={serverData}/>
            </Suspense>
        )
    } catch (error) {
        console.error("Error al obtener datos de AniList:", error);
        return <p>No se pudieron cargar los datos de AniList.</p>;
    }
}