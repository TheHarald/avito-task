import React from 'react';
import { getTime } from '../../Functions/supportingFunctions';
import { useGetCommentByIdQuery, useGetNewsByIdQuery } from '../../redux/news/newsApiSlice';
import IconButton from '../IconButton/IconButton';
import { arrowDown } from '../Icons/icons';
import './comment.css';

type CommentProps = {
    id: number;
    isChild: boolean;
}

function Comment(props: CommentProps) {

    const { isFetching, data } = useGetCommentByIdQuery(props.id);

    const [isShow, setIsShow] = React.useState(props.isChild);

    function toggleComment() {
        setIsShow(!isShow);
    }

    return (
        <li className='comment__container'>
            <div className='comment_root-container'>
                <div className='flex-col-10'>
                    <p className='comment__author'>{data?.by}</p>
                    <p className='comment__text'>{data?.text}</p>
                </div>
                <div className='flex-row-10' >
                    <p className='comment__date'>{getTime(data?.time)}</p>
                    {data?.kids && data?.kids?.length > 0 ? <IconButton icon={arrowDown} onClick={toggleComment} className={isShow ? 'up' : 'down'} /> : null}
                </div>
            </div>
            {isShow ? <section className='comment__childs'>
                {
                    data?.kids?.map((id: number) => {
                        return <Comment isChild={true} key={id} id={id} />
                    })
                }
            </section> : null}
        </li>
    );
}

export default Comment;