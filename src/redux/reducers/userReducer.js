// khi dispatch (nhận action đc r) sẽ chuyển sang cho reducer xử lý

const userReducer = (
    state = { // khởi tạo giá trị ban đầu (initValue)
        userData: [],
        loading: false,
        error: false,
    }, 
    action 
) => {
    const { type, payload } = action 
    
    switch (type) {
        case "USER_START": // đang loading api nên phải là true  // load api sửa thẳng loading
            return {...state, loading: true} // chỉ thay đổi những biến mình muốn thay đổi
        case "USER_SUCCESS":
            return {...state, userData: payload, loading: false} // chạy xong r thì false
        case "USER_FAIL":
            return {...state, loading: false, error: true}
        default:
            return {...state} // copy lại giá trị hiện tại của nó
    }
}

export default userReducer