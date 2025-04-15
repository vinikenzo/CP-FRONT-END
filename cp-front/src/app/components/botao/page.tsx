"use client"
import { useContext,useState,createContext } from "react";
import { ThemeContext } from "@/app/Context/themecontext";

const Botao = () => {
    const { theme, toggleTheme } = useContext(ThemeContext) as NonNullable<React.ContextType<typeof ThemeContext>>;

    return(
        <>
            <button className="ml-15 border-1 mt-7 rounded-md bg-blue-500" onClick={toggleTheme}>Alternar para {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}</button>
        </>
    )
}
export default Botao;