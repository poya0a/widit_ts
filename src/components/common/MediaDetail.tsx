import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import requests from "api/requests";
import { movieData, movieDetailData } from "../../atoms";
import comUtils from "../../utils/comUtils";

const MediaDetail = () => {
  const { movieCd } = useParams<string>();
  const navigate = useNavigate();

  const setDetailState = useSetRecoilState(movieData);

  if (!movieCd) {
    navigate("/notfound");
    return null;
  }

  useEffect(() => {
    const movieDetail = comUtils.callAxiosGet(
      requests.MOVIEDETAIL,
      { key: "e53e2081cf896f3809c6a427ef1c2901", movieCd: movieCd },
      (result) => setDetailState(result as movieDetailData)
    );
  }, [movieCd]);

  const detailState = useRecoilValue(movieData);
  console.log(detailState);
  return (
    <div id="mediadetail">
      <section className="head_container">
        <div className="head_wrap">
          <div className="title_box">
            <h1>{detailState.movieInfoResult.movieInfo.movieNm}</h1>
            <p>{detailState.movieInfoResult.movieInfo.movieNm}</p>
            <p>
              {detailState.movieInfoResult.movieInfo.prdtYear}
              <i></i>
              {detailState.movieInfoResult.movieInfo.genres.map((item) => {
                return item.genreNm;
              })}
              <i></i>
              {detailState.movieInfoResult.movieInfo.nations.map((item) => {
                return item.nationNm;
              })}
            </p>
            <p>
              {detailState.movieInfoResult.movieInfo.showTm} 분<i></i>
              {detailState.movieInfoResult.movieInfo.audits[0]?.watchGradeNm}
            </p>
            <p>
              예매 순위
              <i></i>
              개봉
              <i></i>
              누적 관객
            </p>
          </div>
        </div>
      </section>
      <section className="info_container">
        <div className="info_wrap">
          <div className="info_left">
            <div className="poster_box">
              <img src="" alt="" />
            </div>
            <div className="gragh_box">
              <p>별점 그래프</p>
              <h3 className="average">
                평균 <p>( 00 명)</p>{" "}
              </h3>
              <div className="gragh"></div>
            </div>
          </div>
          <div className="info_right">
            <div className="info_head">
              <div className="head_item">
                <div className="evaluation">
                  <em>부족해요</em>
                </div>
              </div>
              <div className="head_item">
                <div className="predictive_evaluation">
                  <p>3.0</p>
                  <em>예상 별점</em>
                </div>
                <div className="average_evaluation">
                  <p>3.0</p>
                  <em>평균 별점(000만명)</em>
                </div>
              </div>
              <div className="head_item">
                <div className="item_button">
                  <em>보고싶어요</em>
                </div>
                <div className="item_button">
                  <em>코멘트</em>
                </div>
                <div className="item_button">
                  <em>보는중</em>
                </div>
                <div className="item_button">
                  <em>더보기</em>
                </div>
              </div>
            </div>
            <div className="info_comment">
              <p>이 작품에 대한 님의 평가를 글로 남겨보세요.</p>
              <button className="comment_button">코멘트 남기기</button>
            </div>
            <div className="prefer_box">
              <div className="dirctor">
                <p>선호하는 감독</p>
                <a>A</a>
              </div>
              <div className="actor">
                <p>선호하는 배우</p>
                <a>B</a>
              </div>
              <div className="tag">
                <p>선호하는 태그</p>
                <a>#C</a>
              </div>
            </div>
            <div className="summary_box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, error quod fugit eum incidunt exercitationem
                consectetur fugiat facere quam recusandae veniam et soluta!
                Quidem in vel accusantium, unde ipsa dolor. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Sapiente, error quod
                fugit eum incidunt exercitationem consectetur fugiat facere quam
                recusandae veniam et soluta! Quidem in vel accusantium, unde
                ipsa dolor. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Sapiente, error quod fugit eum incidunt exercitationem
                consectetur fugiat facere quam recusandae veniam et soluta!
                Quidem in vel accusantium, unde ipsa dolor. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Sapiente, error quod
                fugit eum incidunt exercitationem consectetur fugiat facere quam
                recusandae veniam et soluta! Quidem in vel accusantium, unde
                ipsa dolor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cast_container">
        <h3 className="container_title">출연/제작</h3>
      </section>
      <section className="comment_container">
        <h3 className="container_title">코멘트</h3>
      </section>
      <section className="gallery_container">
        <h3 className="container_title">갤러리</h3>
        <h3 className="container_title">동영상</h3>
      </section>
      <section className="work_recommendation">
        <h3 className="container_title">비슷한 작품</h3>
      </section>
    </div>
  );
};

export default MediaDetail;
