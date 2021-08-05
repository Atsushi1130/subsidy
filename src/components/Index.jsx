import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import {fetchContentData} from "../modules/actions"

export const Index = ({
    onClickPost,
}) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div className="index-container">
            {state.loading ? (
                <>
                    {[...Array(10).keys()].map(i =>
                        <div className="posts-index-skeleton-item">
                            <Box pb={3}>
                            <Typography key={i} variant="h5">
                                <Skeleton animation="wave" width="70%"/>
                                <Skeleton animation="wave" width="70%"/>
                                <Skeleton animation="wave" width="70%"/>
                            </Typography>
                            </Box>
                            <Typography key="skeleton-a" variant="a">
                                <Skeleton animation="wave" width='30%'/>
                            </Typography>
                        </div>
                    )}
                </>
                ) : (
                    state.post.map(post => (
                        <div
                        className="posts-index-item"
                        onClick={() => {fetchContentData(dispatch, post.id); onClickPost();}}
                        >
                            <a className="post-title">{post.title}</a> <br></br>
                            <div className="post-footer">
                                <p className="post-letter">{post.authority}</p>
                                <ArrowForwardIcon className="post-icon"/>
                            </div>
                        </div>
                        )
                        )
                )
            }
        </div>
    );
}