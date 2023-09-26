import React from 'react'

interface menuItem {
    onClick: () => void,
    children: React.ReactNode
}

const ProfileMenu = ({ onClick, children }: menuItem) => {
    return (
        <div onClick={onClick} className=' p-2 m-1 cursor-pointer rounded-md hover:bg-slate-300'>
            {children}
            </div>
    )
}

export default ProfileMenu