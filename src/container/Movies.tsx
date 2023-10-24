"use client";
import { debounce } from '@/_lib/utils/debounce';
import CustomSearch from '@/_shared/components/CustomSearch'
import React, {useCallback} from 'react'

const MoviesContainer = () => {
    const handleChange = async (value: string) => {
        console.log(value)
    };

    const optimizedFn = useCallback(debounce(handleChange), []);
  return (
    <main  className="w-full px-4 lg:px-8 mt-6 bg-transparent lg:mt-4 xl-1:px-0">
        <div className="w-full flex flex-col xl-1:max-w-[80rem] xl-1:m-auto">
            <CustomSearch 
                placeholder={"Search movies"}
                handleChange={(e) => optimizedFn(e.target.value)}
            />

            <section></section>
        </div> 
    </main>
  )
}

export default MoviesContainer