import { selector, useRecoilValue } from "recoil";
import requests from 'api/requests';
import { AxiosResponse } from 'axios';
import axios from './api/axios';
import { getState } from "atoms";

// const getData = useRecoilValue(getState);

// export const callAxiosGet = selector({
//   key: "callAxiosGet",
//   get: async () => {
//     try {
//       const response: AxiosResponse<object> = await axios.get(getData.targetUrl, { params: getData.queryParams});
//       if (getData.callback) {
//           getData.callback(response.data);
//       }
//     } catch (error) {
//         console.error('Error:', error);
//     }
//   }
// });

export const boxOfficeDailyData = selector({
  key: "boxOfficeDailyData",
  get: async () => {
    try {
      const response: AxiosResponse<object> = await axios.get(requests.DAILY, { params:{key: "e53e2081cf896f3809c6a427ef1c2901", targetDt: "20230803"}});
      return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
  }
});

export const boxOfficeWeeklyData = selector({
  key: "boxOfficeWeeklyData",
  get: async () => {
    try {
      const response: AxiosResponse<object> = await axios.get(requests.DAILY, { params:{key: "e53e2081cf896f3809c6a427ef1c2901", targetDt: "20230803"}});
      return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
  }
});
