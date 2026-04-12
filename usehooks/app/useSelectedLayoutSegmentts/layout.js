import React from 'react'

const layout = ({children}) => {
  return (
    // this is separate layout for route("setting")
    <div>{children}</div>
  )
}

export default layout