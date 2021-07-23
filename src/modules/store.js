import { combineReducers, createStore } from 'redux'
import {indexReducer} from './index'
import {contentReducer} from './content'

// initial state
export const initialState = {
    contentState: {
        content: {
            "title": "",
            "subtitle": "",
            "target": "",
            "summary": "",
            "body": "",
            "usage": "",
            "inquiry": "",
        },
        loading: true,
    },
    indexState: {
        post: [
            {id: "198", title: "技能実習生に係る新型コロナウイルス感染症への対応について", authority: "法務省"},
            {id: "198", title: "技能実習生に係る新型コロナウイルス感染症への対応について", authority: "法務省"},
            {id: "198", title: "技能実習生に係る新型コロナウイルス感染症への対応について", authority: "法務省"},
        ],
        loading: true,
    }
}

export const rootReducer = combineReducers({
  index: indexReducer,
  content: contentReducer,
})