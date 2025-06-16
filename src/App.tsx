import { useState, useEffect } from 'react';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import WriteStory from './WriteStory'
// import MainTitle from './MainTitle';
// import ChoiceBusStop from './ChoiceBusStop';
// import MenuPage from './MenuPage';
// import MyPageBackground from './MyPageBackground';
// import MyPage from './MyPage';
// import ReadStoryBackground from './ReadStoryBackground';
// import ReadStory from './ReadStory';
import MainPage from './pages/mainTitle';
import ChoiceBusStop from './pages/choiceBusStop';

function App() {
  const server = process.env.REACT_APP_PYTHON
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [bus_stops, setBus_stops] = useState([])

  // const findBusStop = async () => {
  //   try {
  //     const response = await axios.post(`${server}/nearest_bus_stops/`, {
  //       latitude,
  //       longitude
  //     })

  //     setBus_stops(response.data.bus_stops)
  //   } catch(error) {
  //     console.error("Error : ", error)
  //   }
  // }
  
  // useEffect(() => {
  //   if(latitude && longitude) findBusStop()
  // }, [latitude && longitude])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<MainPage></MainPage>}></Route>
          <Route path = "/ChoiceBusStop" element = {<ChoiceBusStop bus_stops={[['1','부산소프트웨어마이스터고등학교','135'],['1','부산소프트웨어마이스터고등학교','135'],['1','부산소프트웨어마이스터고등학교','135']]} findBusStop={()=>{console.log('test')}} setLatitude={setLatitude} setLongitude={setLongitude}></ChoiceBusStop>}></Route>
          {/* <Route path='/WriteStory' element={<WriteStory />} />
          <Route path='/' element={<MainTitle setLatitude={setLatitude} setLongitude={setLongitude}/>} />
          <Route path='/ChoiceBusStop' element={<ChoiceBusStop bus_stops={bus_stops} findBusStop={findBusStop} setLatitude={setLatitude} setLongitude={setLongitude}/>} />
          <Route path='/MenuPage' element={<MenuPage />} />
          <Route path='/MyPageBackground' element={<MyPageBackground />}>
            <Route path='MyPage' element={<MyPage />} />
          </Route>
          <Route path='/ReadStoryBackground' element={<ReadStoryBackground />}>
            <Route path='ReadStory' element={<ReadStory />}/>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;