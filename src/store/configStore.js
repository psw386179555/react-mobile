/*
* @Author: Administrator
* @Date:   2017-12-08 11:47:24
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-08 11:48:00
*/
import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}