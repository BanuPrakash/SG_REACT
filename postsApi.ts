import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type PostType = {
    userId: number,
    id:number,
    title: string,
    body: string
}
// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    posts: build.query<PostType[], number | void>({
      query: (page = 1) => `posts?_start=${page}&_limit=3`,
    }),
}),
})

export const  {usePostsQuery, usePrefetch} = postsApi;