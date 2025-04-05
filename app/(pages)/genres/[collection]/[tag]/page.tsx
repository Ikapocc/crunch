
import { lazy, Suspense } from "react"
import LoadingSkeleton from "./loading"
import Spinner from "@/app/components/spinner"

const TagServer = lazy(() => import("./tagServer"))

export default function Tag({params} : {params : {tag : string}}) {

    const {tag} = params

    return(
        <main>
            <Suspense fallback={<Spinner />}>
                <TagServer tag={tag} />
            </Suspense>
        </main>
    )
}