import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="container bg-white">
                <Link href='/about'>about</Link>
                <Link href='/home'>home</Link>
            </div>
        </div>
    )
}

export default Navbar