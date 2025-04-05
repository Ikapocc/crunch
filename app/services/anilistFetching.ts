import { AnilistListExtendedProps, AnilistProps, AnilistPropsById, AnilistRecomendationProps } from "../types";

export async function FetchingAnilist() : Promise<AnilistProps[]> {
  
    const variables = {
        page: 1
    };  
    
    const query = `
    query($page: Int=1) {
      Page (page: $page){
        pageInfo {
          currentPage,
          hasNextPage
        }
        media (
          type: ANIME
          season: WINTER
          seasonYear: 2025
          averageScore_greater: 60
          sort: [SCORE_DESC]
        ){
        id,
        airingSchedule {
          nodes {
            episode
            timeUntilAiring
          }
        }
        averageScore,
        seasonYear,
        title {
          english,
          native
        },
        coverImage {
          large,
          extraLarge,
          medium,
        },
        description,
        episodes,
        bannerImage
        meanScore
        }
      }
    }`
  
    const anilistFetch = await fetch("https://graphql.anilist.co",{
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({query, variables}),
      next : {revalidate : 3600}
    })
    
    const anilistData = await anilistFetch.json()
  
    return anilistData.data.Page.media
  }

  export async function FetchSeriesByGenreTags({genre, page} : {genre : string, page : number}) : Promise<AnilistListExtendedProps> {   

    const variables = {
      page : page + 1,
      genre : genre
    }
  
    const query = 
      `query($page: Int=1, $genre : String) {
      Page (page: $page){
        pageInfo {
          currentPage,
          hasNextPage
        }
        media (
          type: ANIME
          genre: $genre
          averageScore_greater: 65
          sort: [SCORE_DESC]
        ){
        id,
        airingSchedule {
          nodes {
            episode
            timeUntilAiring
          }
        }
        averageScore,
        seasonYear,
        title {
          english,
          native
        },
        coverImage {
          large,
          extraLarge,
          medium,
        },
        description,
        episodes,
        genres,
        bannerImage
        meanScore
        }
      }
        GenreCollection
      }`
  
      const fetchingData = await fetch("https://graphql.anilist.co",{
        method : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({query, variables})
      })
  
      const data = await fetchingData.json()
  
      return data.data.Page
  }
  
  
export async function FetchSeriesByGenre({genre} : {genre : string}) : Promise<AnilistPropsById[]> {   

  const variables = {
    page : 1,
    genre : genre
  }

  const query = 
    `query($page: Int=1, $genre : String) {
    Page (page: $page){
      pageInfo {
        currentPage,
        hasNextPage
      }
      media (
        type: ANIME
        genre: $genre
        averageScore_greater: 65
        sort: [SCORE_DESC]
      ){
      id,
      airingSchedule {
        nodes {
          episode
          timeUntilAiring
        }
      }
      averageScore,
      seasonYear,
      title {
        english,
        native
      },
      coverImage {
        large,
        extraLarge,
        medium,
      },
      description,
      episodes,
      genres,
      bannerImage
      meanScore
      }
    }
      GenreCollection
    }`

    const fetchingData = await fetch("https://graphql.anilist.co",{
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({query, variables})
    })

    const data = await fetchingData.json()

    return data.data.Page.media
}

export async function FetchingAnilistById({id} : {id : number}) : Promise<AnilistPropsById[]> {
  const variables = {
      page : 1,
      id : id
  }

  const query = 
      `query($page: Int=1, $id : Int) {
          Page (page: $page){
              pageInfo {
              currentPage,
              hasNextPage
              }
              media (
              type: ANIME
              id: $id
              ){
              id,
              airingSchedule {
              nodes {
                  episode
                  timeUntilAiring
              }
              }
              averageScore,
              seasonYear,
              title {
              english,
              native
              },
              coverImage {
              large,
              extraLarge,
              medium,
              },
              genres,
              description,
              episodes,
              bannerImage
              meanScore
              }
          }
      }`

  const fetching = await fetch("https://graphql.anilist.co", {
      method : "POST",
      headers : {
          "Content-Type": "application/json"
      },
      body : JSON.stringify({query, variables})
  })

  const data = await fetching.json()

  return data.data.Page.media
}

export async function FetchingRecommendationSeries({id} : {id : number}) : Promise<AnilistRecomendationProps> {
  
  const variables = {
    page : 1,
    id : id
  }
  
  const query = 
  `query($page: Int=1, $id : Int) {
    Page (page: $page){
      pageInfo {
        currentPage,
        hasNextPage
      }
      media (
        type: ANIME
        id: $id
        averageScore_greater: 60
      ){
      id,
      recommendations (page: 1, perPage: 20) {
        nodes {
          id
          mediaRecommendation {
            id,
            title {
              english
              native
            }
            description
            coverImage {
              extraLarge,
              large
            }
            episodes
            genres
            seasonYear
            meanScore
          }
        }
      }
    }
  }
  }`

  const fetchingData = await fetch("https://graphql.anilist.co", {
    method : "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify({query, variables})
  })

  const data = await fetchingData.json()

  return data.data.Page.media[0]
}

export async function FetchingByInput({input} : {input : string}) : Promise<AnilistProps[]> {
  
  const variables = {
    page : 1,
    input : input
  }
  
  const query = 
  `query($page: Int=1, $input : String) {
    Page (page: $page){
      pageInfo {
        currentPage,
        hasNextPage
        perPage
      }
      media (
        type: ANIME
        search: $input
        averageScore_greater: 65
        sort: [SCORE_DESC]
      ){
      id,
      averageScore,
      seasonYear,
      title {
        english,
        native
      },
      coverImage {
        large,
        extraLarge,
        medium,
      },
      description,
      episodes,
      bannerImage
      meanScore
      }
    }
    }`

    const fetchingData = await fetch("https://graphql.anilist.co", {
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({query, variables})
    })
  
    const data = await fetchingData.json()
  
    return data.data.Page.media
}