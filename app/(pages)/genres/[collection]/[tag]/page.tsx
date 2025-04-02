
import TagServer from "./tagServer"

export default function Tag({params} : {params : {tag : string}}) {

    const {tag} = params

    return(
        <main>
            <TagServer tag={tag} />
        </main>
    )
}