import { FetchingAnilist } from "../services/anilistFetching";
import Cards from "./cards";

export default async function CardsServer() {
    const serverData = await FetchingAnilist()    

    return <Cards cardsData={serverData}/>
}