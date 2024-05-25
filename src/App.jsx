import './App.css'
import Helloworld from './components/Helloworld'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import News from './pages/News'
import Contact from './pages/Contact'
import About from './pages/About'
import { useEffect } from 'react'
import axios from 'axios'
import { getUser } from './apis/userRequest'
import { useDispatch, useSelector } from 'react-redux'
import { getDataUser } from './redux/actions/userAction'

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function App() {
  // C1: (khi chưa tạp file j liên quan tới redux cả)
  // ở đây mình sd .then để giải quyết vấn đề bất đồng bộ
  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch('https://664b546e35bbda10987c7e9d.mockapi.io/users', {
  //       method: 'GET',
  //       headers: { 'content-type': 'application/json' },
  //     }).then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       // handle error
  //     }).then(tasks => {
  //       // Do something with the list of tasks
  //     }).catch(error => {
  //       // handle error
  //     })
  //   }
  //   fetchData()
  // }, [])
  // nhớ vào trang localhost r Inspect -> Network, thấy file users là đúng

  // C2: xài thư viện axios cho gọn, lúc này mới tạo file userRequest.js trong apis thôi
  // ở đây mình xài async await để xử lý vấn đề bất đồng bộ, viết code gọn hơn
  // api có thể mình sẽ gọi nhiều lần, nên mình tách ra file riêng để xài cho tiện
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await axios.get("https://664b546e35bbda10987c7e9d.mockapi.io/users")
  //       const response = await getUser()
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   fetchData()
  // }, [])
  // nhớ vào trang localhost r Inspect -> Network, thấy file users là đúng


  // C3: lúc này đã tạo từ apis, actions, reducers, store và chỉnh main.jsx
  // useDispatch(): lấy hành động, useSeclector(): lấy data
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataUser()) 
  }, []) // {type, payload} // nhớ KO ĐC thiếu [], nếu ko nó sẽ ko chạy lần đầu tiên

  const data = useSelector((state) => state.userReducer) // * nơi xử lý và cập nhật lại state, return ra state nên phải trỏ vào userReducer
                                            // này là chấm tới th key

  return (
    <>
      <Header />
       {/* test thử xem redux chạy đc ko, nhớ cmt Routes ở dưới
      test xong thì cmt phần này lại, nhớ mở cmt Routes lại*/}
      {/* {data.loading && <div>loading...</div>}
      {data.userData.map((user) => (
        <div>{user.name}</div>
      ))}
      {data.error && <div>Dữ liệu lỗi rồi</div>} */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  )
}

export default App
