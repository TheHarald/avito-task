import React from 'react';
import { Link } from 'react-router-dom';
import { useGetNewsByIdQuery } from '../../redux/news/newsApiSlice';
import Skeleton from '../Skeleton/Skeleton';
import './newscard.css';

type NewsProps = {
    id: number;
}

function NewsCard(props: NewsProps) {
    const { isFetching, data } = useGetNewsByIdQuery(props.id);
    const date = new Date(Number(data?.time) * 1000);
    const time = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    return (
        isFetching ?
            <Skeleton />
            :
            <Link to={`/news/${props.id}`} className='news-card__container'>
                <h2 className='news-card__title'>{data?.title}</h2>
                <div className='flex-row-between'>
                    <p className='news-card__author'>Автор: {data?.by}</p>
                    <div className='flex-row-10'>
                        <p className='news-card__rating'>Рейтинг: {data?.score}</p>
                        <p className='news-card__date'>{time}</p>
                    </div>
                </div>
            </Link>

    );
};

export default NewsCard;
