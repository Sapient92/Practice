import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./global.scss";
import Layout from "./components/Layout/Layout";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage/indes";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/ResiterPage";
import OrderPage from "./pages/OrderPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    // 각각의 경로에 대해 라우팅할 페이지를 설정한다.
    <BrowserRouter>
      <Routes>
        {/* 중첩된 Route 컴포넌트를 사용하여 부모 Route 컴포넌트가 모든 자식 Route 컴포넌트에 대해 공통된 Layout 컴포넌트 역할을 하게 한다. */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* 각각의 product마다 id경로에 의해 다른 DetailPage를 보여준다. */}
          <Route path="product/:id" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="order" element={<OrderPage />} />
          {/* 나머지 경로 즉, 위의 주어진 경로와 일치하는 경로가 아닌 다른 모든 경로일때 라우팅할 컴포넌트이다. */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
