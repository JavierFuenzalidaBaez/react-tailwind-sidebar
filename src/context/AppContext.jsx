import { useState, useEffect, createContext, useContext } from 'react'

export const AppContext = createContext()

export default function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <AppContext.Provider value={{ theme, handleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppData = () => useContext(AppContext)
