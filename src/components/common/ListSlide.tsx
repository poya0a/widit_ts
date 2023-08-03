import React from 'react';
import { Link } from 'react-router-dom';
import Item from './MediaItem';

const ListSlide = () => {
    return (
        <div id="listSlide">
            <div className="slide_wrap">
                <div className="slide_container">
                    <ul className="list">
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                        <Item></Item>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ListSlide;