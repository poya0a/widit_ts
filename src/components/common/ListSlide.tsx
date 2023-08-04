import React, { useState } from 'react';

const ListSlide = ({ ListData }: { ListData: object }) => {
    console.log(React)
    console.log(ListData, 'ListData')

    const [list, setList] = useState([]);

    // useEffect(()=> {
    //     if(ListData){
    //         setList(ListData?.boxOfficeResult?.dailyBoxOfficeList);
    //     }
    // },[ListData])

    return (
        <div id="listSlide">
            <div className="slide_wrap">
                <div className="slide_container">
                    <ul className="list">
                        {/* {ListData.result.boxOfficeResult.dailyBoxOfficeList.map(() => {
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