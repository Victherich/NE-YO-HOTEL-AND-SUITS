// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import styled from 'styled-components';
// import { adminLogin } from '../Features/Slice';
// import { UseDispatch, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: white;
//   color:#0d286d;
// `;

// const Form = styled.form`
//   background-color: white;
//   padding: 20px;
//   border-radius: 10px;
//   // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin: 10px 0;
//   border-radius: 5px;
//   border: 1px solid #ddd;
//   font-size: 16px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px;
//   background-color:#0d286d;
//   color: white;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   border: none;
  
//   &:hover {
//     background-color: gray;
//   }
// `;

// const Label = styled.label`
//   font-size: 18px;
//   font-weight: bold;
//   margin-bottom: 5px;
  
// `;

// const Title = styled.h2`
//   text-align: center;
  
// `;

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') setEmail(value);
//     if (name === 'password') setPassword(value);
//   };

//   // Handle login
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Missing fields',
//         text: 'Email and password are required.',
//       });
//       return;
//     }

//     // Show loading
//     Swal.fire({
//       title: 'Loading...',
//       text: 'Please wait while we log you in...',
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     try {
//       const response = await axios.post('https://harvannatravelsandtour.com/api/admin_login.php', { email, password });

//       if (response.data.success) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Login Successful',
//           text: response.data.message,
//         });
//         console.log(response.data)
        
//         const adminInfo = response.data.user;
//         const adminToken = response.data.token;

//         // Dispatch login action with a single object containing both adminInfo and adminToken
//         dispatch(adminLogin({ adminInfo, adminToken }));

//         navigate('/admindashboard');

//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Login Failed',
//           text: response.data.error,
//         });
//       }
//     } catch (error) {

//       console.error(error)
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'There was an error connecting to the server.',
//       });
//     }
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleLogin}>
//         <Title>Admin Login</Title>
        
//         <div>
//           <Label>Email</Label>
//           <Input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div>
//           <Label>Password</Label>
//           <Input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//             required
//           />
//         </div>
       
        
//         <Button type="submit">Login</Button>
//         {/* <p 
//         style={{marginTop:"10px", cursor:"pointer"}}
//         onClick={()=>navigate('/adminsignup')}>Don't have an account? Sign Up</p> */}
//         <p 
//         style={{marginTop:"10px", cursor:"pointer"}}
//         onClick={()=>navigate('/adminforgotpassword')}>Forgot Password</p>
//       </Form>
//     </Container>
//   );
// };

// export default AdminLogin;


import React, { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { adminLogin } from '../Features/Slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { use } from 'react';
import { Context } from './Context';

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

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const GlobalTheme = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap');
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
  background-color: ${C.pearl};
  font-family: 'Jost', sans-serif;
  color: ${C.ink};
`;

const Form = styled.form`
  background-color: ${C.white};
  border-radius: 2px;
  border: 1px solid ${C.brassLight};
  padding: 10px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 20px 50px rgba(15, 59, 58, 0.08);
  position: relative;

  &::before {
    content: ""; 
    position: absolute; 
    inset: 4px;
    border: 1px solid rgba(176,141,87,0.3); 
    pointer-events: none;
  }
`;

const Title = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: ${C.lagoon};
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.1;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    margin: 10px auto 0;
    background: linear-gradient(90deg, transparent, ${C.brass}, transparent);
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.2rem;
  color: ${C.brass};
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2px;
  color: ${C.muted};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${C.brassLight};
  border-radius: 2px;
  background: ${C.pearl};
  margin-bottom: 10px;
  font-size: 1rem;
  color: ${C.ink};
  min-height: 46px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${C.brass};
    outline: none;
    background: ${C.white};
    box-shadow: 0 0 0 3px rgba(176, 141, 87, 0.15);
  }
`;

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border: 1px solid ${C.brass};
  background: linear-gradient(110deg, ${C.brass}, #D4B77E, ${C.brass});
  background-size: 200% 100%;
  color: ${C.lagoon};
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 10px;
  min-height: 48px;
  border-radius: 2px;
  transition: all 0.4s ease;
  margin-top: 10px;

  &:hover {
    animation: ${shimmer} 1.2s linear infinite;
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(176, 141, 87, 0.35);
  }
`;

const ActionText = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 0.95rem;
  color: ${C.muted};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${C.lagoon};
    text-decoration: underline;
  }
`;

/* ------------------------------------------------------------------
   COMPONENT
------------------------------------------------------------------- */

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {api_url}=useContext(Context);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Missing fields',
        text: 'Email and password are required.',
      });
      return;
    }

    // Show loading
    Swal.fire({
      title: 'Loading...',
      text: 'Please wait while we log you in...',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.post(`${api_url}/user_login.php`, { email, password });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: response.data.message,
        });
        console.log(response.data);
        
        const adminInfo = response.data.user;
        const adminToken = response.data.token;

        // Dispatch login action with a single object containing both adminInfo and adminToken
        dispatch(adminLogin({ adminInfo, adminToken }));

        navigate('/admindashboard');

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: response.data.error,
        });
      }
    } catch (error) {

      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an error connecting to the server.',
      });
    }
  };

  return (
    <Container>
      <GlobalTheme />
      <Form onSubmit={handleLogin}>
        <Subtitle>NE-YO Portal</Subtitle>
        <Title>Admin Login</Title>
        
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
          />
        </div>
        
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />
        </div>
       
        <Button type="submit">Login</Button>
        
        {/* <ActionText onClick={() => navigate('/adminsignup')}>
          Don't have an account? Sign Up
        </ActionText> */}
        
        <ActionText onClick={() => navigate('/adminforgotpassword')}>
          Forgot Password?
        </ActionText>
      </Form>
    </Container>
  );
};

export default AdminLogin;