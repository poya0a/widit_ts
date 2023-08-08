import React from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";

import { showAlertPopup } from '../../../atoms';

const Alart = () => {

    const alertPopup = useRecoilValue(showAlertPopup);
    const setShowAlertPopup = useSetRecoilState(showAlertPopup);

    const onClickAlertClose = () => {
        setShowAlertPopup((prevState) => ({
            ...prevState,
            openPopup: false,
            message: ""
        }));
    }

    return (
        <div id="alert">
            <div className="alert_background" onClick={onClickAlertClose}></div>
            <div className="alert_container">
                <div className="alert_wrap">
                    <div className="alert_header">
                        <p>안내</p>
                    </div>
                    <p>{alertPopup.message}</p>
                    <button onClick={onClickAlertClose}>확인</button>
                </div>
            </div>
        </div>
    );
};

export default Alart;