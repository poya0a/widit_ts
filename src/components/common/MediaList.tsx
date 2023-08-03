import React from 'react';
import ListSlide from './ListSlide';

const List = () => {
    return (
        <div id="mediaList">
            <div className="title_box">
                <h3 className="list_title">박스오피스 순위</h3>
            </div>
            <ListSlide></ListSlide>
            <div className="title_box">
                <h3 className="list_title">왓챠 TOP 10 영화</h3>
            </div>
            <ListSlide></ListSlide>   
            <div className="title_box">
                <h3 className="list_title">넷플릭스 순위</h3>
            </div>
            <ListSlide></ListSlide>   
            <div className="title_box">
                <h3 className="list_title">왓챠 실시간 급상승 TOP 30</h3>
            </div>
            <ListSlide></ListSlide>   
            <div className="title_box">
                <h3 className="list_title">평균별점이 높은 작품</h3>
            </div>
            <ListSlide></ListSlide>   
        </div>
    );
};

export default List;