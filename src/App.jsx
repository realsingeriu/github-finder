import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import React from "react";

function App() {
  return (
    // 링크가 안맞아서 오류라던지 basename속성은 null 이다라는 오류가 나오면  'BrowserRouter'를 쓰면 해결 된다. 즉, 속성을 구조화하는데 문제가 생긴거다.
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="깃허브" />
        <main>Content</main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
