import { useNavigate,useLocation } from "react-router-dom";
import styled from 'styled-components';

interface ListBusStopProps {
    BusStop : string[]
}

function ListBusStop({ BusStop } : ListBusStopProps) {
    const bus_stop = BusStop[1]
    const distance = BusStop[2]

    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('/MenuPage', {state:{bus_stop,distance}})
    }
    console.log(BusStop);
    return (
        <li style={{marginTop:'1.5rem', textDecoration: "none"}} onClick={handleClick}> 
            <BusContainer>
                <BusStopName>{bus_stop}</BusStopName>
                <Distance>{distance}m</Distance>
            </BusContainer>
        </li>
    );
}


const BusContainer = styled.div`
    width: 76vw;
    background-color: #ffffff33;
    border-radius: 0.5em;
    padding: 6%;
    display: flex;
    margin-left:auto;
    margin-right:auto;
    align-items: center;
    justify-content: space-between;
    height: 2.2vh;
    color:white;
    transition: background-color 0.2s, transform 0.1s;
`

const BusStopName = styled.div`
    font-family:'더잠실3';
    font-size:1.2rem;
`

const Distance = styled.div`
    display:block;
    font-family:'더잠실2';
    font-size:0.9rem;
`

export default ListBusStop;