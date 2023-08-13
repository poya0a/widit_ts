import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import requests from "api/requests";
import { artistDetailData, artistDetail } from "../../../atoms";
import comUtils from "../../../utils/comUtils";
import Filmos from './Filmos';

const ArtistDetail = () => {
    const { peopleCd } = useParams<string>();
    const navigate = useNavigate();

    const setDetailState = useSetRecoilState(artistDetail);
  
    if (!peopleCd) {
      navigate("/notfound");
      return null;
    }
  
    useEffect(() => {
      const artistDetail = comUtils.callAxiosGet(
        requests.ARTISTDETAIL,
        { key: "e53e2081cf896f3809c6a427ef1c2901", peopleCd: peopleCd },
        (result) => setDetailState(result as artistDetailData)
      );
    }, [peopleCd]);
  
    const detailState = useRecoilValue(artistDetail);

    return (
        <div id="artistDetail">
            <section className="artist_info">
                <div className="artist_img">
                    <img src="" alt="" />
                </div>
                <div className="info_text">
                    <h1>{detailState.peopleInfoResult.peopleInfo.peopleNm}</h1>
                    <p>배우</p>
                </div>
            </section>
            <section className="artist_like">
                <button>00명이 이 인물을 좋아합니다.</button>
            </section>
            <section className="artist_filmos">
                <h2>필모그래피</h2>
                <table>
                    <thead>
                        <th></th>
                        <th></th>
                        <th>제목</th>
                        <th>역할</th>
                        <th>평가</th>
                        <th>감상 가능 서비스</th>
                    </thead>
                    <tbody>
                        {detailState.peopleInfoResult.peopleInfo.filmos.map((item, index) => {
                            return <Filmos key={index} data={item} />   
                        })}
                    </tbody>
                </table>
                <div className="more_button_box">
                    <button className="filmos_more_button">더보기</button>
                </div>
            </section>
        </div>
    );
};

export default ArtistDetail;