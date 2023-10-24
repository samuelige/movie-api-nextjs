import CustomMovieCard from '@/_shared/components/CustomMovieCard';
import { MoviesResponse } from '@/types/movies';
import React, {FC} from 'react'

interface MovieGridProps {
  data: MoviesResponse[];
}

const MovieGrid:FC<MovieGridProps> = ({data}) => {
  return (
    <div className='flex flex-col gap-y-10 md:grid md:grid-cols-3 md:gap-x-10 xl:grid-cols-4 xl-1:gap-[4.69rem]'>
      {
        data?.map((item, index) => (
          <CustomMovieCard
            key={index}
            imageSrc={item.Poster}
            title={item.Title}
            year={item.Year}
          />
        ))
      }
    </div> 
  )
}

export default MovieGrid