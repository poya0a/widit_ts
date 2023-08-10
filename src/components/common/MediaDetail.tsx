import React from "react";
import { useParams } from "react-router-dom";

const MediaDetail = () => {
  console.log(React);
  const movieCd = useParams();
  console.log(movieCd);
  return (
    <div id="mediadetail">
      <section className="head_container"></section>
      <section className="info_container"></section>
      <section className="cast_container"></section>
      <section className="comment_container"></section>
      <section className="gallery_container"></section>
      <section className="work_recommendation"></section>
    </div>
  );
};

export default MediaDetail;
