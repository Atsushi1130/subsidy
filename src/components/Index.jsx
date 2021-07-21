import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Skeleton from '@material-ui/lab/Skeleton';

export const Index = ({
    onClickPost,
    changeContentId,
}) => {
    const state = useSelector(state => state)

    return (
        <div className="index-container">
            {console.log(state)}
            {state.loading ? (
                <>
                {[...Array(12).keys()].map(i =>
                        <Skeleton 
                        className="index-item-skeleton"
                        key={i} animation="wave">
                        </Skeleton>
                )}
                </>
                ) : (
                    state.post.map(post => (
                        <div
                        className="posts-index-item"
                        onClick={() => {changeContentId(post.id); onClickPost();}}
                        >
                            <a className="post-title">{post.title}</a> <br></br>
                            <div className="post-footer">
                                <p className="post-letter">{post.authority}</p>
                                <ArrowForwardIcon
                                className="post-icon"></ArrowForwardIcon>
                            </div>
                        </div>
                        )
                        )
                )
            }
        </div>
    );
}