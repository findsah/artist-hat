import './App.css';
import NavBar from './Components/Header/NavBar';
import { useState, useEffect, createContext } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import UserRegistration from './Pages/UserRegistration/UserRegistration';
import Footer from './Components/Footer/Footer';
import Home from './Pages/home/home';
import GetMoney from './Pages/getMoney/getMoney';
import Blogs from './Pages/blogs/Blogs';
import Profile from './Pages/userProfile/profile';
import PageNotFound from './Components/PageNotFound';
import ArtistSearch from './Pages/ArtistSearch/ArtistSearch';
import ArtistProfile from './ArtistProfile/ArtistProfile';
import ArtistProfileSteps from './ArtistProfile/artistProfileSteps/artistProfileSteps';
import ArtistView from './userView/artistView';
import UserProfile from './userView/profile/profile';
import Account from './userView/account/account';
import Services from './userView/$25_Services/Services';
import MyProjects from './userView/MyProjects/myProjects';
import ConfirmTask from './userView/MyProjects/Projects/confirmTask';
import PreviewTask from './userView/MyProjects/Projects/previewTask';
import MyBusiness from './userView/myBusiness/myBusiness';
import { useDispatch } from 'react-redux';
import { getMapLocs } from './Redux/artistProfile/ArtistData';

export const UserContext = createContext()
function App() {
  const [logedIn, setLogedIn] = useState(false)
  const location = useLocation();
  const dispatch = useDispatch()
  const [lats, setLats] = useState()
  const [lngs, setLngs] = useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setLats(latitude);
      setLngs(longitude);

    });
  }, [lats,lngs])
  console.log(lngs)
  useEffect(() => {
    const latKey = 'lats'
    const lngKey = 'lngs'
    dispatch(getMapLocs({ [latKey]: lats }))
    dispatch(getMapLocs({ [lngKey]: lngs }))
  }, [dispatch,lats, lngs])

  // const [show, setShow] = useState(true);

  // useEffect(() => {
  //   if (location.pathname.includes("/userregistration") || location.pathname.includes("/artistprofile") || location.pathname.includes("/blogs")) {
  //     setShow(false);
  //   }
  //   else {
  //     setShow(true)
  //   }
  // }, [location])

  return (
    <UserContext.Provider value={{ logedIn, setLogedIn }}>
      <div className="App container-fluid">
        {location.pathname.includes("/userregistration") || location.pathname.includes("/blogs") || location.pathname.includes("/artistView") ? "" : <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getmoney" element={<GetMoney />} />
          <Route path="/blogs/:id" element={<Blogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/artistprofile" element={<ArtistProfile />} />
          <Route path="/artistprofilesteps" element={<ArtistProfileSteps />} />
          <Route path="/artistView/*" element={<ArtistView />} >
            <Route index element={<UserProfile />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="account" element={<Account />} />
            <Route path="services" element={<Services />} />
            <Route path="my-projects/*" element={<MyProjects />} />
            <Route path="confirm-task" element={<ConfirmTask />} />
            <Route path="preview-task" element={<PreviewTask />} />
            <Route path="my-business" element={<MyBusiness />} />
          </Route>
          <Route path="/userregistration" element={<UserRegistration />} />
          <Route path="/artistsearch" element={<ArtistSearch />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {
          location.pathname.includes("/userregistration") || location.pathname.includes("/artistprofile") || location.pathname.includes("/blogs") || location.pathname.includes("/profile") ?
            "" : <Footer />
        }
      </div>
    </UserContext.Provider>
  );
}

export default App;
