import {create} from "zustand";

export interface ListProps {
    id : number,
    title : string,
    image : string,
    chapters : number
}

interface StoreProps {
    list : ListProps[]
    addToTheList : (items : ListProps) => void
    removeFromTheList : (items : ListProps) => void
}

const IsLocalStorage = GetLocalStorageKey("currentList")

export const useStoreList = create<StoreProps>((set) => ({
    list : IsLocalStorage.length > 1 ? IsLocalStorage : [],
    addToTheList : (items) => set((state) => {

        const newList = [...state.list, items]

        if (typeof window !== 'undefined') {
            LocalStorageSave("currentList", newList)
        }

        return{
            list : newList
        }
    }),
    removeFromTheList : (items) => set((state) => {

        const newList = state.list.filter(itemsFilter => itemsFilter.id !== items.id)
        if (typeof window !== 'undefined') {
            LocalStorageSave("currentList", newList)
        }

        return {
            list : newList
        }
    })
}))

function LocalStorageSave<T>(key : string, data : T) {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(data))
    }
}

export function GetLocalStorageKey(key : string) {
    if (typeof window === 'undefined') return []

    const local = localStorage.getItem(key)
    return JSON.parse(local!)
}