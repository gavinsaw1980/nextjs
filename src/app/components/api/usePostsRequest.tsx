//https://cloudcoders.xyz/blog/how-to-use-swr-in-next-js-client-side-data-fetching-technique/

import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

const fetcher = (url:any) => fetch(url).then((res) => res.json());

const url = 'https://jsonplaceholder.typicode.com/todos';

export const useGetPosts = () => {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};

export const usePaginatePosts = () => {
  const PAGE_LIMIT = 6;

  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `${url}?_page=${index + 1}&_limit=${PAGE_LIMIT}`,
    fetcher
  );

  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

  return { posts, error, isLoadingMore, size, setSize, isReachingEnd };
};