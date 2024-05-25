import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: "https://664b546e35bbda10987c7e9d.mockapi.io" // ko thay đổi, trừ khi thay đổi địa chỉ IP
    })
}