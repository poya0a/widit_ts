import React, { useState } from 'react';
import { useSetRecoilState } from "recoil";

import useFormHook from 'utils/hook/useFormHook';
import { showMemberPopup } from '../../../atoms';

const Join = () => {
    console.log(React)

    const setShowMemberPopup = useSetRecoilState(showMemberPopup);

    const onclickLogin = () => {
        setShowMemberPopup((prevState) => ({
            ...prevState,
            openPopup: true,
            loginPopup: true,
            joinPopup: false,
        }));
    }

    const { onError, register, handleSubmit, getValues } = useFormHook();
    const [registerName, setRegisterName] = useState<string>("");
    const [registerEmail, setRegisterEmail] = useState<string>("");
    const [registerPassword, setRegisterPassword] = useState<string>("");

    return (
        <div id="join">
            <h3 className="member_title">회원가입</h3>
            <form onSubmit={handleSubmit( onError )}>
                <div>
                    <label>
                        <input 
                        id="joinName" 
                        placeholder="이름"
                        {...register("joinName")}
                        ></input>
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                        id="joinEmail" 
                        placeholder="이메일"
                        {...register("joinEmail")}
                        ></input>
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                        id="joinPassword" 
                        placeholder="비밀번호"
                        {...register("joinPassword")}
                        ></input>
                    </label>
                </div>
                <button type="submit">회원가입</button>
            </form>
            <p>이미 가입하셨나요? <button onClick={onclickLogin}>로그인</button></p>
        </div>
    );
};

export default Join;