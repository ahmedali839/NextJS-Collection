'use client'
 
import Link from 'next/link'
import { useNavigationBlocker } from '../contexts/navigation-blocker'
 
export function CustomLink({ children, ...props }) {
  const { isBlocked } = useNavigationBlocker()
 
  return (
    <Link
      onNavigate={(e) => {
        if (
          isBlocked &&
          !window.confirm('You have unsaved changes. Leave anyway?')
        ) {
          e.preventDefault()
        }
      }}
      {...props}
    >
      {children}
    </Link>
  )
}