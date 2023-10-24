import React from 'react'
import Image from 'next/image'
import logo from "@/_shared/assets/images/2.Logos/logo.png?url"


const Header = () => {
  return (
    <header className="px-4 lg:px-8 xl-1:px-0 w-full flex flex-col h-[5rem] justify-center">
        <div className="flex flex-row items-center w-full xl-1:max-w-[80rem] xl-1:m-auto">
            <div className="w-32">
                <Image src={logo} width={0} height={0}  alt="logo-img" className={`w-full object-fill`}/>
            </div>
        </div>
    </header>
  )
}

export default Header