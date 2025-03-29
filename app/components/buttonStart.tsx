import { Play, Save } from "./icons";

export default function StartButton() {
    return(
        <div className='flex gap-3 z-20'>
            <button className='uppercase bg-[#F47535] text-black font-medium px-3 flex items-center gap-2 cursor-pointer'>
                <Play color="black"/> <p className='uppercase text-sm font-medium'>Comenzar a ver E1</p> 
            </button>
            <button className='border-4 border-[#F47521] border-solid p-[.45rem] cursor-pointer'>
                <Save color='#F47521'/>
            </button>
        </div>
    )
}