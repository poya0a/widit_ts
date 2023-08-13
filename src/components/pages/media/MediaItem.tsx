import React from "react";
import { Link } from "react-router-dom";

const MediaItem = ({ data }: { data: object | undefined }) => {
  const rank: string = (data as any).rank;
  const movieNm: string = (data as any).movieNm;
  const audiAcc: string = (data as any).audiAcc;
  const movieCd: string = (data as any).movieCd;
  return (
    <li className="mediaItem">
      <Link to={"/contents/" + movieCd}>
        <div className="cover_img">
          <div className="rank">{rank}</div>
          <img></img>
        </div>
        <div className="media_text">
          <p className="title">{movieNm}</p>
          <p className="sub">
            <em>2023</em>
            <em>액션</em>
          </p>
          <p className="mark">
            <em>예상</em>
            <em>3.7</em>
          </p>
          <p className="reserve">
            <em>예매율</em> {}
            <em>누적관객</em> {audiAcc} 명
          </p>
        </div>
      </Link>
    </li>
  );
};

export default MediaItem;
