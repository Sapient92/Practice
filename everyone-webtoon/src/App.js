import {Route, Routes} from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import WebToonList from "./api/ComicApi";
import {useEffect, useState} from "react";
import Header from "./components/Header";
import Details from "./pages/Details";

const provider = ["naver", "kakao", "kakaoPage"];
const day = [
  {id: 1, name: "월요일", value: "mon"},
  {id: 2, name: "화요일", value: "tue"},
  {id: 3, name: "수요일", value: "wed"},
  {id: 4, name: "목요일", value: "thu"},
  {id: 5, name: "금요일", value: "fri"},
  {id: 6, name: "토요일", value: "sat"},
  {id: 7, name: "일요일", value: "sun"},
];

const eachProvider = () => {
  return provider.map((data) => data);
};
const eachDay = () => {
  const eachDay = day.map((data) => data.value);
  return eachDay;
};

const webToonList = new WebToonList(eachProvider(), eachDay());

function App() {
  const [providerData, setProviderData] = useState([]);
  useEffect(() => {
    const getEachProviderWebtoon = async () => {
      const eachProviderData = await webToonList.getProviderWebToon(provider);
      setProviderData(eachProviderData);
    };
    getEachProviderWebtoon();
  }, []);

  if (providerData.length === 0) {
    return (
      <div>
        <p>로딩중 입니다...</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main providerData={providerData} />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    );
  }
}

export default App;

// 메인 화면에 플랫폼별로 웹툰 나열
// 요일 버튼 누르면 나열 바뀌게 하기
// 각 메인화면 플랫폼 무한 스크롤
