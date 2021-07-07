import React, { useState, useEffect } from "react";
import axios from 'axios';

// components
import { Form } from './Form.jsx';
import { Content } from './Content.jsx';
import { Index } from './Index.jsx';
import { Tab } from './Tab.jsx';

const apiUrl = "https://jirei-seido-api.mirasapo-plus.go.jp/supports?limit=100&stage_category=1&industry_category=3&prefecture.name=北海道";

const initialScreenState = {
  isVisibleForm: false,
  isVisibleIndex: true,
  isVisibleContent: false,
  isVisibleAbout: false,
  isVisibleContent: false,
};

export const Screen = () => {
    const [switchScreen, setScreen] = useState(initialScreenState);
    const [contentId, setContentId] = useState("a")

    return (
      <>
        <div className="responsive">
        {switchScreen.isVisibleIndex &&
        <Index
        onClickPost={
          () => setScreen({
            isVisibleForm: false,
            isVisibleIndex: false,
            isVisibleContent: false,
            isVisibleAbout: false,
            isVisibleContent: true,
            })
          }
        changeContentId = {
          (id) => {setContentId(id); console.log(contentId);}
        }
        />
        }
        {switchScreen.isVisibleContent &&
        <Content
        contentId = {contentId}
        onClickBackButton={() => setScreen({
          ...switchScreen,
          isVisibleForm: false,
          isVisibleIndex: true,
          isVisibleContent: false,
          isVisibleAbout: false,
          isVisibleContent: false,
        })
        }
        />
        }
        {switchScreen.isVisibleForm &&
        <Form/>
        }
        <Tab
          onClickFormTab={
            () => setScreen({
              isVisibleForm: true,
              isVisibleIndex: false,
              isVisibleContent: false,
              isVisibleAbout: false,
              isVisibleContent: false,
              })
            }
            onClickContentTab={() => setScreen({
              ...switchScreen,
              isVisibleForm: false,
              isVisibleIndex: false,
              isVisibleContent: true,
              isVisibleAbout: false,
              isVisibleContent: false,
              })
            }
            onClickIndexTab={() => setScreen({
              ...switchScreen,
              isVisibleForm: false,
              isVisibleIndex: true,
              isVisibleContent: false,
              isVisibleAbout: false,
              isVisibleContent: false,
            })
            }
            onClickAboutTab={() => setScreen({
              ...switchScreen,
              isVisibleForm: false,
              isVisibleIndex: true,
              isVisibleContent: false,
              isVisibleAbout: true,
              isVisibleContent: false,
            })
            }
            onClickSaveUserInfo={() => setScreen({
              ...switchScreen,
              isVisibleForm: true,
              isVisibleIndex: false,
              isVisibleContent: false,
              isVisibleAbout: false,
              isVisibleContent: false,
            })
            }
        />
        </div>
      </>
    );
}
