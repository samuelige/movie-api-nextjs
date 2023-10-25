'use client'
import React, {FC, useEffect, useState} from 'react'
import left_arrow_icon from "@/_shared/assets/images/1.Icons/icon-arrow-grey.svg?url"
import imdb_logo from "@/_shared/assets/images/2.Logos/logo-imdb.svg?url"
import logo_rotten from "@/_shared/assets/images/2.Logos/logo-rotten-tomatoes.svg?url"
import Image from 'next/image'
import CustomBtn from '@/_shared/components/CustomBtn'
import TitleList from '@/_shared/components/TitleList'
import { toArray } from '@/_lib/utils/toArray'
import { useParams, useRouter } from "next/navigation"
import { useQuery } from 'react-query'
import { fetchSingleMovieAction } from '@/api/movies.actions'
import CustomLoader from '@/_shared/components/CustomLoader'
import { MoviesDetailsResponse } from '@/types/movies'
import lazyLoader from "@/_shared/assets/images/2.Illustrations/lazy_loader.gif?url"

const MovieDetailsContianer:FC = () => {
    const params = useParams();
    const router = useRouter();

    const [retrieveData, setRetrieveData] = useState<MoviesDetailsResponse>();

    const { data: getMovieDetailData, isLoading: isLoading_SG_movie } = useQuery(['single_movie', params?.id],
        fetchSingleMovieAction,
        {
            refetchOnWindowFocus: false,
            enabled: !!params?.id
        }
    );

    // @ts-ignore
    useEffect(() => setRetrieveData(getMovieDetailData?.data), [getMovieDetailData?.data]);

  return (
    <div className="w-full px-7 lg:px-12 mt-4 bg-transparent xl-1:px-0 lg:pb-16 xl-1:pb-0">
        <div className="w-full flex flex-col xl-1:max-w-[80rem] xl-1:m-auto">
            {
                isLoading_SG_movie ? (
                    <CustomLoader/>
                ):(
                    <div className="w-full flex flex-col">
                        <button className="w-[2rem]  bg-transparent flex flex-row justify-between items-start p-0  border-0 outline-0 rounded-sm" onClick={() => router.push("/")}>
                            <Image src={left_arrow_icon} alt="left_arrow_icon" className='hover:brightness-0 hover:invert' width={32} height={32}/>
                        </button>

                        <div className="mt-8 flex flex-col lg:flex-row lg:justify-between ">
                            <div className="mt-11 lg:mt-0 lg:w-[28.375rem] xl:w-[34.375rem] xl-1:w-[37.375rem] space-y-12">
                                <div className='space-y-6'>
                                    <p className="text-lightGray space-x-1"><span>{retrieveData?.Runtime}</span> <span>&#x2022;</span> <span>{retrieveData?.Year}</span> <span>&#x2022;</span> <span className='text-dark bg-lightGray py-1 px-2 rounded-md' >R</span></p>
                                    <h1 className="text-[1.375rem] font-bold md:text-[5rem] text-white leading-[5.5rem]">{retrieveData?.Title}</h1>
                                </div>
                                    
                                <div className='flex flex-row space-x-4'>
                                    {
                                        retrieveData?.Ratings && retrieveData?.Ratings[0] && (
                                            <CustomBtn
                                                image={imdb_logo}
                                                bgColor={"bg-mainYellow"}
                                                brdColor={"border-y-mainYellow border-l-mainYellow"}
                                                content={retrieveData?.Ratings && retrieveData?.Ratings[0]?.Value || ""}
                                                size={56}
                                                isNested
                                            />
                                        )
                                    }

                                    {
                                        retrieveData?.Ratings && retrieveData?.Ratings[1] && (
                                            <CustomBtn
                                                image={logo_rotten}
                                                bgColor={"bg-mainRed"}
                                                brdColor={"border-y-mainRed border-l-mainRed"}
                                                content={retrieveData?.Ratings && retrieveData?.Ratings[1]?.Value || ""}
                                                size={26}
                                                isNested
                                            />
                                        )
                                    }
                                    
                                </div>

                                <div className='space-y-4'>
                                    <h5 className="text-lightGray text-text-xl">Plot</h5>
                                    <p className='text-white'>{retrieveData?.Plot}</p>
                                </div>

                                <div className='flex flex-col md:flex-row md:space-x-16 md:items-start'>
                                    <TitleList
                                        title={"Cast"}
                                        data={toArray(retrieveData?.Actors || "")}
                                    />
                                    <TitleList
                                        title={"Genre"}
                                        data={toArray(retrieveData?.Genre || "")}
                                    />
                                    <TitleList
                                        title={"Director"}
                                        data={toArray(retrieveData?.Director || "")}
                                    />
                                </div>

                            </div>

                            <div className="w-full h-[14.3125rem] rounded-[0.35738rem] md:h-[40] md:rounded-[0.62538rem] lg:w-[26rem] xl:w-[34.98219rem]">
                                <div className='w-full flex flex-row justify-end'>
                                    <Image className='rounded-lg' src={retrieveData?.Poster === "N/A" ? lazyLoader : retrieveData?.Poster || lazyLoader} alt="Hero image" width={440} height={440}/>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                )
            }
            
        </div>
    </div>
  )
}

export default MovieDetailsContianer