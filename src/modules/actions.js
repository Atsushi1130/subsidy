import axios from 'axios';

//ローカルストレージからデータを取り出す関数
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

// action creator
export const fetchContentData = async (dispatch, contentId) => {
    dispatch({ type: 'REQUEST_FETCH_DATA' });
    const content = {}
    const contentUrl = `https://jirei-seido-api.mirasapo-plus.go.jp/supports/${contentId}`;
    const res = await axios.get(contentUrl);
    //   console.log(res)
      content.id = res.data.id;
      content.title = res.data.title;
      content.subtitle = res.data.title;
      content.target = res.data.target;
      content.summary = res.data.summary;
      content.body = res.data.usage;
      content.inquiry = res.data.inquiry;
    dispatch({
      type: 'SUCCESS_FETCH_CONTENT',
      payload: content
    });
};

export const fetchIndexData = async (dispatch) => {
    dispatch({ type: 'REQUEST_FETCH_DATA' });
    const post = []
    const localInput = await getUserInfo()
    const apiUrl = `https://jirei-seido-api.mirasapo-plus.go.jp/supports?limit=100&stage_category=${localInput.stage.id}&industry_category=${localInput.industry.id}&prefecture.name=${localInput.prefecture.name}`;
    const res = await axios.get(apiUrl);
    res.data.items.forEach((result) => {
      var postJson = {id: result.id, title: result.title, authority: result.competent_authorities[0].name};
      post.push(postJson);
    })
    dispatch({
      type: 'SUCCESS_FETCH_INDEX',
      payload: post
    });
};