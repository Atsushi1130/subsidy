import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
import axios from 'axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PublicIcon from '@material-ui/icons/Public';

export const Content = ({
    contentId,
    onClickBackButton,
}) => {
    const state = useSelector(state => state.contentState)

    return (
        <>
        {state.loading ? (
            <>
                <div>loading...</div>
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
                  </div>
                </div>
                <div className="content-footer">
                    <a href = {'https://seido-navi.mirasapo-plus.go.jp/supports/'+/*contentId*/1}><PublicIcon className="post-icon-2"></PublicIcon><span>webpage</span></a>
                </div>
            </div>
            )
        }
    </>
    );
}
