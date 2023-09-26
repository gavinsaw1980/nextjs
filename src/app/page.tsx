import Image from 'next/image'

export default function Home() {
  // css refer to https://tailwindcss.com/docs/installation
  return (
    
    <main className="min-h-screen m-5">
        <div className="flex flex-row space-x-4 mb-5">
          <div className="basis-1/3 rounded-lg bg-blue-500 items-center justify-center p-4">column 1</div>
          <div className="basis-1/3 rounded-lg bg-blue-300 items-center justify-center p-4">column 2</div>
          <div className="basis-1/3 rounded-lg bg-blue-900 items-center justify-center p-4">column 3</div>
        </div>
        <div className="flex flex-col space-y-4 mb-5">
          <div className="bg-blue-300 p-4 hover:bg-slate-600 hover:cursor-pointer">row 1</div>
          <div className="bg-blue-900 p-4 hover:bg-slate-700 hover:cursor-pointer">row 2</div>
          <div className="bg-blue-500 p-4 hover:bg-slate-500 hover:cursor-pointer">row 3</div>
        </div>
        <div className="grid lg:grid-cols-4 gap-4 max-sm:grid-cols-1 mb-5">
          <div className="bg-blue-300 p-4">1</div>
          <div className="bg-blue-900 p-4">2</div>
          <div className="bg-blue-900 p-4">3</div>
          <div className="bg-blue-200 p-4">4</div>
        </div>
        <div className='flex flex-col mb-5'>
          <div className='border-2 border-rose-500 text-center'>
            <h1 className='text-5xl max-md:text-base mb-10'>Image</h1>
            <Image
                    className="relative mx-auto dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
          </div>
        </div>
        <div className="flex flex-col max-md:flex-col-reverse space-y-4 mb-5">
          <div className="bg-blue-300 p-4">row 1</div>
          <div className="bg-blue-900 p-4">row 2</div>
        </div>
        <div className='flex flex-col mb-5'>
          <div className='relative border-2 border-orange-500 text-center p-10'>
            <p>Relative</p>
            <div className="absolute bottom-0 left-0 bg-blue-700 p-4">
              <p>Absolute child 1</p>
            </div>
            <div className="absolute top-0 right-0 bg-blue-200 p-4">
              <p>Absolute child 2</p>
            </div>
          </div>
        </div>
    </main>
  )
}