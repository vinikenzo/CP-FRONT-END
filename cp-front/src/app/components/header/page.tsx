
import Botao from "../botao/page";
import Menu from "../menu/page"


const Header = () => {
    return(
        <>
            <header className="h-[100px] border-1 w-auto mb-7">
                <p className="float-left text-3xl  mt-6 ml-2">Sabores do Front</p>
                <Botao></Botao>
                <Menu />
            </header>
        </>
    )
}
export default Header;