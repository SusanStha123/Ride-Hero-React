import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/LandingPage/Landing';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Forgotpass from './pages/Auth/Forgotpass/Forgotpass';
import VerifyCode from './pages/Auth/VerifyCode/VerifyCode';
import Changepass from './pages/Auth/Changepass/Changepass';
// Admin
import Layout from './pages/Admin/Layout/Layout';
import Home from './pages/Admin/Homepage/Home';
import Passenger from './pages/Admin/Passenger/Passenger';
import Driver from './pages/Admin/Driver/Driver';
import Rides from './pages/Admin/Rides/Rides';
import Kyc from './pages/Admin/Kyc/Kyc';
import Payment from './pages/Admin/Payment/Payment';
import Feedback from './pages/Admin/Feedback/Feedback';
// End Admin

// Driver
import DriverLayout from './pages/Driver/DriverLayout/DriverLayout';
import DriverHome from './pages/Driver/DriverHome/DriverHome';
import DriverKyc from './pages/Driver/DriverKyc/DriverKyc';
import DriverRides from './pages/Driver/DriverRides/DriverRides';
import DriverVehicle from './pages/Driver/DriverVehicle/DriverVehicle';
import DriverSettings from './pages/Driver/DriverSettings/DriverSettings';
import DriverEarnings from './pages/Driver/DriverEarnings/DriverEarnings';
// End Driver



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<Forgotpass />} />
          <Route path='/verify-code' element={<VerifyCode />} />
          <Route path='/change-password' element={<Changepass />} />

          {/* Admin */}
          <Route path='/admin/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='passenger' element={<Passenger />} />
            <Route path='driver' element={<Driver />} />
            <Route path='kyc' element={<Kyc />} />
            <Route path='rides' element={<Rides />} />
            <Route path='payment' element={<Payment />} />
            <Route path='feedback' element={<Feedback />} />
          </Route>

          {/* Driver */}
          <Route path='/driver/' element={<DriverLayout />}>
            <Route path='home' element={<DriverHome />} />
            <Route path='kyc' element={<DriverKyc />} />
            <Route path='rides' element={<DriverRides />} />
            <Route path='vehicle' element={<DriverVehicle />} />
            <Route path='settings' element={<DriverSettings />} />
            <Route path='earnings' element={<DriverEarnings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
