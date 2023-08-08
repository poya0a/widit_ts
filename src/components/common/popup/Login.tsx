import React from 'react';
import { useSetRecoilState } from "recoil";

import { showMemberPopup } from '../../../atoms';

const Login = () => {
    const setShowMemberPopup = useSetRecoilState(showMemberPopup);

    const onclickJoin = () => {
        setShowMemberPopup((prevState) => ({
            ...prevState,
            openPopup: true,
            loginPopup: false,
            joinPopup: true,
        }));
    }

    return (
        <div id="login">
            <h3 className="member_title">로그인</h3>
            <form>
                <div>
                    <label>
                        <input id="loginId" placeholder="아이디"></input>
                    </label>
                </div>
                <div>
                    <label>
                        <input id="loginPassword" placeholder="비밀번호"></input>
                    </label>
                </div>
                <button type="submit">로그인</button>
            </form>
            <p><button>비밀번호를 잊어버리셨나요?</button></p>
            <p>계정이 없으신가요? <button onClick={onclickJoin}>회원가입</button></p>
        </div>
    );
};

export default Login;