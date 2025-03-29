import { FetchingAnilist } from "../services/anilistFetching";
import SingleCards from "./singleCards";

export default async function SingleCardsServer() {
    
    const dataServer = await FetchingAnilist()

    return <SingleCards data={dataServer[Math.floor(Math.random() * 40)]}/>
}