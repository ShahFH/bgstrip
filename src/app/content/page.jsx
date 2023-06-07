import Image from 'next/image';
import React from 'react';

export default function Content() {
return (
<main className="flex min-h-screen flex-col items-center p-4 md:p-24 max-sm:m-12">
<div className='w-full md:w-[570px]'>
<h1 className='text-[44px] text-black font-extrabold text-center mb-2'><span className='text-yellow-500'>Easy steps to</span> remove an image background</h1>
<p className='text-[16px] text-gray-500 text-center'>Remove background from images of humans, animals or objects and download high-resolution images for free.</p>
</div>
<div className='flex flex-col gap-6 mt-16 md:flex-row'>
<div className='w-full md:w-[370px] h-[180px] bg-white rounded-2xl p-6 flex gap-5'>
<h1 className='text-yellow-500 font-extrabold text-[42px]'>1</h1>
<div>
<h2 className='text-black font-extrabold mt-4 mb-2'>Upload image</h2>
<p className='text-[14px]'>For best results, choose an image where the subject has clear edges with nothing overlapping.</p>
</div>
</div>
<div className='w-full md:w-[370px] h-[180px] bg-white rounded-2xl p-6 flex gap-5 mt-6 md:mt-0'>
<h1 className='text-yellow-500 font-extrabold text-[42px]'>2</h1>
<div>
<h2 className='text-black font-extrabold mt-4 mb-2'>Remove background</h2>
<p className='text-[14px]'>Upload your image to automatically remove the background in an instant.</p>
</div>
</div>
<div className='w-full md:w-[370px] h-[180px] bg-white rounded-2xl p-6 flex gap-5 mt-6 md:mt-0'>
<h1 className='text-yellow-500 font-extrabold text-[42px]'>3</h1>
<div>
<h2 className='text-black font-extrabold mt-4 mb-2'>Download Image</h2>
<p className='text-[14px]'>Download your new image as a PNG file with a transparent background to save, share, or keep editing.</p>
</div>
</div>
</div>
</main>
);
}