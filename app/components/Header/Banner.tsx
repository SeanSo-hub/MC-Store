import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Banner() {
  return (
    <header className="bg-gray-900 text-white hidden sm:block">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
        <div>
          <h1 className="text-2xl font-semibold">New year sale</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-sm font-medium">Up to</h1>
          <span className="text-[40px] font-semibold text-center">
            69%
          </span>
          <h1 className="text-xl font-semibold">OFF</h1>
        </div>
        <div>
          <button className="bg-[#EBC80C] text-black px-6 py-3 rounded-md text-sm font-bold">
            Shop now
            <ArrowForwardIcon className='ml-2' />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner