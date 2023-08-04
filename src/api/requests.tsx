import { Requests } from '../types/requests.type';

export const baseUrl = process.env.REACT_APP_API_ROOT;

const requests: Requests = {
  MAIN: '/api/mian',
  COMMON_CODE: '/api/commonCode',
  NEWS: '/api/news',
  NOTICE: '/api/notice',
  EVENT: '/api/event',
  DAILY: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
  WEEKLY: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json'
};

export default requests;