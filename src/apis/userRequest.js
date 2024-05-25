import axios from "axios";
import { Api } from "../utils/Api";

// const response = await axios.get("https://664b546e35bbda10987c7e9d.mockapi.io/users")

// viết baseURL ra 1 file riêng để code cho gọn
const API = Api()

export const getUser = () => {
    // const API = axios.create({
    //     baseURL: "https://664b546e35bbda10987c7e9d.mockapi.io" // ko thay đổi, trừ khi thay đổi địa chỉ IP
    // })
    return API.get("/users") // gọi api để lấy data
}
