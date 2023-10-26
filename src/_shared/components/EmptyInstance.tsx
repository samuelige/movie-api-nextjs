import React from 'react'
import Image from 'next/image'
import emptyInstance_img from "@/_shared/assets/images/2.Illustrations/illustration-empty-state-removebg-preview.png?url"

const EmptyInstance = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white'>
        <Image src={emptyInstance_img} alt={"empty-instance-image"} width={400} height={400} className=''/>
        <h1 className='text-2xl text-white'>Don&apos;t know what to search?</h1>
        <p className='mt-3'>Here&apos;s an offer you can&apos;t refuse</p>
    </div>
  )
}

export default EmptyInstance