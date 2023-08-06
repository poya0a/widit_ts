import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AxiosInterceptor } from './api/axios';

import './assets/styles/style.scss';

import Loading from './components/common/Loading';
import MemberPopup from './components/common/popoup/MemberPopup';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';
import Search from './components/pages/Search';

const App = () => {
  return (
    <div id="app">
      <AxiosInterceptor>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/member_popup" element={<MemberPopup />} />
              <Route path="/" element={<Main />} />
              <Route path="/search" element={<Search />} />
            </Route>
          </Routes>
        </Suspense>
      </AxiosInterceptor>
    </div>
  );
};

export default App;