import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from "recoil";

import { showMemberPopup } from '../../atoms';

import MemberPopup from '../../components/common/popup/MemberPopup';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Layout() {
  const memberPopup = useRecoilValue(showMemberPopup)
  return (
    <>
      <Header />
      {memberPopup.openPopup &&  <MemberPopup />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;