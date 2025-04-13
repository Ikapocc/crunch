"use client"

import React, { createContext, useContext, useState } from "react";

export interface ListProps {
    id : number,
    title : string,
    image : string,
    chapters : number
}

interface ProviderProps {
    children : React.ReactNode
}

interface ContextProps {
    list : ListProps[]
    addToTheList : (items : ListProps) => void
    removeFromTheList : (items : ListProps) => void
}

const ContextUser = createContext<ContextProps | undefined>(undefined)

export const ProviderContext : React.FC<ProviderProps> = ({children}) => {
    const [list, setlist] = useState<ListProps[] | []>([])

    function addToTheList(items : ListProps) {
        setlist(prev => [...prev, items])
    }

    function removeFromTheList(items : ListProps) {
        const isItemInList = list.filter(itemsInList => itemsInList.id !== items.id)

        setlist(isItemInList)
    }

    return (
        <ContextUser.Provider value={{
            list, addToTheList, removeFromTheList
        }}>
            {children}
        </ContextUser.Provider>
    )
}

export function useListContext() : ContextProps {
    const provider = useContext(ContextUser)
    if (!provider) throw new Error("useListContext debe usarse dentro de <ProviderContext>"); 
    return provider
}