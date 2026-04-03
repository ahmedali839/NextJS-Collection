'use client'
 
import { createContext, useState, useContext } from 'react'
 
export const NavigationBlockerContext = createContext({
  isBlocked: false,
  setIsBlocked: () => {},
})
 
export function NavigationBlockerProvider({ children }) {
  const [isBlocked, setIsBlocked] = useState(false)
 
  return (
    <NavigationBlockerContext.Provider value={{ isBlocked, setIsBlocked }}>
      {children}
    </NavigationBlockerContext.Provider>
  )
}
 
export function useNavigationBlocker() {
  return useContext(NavigationBlockerContext)
}