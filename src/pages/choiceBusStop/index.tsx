import { useEffect } from 'react';
import ListBusStop from '../../components/Button/ListBusStop';
import * as S from './styles';
import Button from '../../components/Button/Button';

interface ChoiceBusStopProps {
    bus_stops : string[][]
    findBusStop : ()=>void
    setLatitude : (latitude : number)=>void
    setLongitude : (longitude : number)=>void
}

function ChoiceBusStop({bus_stops, findBusStop, setLatitude, setLongitude} : ChoiceBusStopProps) {
    
    const handleReload = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })

        findBusStop()
    }

    useEffect(() => {
        handleReload()
    }, [])

    return (
        <div>
            <S.Title>어느 정류장의 이야기를 해볼까?</S.Title>
            <ul style={{padding:'0'}}>
                {bus_stops.map((item : string[]) => (
                    <ListBusStop BusStop={item}/>
                ))}
            </ul>
            <Button onClick={handleReload} content='새로고침'></Button>
        </div>
    );
};

export default ChoiceBusStop;