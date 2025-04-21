import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Header from "../app/components/header"
import Banners from "@/app/components/banners"
import RenderCard from "@/app/components/renderCards"
import { AnimateCarousel } from "@/app/components/carousel"

describe("Header page", () => {
    it("renders the main heading", () => {
        render(<Header />)
        const heading = screen.getByRole("banner")

        expect(heading).toBeInTheDocument()  
    })
})

/* describe("Card Component", () => {
    const mockData = [
        {
            "id": 9253,
            "airingSchedule": {
                "nodes": []
            },
            "averageScore": 89,
            "seasonYear": 2011,
            "title": {
                "english": "Steins;Gate",
                "native": "シュタインズ・ゲート"
            },
            "coverImage": {
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9253-tIUXF2gfU8Sg.jpg",
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-tIUXF2gfU8Sg.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx9253-tIUXF2gfU8Sg.jpg"
            },
            "description": "Self-proclaimed mad scientist Okabe Rintarou lives in a small room in Akihabara, where he invents \"future gadgets\" with fellow lab members Shiina Mayuri, his air-headed childhood friend, and Hashida Itaru, an otaku hacker. The three pass the time by tinkering with their latest creation, a \"Phone Microwave\" that can be controlled through text messages. \n<br><br>\nThe lab members soon face a string of mysterious incidents that lead to a game-changing discovery: the Phone Microwave can send emails to the past and thus alter history. Adapted from the critically acclaimed visual novel by 5pb. and Nitroplus, Steins;Gate takes Okabe to the depths of scientific theory and human despair as he faces the dire consequences of changing the past.",
            "episodes": 24,
            "genres": [
                "Drama",
                "Psychological",
                "Sci-Fi",
                "Thriller"
            ],
            "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n9253-JIhmKgBKsWUN.jpg",
            "meanScore": 89
        },
        {
            "id": 19,
            "airingSchedule": {
                "nodes": []
            },
            "averageScore": 88,
            "seasonYear": 2004,
            "title": {
                "english": "Monster",
                "native": "MONSTER"
            },
            "coverImage": {
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx19-gtMC64182sm4.jpg",
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19-gtMC64182sm4.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx19-gtMC64182sm4.jpg"
            },
            "description": "Dr. Kenzo Tenma is a renowned Japanese brain surgeon working at a leading hospital in Germany. One night, Dr. Tenma risks his reputation and career to save the life of a critically wounded young boy over that of the town mayor who had been planning to support the hospital financially. A string of mysterious murders begin to occur soon after the operation, and Dr. Tenma emerges as the primary suspect despite no incriminating evidence. \n<br><br>\nA doctor is taught to believe that all life is equal; however, when another series of murders occur in the surgeon's vicinity, Dr. Tenma's beliefs are shaken as his actions that night are shown to have much broader consequences than he could have imagined. Leaving behind his life as a surgeon he embarks on a journey across the country to unravel the mystery of the boy he saved.",
            "episodes": 74,
            "genres": [
                "Drama",
                "Horror",
                "Mystery",
                "Psychological",
                "Thriller"
            ],
            "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/19-kJhwsB0Z97tL.jpg",
            "meanScore": 88
        },
        {
            "id": 21719,
            "airingSchedule": {
                "nodes": [
                    {
                        "episode": 1,
                        "timeUntilAiring": -147427394
                    }
                ]
            },
            "averageScore": 85,
            "seasonYear": 2020,
            "title": {
                "english": "Fate/stay night [Heaven’s Feel] III. spring song",
                "native": "Fate/stay night[Heaven's Feel] ⅠⅠⅠ.spring song"
            },
            "coverImage": {
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21719-MSdTlkno0Z0u.jpg",
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21719-MSdTlkno0Z0u.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21719-MSdTlkno0Z0u.jpg"
            },
            "description": "The third film in a trilogy adaptation of the 3rd route of the popular visual novel: Fate/stay night.\n<br><br>\nTo save the girl, to enact the justice he's chosen...The young man will no longer turn a blind eye to\nthe truth. Mages (Masters) and Heroic Spirits (Servants) work together in the battles of the Holy\nGrail War, a fight for an omnipotent wish-granting container called the Holy Grail. However, this\nwar has become horribly twisted.\n<br><br>\nA young woman named Sakura Matou, with the sins she has committed, drowns in the murky\ndarkness. A young man named Shirou Emiya, who vowed to protect Sakura, works together with\nRin Tohsaka and throws himself into the raging battle to put a stop to the Holy Grail War. Illyasviel\nvon Einzbern, as one of the few who knows the truth behind the conflict, confronts her own fate,\nwhile Zouken Matou uses Sakura to try to fulfill his own desires.\n<br><br>\nWill the young man’s wish reach her even as he challenges fate itself, battling against the rising\ntide? The Holy Grail War is coming to an end... The final battle is about to begin.\n<br><br>\n(Source: Aniplex of America)\n",
            "episodes": 1,
            "genres": [
                "Action",
                "Drama",
                "Fantasy",
                "Psychological",
                "Supernatural",
                "Thriller"
            ],
            "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21719-5HkmNCw4YhpP.jpg",
            "meanScore": 85
        }
    ]

    beforeEach(() => render(<RenderCard cardsData={mockData}/>))

    test("Deberia de existir el titulo", () => {
        expect(screen.getByText("Steins;Gate")).toBeInTheDocument()
    })
}) */

describe("Carousel", () => {

    beforeEach(() => render(<AnimateCarousel />))

    it("renders the sub | dob", () => {

        const sub = screen.getByText("Sub | Dob")

        expect(sub).toBeInTheDocument()
    })

    it("render the image carousel", async () => {
        const imageCarousel = await screen.getByAltText("items logo")

        expect(imageCarousel).toBeVisible()
    })
})

describe("Card component", () => {
    it("Render a card component", () => {
        const banners : Record<string, string>  = {
            banner1 : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920/CurationAssets/I'm%20Getting%20Married%20to%20a%20Girl%20I%20Hate%20in%20My%20Class/SEASON%201/MARKETING%20BANNER/ImGettingMarriedtoaGirlIHateinMyClass-S1-KV1-Banner-2100x700-ES.png",
            banner2 : "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=1920/CurationAssets/Blue%20Exorcist/SEASON%203/MARKETING%20BANNER/BlueExorcist-S3C3-KV1-Banner-2100x700-ES.png"
        }

        render(<Banners image={banners.banner1}/>)
        const image = screen.getByAltText("small section")

        expect(image).toBeInTheDocument()
    })
})