import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './assets/styles/style.scss';

import Loading from './components/common/Loading';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';
// import Search from 'pages/Search';

const App = () => {
  return (
    <div id="app">
       <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route exact path="/" element={<Main />} />
              {/* <Route exact path="/search" element={<Search />} /> */}
            </Route>
          </Routes>
        </Suspense>
    </div>
  );
};

export default App;