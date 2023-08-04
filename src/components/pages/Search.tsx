import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    console.log(React)
    return (
        <div id="search">
            <section className="sec search_title">
                <h3>의 검색결과</h3>
            </section>
            <section className="sec result_list">
                <div className="menu_box">
                    <nav>
                        <ul>
                            <li className="active">콘텐츠</li>
                            <li>인물</li>
                            <li>컬렉션</li>
                            <li>유저</li>
                        </ul>
                    </nav>
                </div>
                {/* <ListSlide ListData={} /> */}
            </section>

            <section className="sec search_category">
                <div className="category_box">
                    <h3 className="category_title">영화</h3>
                    <Link className="more_btn" to="/">더보기</Link>
                </div>
                <div className="category_box">
                    <h3 className="category_title">TV</h3>
                    <Link className="more_btn" to="/">더보기</Link>
                </div>
                <div className="category_box">
                    <h3 className="category_title">책</h3>
                    <Link className="more_btn" to="/">더보기</Link>
                </div>
                <div className="category_box">
                    <h3 className="category_title">웹툰</h3>
                    <Link className="more_btn" to="/">더보기</Link>
                </div>
            </section>
        </div>
    );
};

export default Search;