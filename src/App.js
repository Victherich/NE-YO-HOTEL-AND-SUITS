import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUsPage from './components/ContactUsPage';
import Services from './components/Services';
import BlogPage from './components/BlogPage';
import PlannedPackages from './components/PlannedPackages';
import CustomizedTourForm from './components/RequestHoliday';
import VisaApplicationForm from './components/VisaApplicationForm';
import EventComponent from './components/EventComponent';
import AppUpdate from './components/AppUpdate';
import ScrollToTop from './components/ScrollToTop';
import AboutUsPage from './components/AboutUs';
import FAQPage from './components/Faq';
import HolidayDetailsPage from './components/HolidayDetailsPage';
import VisaServiceDetails from './components/VisaServiceDetails';
import VisaServicesPage from './components/VisaServicesPage';
import AppointmentBookingPage from './components/AppointmentBookingPage';
import FlightPage from './components/FlightPage';
import PaymentComponent from './components/PaymentComponent';
import PaymentPage from './components/PaymentPage';
import HotelBookingPage from './components/HotelBookingPage';
import ManageHotels from './components/ManageHotels';
import HotelDetail from './components/HotelDetail';
import HotelsPage from './components/HotelsPage';
import PrivateAdminDashboard from './components/PrivateAdminDashboard';
import AdminDashboard from './components/AdminDashborad';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignUp';
import AdminForgotPassword from './components/AdminForgotPassword';
import AdminResetPassword from './components/AdminResetPassword';


function App() {
  return (
   <BrowserRouter>
   <AppUpdate/>
   <ScrollToTop/>
   <Header/>
   <Routes>

 {/* <Route path='/' element={<h1>hi</h1>}/> */}
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/contact' element={<ContactUsPage/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/blogs' element={<BlogPage/>}/>
    <Route path='/plannedpackages' element={<PlannedPackages/>}/>
    <Route path='/requestholiday' element={<CustomizedTourForm/>}/>
    <Route path='/visaapplicationform' element={<VisaApplicationForm/>}/>
    <Route path='/events' element={<EventComponent/>}/>
    <Route path='/about' element={<AboutUsPage/>}/>
    <Route path='/faq' element={<FAQPage/>}/>
    <Route path='/holidaydetailspage/:id' element={<HolidayDetailsPage/>}/>
    <Route path='/visa-services/:id' element={<VisaServiceDetails/>}/>
    <Route path='/visa-services' element={<VisaServicesPage/>}/>
    <Route path='/bookappointment' element={<AppointmentBookingPage/>}/>
    <Route path='/flights' element={<FlightPage/>}/>
    <Route path='/payments' element={<PaymentPage/>}/>
    <Route path='/hotels' element={<HotelsPage/>}/>
    {/* <Route path='/managehotels' element={<ManageHotels/>}/> */}
    <Route path='/hoteldetail/:id' element={<HotelDetail/>}/>


{/* dashboard routes */}
    <Route path='/admindashboard' element={<PrivateAdminDashboard/>}>
        <Route path='' element={<AdminDashboard/>}/>
    </Route>
<Route path='/adminlogin' element={<AdminLogin/>}/>
<Route path='/adminsignup' element={<AdminSignup/>}/>
<Route path='/adminforgotpassword' element={<AdminForgotPassword/>}/>
<Route path='/adminresetpassword/:token' element={<AdminResetPassword/>}/>

   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
