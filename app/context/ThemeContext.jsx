'use client'
import {createContext, useState, useEffect} from 'react'

export const ThemeContext = createContext()

const getFromLocalStorage = ()=>{
    if(typeof window !== 'undefined'){
        return localStorage.getItem('theme') || 'light';
    }
}

export const ThemeContextProvider = ({children})=>{
    const [theme, setTheme]  = useState(()=>{
        return getFromLocalStorage();
    })

    const toogleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(()=>{
        localStorage.setItem('theme', theme)
    },[theme])
    return <ThemeContext.Provider value={{theme, toogleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider