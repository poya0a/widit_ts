import "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useSetRecoilState } from "recoil";

import { authService } from "api/firebase";
import useFormHook from "utils/hook/useFormHook";
import { showMemberPopup } from "../../../atoms";

interface UserData {
  name: string;
  email: string;
  password: string;
}

export const joinFn = async (data: UserData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authService,
      data.email,
      data.password
    );
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: data.name,
    });

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
  }
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
