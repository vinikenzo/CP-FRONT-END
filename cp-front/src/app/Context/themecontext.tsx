"use client"
import React, { createContext, useState, useEffect, useContext, Children } from 'react';


interface ThemeContextType{
    theme:string;
    toggleTheme: () => void;
}
//setar um ThemeContext inicialmente como nulo
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState ("light");

    //alterna entre modo dark e light para o ContextType
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    React.useEffect(()=>{
        document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
        document.body.style.color = theme === "light" ? "#000" : "#fff";
    },[theme]);

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};


