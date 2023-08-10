import "firebase/auth";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

import { joinFn } from "components/common/popup/Join";
import { loginFn } from "components/common/popup/Login";
import { authService } from "../../api/firebase";
import { showAlertPopup } from "../../atoms";

interface element {
  id: string;
  placeholder: string;
  name: string;
}

interface dataObject {
  type: string;
  message: string;
}

interface RequiredError {
  type: "required";
  message: string;
  ref: element;
}

interface regExpObject {
  [key: string]: RegExp;
  id: RegExp;
  email: RegExp;
  password: RegExp;
}

const regExp: regExpObject = {
  id: /^[a-z]+[a-z0-9]{5,19}$/g,
  email:
    /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9.-]+\.(?:kr|co\.kr|or\.kr|ne\.kr|re\.kr|pe\.kr|go\.kr|com|net|org|biz|info|name))$/,
  password: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/,
};

type SubmitType = "join" | "login";

interface JoinData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

const useFormHook = () => {
  const { register, handleSubmit, getValues, setError, clearErrors } =
    useForm();

  const setShowAlertPopup = useSetRecoilState(showAlertPopup);

  //값이 있는 경우 에러 처리
  const onSubmit = async (
    data: Record<string, dataObject>,
    type: SubmitType
  ) => {
    clearErrors();

    const invalidDataEntry = Object.entries(data).find(([key, value]) => {
      return regExp[key] && !regExp[key].test(value.toString());
    });

    if (invalidDataEntry) {
      const [key] = invalidDataEntry;
      const alertMsg = dataToValidate(key);
      setShowAlertPopup((prevState) => ({
        ...prevState,
        openPopup: true,
        message: `${alertMsg} 형식이 올바르지 않습니다. \n다시 입력해주세요.`,
      }));
    } else {
      if (type === "join") {
        try {
          const signInMethods = await fetchSignInMethodsForEmail(
            authService,
            data.email.toString()
          );
          if (signInMethods.length < 1) {
            const userData: JoinData = {
              name: data.name.toString(),
              email: data.email.toString(),
              password: data.password.toString(),
            };
            joinFn(userData);
          } else {
            setShowAlertPopup((prevState) => ({
              ...prevState,
              openPopup: true,
              message: `중복된 이메일입니다. \n다시 입력해주세요.`,
            }));
          }
        } catch (error) {
          console.log(error);
          console.error("Error checking email duplicate:", error);
          return false;
        }
      } else if (type === "login") {
        const userData: LoginData = {
          email: data.email.toString(),
          password: data.password.toString(),
        };
        loginFn(userData);
      }
    }
  };

  const dataToValidate = (name: string) => {
    let alertMsg = "";

    switch (name) {
      case "email":
        alertMsg = "이메일";
        break;
      case "password":
        alertMsg = "비밀번호";
        break;
      default:
        break;
    }
    return alertMsg;
  };

  //값이 없는 경우 에러 처리
  const onError = (error: Record<string, any>) => {
    const dataList = Object.entries(error).map(
      ([, value]) => value as RequiredError
    );

    const emptyMessage = dataList.find((obj) => obj.message === "");

    if (emptyMessage) {
      const refName = emptyMessage.ref.placeholder;
      setShowAlertPopup((prevState) => ({
        ...prevState,
        openPopup: true,
        message: refName + "을(를) 입력해주세요.",
      }));
    }
  };

  return {
    onError,
    onSubmit,
    register,
    handleSubmit,
    getValues,
  };
};

export default useFormHook;
