import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';
import News from '../../components/News/News';
import { useGetNewsByIdQuery } from '../../redux/news/newsApiSlice';
import './newspage.css';


type NewsPageProps = {
    url: string;
    title: string;
    date: number;
    author: string;
    commentsCount: number;
    commentsList: Array<any>;
}

function NewsPage() {

    const { id } = useParams();
    const { isFetching, data } = useGetNewsByIdQuery(Number(id));
    const commentsCount = data?.kids?.length || 0;

    return (
        <section className='news-page__container'>
            <header className='news-page__header'>
                <Link className='button' to='/'>На главную</Link>
                <button className='button'>Обновить комментарии</button>
            </header>
            {data && <News
                title={data.title}
                url={data.url}
                date={data.time}
                author={data.by}
                commentsCount={commentsCount}
            />}
            <ul className='flex-col-10'>
                {
                    data?.kids?.map((id: number) => {
                        return <Comment isChild={false} key={id} id={id} />
                    })
                }
            </ul>
        </section>
    )
}

export default NewsPage;