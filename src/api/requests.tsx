import { Requests } from "../types/requests.type";

export const baseUrl = process.env.REACT_APP_API_ROOT;

const requests: Requests = {
  MAIN: "/api/mian",
  COMMON_CODE: "/api/commonCode",
  NEWS: "/api/news",
  NOTICE: "/api/notice",
  EVENT: "/api/event",
  DAILY:
    "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
  WEEKLY:
    "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json",
  MOVIEDETAIL:
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
  ARTISLIST : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json",
  ARTISTDETAIL : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json",
  NAVER: "https://openapi.naver.com/v1/search/movie.json",
};

export default requests;
