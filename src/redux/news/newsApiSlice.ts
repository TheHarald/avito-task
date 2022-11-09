import { Comment, News } from './../../types/News';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const newsApiSlice = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://hacker-news.firebaseio.com/v0/'
    }),
    endpoints: (builder) => ({
        getNews: builder.query<Array<number>, number | void>({
            query: () => `newstories.json?print=pretty`
        }),
        getNewsById: builder.query<News, number>({
            query: (id) => `item/${id}.json?print=pretty`
        }),
        getCommentById: builder.query<Comment, number>({
            query: (id) => `item/${id}.json`
        })
    }),

})

export const { useGetNewsQuery, useGetNewsByIdQuery, useGetCommentByIdQuery } = newsApiSlice;
