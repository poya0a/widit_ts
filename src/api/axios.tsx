// import React from 'react';
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { useEffect, useState } from 'react';
// import { useSetRecoilState } from "recoil";
// import { useNavigate } from 'react-router-dom';
// import { loadState } from '../atoms';

// const ax = axios.create({
//   baseURL: process.env.REACT_APP_API_ROOT,
// });

// const AxiosInterceptor = ({ children }: React.PropsWithChildren<{}>) => {
//     const navigate = useNavigate();
//     const setLoadState = useSetRecoilState(loadState);
//     const [isSet, setIsSet] = useState(false);

//     useEffect(() => {
//         const pending = (config: AxiosRequestConfig) => {
//             setLoadState(true)
//             return config;
//         };

//         const fulfilled = (response: AxiosResponse) => {
//             setLoadState(false)
//             return response;
//         };

//         const rejected = (error: any) => {
//             setLoadState(false)
//             if (error.response.status.toString().startsWith('5', 0)) {
//                 navigate('/access-error');
//             }
//             return Promise.reject(error);
//         };

//         const reqInterceptor = ax.interceptors.request.use(pending);
//         const resInterceptor = ax.interceptors.response.use(fulfilled, rejected);
//         setIsSet(true);

//         return () => {
//             ax.interceptors.request.eject(reqInterceptor);
//             ax.interceptors.response.eject(resInterceptor);
//         };
//     }, []);

//     return isSet ? <>{children}</> : null;
// };

// export default ax;
// export { AxiosInterceptor };
import React from 'react';

const axios = () => {
    return (
        <div>
            
        </div>
    );
};

export default axios;