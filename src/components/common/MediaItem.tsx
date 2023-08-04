import React from 'react';
import { Link } from 'react-router-dom';

const MediaItem = () => {
    console.log(React)
    return (
        <li className="mediaItem">
            <Link to="">
                <div className="cover_img">
                    <img></img>
                </div>
                <div className="media_text">
                    <p className="title">밀수</p>
                    <p className="sub"><em>2023</em><em>액션</em></p>
                    <p className="mark"><em>예상</em><em>3.7</em></p>
                    <p className="reserve"><em>예매율</em><em>누적관객</em></p>
                </div>
            </Link>
        </li>
    );
};

export default MediaItem;