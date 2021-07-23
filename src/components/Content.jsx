import React from "react";
import {useSelector} from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PublicIcon from '@material-ui/icons/Public';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

export const Content = ({
    onClickBackButton,
}) => {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <>
        {state.loading ? (
            <>
            <div className="content">
                <div className="content-header">
                <ArrowBackIcon
                className="post-icon-1"
                onClick = {() => onClickBackButton()}
                ></ArrowBackIcon>
                <p>制度詳細</p>
            </div>
            <div className="content-detail">
                <Typography key="skeleton-a" variant="h2">
                    <Skeleton animation="wave"/>
                </Typography>
                <Typography key="skeleton-a" variant="h3">
                    <Skeleton animation="wave"/>
                </Typography>
                <div className="content-container">
                    <div>
                        <Typography key="skeleton-a" variant="h4">
                            <Skeleton animation="wave" width='30%'/>
                        </Typography>
                        <Typography key="skeleton-a" variant="a">
                            <Skeleton animation="wave"/>
                            <Skeleton animation="wave"/>
                            <Skeleton animation="wave"/>
                        </Typography>
                    </div>
                    <div>
                        <Typography key="skeleton-a" variant="h4">
                            <Skeleton animation="wave" width='30%'/>
                        </Typography>
                        <Typography key="skeleton-a" variant="a">
                            <Skeleton animation="wave"/>
                            <Skeleton animation="wave"/>
                            <Skeleton animation="wave"/>
                        </Typography>
                    </div>
                    <div>
                        <Typography key="skeleton-a" variant="a">
                            <Skeleton animation="wave"/>
                            <Skeleton animation="wave"/>
                            <Skeleton animation="wave"/>
                        </Typography>
                    </div>
                    <div>
                        <Typography key="skeleton-a" variant="h4">
                            <Skeleton animation="wave" width='30%'/>
                        </Typography>
                        <Typography key="skeleton-a" variant="a">
                            <Skeleton animation="wave"/>
                            <Skeleton animation="wave"/>
                            <Skeleton animation="wave"/>
                        </Typography>
                    </div>
                </div>
            </div>
            </div>
            </>
            ) : (
            <div className="content">
                <div className="content-header">
                <ArrowBackIcon
                className="post-icon-1"
                onClick = {() => onClickBackButton()}
                ></ArrowBackIcon>
                <p>制度詳細</p>
                </div>
                <div className="content-detail">
                  <h2>{state.content.title}</h2>
                  <h3>{state.content.subtitle}</h3>
                  <div className="content-container">
                          <div>
                              <h4>対象の事業者</h4>
                              <a>{state.content.target}</a>
                          </div>
                          <div>
                              <h4>概要</h4>
                              <a>{state.content.summary}</a>
                          </div>
                          <div>
                              <a>{state.content.body}</a>
                          </div>
                          <div>
                              <h4>連絡先</h4>
                              <a>{state.content.inquiry}</a>
                          </div>
                          <div className="content-footer">
                            <a href = {'https://seido-navi.mirasapo-plus.go.jp/supports/'+state.content.id}><PublicIcon className="post-icon-2"></PublicIcon><span>webpage</span></a>
                          </div>
                  </div>
                </div>
            </div>
            )
        }
    </>
    );
}