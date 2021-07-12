import React, { useState, useEffect } from "react";
import axios from 'axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PublicIcon from '@material-ui/icons/Public';

export const Content = ({
    contentId,
    onClickBackButton,
}) => {
    const [content, setContent] = useState({})
    const contentUrl = `https://jirei-seido-api.mirasapo-plus.go.jp/supports/${contentId}`;
    const contentWebUrl = `https://seido-navi.mirasapo-plus.go.jp/supports/${contentId}`

    const initialContent = {
        "title": "",
        "subtitle": "",
        "target": "",
        "summary": "",
        "body": "",
        "usage": "",
        "inquiry": "",
    };

    useEffect(() => {
        axios.get(contentUrl)
        .then(res => {
            initialContent.title = res.data.title;
            initialContent.subtitle = res.data.title;
            initialContent.target = res.data.target;
            initialContent.summary = res.data.summary;
            initialContent.body = res.data.usage;
            initialContent.inquiry = res.data.inquiry;
            setContent(initialContent)
        });
    }, []);

    return (

      <div className="content">
          <div className="content-header">
          <ArrowBackIcon
          className="post-icon-1"
          onClick = {() => onClickBackButton()}
          ></ArrowBackIcon>
          <p>制度詳細</p>
          </div>
          <div className="content-detail">
            <h2>{content.title}</h2>
            <h3>{content.subtitle}</h3>
            <div className="content-container">
                    <div>
                        <h4>対象の事業者</h4>
                        <a>{content.target}</a>
                    </div>
                    <div>
                        <h4>概要</h4>
                        <a>{content.summary}</a>
                    </div>
                    <div>
                        <a>{content.body}</a>
                    </div>
                    <div>
                        <h4>連絡先</h4>
                        <a>{content.inquiry}</a>
                    </div>
            </div>
          </div>
          <div className="content-footer">
              <a href = {'https://seido-navi.mirasapo-plus.go.jp/supports/'+ contentId}><PublicIcon className="post-icon-2"></PublicIcon><span>webpage</span></a>
          </div>
      </div>
    );
}
