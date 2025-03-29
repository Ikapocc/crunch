import GenresCard from "@/app/components/genresCard";
import { FetchSeriesByGenre } from "@/app/services/anilistFetching";

export default async function GenresByServer({collection} : {collection : string}) {
    const seriesData = await FetchSeriesByGenre({genre : collection})

    const GenreCollection = [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Ecchi",
            "Fantasy",
            "Hentai",
            "Horror",
            "Mahou Shoujo",
            "Mecha",
            "Music",
            "Mystery",
            "Psychological",
            "Romance",
            "Sci-Fi",
            "Slice of Life",
            "Sports",
            "Supernatural",
            "Thriller"
    ]

    return(
        <section className="flex flex-col items-center py-16">
            <h1 className="text-4xl py-8">
                {collection.toUpperCase().slice(0, 1) + collection.slice(1)}
            </h1>
            <section className="flex flex-col w-full">
                <div className="lg:max-w-[70rem] max-lg:w-full mx-auto">
                    {GenreCollection.map((itemsGenre) => {
                        const seriesByGenre = seriesData?.filter(items => items.genres.includes(itemsGenre))

                        return <GenresCard key={itemsGenre} data={seriesByGenre} title={itemsGenre}/>
                    })}
                </div>
            </section>
        </section>
    )
}