'use client'; 
import React from 'react';
import useSWR, { Fetcher } from 'swr';

// https://github.com/jmarioste/nextjs-fetch-data-from-api-examples/blob/main/pages/use-swr-example.tsx
// anticipate the returned response
type TodoResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// create a fetcher function, just wrap fetch
const fetcher = (key: string) => fetch(key).then((res) => res.json());

export default function Services() {
  //const url = Data;
  const url = `https://jsonplaceholder.typicode.com/todos/1`;

  const { data, error, isLoading } = useSWR<TodoResponse>(url, fetcher);

  console.log('data is: ' + data);

  const loadingComponent = (
    <div className="text-orange-500">
      <p>Loading...</p>
    </div>
  );

  // display for error component
  const errorComponent = (
    <div className="text-red-500">
      <h2>Error: {error?.name}</h2>
      <p>{error?.message}</p>
    </div>
  );
  
  return (
    <div>
        {isLoading ? (
        loadingComponent
        ) : error ? (
        errorComponent
        ) : (
        <div>
            <p>Displaying Todo:</p>
            <p className='break-all'>{JSON.stringify(data, null)}</p>
            <div>
            <p>id: {data?.id}</p>
            <p>userId: {data?.userId}</p>
            <p>title: {data?.title}</p>
            <p>completed: {data?.completed ? "Yes" : "No"}</p>
            </div>
        </div>
        )}
    </div>
  );
};
