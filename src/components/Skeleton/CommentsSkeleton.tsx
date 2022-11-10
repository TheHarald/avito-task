import React from 'react';
import './skeleton.css'


function CommentsSkeleton() {
    return (
        <article className='comment__skeleton'>
            <span className='element__skeleton wide'>
            </span>
            <span className='element__skeleton small'>
            </span>
        </article>
    );
}

export default CommentsSkeleton;