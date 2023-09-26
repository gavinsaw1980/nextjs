import Link from "next/link"
import Image from 'next/image'

export default function Post({ post }:any) {
    const { userId, id, title, completed } = post;
    return (
      <div className="rounded-lg bg-sky-700 px-4 py-6 hover:bg-sky-900 transform transition duration-500 ease-in-out">
        <div className="border-b-2 border-neutral-100 pb-2 mb-4">
          <p className="text-xl text-white font-normal text-left">
            featured - {id}
          </p>
        </div>
        <div>
          <p className="text-lg text-pink-400 mb-2 text-center">
            {title}
          </p>
        </div>
        <div className="border-t-2 border-neutral-100 pt-6 text-center">
          <p className="inline-block align-baseline font-bold text-sm text-pink-400">
              Allocated: {completed ? "Yes" : "No"}
          </p>
        </div>
        
        {/*
        <div className="flex items-center justify-between my-8">
            <img src={thumbnailUrl} alt={title} className="mb-2 mx-auto" /> 
            <Link className={`bg-blue-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded ${url ? '' : 'hidden'}`} href={url} target="_blank">
              view full image
            </Link>
          </div>
        <div className="border-t-2 border-neutral-100 pt-2 text-center">
          <p className="text-sm text-white font-bold">
            Posted: {date}
          </p>
        </div>
        */}
      </div>
    );
  }