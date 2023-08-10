import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginState, showMemberPopup, showSearchPopup } from "../../atoms";

import logoB from "../../assets/images/logo/logo_b.png";
import logoW from "../../assets/images/logo/logo_w.png";
import SearchPopup from "../common/popup/SearchPopup";

const Header = () => {
  console.log(React);
  const setShowSearchPopup = useSetRecoilState(showSearchPopup);
  const searchPopup = useRecoilValue(showSearchPopup);

  const onClickSearchPopup = () => {
    setShowSearchPopup(true);
  };

  const setShowMemberPopup = useSetRecoilState(showMemberPopup);
  const setLoginState = useSetRecoilState(loginState);
  const readLoginState = useRecoilValue(loginState);

  const [token, setToken] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedDisplayName = sessionStorage.getItem("displayName");

    setToken(storedToken);
    setDisplayName(storedDisplayName);

    if (storedToken && storedDisplayName) {
      setLoginState(true);
      setShowMemberPopup((prevState) => ({
        ...prevState,
        openPopup: false,
        loginPopup: false,
        joinPopup: false,
      }));
    }
  }, []);

  const onClickLoginPopup = () => {
    setShowMemberPopup((prevState) => ({
      ...prevState,
      openPopup: true,
      loginPopup: true,
      joinPopup: false,
    }));
  };

  const onClickJoinPopup = () => {
    setShowMemberPopup((prevState) => ({
      ...prevState,
      openPopup: true,
      loginPopup: false,
      joinPopup: true,
    }));
  };

  const onClickLogout = () => {
    setLoginState(false);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("displayName");
  };

  return (
    <header id="header">
      <div className="wrap">
        <div className="container">
          <Link to="/" aria-label="홈으로 이동">
            <h1 className="logo">
              <img className="logo_img" src={logoB} alt="WIDIT" />
              <img
                className="logo_img"
                style={{ display: "none" }}
                src={logoW}
                alt="WIDIT"
              />
            </h1>
          </Link>
          <nav className="main_menu">
            <ul>
              <li>
                <Link to="" className="menu_btn" aria-label="영화" title="영화">
                  영화
                </Link>
              </li>
              <li>
                <Link to="" className="menu_btn" aria-label="TV" title="TV">
                  TV
                </Link>
              </li>
              <li>
                <Link to="" className="menu_btn" aria-label="책" title="책">
                  책
                </Link>
              </li>
              <li>
                <Link to="" className="menu_btn" aria-label="웹툰" title="웹툰">
                  웹툰
                </Link>
              </li>
            </ul>
          </nav>
          <div className="side_bar">
            <div className="search_box">
              <i />
              <input
                type="text"
                placeholder="검색어를 입력하세요."
                onClick={onClickSearchPopup}
              ></input>
              {searchPopup && <SearchPopup></SearchPopup>}
            </div>
            {!readLoginState && (
              <>
                <button className="login" onClick={onClickLoginPopup}>
                  로그인
                </button>
                <button className="join" onClick={onClickJoinPopup}>
                  회원가입
                </button>
              </>
            )}
            {readLoginState && (
              <>
                <button className="user_name">{displayName} 님</button>
                <button className="logout" onClick={onClickLogout}>
                  로그아웃
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
