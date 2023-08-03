import React from 'react';
import { Link } from 'react-router-dom';
import facebook from  '../../assets/images/ico/ico_facebook.png';
import insta from '../../assets/images/ico/ico_insta.png';
import kakao from '../../assets/images/ico/ico_kakao.png';
import twit from '../../assets/images/ico/ico_twit.png';
import youtube from '../../assets/images/ico/ico_youtube.png';
import footerIco from '../../assets/images/logo/logo_w.png';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="wrap">
        <div className="container">
          <div className="count_box">
            <p className="count_text">
              지금까지 쌓인 평가
              <i className="count_number">99,999,999</i>
            </p>
          </div>
          <div className="footer_inner">
            <div className="footer_info">
              <div className="info_sec">
                <Link to="" aria-label="서비스 이용약관">서비스 이용약관</Link>
                <Link to="" aria-label="개인정보 처리방침">개인정보 처리방침</Link>
                <Link to="" aria-label="회사 안내">회사 안내</Link>
              </div>
              <div className="info_sec">
                <p>고객 센터<Link to="">cs@widit.co.kr</Link><Link to="">02-000-0000</Link></p>
                <p>광고 문의<Link to="">ad_sales@widit.co.kr</Link></p>
              </div>
              <div className="info_sec">
                <Link to="" aria-label="서울특별시 영등포구 버드나루로 142">서울특별시 영등포구 버드나루로 142</Link>
                <Link to="" aria-label="위드잇">위드잇</Link>
                <Link to="" aria-label="서울특별시 영등포구 버드나루로 142">서울특별시 영등포구 버드나루로 142</Link>
                <p>사업자 등록 번호 000-00-00000</p>
                <i><img src={footerIco} />© 2023 by WIDIT, Inc. All rights reserved.</i>
              </div>
            </div>
            <div className="footer_select">
              <div className="language_box">
                <Link to="">한국어</Link>
              </div>
              <div className="links">
                <ul className="sns_list">
                  <li className="sns_item">
                    <a href="#none" title="카카오 채널">
                      <img src={kakao} alt="kakao"></img>
                    </a>
                  </li>
                  <li className="sns_item">
                    <a href="#none" title="유튜브 채널">
                      <img src={youtube} alt="youtube"></img>
                    </a>
                  </li>
                  <li className="sns_item">
                    <a href="#none" title="인스타그램">
                      <img src={insta} alt="instagram"></img>
                    </a>
                  </li>
                  <li className="sns_item">
                    <a href="#none" title="페이스북">
                      <img src={facebook} alt="facebook"></img>
                    </a>
                  </li>
                  <li className="sns_item">
                    <a href="#none" title="트위터">
                      <img src={twit} alt="twitter"></img>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;