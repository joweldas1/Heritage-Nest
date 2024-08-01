import React from 'react';

const PostBar = () => {
    return (
        <div className='bg-[rgba(253,240,231,1)] w-full '>
          <div className='flex flex-col lg:flex-row justify-between items-center lg:px-[112px] py-16'> 
          <div className=''>
                <h1 className='text-3xl text-[rgba(16,24,40,1)] font-semibold leading-7'>Put your Property free</h1>
                <p className='text-md text-[rgba(71,84,103,1)] font-normal font-poppins leading-6 mt-4'>List it on your priority and get genuine leads</p>
            </div>
            <div>
                <button className='bg-[rgba(240,98,36,1)] hover:bg-[rgba(240,98,36,0.8)] text-[rgba(255,255,255,1)] text-lg font-inter font-semibold px-2 py-1 btn mt-5'>Post Property</button>
            </div>
          </div>
        </div>
    );
};

export default PostBar;