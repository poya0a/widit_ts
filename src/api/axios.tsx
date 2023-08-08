import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from "recoil";
import { loadState } from '../atoms';

const ax: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
});

const AxiosInterceptor = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const setLoadState = useSetRecoilState(loadState);
    const [isSet, setIsSet] = useState<boolean>(false);

    useEffect(() => {
        const pending = (config: any) => {
            setLoadState(true)
            return config;
        };

        const fulfilled = (response: AxiosResponse): AxiosResponse => {
            setLoadState(false)
            return response;
        };

        const rejected = (error: AxiosError): Promise<AxiosError> => {
            setLoadState(false)
            if (error?.response?.status?.toString().startsWith('5', 0)) {
                navigate('/access-error');
            }
            return Promise.reject(error);
        };

        const reqInterceptor = ax.interceptors.request.use(pending);
        const resInterceptor = ax.interceptors.response.use(fulfilled, rejected);
        setIsSet(true);

        return () => {
            ax.interceptors.request.eject(reqInterceptor);
            ax.interceptors.response.eject(resInterceptor);
        };
    }, []);

    return isSet ? <>{children}</> : null;
};

export default ax;
export { AxiosInterceptor };

