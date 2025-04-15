"use client"

import React, { createContext, useContext, useState } from "react";
import { Save } from "../components/icons";

type ToastProps = {title : string; message: string; type : "added" | "remove" | "" };

interface ToastProviderProps{
    showToast : (props : ToastProps) => void
}

interface ContextProps {
    children : React.ReactNode
}

const toastContext = createContext<ToastProviderProps | undefined>(undefined)

export const ToastProvider : React.FC<ContextProps> = ({children}) => {

    const [entrys, setEntrys] = useState<ToastProps>()
    
    function showToast(props : ToastProps) {
        setEntrys(props)
        setTimeout(() => {
            setEntrys(prev => {
                return {
                    title : "",
                    message : "",
                    type : ""
                }
            })
        }, 3500)
    }

    return(
        <toastContext.Provider value={{
            showToast
        }}>
            <div className="fixed right-8 bottom-24 z-50">
                {entrys?.title ? <span className={`font-bold text-base text-[#F47535] bg-[#23252b] py-6 px-10 rounded-lg flex gap-2`}>
                    {entrys.type === "added" ? <Save color="red"/> : <Save color="orange"/>} {entrys.title} {entrys.message}
                </span> : <></>}
            </div> 
            {children}
        </toastContext.Provider>
    )
}

export function useToastContext() : ToastProviderProps {
    const provider = useContext(toastContext)
    if (!provider) throw new Error("useToastContext debe usarse dentro de <ToastProvider>"); 
    return provider
}