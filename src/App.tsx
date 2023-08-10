import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AxiosInterceptor } from "./api/axios";

import "./assets/styles/style.scss";

import MediaDetail from "components/common/MediaDetail";
import NoPage from "components/common/NoPage";
import Loading from "./components/common/Loading";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import Search from "./components/pages/Search";

const App = () => {
  console.log(React);
  return (
    <div id="app">
      <AxiosInterceptor>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="*" element={<NoPage />} />
              <Route path="/" element={<Main />} />
              <Route path="/contents/:movieCd" element={<MediaDetail />} />
              <Route path="/search" element={<Search />} />
            </Route>
          </Routes>
        </Suspense>
      </AxiosInterceptor>
    </div>
  );
};

export default App;
