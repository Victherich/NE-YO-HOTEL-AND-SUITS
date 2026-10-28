// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import Swal from 'sweetalert2';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   padding: 2rem;
//   background-color: white;
// `;

// const FormWrapper = styled.div`
//   background: white;
//   border-radius: 16px;
//   padding: 2rem;
//   width: 100%;
//   max-width: 500px;
 
// `;

// const Title = styled.h2`
//   color: #0d286d;
//   text-align: center;
//   margin-bottom: 1.5rem;
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
//   color: #333;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   border: 2px solid #eee;
//   border-radius: 8px;
//   margin-bottom: 1rem;
//   font-size: 1rem;

//   &:focus {
//     border-color: orange;
//     outline: none;
//   }
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 0.75rem;
//   border: 2px solid #eee;
//   border-radius: 8px;
//   margin-bottom: 1rem;
//   font-size: 1rem;

//   &:focus {
//     border-color: #0d286d;
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   background: #0d286d;
//   color: white;
//   padding: 0.75rem;
//   font-size: 1rem;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     background: gray;
//   }
// `;

// const AdminSignup = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     confirmEmail: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//     role: 'Admin',
//   });

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();

//     // Validation
//     if (form.email !== form.confirmEmail) {
//       return Swal.fire('Error', 'Emails do not match', 'error');
//     }

//     if (form.password !== form.confirmPassword) {
//       return Swal.fire('Error', 'Passwords do not match', 'error');
//     }

//     Swal.fire({
//       title: 'Please wait...',
//       text: 'Creating account...',
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     try {
//       const response = await fetch('https://harvannatravelsandtour.com/api/admin_signup.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();

//       if (data.success) {
//         Swal.fire('Success 🎉', data.message, 'success');
//         navigate('/adminlogin')
//         setForm({
//           name: '',
//           email: '',
//           confirmEmail: '',
//           phone: '',
//           password: '',
//           confirmPassword: '',
//           role: '',
//         });
//       } else {
//         Swal.fire('Error ❌', data.error || 'Something went wrong.', 'error');
//       }
//     } catch (err) {
//       Swal.fire('Error ❌', 'Could not connect to the server.', 'error');
//     }
//   };

//   return (
//     <Container>
//       <FormWrapper>
//         <Title> Register Admin</Title>
//         <form onSubmit={handleSubmit}>
//           <Label>Full Name</Label>
//           <Input name="name" value={form.name} onChange={handleChange} required />

//           <Label>Email</Label>
//           <Input name="email" type="email" value={form.email} onChange={handleChange} required />

//           <Label>Confirm Email</Label>
//           <Input name="confirmEmail" type="email" value={form.confirmEmail} onChange={handleChange} required />

//           <Label>Phone Number</Label>
//           <Input name="phone" value={form.phone} onChange={handleChange} required />

//           <Label>Password</Label>
//           <Input name="password" type="password" value={form.password} onChange={handleChange} required />

//           <Label>Confirm Password</Label>
//           <Input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} required />

//           {/* <Label>Role</Label>
// <Select name="role" value={form.role} onChange={handleChange} required>
//   <option value="" disabled>--Select Role--</option>
//   <option value="Admin">Admin</option>
//   <option value="Lecturer">Lecturer</option>
// </Select> */}


//           <Button type="submit">Create Account</Button>
//           <p 
//         style={{marginTop:"10px", cursor:"pointer"}}
//         onClick={()=>navigate('/adminlogin')}>Already have an account? Login</p>
//         </form>
//       </FormWrapper>
//     </Container>
//   );
// };

// export default AdminSignup;


import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import Swal from 'sweetalert2';
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
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 10px;
  background-color: ${C.pearl};
  font-family: 'Jost', sans-serif;
  color: ${C.ink};
`;

const FormWrapper = styled.div`
  // background: ${C.white};
  border-radius: 2px;
  // border: 1px solid ${C.brassLight};
  // padding: 10px;
  width: 100%;
  max-width: 520px;
  // box-shadow: 0 20px 50px rgba(15, 59, 58, 0.08);
  position: relative;

  &::before {
    content: ""; 
    position: absolute; 
    inset: 4px;
    // border: 1px solid rgba(176,141,87,0.3); 
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

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${C.brassLight};
  border-radius: 2px;
  background: ${C.pearl};
  margin-bottom: 10px;
  font-size: 1rem;
  color: ${C.ink};
  min-height: 46px;

  &:focus {
    border-color: ${C.brass};
    outline: none;
    background: ${C.white};
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

const LoginPrompt = styled.p`
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

const AdminSignup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'Admin',
  });

  const {api_url}=useContext(Context)
console.log(api_url);
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Validation
    if (form.email !== form.confirmEmail) {
      return Swal.fire('Error', 'Emails do not match', 'error');
    }

    if (form.password !== form.confirmPassword) {
      return Swal.fire('Error', 'Passwords do not match', 'error');
    }

    Swal.fire({
      title: 'Please wait...',
      text: 'Creating account...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch(`${api_url}/user_signup.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire('Success 🎉', data.message, 'success');
        navigate('/adminlogin');
        setForm({
          name: '',
          email: '',
          confirmEmail: '',
          phone: '',
          password: '',
          confirmPassword: '',
          role: '',
        });
      } else {
        Swal.fire('Error ❌', data.error || 'Something went wrong.', 'error');
      }
    } catch (err) {
      Swal.fire('Error ❌', 'Could not connect to the server.', 'error');
    }
  };

  return (
    <Container>
      <GlobalTheme />
      <FormWrapper>
        <Subtitle>NE-YO Portal</Subtitle>
        <Title>Register Admin</Title>
        <form onSubmit={handleSubmit}>
          <Label>Full Name</Label>
          <Input name="name" value={form.name} onChange={handleChange} required placeholder="Enter full name" />

          <Label>Email</Label>
          <Input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="name@example.com" />

          <Label>Confirm Email</Label>
          <Input name="confirmEmail" type="email" value={form.confirmEmail} onChange={handleChange} required placeholder="Confirm email address" />

          <Label>Phone Number</Label>
          <Input name="phone" value={form.phone} onChange={handleChange} required placeholder="+234..." />

          <Label>Password</Label>
          <Input name="password" type="password" value={form.password} onChange={handleChange} required placeholder="••••••••" />

          <Label>Confirm Password</Label>
          <Input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} required placeholder="••••••••" />

          {/* <Label>Role</Label>
          <Select name="role" value={form.role} onChange={handleChange} required>
            <option value="" disabled>--Select Role--</option>
            <option value="Admin">Admin</option>
            <option value="Lecturer">Lecturer</option>
          </Select> */}

          <Button type="submit">Create Account</Button>
          
          <LoginPrompt onClick={() => navigate('/adminlogin')}>
            Already have an account? <b>Login</b>
          </LoginPrompt>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default AdminSignup;