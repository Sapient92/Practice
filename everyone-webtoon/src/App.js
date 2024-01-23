import {Route, Routes} from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import WebToonList, {dayWebToons} from "./api/ComicApi";
import {useEffect, useState} from "react";
import Header from "./components/Header";
import Details from "./pages/Details";

const provider = ["naver", "kakao", "kakaoPage"];
const dayData = [
  {id: 1, name: "월요일", value: "mon"},
  {id: 2, name: "화요일", value: "tue"},
  {id: 3, name: "수요일", value: "wed"},
  {id: 4, name: "목요일", value: "thu"},
  {id: 5, name: "금요일", value: "fri"},
  {id: 6, name: "토요일", value: "sat"},
  {id: 7, name: "일요일", value: "sun"},
];

export const eachProvider = () => {
  return provider.map((data) => data);
};
export const eachDay = () => {
  const eachDay = dayData.map((data) => data.value);
  return eachDay;
};

const fullDay = new Date().toString();
export const today = fullDay.substring(0, 3).toLowerCase();

const webToonList = new WebToonList(eachProvider(), eachDay());

function App() {
  const [providerData, setProviderData] = useState([]);
  const [day, setDay] = useState(today);
  const [todayWebToon, setTodayWebToon] = useState([]);

  useEffect(() => {
    getEachProviderWebtoon();
    todayList();
  }, [day]);

  const getEachProviderWebtoon = async () => {
    const eachProviderData = await webToonList.getProviderWebToon();
    setProviderData(eachProviderData);
  };

  const todayList = async () => {
    const response = await Promise.all(
      provider.map(async (data) => {
        const todayWebToon = dayWebToons(data, day);
        return todayWebToon;
      })
    );
    return setTodayWebToon(response);
  };

  const handleButtonClick = (en) => {
    const buttonClick = dayData.filter((data) => data.value === en);
    setDay(buttonClick[0].value);
  };

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
          <Route
            path="/"
            element={
              <Main
                todayWebToon={todayWebToon}
                providerData={providerData}
                dayData={dayData}
                setDay={setDay}
                handleButtonClick={handleButtonClick}
              />
            }
          />
          <Route path="details/:id" element={<Details />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    );
  }
}

export default App;

// 각 메인화면 플랫폼 무한 스크롤
