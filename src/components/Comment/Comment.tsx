import React from 'react';
import { getTime } from '../../functions/supportingFunctions';
import { useGetCommentByIdQuery } from '../../redux/news/newsApiSlice';
import IconButton from '../IconButton/IconButton';
import { arrowDown } from '../Icons/icons';
import CommentsSkeleton from '../Skeleton/CommentsSkeleton';
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

    let rawHTML = data?.text || '';

    return (
        <li className='comment__container'>
            {isFetching && <CommentsSkeleton />}
            {data && <div className='comment_root-container'>
                <div className='flex-col-10'>
                    <div className='flex-row-10-down' >
                        <p className='comment__author'>{data?.by}</p>
                        <p className='comment__date'>{getTime(data && data.time)}</p>
                    </div>
                    <p className='comment__text' dangerouslySetInnerHTML={{ __html: rawHTML }}></p>
                </div>
                <div className='flex-row-10' >
                    {data?.kids && data?.kids?.length > 0 ? <IconButton icon={arrowDown} onClick={toggleComment} className={isShow ? 'up' : 'down'} /> : null}
                </div>
            </div>}
            {isShow ? <section className='comment__childs'>
                {isFetching && <CommentsSkeleton />}
                {
                    data && data.kids?.map((id: number) => {
                        return <Comment isChild={true} key={id} id={id} />
                    })
                }
            </section> : null}
        </li>
    );
}

export default Comment;