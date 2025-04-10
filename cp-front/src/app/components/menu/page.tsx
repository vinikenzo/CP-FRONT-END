import Link from "next/link"


const Menu = () =>{
    return(
        <>
            <ul className="flex space mr-0 w-auto float-right">
                <div className="border-1 h-[99px] w-[200px] text-center text-2xl">
                    <li className="p-7"><Link href="/">Home</Link></li>
                </div>
                <div className="border-1 h-[99px] w-[200px] text-center text-2xl">
                    <li className="p-5"><Link href="/cafeDaManha">Café da manha</Link></li>
                </div>
                <div className="border-1 h-[99px] w-[200px] text-center text-2xl">
                    <li className="p-5"><Link href="/pratosPrincipais">Pratos principais</Link></li>
                </div>
                <div className="border-1 h-[99px] w-[210px] text-center text-2xl">
                    <li className="mt-7"><Link href="/acompanhamentos">Acompanhamentos</Link></li>
                </div>
                <div className="border-1 h-[99px] w-[200px] text-center text-2xl">
                    <li className="p-7"><Link href="/sobremesas">Sobremesas</Link></li>
                </div>

            </ul>

        </>
    )

}
export default Menu;