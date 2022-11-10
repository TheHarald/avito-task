import React from 'react';
import { useParams } from 'react-router';
import { getTime } from '../../functions/supportingFunctions';
import { useGetNewsByIdQuery } from '../../redux/news/newsApiSlice';
import './news.css';


type NewsProps = {
    url: string;
    title: string;
    date: number;
    author: string;
    commentsCount: number;
}

function News(props: NewsProps) {

    return (
        <article className='news__container'>
            <div className='flex-row-between-up'>
                <h2 className='news__title'>{props.title}</h2>
                <a className='news__url' href={props.url}>Перейти к новости</a>
            </div>
            <p className='news__author'>Автор: {props?.author}</p>
            <p className='news__date'>{getTime(props.date)}</p>
            <p className='news__comments-count'>{`Комментарии: ${props.commentsCount}`}</p>
        </article>

    );
}

export default News;