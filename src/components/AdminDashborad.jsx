


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';

// import Swal from 'sweetalert2';
// import { adminLogout } from '../Features/Slice';
// // import AdminDetailsPage from './AdminProfile';

// import AdminSignup from './AdminSignUp.jsx';
// import ManageHotels from './ManageHotels.jsx';


// // Styled Components
// const DashboardContainer = styled.div`
//   display: flex;
//   min-height: 100vh;
//   overflow: hidden;
//   padding-top:70px;
// `;

// const Sidebar = styled.div`
//   background:#F4F4F4;
//   color: white;
//   width: ${(props) => (props.isOpen ? '250px' : '0')};
//   overflow: hidden;
//   transition: width 0.3s ease-in-out;
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   height: 100%;
//   min-height:100vh;
//   z-index: 7;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

//   @media (min-width: 768px) {
//     width: 250px;
//     position: static;
//     transition: none;

//   }

//   @media(max-width:320px){
//     overflow-y:scroll;
//      overflow:scroll;
//   }
// `;

// const SidebarHeader = styled.div`
//   padding: 20px;
//   font-size: 1.5rem;
//   text-align: center;
//   font-weight: bold;
//   color: #0d286d;

// `;

// const SidebarMenu = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const SidebarMenuItem = styled.li`
//   padding: 15px 20px;
//   cursor: pointer;
//   background: ${(props) => (props.active ? '#0d286d;' : 'transparent')};
//   color: ${(props)=>(props.active ? 'white':"#000050")};


//   font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
//   transition: all 0.3s ease-in-out;

//   &:hover {

//     background:rgba(0,0,255,0.2);
//   }
// `;

// const ContentArea = styled.div`
//   flex-grow: 1;
//   margin-left: ${(props) => (props.isOpen ? '250px' : '0')};
//   transition: margin-left 0.3s ease-in-out;
//   padding: 20px;
//   width:100%;

//   @media (min-width: 768px) {
//     // margin-left: 250px;
//   }

//   @media (max-width:428px){
//     padding:0px;
//   }
// `;

// const Hamburger = styled.div`
//   position: fixed;
//   top: 70px;
//   left: 20px;

//   background:#3C9E37;
//   color: white;
//   padding: 10px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   z-index: 1100;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// const Overlay = styled.div`
//   display: ${(props) => (props.isOpen ? 'block' : 'none')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 6;
// `;

// // Content Components
// const HomeContent = () => <h1 style={{color:"purple"}}>Home Content</h1>;
// const ProfileContent = () => <h1>Profile Content</h1>;
// const SettingsContent = () => <h1>Settings Content</h1>;
// const HelpContent = () => <h1>Help Content</h1>;

// // Main Component
// const AdminDashboard = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState('managehotels');
//   const adminInfo = useSelector(state=>state.adminInfo)
  
//   console.log(adminInfo)

//   const dispatch = useDispatch();


  
//   const handleLogout = () => {
//     Swal.fire({
//       title: "Are you sure you want to log out?",
//       text: "You will need to log in again to access your account.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, log me out",
//       cancelButtonText: "Cancel",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Perform the logout actions
//         dispatch(adminLogout());
//         Swal.fire({
//           title: "Logged Out",
//           text: "You have been logged out successfully.",
//           icon: "success",
//           timer: 2000,
//           showConfirmButton: false,
//         });
  
      
//       }
//     });
//   };
  



//   const handleMenuClick = (menu) => {
//     window.scroll(0,0);
//     setActiveMenu(menu);
//     setMenuOpen(false); // Close menu on mobile when a menu item is clicked
//   };

//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   const closeMenuOnOutsideClick = () => setMenuOpen(false);

//   // Map menu options to content
//   const renderContent = () => {
//     switch (activeMenu) {
     
//          case 'managehotels':
//         return <ManageHotels/>;


//         case 'adminsignup':
//         return <AdminSignup/>;
   
//       default:
//         return <h1 style={{color:"#0d286d",textAlign:"center",width:"100%"}}>Welcome to your Dashboard</h1>;
//     }
//   };

//   return (
//     <DashboardContainer>
//       <Hamburger onClick={toggleMenu}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </Hamburger>
//       <Overlay isOpen={menuOpen} onClick={closeMenuOnOutsideClick} />
//       <Sidebar isOpen={menuOpen}>
//         <SidebarHeader>Admin Dashboard</SidebarHeader>
//         <SidebarMenu>
       
//           {/* <SidebarMenuItem
//             active={activeMenu === 'profile'}
//             onClick={() => handleMenuClick('profile')}
//           >
//            <FaUserCircle/> Hi, {adminInfo.name.slice(0,6)}
//           </SidebarMenuItem> */}

//          <SidebarMenuItem
//             active={activeMenu === 'managehotels'}
//             onClick={() => handleMenuClick('managehotels')}
//           >
//             Manage Hotels
//           </SidebarMenuItem>

//           <SidebarMenuItem
//             active={activeMenu === 'adminsignup'}
//             onClick={() => handleMenuClick('adminsignup')}
//           >
//             Register Admin
//           </SidebarMenuItem>


          
//           <SidebarMenuItem
//             onClick={handleLogout}
//           >
//             Logout
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </Sidebar>
//       <ContentArea isOpen={menuOpen}>{renderContent()}</ContentArea>
//     </DashboardContainer>
//   );
// };

// export default AdminDashboard;




import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { adminLogout } from '../Features/Slice';

import AdminSignup from './AdminSignUp.jsx';
import ManageHotels from './ManageHotels.jsx';
import ManageBookings from './ManageBookings.jsx';

/* ------------------------------------------------------------------
   NE-YO LUXURY DESIGN SYSTEM THEME
------------------------------------------------------------------- */

const C = {
  pearl: "#F6F7F5",
  mist: "#E9EFEC",
  white: "#FFFFFF",
  lagoon: "#0F3B3A",
  lagoonSoft: "#1D5754",
  brass: "#B08D57",
  brassLight: "#E3CFA6",
  ink: "#1B2523",
  muted: "#5E6D69",
};

const GlobalTheme = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap');
`;

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  padding-top: 70px;
  background-color: ${C.pearl};
  font-family: 'Jost', sans-serif;
  color: ${C.ink};
`;

const Sidebar = styled.div`
  background: ${C.white};
  border-right: 1px solid ${C.brassLight};
  color: ${C.ink};
  width: ${(props) => (props.isOpen ? '260px' : '0')};
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  min-height: 100vh;
  z-index: 7;
  box-shadow: 10px 0 30px rgba(15, 59, 58, 0.05);

  @media (min-width: 768px) {
    width: 260px;
    position: static;
    transition: none;
  }

  @media(max-width:320px){
    overflow-y: scroll;
    overflow: scroll;
  }
`;

const SidebarHeader = styled.div`
  padding: 25px 20px;
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${C.lagoon};
  border-bottom: 1px solid ${C.mist};

  span {
    display: block;
    font-size: 0.85rem;
    font-family: 'Jost', sans-serif;
    font-style: italic;
    color: ${C.brass};
    margin-top: 2px;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 15px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SidebarMenuItem = styled.li`
  padding: 14px 24px;
  cursor: pointer;
  background: ${(props) => (props.active ? `${C.lagoon}` : 'transparent')};
  color: ${(props) => (props.active ? `${C.brassLight}` : `${C.ink}`)};
  font-weight: ${(props) => (props.active ? '500' : '300')};
  font-size: 1rem;
  letter-spacing: 0.5px;
  border-left: ${(props) => (props.active ? `4px solid ${C.brass}` : '4px solid transparent')};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => (props.active ? `${C.lagoon}` : `${C.mist}`)};
    color: ${(props) => (props.active ? `${C.brassLight}` : `${C.lagoon}`)};
  }
`;

const ContentArea = styled.div`
  flex-grow: 1;
  margin-left: ${(props) => (props.isOpen ? '260px' : '0')};
  transition: margin-left 0.3s ease-in-out;
  padding: 24px;
  width: 100%;
  background-color: ${C.pearl};

  @media (max-width: 428px){
    padding: 10px;
  }
`;

const Hamburger = styled.div`
  position: fixed;
  top: 85px;
  left: 15px;
  background: ${C.lagoon};
  color: ${C.brassLight};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1100;
  box-shadow: 0 4px 12px rgba(15, 59, 58, 0.25);
  border: 1px solid ${C.brass};

  @media (min-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 32, 31, 0.6);
  backdrop-filter: blur(3px);
  z-index: 6;
`;

// Main Component
const AdminDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('managehotels');
  const adminInfo = useSelector(state => state.adminInfo);
  
  console.log(adminInfo);

  const dispatch = useDispatch();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F3B3A",
      cancelButtonColor: "#B08D57",
      confirmButtonText: "Yes, log me out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(adminLogout());
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleMenuClick = (menu) => {
    window.scroll(0, 0);
    setActiveMenu(menu);
    setMenuOpen(false); // Close menu on mobile when a menu item is clicked
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenuOnOutsideClick = () => setMenuOpen(false);

  // Map menu options to content
  const renderContent = () => {
    switch (activeMenu) {
      case 'managebookings':
        return <ManageBookings />;

      case 'adminsignup':
        return <AdminSignup />;
   
      default:
        return (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", color: C.lagoon, fontSize: "2.8rem", fontWeight: 500 }}>
              Welcome to your Dashboard
            </h1>
            <p style={{ color: C.muted, fontSize: "1.1rem", marginTop: "10px" }}>
              Select an option from the sidebar to manage system operations.
            </p>
          </div>
        );
    }
  };

  return (
    <DashboardContainer>
      <GlobalTheme />
      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Overlay isOpen={menuOpen} onClick={closeMenuOnOutsideClick} />
      
      <Sidebar isOpen={menuOpen}>
        <SidebarHeader>
          NE-YO Portal
          <span>Admin Suite</span>
        </SidebarHeader>
        <SidebarMenu>
          {/* <SidebarMenuItem
            active={activeMenu === 'managehotels'}
            onClick={() => handleMenuClick('managehotels')}
          >
            Manage Hotels
          </SidebarMenuItem> */}

              <SidebarMenuItem
            active={activeMenu === 'managebookings'}
            onClick={() => handleMenuClick('managebookings')}
          >
            Manage Bookings
          </SidebarMenuItem>

          <SidebarMenuItem
            active={activeMenu === 'adminsignup'}
            onClick={() => handleMenuClick('adminsignup')}
          >
            Register Admin
          </SidebarMenuItem>

          <SidebarMenuItem onClick={handleLogout}>
            Logout
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>
      
      <ContentArea isOpen={menuOpen}>
        {renderContent()}
      </ContentArea>
    </DashboardContainer>
  );
};

export default AdminDashboard;