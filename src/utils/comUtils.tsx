import { AxiosResponse } from 'axios';
import axios from '../api/axios';

interface ComUtils {
    callAxiosGet : CallAxiosGetFunction;
    callAxiosPost : CallAxiosPostFunction;
}

type CallAxiosGetFunction = (
    targetUrl: string,
    queryParams?: Record<string, string>,
    callback?: ( result: object ) => void
) => void;

type CallAxiosPostFunction = (
    targetUrl: string,
    queryParams?: Record<string, string>,
    formData?: FormData,
    callback?: ( result: object ) => void
) => void;

const comUtils: ComUtils = {
    
    callAxiosGet: async (
      targetUrl: string,
      queryParams?: Record<string, string>,
      callback?: (result: object) => void
    ) => {
        try {
            const response: AxiosResponse<object> = await axios.get(targetUrl, { params: queryParams });
            if (callback) {
                callback(response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    },

    callAxiosPost: async (
        targetUrl: string,
        queryParams?: Record<string, string>,
        formData?: FormData | undefined,
        callback?: ( result: object ) => void
    ) => {
        try {
            const response: AxiosResponse<object> = await axios.post(targetUrl, formData, { params: queryParams });
        
            if (callback) {
              callback(response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
};
  
export default comUtils;