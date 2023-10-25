import Image from 'next/image'
import React, {FC} from 'react'

interface CustomBtnProps {
    image: string,
    bgColor?: string;
    brdColor?: string;
    content: string;
    size: number;
    isNested?: boolean;
    isActive?: boolean;
    activeColor?: string;
    handleClick?: ()=>void;
}

const CustomBtn:FC<CustomBtnProps> = ({image, isNested, isActive, bgColor, brdColor, content, size,activeColor, handleClick}) => {
  return (
    <button onClick={handleClick} className={` text-lightGray ${isActive ? activeColor : "bg-transparent border-[1px] border-lightGray"} hover:border-mainRed flex flex-row items-center  font-medium rounded-md text-xl ${isNested ? "cursor-not-allowed border-0  text-white" : " pl-2 pr-2 py-2 space-x-2"}`}>
        {
            isNested ? (
                <>
                    <div className={`pl-2 pr-2 py-2 border-y-[2px] border-l-[2px] ${brdColor && brdColor} rounded-tl-md rounded-bl-md ${bgColor && bgColor} `}>
                        <Image src={image} width={size} height={size} alt="btn-img" />
                    </div>
                    <div className='pl-2 pr-2 py-2 border-y-[1px] border-r-[1px] border-y-lightGray border-r-lightGray rounded-tr-md rounded-br-md'>
                        {content}
                    </div>
                </>
            ) : (
                <>
                    <Image src={image} width={size} height={size} alt="btn-img" />
                    <span>{content}</span>
                </>
            )
        }
        
    </button>
  )
}

export default CustomBtn