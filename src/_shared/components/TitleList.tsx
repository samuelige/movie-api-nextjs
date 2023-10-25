import React, {FC} from 'react'

interface TitleListProps {
    data: string[];
    title: string;
}

const TitleList:FC<TitleListProps> = ({title, data}) => {
  return (
    <div className='space-y-4'>
        <h5 className="text-lightGray text-text-xl">{title}</h5>
        {
            data && (
                <ul className='flex flex-col text-white'>
                    {
                        data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default TitleList