import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from "react-router-dom";
import '../../index.css';
import * as S from './styles';
import Button from '../../components/Button/Button';

interface Props {
    count:number
}

const FallingStars = ({count} : Props)=>{
    return(
        <>
        {Array.from({length:count}).map(()=>(
            <S.Star 
            top={Math.random() * 40 + 10} 
            left={Math.random() * 60 + 10} 
            size={Math.random() * 3 + 3} 
            duration={Math.random() * 3 + 5}>
            </S.Star>
        ))}
        </>
    )
}

function MainPage() {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    
    setTimeout(()=>{
        setVisible(true);
    },3000)

    return (
        <div>
            <FallingStars count = {6}></FallingStars>
            <S.Maintitle slide={visible}>어쩌다<br />발견한<br />이야기</S.Maintitle>
            <S.Subtitle slide={visible}>우리 동네를 스쳐 지나가는 사람들,<br />
                그들이 주인공이 되어 들려주는 이야기</S.Subtitle>
            <Button slide = {visible} content='시작하기' margin={10} onClick={()=>{navigate('/ChoiceBusStop')}}></Button>
        </div>
    );
}

export default MainPage