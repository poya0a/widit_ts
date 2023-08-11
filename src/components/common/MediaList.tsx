import requests from "api/requests";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  boxOfficeDailyData,
  boxOfficeWeeklyData,
  todayState,
  weekendState,
  BoxOfficeData,
} from "../../atoms";
import comUtils from "../../utils/comUtils";
import ListSlide from "./ListSlide";

const MediaList = () => {
  const setDailyState = useSetRecoilState(boxOfficeDailyData);
  const setWeeklyState = useSetRecoilState(boxOfficeWeeklyData);

  const today = useRecoilValue(todayState);
  const weekend = useRecoilValue(weekendState);

  useEffect(() => {
    const dailyList = comUtils.callAxiosGet(
      requests.DAILY,
      { key: "e53e2081cf896f3809c6a427ef1c2901", targetDt: today },
      (result) => setDailyState(result as BoxOfficeData)
    );
    const weeklyList = comUtils.callAxiosGet(
      requests.WEEKLY,
      {
        key: "e53e2081cf896f3809c6a427ef1c2901",
        targetDt: weekend,
        weekGb: "0",
      },
      (result) => setWeeklyState(result as BoxOfficeData)
    );
  }, []);

  const dailyState = useRecoilValue(boxOfficeDailyData);
  const weeklyState = useRecoilValue(boxOfficeWeeklyData);

  return (
    <div id="mediaList">
      <div className="title_box">
        <h3 className="list_title">박스오피스 일별 순위</h3>
      </div>
      <ListSlide ListData={dailyState.boxOfficeResult.dailyBoxOfficeList} />
      <div className="title_box">
        <h3 className="list_title">박스오피스 주간 순위</h3>
      </div>
      <ListSlide ListData={weeklyState.boxOfficeResult.weeklyBoxOfficeList} />
      <div className="title_box">
        <h3 className="list_title">왓챠 TOP 10 영화</h3>
      </div>
      <ListSlide ListData={dailyState.boxOfficeResult.dailyBoxOfficeList} />
      <div className="title_box">
        <h3 className="list_title">넷플릭스 순위</h3>
      </div>
      <ListSlide ListData={dailyState.boxOfficeResult.dailyBoxOfficeList} />
      <div className="title_box">
        <h3 className="list_title">왓챠 실시간 급상승 TOP 30</h3>
      </div>
      <ListSlide ListData={dailyState.boxOfficeResult.dailyBoxOfficeList} />
      <div className="title_box">
        <h3 className="list_title">평균별점이 높은 작품</h3>
      </div>
      <ListSlide ListData={dailyState.boxOfficeResult.dailyBoxOfficeList} />
    </div>
  );
};

export default MediaList;
