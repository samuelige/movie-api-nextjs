import React, {FC} from 'react'
import Providers from '@/_lib/providers'
import { IChildren } from '@/types/children'
import Header from './Header'

const Layoutwrapper:FC<IChildren> = ({children}) => {
  return (
    <div className='h-screen overflow-auto bg-dark '>
        <Providers>
            <Header/>
            {children}
        </Providers>
    </div>
  )
}

export default Layoutwrapper