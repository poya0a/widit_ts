import { useForm } from 'react-hook-form';
// import { useAppDispatch, useAppSelector } from '../../store';
// import { actShowAPopUp } from '../../utile/slice/alartPopUpSlice';
// import { postForm } from '../slice/postFormSlice';

interface ErrorObject {
  type: string;
  message: string;
}

interface RequiredError {
  type: 'required';
  message: string;
}

const useFormHook = () => {
//   const dispatch = useAppDispatch();
  const { register, handleSubmit, getValues } = useForm();
  console.log(register)
  const onError = (error: Record<string, ErrorObject>) => {
   
    const requiredErr = Object.entries(error)
      .map(([key, value]) => value as RequiredError)
      .filter((v) => v.type === 'required');
// console.log(requiredErr)
    // if (requiredErr.length) {
    //   dispatch(
    //     actShowAPopUp({
    //       message: requiredErr[0].message,
    //       cntBtn: 1,
    //       img: '',
    //       btnName: {},
    //     }),
    //   );
    // }
  };

  const onResult = () => {

  }

  return {
    onError,
    register,
    handleSubmit,
    getValues,
  };
};

export default useFormHook;