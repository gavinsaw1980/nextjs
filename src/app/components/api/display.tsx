'use client'; 
import React from 'react';
import Post from './Posts';
import { useGetPosts, usePaginatePosts } from './usePostsRequest';

const url = 'https://api.npoint.io/0bcbf607a63dd472513a';

export default function Display() {
    //const { data: posts, error } = useGetPosts();
    const { posts, error, isLoadingMore, size, setSize, isReachingEnd } = usePaginatePosts();

    const loadingComponent = (
        <div className="text-orange-500 text-center">
            <p>Loading...</p>
        </div>
    );

    const errorComponent = (
        <div className="text-red-500 text-center">
            <h2>Error Loading</h2>
        </div>
    );
      
    if (error) return errorComponent

    if (!posts) return loadingComponent
  
    return (
        <div className='-z-10'>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
                {posts.map((post:any) => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
            <div className='mt-6 items-center'>
                <button
                    className="bg-slate-600 hover:bg-slate-400 text-white font-bold p-4 rounded"
                    disabled={isLoadingMore || isReachingEnd}
                    onClick={() => setSize(size + 1)}
                    >
                    {isLoadingMore
                        ? 'Loading...'
                        : isReachingEnd
                        ? 'No more posts'
                        : 'Load more'}
                </button>
            </div>
        </div>
    );  
  }