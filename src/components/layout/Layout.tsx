import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from "recoil";

import { showMemberPopup, showAlertPopup } from '../../atoms';

import MemberPopup from '../../components/common/popup/MemberPopup';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Alert from '../common/popup/Alert'

function Layout() {
  const memberPopup = useRecoilValue(showMemberPopup);
  const alertPopup = useRecoilValue(showAlertPopup);
  return (
    <>
      <Header />
      {memberPopup.openPopup && <MemberPopup />}
      {alertPopup.openPopup && <Alert />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;