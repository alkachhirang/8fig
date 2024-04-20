import React from 'react';
import { Loader } from './Iconimg';

const Preloader = () => {
    return (
        <div>
            <div className='flex items-center justify-center flex-col min-h-screen bg-[#fff]'>
                
                    <Loader />
            </div>
        </div>
    )
}

export default Preloader;