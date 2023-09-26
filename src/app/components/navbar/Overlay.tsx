import React from 'react'

interface overlayProps{
    onClick: () => void
}

const Overlay = ({onClick}:overlayProps) => {
  return (
    <div
          onClick={onClick}
          className=" w-full h-screen bg-black opacity-25 -z-10"
        ></div>
  )
}

export default Overlay
