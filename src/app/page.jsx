import Image from 'next/image'
import React from 'react'
 
export default function Home() {
  return (
    //Hero Section
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 max-sm:m-12"> 
    <div className="gap-8 items-center py-12 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8">
      <div className="w-69 h-64 md:w-96 md:h-96 bg-white py-14 rounded-full">
      
      </div>
      <div className="mt-4 md:mt-0">
        <div className="">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500">Remove the <br/>background from <br/>images for free.</h1>
          <p className='text-[14px] text-gray-500 mt-4'>Remove background from images of humans, animals, or objects and<br/> download high-resolution images for free.</p>

          <button className="mt-8 px-6 py-2 bg-yellow-500 text-white rounded-md" >Upload Image</button>
          <p className='text-[14px] text-gray-500 mt-2'>Drop an image or paste URL</p>
        </div>
      </div>
    </div>
</main>
 
  )
}
