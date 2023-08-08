import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from "recoil";

import logo from '../../../assets/images/logo/widit_b.png';

import { showMemberPopup } from '../../../atoms';
import Join from './Join';
import Login from './Login';

const MemberPopup = () => {

    const memberPopup = useRecoilValue(showMemberPopup)

    const setShowMemberPopup = useSetRecoilState(showMemberPopup);

    const onClickPopupClose = () => {
        setShowMemberPopup((prevState) => ({
            ...prevState,
            openPopup: false,
            loginPopup: false,
            joinPopup: false,
        }));
    }
    
    return (
        <div id="MemberPopup">
            <div className="popup_background" onClick={onClickPopupClose}></div>
            <div className="member_container">
                <div className="member_wrap">
                    <img className="popup_logo" src={logo} alt="WIDIT" />
                    {memberPopup.joinPopup && <Join/>}
                    {memberPopup.loginPopup && <Login/>}
                    <div className="member_footer">
                        <p><em>OR</em></p>
                        <ul>
                            <li><Link to="/">KAKAO</Link></li>
                            <li><Link to="/">GOOGLE</Link></li>
                            <li><Link to="/">TWITTER</Link></li>
                            <li><Link to="/">APPLE</Link></li>
                            <li><Link to="/">LINE</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberPopup;