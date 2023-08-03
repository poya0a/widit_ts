import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoB from '../assets/images/logo/logo_b.png'
import logoW from '../assets/images/logo/logo_w.png'
import SearchPopup from 'popup/SearchPopup';

const Header = () => {

  const [ showSearchPopup, setShowSearchPopup ] = useState(false);

  const onClickSearchPopup = () => {
    setShowSearchPopup(true);
  }

  return (
    <header id="header">
      <div className="wrap">
        <div className="container">
          <Link to="/" aria-label="홈으로 이동">
            <h1 className="logo">
              <img className="logo_img" src={logoB} alt="WIDIT"/>
              <img className="logo_img" style={{display : "none"}} src={logoW} alt="WIDIT"/>
            </h1>
          </Link>
          <nav className="main_menu">
            <ul>
              <li>
                <Link className='menu_btn' aria-label="영화" title="영화">
                  영화
                </Link>
              </li>
              <li>
                <Link className='menu_btn' aria-label="TV" title="TV">
                  TV
                </Link>
              </li>
              <li>
                <Link className='menu_btn' aria-label="책" title="책">
                  책
                </Link>
              </li>
              <li>
                <Link className='menu_btn' aria-label="웹툰" title="웹툰">
                  웹툰
                </Link>
              </li>
            </ul>
          </nav>
          <div className="side_bar">
            <div className="search_box">
              <i />
              <input type="text" placeholder="검색어를 입력하세요." onClick={onClickSearchPopup}></input>
              { showSearchPopup && <SearchPopup></SearchPopup> }
            </div>
            <Link to="/" className="login" aria-label="로그인">로그인</Link>
            <Link to="/" className="join" aria-label="회원가입">회원가입</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;