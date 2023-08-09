import React from "react";
import { useSetRecoilState } from "recoil";

import { showMemberPopup } from "../../../atoms";

import useFormHook from "utils/hook/useFormHook";

export const loginFn = () => {
  // const auth = getAuth();
  //   signInWithEmailAndPassword(auth, data.id, data.password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
};

const Login = () => {
  console.log(React);
  const setShowMemberPopup = useSetRecoilState(showMemberPopup);

  const onclickJoin = () => {
    setShowMemberPopup((prevState) => ({
      ...prevState,
      openPopup: true,
      loginPopup: false,
      joinPopup: true,
    }));
  };

  const { onError, onSubmit, register, handleSubmit, getValues } =
    useFormHook();
  return (
    <div id="login">
      <h3 className="member_title">로그인</h3>
      <form onSubmit={handleSubmit((data) => onSubmit(data, "login"), onError)}>
        <div>
          <label>
            <input
              id="loginEmail"
              placeholder="이메일"
              {...register("email", { required: true })}
            ></input>
          </label>
        </div>
        <div>
          <label>
            <input
              id="loginPassword"
              type="password"
              placeholder="비밀번호"
              {...register("password", { required: false })}
            ></input>
          </label>
        </div>
        <button type="submit">로그인</button>
      </form>
      <p>
        <button>비밀번호를 잊어버리셨나요?</button>
      </p>
      <p>
        계정이 없으신가요? <button onClick={onclickJoin}>회원가입</button>
      </p>
    </div>
  );
};

export default Login;
