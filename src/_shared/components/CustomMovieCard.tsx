import Image from 'next/image'
import React, { FC, useState } from 'react'
import like_icon from "@/_shared/assets/images/1.Icons/icon-heart-grey.svg?url"
import liked_icon from "@/_shared/assets/images/1.Icons/icon-heart-full.svg?url"

interface CustomMovieCardProps {
    imageSrc: string;
    title: string;
    year: string;
}

const CustomMovieCard:FC<CustomMovieCardProps> = ({imageSrc, title, year}) => {
    const [liked, setLiked] = useState(false);
    
    const toggleLike = () => {
        setLiked((prevLiked) => !prevLiked);
    };

  return (
    <div className="group relative w-full  h-[21rem] overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <Image src={imageSrc === "N/A" ? "" : imageSrc || ""} width={256} height={384} alt="custom-movie-image" className='w-full object-fill' />
        <button
          className={`absolute z-50 top-3 right-3 text-gray-200 transition-all transform scale-125 ${!liked && "opacity-0"} group-hover:opacity-100`}
          onClick={toggleLike}
        >
            <Image
                src={!liked ? like_icon : liked_icon}
                alt="search_icon"
                className="object-fill w-5 h-5"
            />
        </button>
        
        <div className="absolute inset-0 flex items-center bg-grayOvelay opacity-0 p-3  transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-white text-start mt-auto ">
                <h2 className="text-2xl font-bold leading-[1.875rem]">{title}</h2>
                <p className="text-sm mt-2">{year}</p>
            </div>
        </div>
    </div>
  )
}
export default CustomMovieCard