import React from 'react';
import { Link } from 'react-router-dom';

const SearchPopup = () => {
    return (
        <div id="searchPopup">
            <h3 className="title_word">최근 검색어<p className="all_delete">모두 삭제</p></h3>
            <div className="recent_word word_list">
                <ul>
                    <li><Link to="">밀수</Link></li>
                    <li><Link to="">D.P.</Link></li>
                </ul>
            </div>
            <h3 className="title_word">인기 검색어<p className="all_delete">모두 삭제</p></h3>
            <div className="popular_word word_list">
                <ul>
                    <li><Link to="">The Moon</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default SearchPopup;