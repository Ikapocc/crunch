import Link from "next/link";
import { Account, LogOut, Save, Search } from "./icons";
import { UserData } from "../libs/auth";

export default async function Header() {

    const session = await UserData()
        
    return(
        <header className="text-white sticky top-0 z-[90] w-full">
            <nav className='flex justify-between py-4 bg-[#23252b] text-sm px-20 sticky'>
                <ul className='flex separte-items'>
                    <li>Explorar</li>
                    <li>Juegos</li>
                    <li>Noticias</li>
                </ul>
                <section className='flex separte-items'>
                    <Search />
                    <Link className="cursor-pointer" href={"/save"}>
                        <Save color='white'/>
                    </Link>
                    {session?.user?.name ? <LogOut /> : <Account />}
                </section>
            </nav>
        </header>
    )
}