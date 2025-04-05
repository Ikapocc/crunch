import React from "react";

export default function LoadingSkeleton() {
    return(        
        <div className="flex flex-col gap-8 w-full py-16 items-center">
            <div className="animate-pulse min-h-[2.5rem] rounded-lg w-[16rem] bg-gray-200 my-24 dark:bg-gray-700 mb-8"></div>
            <div role="status" className="animate-pulse flex gap-6 py-8 mx-auto">
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
            <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="animate-pulse flex gap-6 py-8 mx-auto">
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <div className="min-h-[12rem] bg-gray-200 dark:bg-gray-700 w-32 mb-4"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    )
}