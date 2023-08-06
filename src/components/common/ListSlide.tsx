import React, { useState } from 'react';

interface ListProps {
    ListData: object | undefined;
}
  
const ListSlide: React.FC<ListProps> = ({ ListData }) =>{
    console.log(ListData, 'ListData')
    return (
        <div id="listSlide">
            <div className="slide_wrap">
                <div className="slide_container">
                    <ul className="list">
                        {/* {ListData?.boxOfficeResult?.dailyBoxOfficeList.map(() => {
                            <Item />
                            })
                        } */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ListSlide;