import { useSelector } from 'react-redux'
import { createStore } from "redux";

// 諸便利関数
const getUserInfo = async () => {
    try {
        const info = localStorage.getItem("info");
        const localInput = info ? JSON.parse(info) : console.log("error: localstrage is null");
        return localInput
    } catch {
        console.log('cannot get localstrage')
        return null
    }
}

// initial state
const initialIndexState = {
    post: [],
    loading: false,
}

// action creator
export const fetchIndexData = () => {
    return async dispatch => {
      dispatch({ type: 'REQUEST_FETCH_DATA' });
      const data = []
      const postJson = {}
      const localInput = await getUserInfo()
      const apiUrl = `https://jirei-seido-api.mirasapo-plus.go.jp/supports?limit=100&stage_category=${localInput.stage.id}&industry_category=${localInput.industry.id}&prefecture.name=${localInput.prefecture.name}`;
      const res = await axios.get(apiUrl);
      res.data.items.forEach((result) => {
        postJson = {id: result.id, title: result.title, authority: result.competent_authorities[0].name};
        data.post.push(postJson);
      })
      dispatch({
        type: 'SUCCESS_FETCH_DATA',
        payload: data
      });
    };
  };

// reducer
export const indexReducer = (
    state = initialIndexState, // { post: null, loading: false }
    { type, payload }
  ) => {
    switch (type) {
      case 'REQUEST_FETCH_DATA':
        return { ...state, loading: true };
      case 'SUCCESS_FETCH_DATA':
        return { ...state, loading: false, data: payload };
      default:
        return state;
    }
  };

const store = createStore(indexReducer, initialIndexState);
