import React from 'react';
import Button from '../../components/Button/Button';
import NewsCard from '../../components/NewsCard/NewsCard';
import { useGetNewsQuery } from '../../redux/news/newsApiSlice';
import './mainpage.css';

function MainPage() {
    // add poolInterval: 60000 to refetch every seconds
    const { data: sotryIds = [], isFetching, refetch } = useGetNewsQuery(undefined, { pollingInterval: 60000 });

    function handleClick() {
        console.log('refetch button');
        console.log(sotryIds);
        refetch();
    }


    return (

        <div className='main-page__container'>
            <header className='main-page__header'>
                <h1>Главная страница</h1>
                <Button name='Обновить' onClick={handleClick} />
            </header>
            <div className='flex-col-10'>
                {isFetching ? <div>Загрузка</div> : sotryIds.slice(0, 100).map((id: number) => {
                    return <NewsCard key={id} id={id} />
                })}
            </div>
        </div>
    );
}

export default MainPage;