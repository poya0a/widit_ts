import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo/widit_b.png'

import Join from './Join';
import Login from './Login';

const MemberPopup = () => {
    return (
        <div id="MemberPopup">
            <div className="member_container">
                <div className="member_wrap">
                    <img className="popup_logo" src={logo} alt="WIDIT" />
                    <Join></Join>
                    <Login></Login>

                    <div className="member_footer">
                        <p>OR</p>
                        <ul>
                            <li><Link to="/"></Link></li>
                            <li><Link to="/"></Link></li>
                            <li><Link to="/"></Link></li>
                            <li><Link to="/"></Link></li>
                            <li><Link to="/"></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberPopup;