import GenresByServer from "./genresServer";

export default function Genre({ params }: { params: { collection: string } }) {

    const {collection} = params

    return (
        <main>
            <GenresByServer collection={collection}/>
        </main>
    );
}