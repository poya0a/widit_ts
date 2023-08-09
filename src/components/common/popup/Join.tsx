import "firebase/auth";
import React from "react";
import { useSetRecoilState } from "recoil";

import useFormHook from "utils/hook/useFormHook";
import { showMemberPopup } from "../../../atoms";

export const joinFn = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, data.id, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const Join = () => {
  console.log(React);
  const setShowMemberPopup = useSetRecoilState(showMemberPopup);

  const onclickLogin = () => {
    setShowMemberPopup((prevState) => ({
      ...prevState,
      openPopup: true,
      loginPopup: true,
      joinPopup: false,
    }));
  };

  const { onError, onSubmit, register, handleSubmit, getValues } =
    useFormHook();

  return (
    <div id="join">
      <h3 className="member_title">회원가입</h3>
      <form onSubmit={handleSubmit((data) => onSubmit(data, "join"), onError)}>
        <div>
          <label>
            <input
              id="joinName"
              placeholder="이름"
              {...register("name", { required: true })}
            ></input>
          </label>
        </div>
        <div>
          <label>
            <input
              id="joinEmail"
              placeholder="이메일"
              {...register("email", { required: true })}
            ></input>
          </label>
        </div>
        <div>
          <label>
            <input
              id="joinPassword"
              type="password"
              placeholder="비밀번호"
              {...register("password", { required: true })}
            ></input>
          </label>
        </div>
        <button type="submit">회원가입</button>
      </form>
      <p>
        이미 가입하셨나요? <button onClick={onclickLogin}>로그인</button>
      </p>
    </div>
  );
};

export default Join;
