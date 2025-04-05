export function Search() {
    return(
        <a href="/search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width={23} viewBox="0 0 24 24" data-t="search-svg" aria-labelledby="search-svg" aria-hidden="false" role="img">
                <title id="search-svg">Buscar</title>
                <path d="M15.474 14.035l6.235 6.26a1 1 0 1 1-1.418 1.41l-6.228-6.253a7.5 7.5 0 1 1 1.41-1.418zM9.5 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z">
                </path>
            </svg>
        </a>
    )
}

export function Save({color} : {color : string}) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill={color} width={20} viewBox="0 0 24 24" data-t="watchlist-svg" aria-labelledby="watchlist-svg" aria-hidden="false" role="img">
            <title id="watchlist-svg">Favoritos</title><path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z">
            </path>
        </svg>
    )
}

export function Account() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width={23} viewBox="0 0 24 24" data-t="user-settings-svg" aria-labelledby="user-settings-svg" aria-hidden="true" role="img">
            <title id="user-settings-svg">Menú de la cuenta</title><path d="M12 20a6.01 6.01 0 0 1-5.966-5.355L12 12.088l5.966 2.557A6.01 6.01 0 0 1 12 20m0-16c1.654 0 3 1.346 3 3s-1.345 3-2.999 3h-.002A3.003 3.003 0 0 1 9 7c0-1.654 1.346-3 3-3m7.394 9.081l-4.572-1.959A4.997 4.997 0 0 0 17 7c0-2.757-2.243-5-5-5S7 4.243 7 7c0 1.71.865 3.22 2.178 4.122l-4.572 1.959A.999.999 0 0 0 4 14c0 4.411 3.589 8 8 8s8-3.589 8-8c0-.4-.238-.762-.606-.919">
            </path>
        </svg>
    )
}

export function Play({color} : {color : string}) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill={color} width={20} viewBox="0 0 24 24" data-t="play-svg" aria-labelledby="play-svg" aria-hidden="true" role="img"><title id="play-svg">Reproducir</title><path d="M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006">
            </path>
        </svg>
    )
}

export function ArrowBack() {
    return(
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" width={45} viewBox="0 0 24 24" data-t="angle-left-svg" aria-labelledby="angle-svg" aria-hidden="true" role="img"><title id="angle-svg">Anterior</title><path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z">
            </path>
        </svg>
    )
}

export function ArrowForward() {
    return(
        <svg className="rotate-180" fill="white" xmlns="http://www.w3.org/2000/svg" width={45} viewBox="0 0 24 24" data-t="angle-right-svg" aria-labelledby="angle-svg" aria-hidden="true" role="img"><title id="angle-svg">Siguiente</title><path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z">
            </path>
        </svg>
    )
}

export function Add({color,witdh = 20} : {color : string, witdh : number }) {
    return(
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={witdh} data-t="add-svg" aria-labelledby="add-svg" aria-hidden="false" role="img"><title id="add-svg">Añadir</title><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg>
    )
}

export function Share({color,witdh = 20} : {color : string, witdh : number }) {
    return(
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={witdh} data-t="share-svg" aria-labelledby="share-svg" aria-hidden="true" role="img"><title id="share-svg">Compartir</title><path d="M18 2c2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.385 0-2.606-.704-3.323-1.773l-5.02 2.151c.22.496.343 1.045.343 1.622 0 .577-.122 1.126-.342 1.622l5.019 2.151C15.394 14.703 16.615 14 18 14c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.113.005-.225.014-.335L8.35 15.238C7.69 15.718 6.878 16 6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c.878 0 1.69.283 2.35.762l5.664-2.427C14.004 6.225 14 6.113 14 6c0-2.21 1.79-4 4-4zm0 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zM6 10c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm12-6c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" transform="translate(-60 -1504) translate(60 1504)"></path></svg>
    )
}

export function Options({color,witdh = 15} : {color : string, witdh : number }) {
    return(
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24" width={witdh} data-t="more-svg" aria-labelledby="more-svg" aria-hidden="true" role="img"><title id="more-svg">Más acciones</title><path d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm2 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
    )
}

export function Filters() {
    return(
        <svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} data-t="filter-svg" aria-labelledby="filter-svg" aria-hidden="true" role="img"><title id="filter-svg">Filtros / Opciones</title><path fillRule="evenodd" d="M9 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2M3 8a1 1 0 0 1 0-2h2.142c.447-1.72 2-3 3.858-3s3.411 1.28 3.858 3H21a1 1 0 0 1 0 2h-8.142c-.447 1.72-2 3-3.858 3S5.589 9.72 5.142 8H3zm12 11c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2zm6-3a1 1 0 0 1 0 2h-2.142c-.447 1.72-2 3-3.858 3s-3.411-1.28-3.858-3H3a1 1 0 0 1 0-2h8.142c.447-1.72 2-3 3.858-3s3.411 1.28 3.858 3H21z">
            </path>
        </svg>
    )
}

export function Favorite() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width={20} viewBox="0 0 24 24" data-t="favorite-svg" aria-labelledby="favorite-svg" aria-hidden="true" role="img"><title id="favorite-svg">Marcar como Favorito</title><path d="M19.84 9.476C20.442 6.858 19.07 5 16.965 5c-1.31 0-2.377.534-3.337 1.71L12.046 8.65l-1.542-1.97C9.602 5.53 8.536 5 7.144 5 5.132 5 3.658 7.07 4.21 9.477c.601 2.623 3.21 5.702 7.901 9.099 4.512-3.103 7.054-6.163 7.73-9.1zM16.965 3c3.279 0 5.741 2.935 4.824 6.924-.866 3.77-4.103 7.463-9.71 11.076-5.761-3.962-9.034-7.654-9.819-11.076C1.426 6.285 3.818 3 7.144 3c1.322 0 2.485.352 3.49 1.055l-.105.127.282.002c.456.346.879.766 1.267 1.262a7.499 7.499 0 0 1 1.264-1.236l.31.003a9.964 9.964 0 0 0-.115-.146C14.549 3.356 15.692 3 16.965 3z">
            </path>
        </svg>
    )
}

export function Delete() {
    return(
        <svg width={20} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" data-t="trash-svg" aria-labelledby="trash-svg" aria-hidden="true" role="img"><title id="trash-svg">Borrar</title><path d="M13 2h-2a1 1 0 0 0-1 1v1H4a1 1 0 0 0 0 2h1v15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6h1a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1m-1 2v2h5v14H7V6h5V4zm-2 5a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1z">
            </path>
        </svg>
    )
}