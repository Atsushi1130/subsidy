import { createStore } from 'redux'

// initial state
export const initialState = {
  content: {
      "id": "",
      "title": "",
      "subtitle": "",
      "target": "",
      "summary": "",
      "body": "",
      "usage": "",
      "inquiry": "",
  },
  post: [],
  loading: true,
}

// reducer
export const reducer = (
    state = initialState, // { post: null, loading: false }
    { type, payload }
  ) => {
    switch (type) {
      case 'REQUEST_FETCH_DATA':
        return { ...state, loading: true };
      case 'SUCCESS_FETCH_CONTENT':
        return { ...state, loading: false, content: payload };
      case 'SUCCESS_FETCH_INDEX':
        return { ...state, loading: false, post: payload };
      default:
        return state;
    }
  };


export const store = createStore(reducer, initialState)
