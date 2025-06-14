import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from "react-router-dom";
import * as S from './styles';

function MainPage() {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className='night'>
                <S.Star></S.Star>
                <S.Star></S.Star>
                <S.Star></S.Star>
            </div>
            <h1 className={`Maintitle ${visible ? 'slide-up' : ''}`}>
                어쩌다<br />발견한<br />이야기
            </h1>
            <span className={`subtitle ${visible ? 'slide-up' : ''}`}>우리 동네를 스쳐 지나가는 사람들,<br />
                그들이 주인공이 되어 들려주는 이야기
            </span>
            <Link to="/ChoiceBusStop" style={{ textDecoration: "none" }}>
                <button className={`startBtn ${visible ? 'slide-up' : ''}`}><span>시작하기</span></button>
            </Link>
        </div>
    );
}

export default MainPage