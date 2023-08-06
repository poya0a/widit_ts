import requests from 'api/requests';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState, selector, useRecoilState } from "recoil";
// import { boxOfficeDailyData, boxOfficeWeeklyData } from '../../atoms';
import { boxOfficeDailyData, boxOfficeWeeklyData } from '../../selectors';
import comUtils from '../../utils/comUtils';
import ListSlide from './ListSlide';
import { getState } from '../../atoms';

const MediaList = () => {

    // const setDailyState = useSetRecoilState(boxOfficeDailyData);
    // const setWeeklyState = useSetRecoilState(boxOfficeWeeklyData);

    // useEffect(() => {
    //     const dailtList = comUtils.callAxiosGet(
    //         requests.DAILY,
    //         { key: "e53e2081cf896f3809c6a427ef1c2901", targetDt: "20230803" },
    //         (result) => setDailyState(result)
    //     );
    //     const weeklyList = comUtils.callAxiosGet(
    //         requests.WEEKLY,
    //         { key: "e53e2081cf896f3809c6a427ef1c2901", targetDt: "20230729" },
    //         (result) => setWeeklyState(result)
    //     );
    // }, []);

    // const dailyState = useRecoilValue(boxOfficeDailyData);
    // const weeklyState = useRecoilValue(boxOfficeWeeklyData);
    
    const dailyState = useRecoilValue(boxOfficeDailyData);
    const weeklyState = useRecoilValue(boxOfficeWeeklyData);
    console.log(dailyState)
    console.log(weeklyState)

    return (
        <div id="mediaList">
            <div className="title_box">
                <h3 className="list_title">박스오피스 일별 순위</h3>
            </div>
            <ListSlide ListData={dailyState} />
            {/* <div className="title_box"> */}
                {/* <h3 className="list_title">박스오피스 주말 순위</h3>
            </div>
            <ListSlide ListData={weeklyState} /> */}
            <div className="title_box">
                <h3 className="list_title">왓챠 TOP 10 영화</h3>
            </div>
            <ListSlide ListData={dailyState} />  
            <div className="title_box">
                <h3 className="list_title">넷플릭스 순위</h3>
            </div>
            <ListSlide ListData={dailyState} /> 
            <div className="title_box">
                <h3 className="list_title">왓챠 실시간 급상승 TOP 30</h3>
            </div>
            <ListSlide ListData={dailyState} /> 
            <div className="title_box">
                <h3 className="list_title">평균별점이 높은 작품</h3>
            </div>
            <ListSlide ListData={dailyState} /> 
        </div>
    );
};

export default MediaList;