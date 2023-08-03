// import { useForm } from 'react-hook-form';
// import { useAppDispatch, useAppSelector } from '../../store';
// import { actShowAPopUp } from '../../utile/slice/alartPopUpSlice';
// import { postForm } from '../slice/postFormSlice';

// import React from 'react';

// const useFormHook = () => {
//   const dispatch = useAppDispatch();

//   const onError = (error) => {
//     const requiredErr = Object.entries(error)
//       .map((v) => {
//         return v[1];
//       })
//       .filter((v) => {
//         return v.type === 'required';
//       });

//     if (requiredErr.length) {
//       dispatch(
//         actShowAPopUp({
//           message: requiredErr[0].message,
//           cntBtn: 1,
//           img: '',
//           btnName: {},
//         }),
//       );
//     }
//   };
//   return { onError };
// };

// export default useFormHook;
import React from 'react';

const ß = () => {
    return (
        <div>
            
        </div>
    );
};

export default ß;
