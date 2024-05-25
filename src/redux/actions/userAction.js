// đây là đang đến bước dispatch (nhận hành động từ UI)

import * as UserApi from "../../apis/userRequest" // lấy hết các hàm trong userRequest để mốt import là ra

// vì lấy api là bất đồng bộ nên phải có async await
export const getDataUser = () => async(dispatch) => {
    dispatch({type: "USER_START"}) // load api // 1 phút -> true
    try {
        const response = await UserApi.getUser() // lấy data
        dispatch({type: "USER_SUCCESS", payload: response.data}) // type: là action, payload: data
                                                          // nếu be trả data thì ghi data, nếu trả abc thì ghi abc
    } catch (error) {
        dispatch({type: "USER_FAIL", payload: error.message})
    }
}