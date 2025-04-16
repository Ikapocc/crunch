import Link from "next/link";
import { Account, Save, Search } from "./icons";

export default function Header() {
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
                    <Account />
                </section>
            </nav>
        </header>
    )
}