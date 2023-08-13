import { AxiosResponse } from "axios";
import axios from "../api/axios";
import { BoxOfficeData, movieDetailData, artistListData, artistDetailData } from "../atoms";

interface ComUtils {
  callAxiosGet: CallAxiosGetFunction;
  callAxiosPost: CallAxiosPostFunction;
}

type CallAxiosGetFunction = (
  targetUrl: string,
  queryParams?: Record<string, string>,
  callback?: (result: BoxOfficeData | movieDetailData | artistListData | artistDetailData) => void
) => void;

type CallAxiosPostFunction = (
  targetUrl: string,
  queryParams?: Record<string, string>,
  formData?: FormData,
  callback?: (result: BoxOfficeData) => void
) => void;

const comUtils: ComUtils = {
  callAxiosGet: async (
    targetUrl: string,
    queryParams?: Record<string, string>,
    callback?: (result: BoxOfficeData) => void
  ) => {
    try {
      const response: AxiosResponse<BoxOfficeData> = await axios.get(
        targetUrl,
        { params: queryParams }
      );
      const data: BoxOfficeData | movieDetailData | artistListData | artistDetailData = response.data;
      if (callback) {
        callback(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },

  callAxiosPost: async (
    targetUrl: string,
    queryParams?: Record<string, string>,
    formData?: FormData | undefined,
    callback?: (result: BoxOfficeData) => void
  ) => {
    try {
      const response: AxiosResponse<BoxOfficeData> = await axios.post(
        targetUrl,
        formData,
        { params: queryParams }
      );
      const data: BoxOfficeData = response.data;
      if (callback) {
        callback(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },
};

export default comUtils;
