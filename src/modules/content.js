import {initialState} from "./store"
import axios from 'axios';

// action creator
export const fetchContentData = async (dispatch, contentId) => {
      dispatch({ type: 'REQUEST_FETCH_CONTENT' });
      console.log('fetchContentData')
      const content = {}
      const contentUrl = `https://jirei-seido-api.mirasapo-plus.go.jp/supports/${contentId}`;
      const res = await axios.get(contentUrl);
        console.log(res)
        content.title = res.data.title;
        content.subtitle = res.data.title;
        content.target = res.data.target;
        content.summary = res.data.summary;
        content.body = res.data.usage;
        content.inquiry = res.data.inquiry;
        console.log(content)
      dispatch({
        type: 'SUCCESS_FETCH_CONTENT',
        payload: content
      });
  };

// reducer
export const contentReducer = (
    state = initialState.contentState, // { post: null, loading: false }
    { type, payload }
  ) => {
    switch (type) {
      case 'REQUEST_FETCH_CONTENT':
        return { ...state, loading: true };
      case 'SUCCESS_FETCH_CONTENT':
        return { ...state, loading: false, content: payload };
      default:
        return state;
    }
  };
