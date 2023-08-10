import "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useSetRecoilState } from "recoil";

import { authService } from "api/firebase";
import useFormHook from "utils/hook/useFormHook";
import { showMemberPopup } from "../../../atoms";

interface UserData {
  email: string;
  password: string;
}

export const loginFn = async (data: UserData) => {
  try {
    const signInCredential = await signInWithEmailAndPassword(
      authService,
      data.email,
      data.password
    );

    const signedInUser = signInCredential.user;

    sessionStorage.setItem("token", await signedInUser.getIdToken());
    sessionStorage.setItem("displayName", signedInUser.displayName || "");
    window.location.reload();
  } catch (error: any) {
    const errorCode = error.code;
    if (errorCode == "auth/user-not-found") {
      alert("가입되지 않은 이메일입니다.");
    } else if (errorCode == "auth/wrong-password") {
      alert("비밀번호가 올바르지 않습니다.");
    }
  }
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
