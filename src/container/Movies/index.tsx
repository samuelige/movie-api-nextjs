"use client";
import { debounce } from '@/_lib/utils/debounce';
import CustomSearch from '@/_shared/components/CustomSearch'
import React, {useCallback, useState} from 'react'
import MovieGrid from './MovieGrid';
import { useMutation } from 'react-query';
import {fetchSearchMoviesAction} from "@/api/movies.actions"
import CustomLoader from '@/_shared/components/CustomLoader';
import { MoviesResponse } from '@/types/movies';
import EmptyInstance from '@/_shared/components/EmptyInstance';

const MoviesContainer = () => {
  const [retrieveData, setRetrieveData] = useState<MoviesResponse[]>([]);

  const { mutateAsync: handleSearchMovies, isLoading: isLoading_movies } = useMutation((variables) => fetchSearchMoviesAction(variables), {
    onSuccess: (response) => {
      if(response?.Response === "False"){
        setRetrieveData([])
      } else (
        setRetrieveData(response?.Search)
      )
    }

  });
    
    const handleChange = async (value: string) => {
        console.log(value)
        try {
          // @ts-ignore
          await handleSearchMovies(value)
        } catch (error) {
          
        }
    };

    console.log(retrieveData);
    

    const optimizedFn = useCallback(debounce(handleChange), []);
  return (
    <main  className="w-full px-4 lg:px-8 mt-6 bg-transparent lg:mt-4 xl-1:px-0">
        <div className="w-full flex flex-col xl-1:max-w-[80rem] xl-1:m-auto">
            <CustomSearch 
                placeholder={"Search movies"}
                handleChange={(e) => optimizedFn(e.target.value)}
            />

            <section className='mt-[1.75rem] lg:mt-12 flex flex-col'>
                {
                  !isLoading_movies && retrieveData?.length < 1 ? (
                    <div className='mt-28'>
                      <EmptyInstance/>
                    </div>
                  ) : !isLoading_movies && retrieveData?.length > 1 ? (
                    <>
                      <MovieGrid data={retrieveData}/>
                    </>
                  ) : <CustomLoader/>
                }
                
            </section>
        </div> 
    </main>
  )
}

export default MoviesContainer