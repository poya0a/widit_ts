import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from "recoil";

import requests from "api/requests";
import { artistListData, artistList } from "../../atoms";
import comUtils from "../../utils/comUtils";

const CastItem = ({ data }: { data: object | undefined }) => {
    const peopleNm: string = (data as any).peopleNm;
    const setListState = useSetRecoilState(artistList);
  
    useEffect(() => {
      const artistList = comUtils.callAxiosGet(
        requests.ARTISLIST,
        { key: "e53e2081cf896f3809c6a427ef1c2901", peopleNm: peopleNm },
        (result) => setListState(result as artistListData)
      );
    }, [peopleNm]);
  
    const ListState = useRecoilValue(artistList);

    const peopleCd:string = ListState.peopleListResult.peopleList[0].peopleCd

    return (
        <div id="castItem">
            <Link to={"/artist/" + peopleCd}>
                <div className="cast_img">
                    <img src="" alt="" />
                </div>
                <p>{peopleNm}</p>
            </Link>
        </div>
    );
};

export default CastItem;