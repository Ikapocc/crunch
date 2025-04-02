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

export const useStoreList = create<StoreProps>((set) => ({
    list : [],
    addToTheList : (items) => set((state) => {
        
        return{
            list : [...state.list, items]
        }
    }),
    removeFromTheList : (items) => set((state) => {

        const newList = state.list.filter(itemsFilter => itemsFilter.id !== items.id)

        return {
            list : newList
        }
    })
}))