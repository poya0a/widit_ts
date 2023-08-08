import { useForm } from 'react-hook-form';
import { useSetRecoilState } from "recoil";

import { showAlertPopup } from '../../atoms';

interface ErrorObject {
  type: string;
  message: string;
}

interface RequiredError {
  type: 'required';
  message: string;
  ref: string;
}

const useFormHook = () => {
  const { register, handleSubmit, getValues, setError, clearErrors } = useForm();

  const setShowAlertPopup = useSetRecoilState(showAlertPopup);
  
  //값이 있는 경우 에러 처리
  const onError = (error: Record<string, ErrorObject>) => {
    console.log(error)
    const requiredErr = Object.entries(error)
    .map((v) => {
      return v[1];
    })
    .filter((v) => {
      return v.type === 'required';
    });
      console.log(requiredErr)
    if (requiredErr.length) {
      setShowAlertPopup((prevState) => ({
        ...prevState,
        openPopup: true,
        // message: requiredErr[0].message
      }));
    }
  };

  //값이 없는 경우
  const onSubmit= async (data: Record<string, any>) => {
    clearErrors();
    const dataList = Object.entries(data)
    .map(([, value]) => value as RequiredError);

    const emptyMessage = dataList.find(obj => obj.message === '');

    if (emptyMessage) {
      const refValue = emptyMessage.ref.toString();
      console.log(refValue)
      const errorMessage = getErrorMessageByRef(refValue);
      // setShowAlertPopup((prevState) => ({
      //   ...prevState,
      //   openPopup: true,
      //   message: errorMessage
      // }));
    }
  };

  const getErrorMessageByRef = (refValue: string): string | undefined => {

    if (refValue === 'input#loginId') {
      return '아이디를 입력하세요.';
    } else if (refValue === 'input#loginPassword') {
      return '비밀번호를 입력하세요.';
    }
    
    return undefined;
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