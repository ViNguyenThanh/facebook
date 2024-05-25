// redux để xử lý state thoy, ko phải xử lý api

import {legacy_createStore as createStore, compose, applyMiddleware } from "redux"
import { reducers } from "../redux/reducers/indexReducer"
import thunk from "redux-thunk"

// ko hiểu nhớ vào trang chủ Redux đọc
// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: là cái key, ko phải hàng chế
const composeEnhancers = window. __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// createStore ban đầu viết ra bị gạch nên nhớ import như trên để fix
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

/*  reducers: reducer xử lý cập nhật lại state
    initValue: giá trị khởi tạo
    enhancers: middleware redux-thunk
*/
export default store