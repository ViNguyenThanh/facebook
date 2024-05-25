// vì sẽ có rất nhiều th reducer trong store nên mình sẽ tạo ra 1 file reducer tổng
// là file indexRuducer.js

import { combineReducers } from "redux";
import userReducer from "./userReducer"

export const reducers = combineReducers({
    // userReducer: userReducer
    //     key    : value (lấy từ file userReducer.js)
    // đây là viết gọn
    userReducer,
})