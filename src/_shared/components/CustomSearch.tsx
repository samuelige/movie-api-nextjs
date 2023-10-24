"use client";
import { FC} from 'react'
import Image from 'next/image';
import search from "@/_shared/assets/images/1.Icons/icon-magnifier-disabled.svg?url"


type I_Search = {
    placeholder?: string;
    handleChange?: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    name?: string;
    value?: string;
}

const CustomSearch:FC<I_Search> = ({placeholder, handleChange, name, value}) => {

    return (
        <div className="flex flex-row w-full pl-4 pr-3 py-3 items-center bg-white rounded-md border-[1px] border-gray-200">
            <Image
                src={search}
                alt="search_icon"
                className="object-fill w-5 h-5"
            />
            <input 
                type="text" 
                placeholder={placeholder} 
                className="ml-4 outline-none w-full bg-transparent text-base font-normal leading-6 text-lightGray"
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
  }

  export default CustomSearch;