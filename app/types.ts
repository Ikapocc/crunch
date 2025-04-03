export interface ProductProps {
    data:   Datum[];
    paging: Paging;
    season: Season;
}

export interface Datum {
    node: Node;
}

export interface Node {
    id:           number;
    title:        string;
    main_picture: MainPicture;
}

export interface MainPicture {
    medium: string;
    large:  string;
}

export interface Paging {
    next: string;
}

export interface Season {
    year:   number;
    season: string;
}

export interface AnilistExtendedProps {
    pages:      AnilistListExtendedProps[];
    pageParams: number[];
}

export interface AnilistListExtendedProps {
    pageInfo: PageInfo;
    media:    AnilistProps[];
}

export interface PageInfo {
    currentPage: number, 
    hasNextPage: boolean,
}

export interface AnilistProps {
    id:             number;
    airingSchedule: AiringSchedule;
    averageScore:   number;
    seasonYear:     number;
    title:          Title;
    coverImage:     CoverImage;
    genres : string[],
    description:    string;
    episodes:       number;
    bannerImage:    string;
    meanScore:      number;
}

export interface AnilistPropsById extends AnilistProps {
    genres : string[]
}

export interface AiringSchedule {
    nodes: NodeEpisodes[];
}

export interface NodeEpisodes {
    episode:         number;
    timeUntilAiring: number;
}

export interface CoverImage {
    large:      string;
    extraLarge: string;
    medium?:     string;
}

export interface AnilistRecomendationProps {
    id:              number;
    recommendations: Recommendations;
}

export interface Recommendations {
    nodes: Node[];
}

export interface Node {
    id:                  number;
    mediaRecommendation: MediaRecommendation;
}

export interface MediaRecommendation {
    id:          number;
    title:       Title;
    description: string;
    coverImage:  CoverImage;
    genres:      string[];
    seasonYear:  number;
    meanScore:   number;
    episodes : number;
}

export interface Title {
    english: null | string;
    native:  string;
}