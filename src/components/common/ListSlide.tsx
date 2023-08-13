import React, { useState } from 'react';
import arrow from '../../assets/images/btn/arrow_btn.svg';
import Item from '../pages/media/MediaItem';
interface ButtonState {
    left: boolean;
    right: boolean;
}

const ListSlide = ({ ListData }: { ListData: object[] | undefined }) => {
    
    const [buttonState, setButtonState] = useState<ButtonState>({
        left: false,
        right: true
    })

    const [slideMove, setSlideMove] = useState<string>("-10px");
    
    const onclickPrev = () => {
        setButtonState({...buttonState, left: false, right: true});
        setSlideMove("-10px")
    }

    const onclickNext = () => {
        setButtonState({...buttonState, left: true, right: false});
        setSlideMove("-1430px")
    }

    return (
        <div id="listSlide">
            <div className="slide_wrap">
                <div className="arrow_btn">
                    {buttonState.left && <button className="go_to_left" onClick={onclickPrev}><img src={arrow}></img></button>}
                    {buttonState.right && <button className="go_to_right" onClick={onclickNext}><img src={arrow}></img></button>}
                </div>
                <div className="slide_container">
                    <ul className="list" style={{ marginLeft: slideMove }}>
                        {ListData?.map((item, index) => (
                            <Item key={index} data={item}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ListSlide;