import Image from 'next/image'
import React, {FC} from 'react'

interface CustomBtnProps {
    image: string,
    bgColor?: string;
    brdColor?: string;
    content: string;
    size: number;
    isNested: boolean;
}

const CustomBtn:FC<CustomBtnProps> = ({image, isNested, bgColor,brdColor, content, size}) => {
  return (
    <button className={`bg-transparent flex flex-row items-center text-white font-medium rounded-md text-xl ${isNested && "cursor-not-allowed"}`}>
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
                </>
            )
        }
        
    </button>
  )
}

export default CustomBtn