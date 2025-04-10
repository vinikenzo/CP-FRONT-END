import Menu from "../menu/page"


const Header = () => {
    return(
        <>
        <header className="h-[100px] border-1 w-auto">
            <p className="float-left text-4xl mt-6 ml-17">Sabores do Front</p>
            <Menu />
        </header>
        </>
    )
}
export default Header;