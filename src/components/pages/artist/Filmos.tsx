import React from 'react';
import { useNavigate } from "react-router-dom";

const Filmos = ({ data }: { data: object | undefined }) => {

    const movieCd: string = (data as any).movieCd;
    const movieNm: string = (data as any).movieNm;
    const moviePartNm: string = (data as any).moviePartNm;

    const navigate = useNavigate();

    const onclickMovieDetail = () => {
        navigate("/contents/" + movieCd);
    }
    
    return (
        <tr className="filmos" onClick={onclickMovieDetail}>
            <td>
                <p>{movieCd.substring(0, 4)}</p>
            </td>
            <td>
                <div className="filmos_img">
                    <img src="" alt="" />
                </div>
            </td>
            <td>
                <p>{movieNm}</p>
            </td>
            <td>
                <p>{moviePartNm}</p>
            </td>
            <td></td>
            <td></td>
        </tr>
    );
};

export default Filmos;