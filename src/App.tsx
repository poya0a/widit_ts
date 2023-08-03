import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AxiosInterceptor } from './api/axios';

import './assets/styles/style.scss';

import Loading from './components/common/Loading';
import Layout from './components/layout/Layout';
import MemberPopup from './components/common/popoup/MemberPopup'
import Main from './components/main/Main';
import Search from './components/pages/Search';

const App = () => {
  return (
    <div id="app">
      {/* <AxiosInterceptor> */}
        <Suspense fallback={<Loading />}>
          <Router>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/member_popup" element={<MemberPopup />} />
                  <Route path="/" element={<Main />} />
                  <Route path="/search" element={<Search />} />
                </Route>
              </Routes>
            </Router>
          </Suspense>
        {/* </AxiosInterceptor> */}
    </div>
  );
};

export default App;