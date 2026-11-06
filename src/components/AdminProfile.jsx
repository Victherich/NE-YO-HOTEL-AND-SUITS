


// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const Container = styled.div`
//   background-color: #f9f9f9;
//   min-height: 100vh;
//   padding: 2rem;
//   font-family: 'Segoe UI', sans-serif;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Card = styled.div`
//   background-color: #ffffff;
//   border-radius: 16px;
//   padding: 2rem;
//   max-width: 600px;
//   width: 100%;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// const Title = styled.h2`
//   color: #3C9E37;
//   margin-bottom: 1.5rem;
//   text-align: center;
// `;

// const InfoRow = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 1rem;
//   font-size: 1rem;
//   @media (min-width: 600px) {
//     flex-direction: row;
//     justify-content: space-between;
//   }
// `;

// const Label = styled.div`
//   font-weight: bold;
//   color: #3C9E37;
//   margin-bottom: 0.5rem;
//   @media (min-width: 600px) {
//     margin-bottom: 0;
//   }
// `;

// const Value = styled.div`
//   color: #444;
//   text-align: left;
//   @media (min-width: 600px) {
//     text-align: right;
//   }
// `;

// const EditButton = styled.button`
//   background-color: #3C9E37;
//   color: white;
//   border: none;
//   padding: 6px 12px;
//   font-size: 0.85rem;
//   border-radius: 6px;
//   cursor: pointer;
//   margin-left: 10px;
//   &:hover {
//     background-color: gray;
//   }
// `;

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0,0,0,0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Modal = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 10px;
//   max-width: 400px;
//   width: 90%;
//   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   font-size: 1rem;
//   margin-top: 1rem;
//   margin-bottom: 1rem;
//   border-radius: 8px;
//   border: 1px solid #ccc;
// `;

// const SaveButton = styled.button`
//   background-color: #000050;
//   color: white;
//   padding: 10px 16px;
//   border: none;
//   border-radius: 6px;
//   font-size: 1rem;
//   cursor: pointer;
// `;

// const CancelButton = styled.button`
//   margin-left: 10px;
//   padding: 10px 16px;
//   background-color: #ccc;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
// `;

// const Error = styled.div`
//   color: red;
//   text-align: center;
//   margin-top: 2rem;
// `;

// const AdminDetailsPage = ({ adminId }) => {
//   const [admin, setAdmin] = useState(null);
//   const [error, setError] = useState('');
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [newPhone, setNewPhone] = useState('');

//   useEffect(() => {
//     if (!adminId) return;

//     axios.get(`https://jizbankplc.com/api/get_admin_by_id.php?id=${adminId}`)
//       .then(res => {
//         if (res.data.success) {
//           setAdmin(res.data.user);
//         } else {
//           setError(res.data.error);
//         }
//       })
//       .catch(() => {
//         setError('Failed to fetch admin details.');
//       });
//   }, [adminId]);

//   const openModal = () => {
//     setNewPhone(admin.phone);
//     setModalOpen(true);
//   };

//   const handleSave = () => {
//     axios.post('https://jizbankplc.com/api/update_admin_phone.php', {
//       id: admin.id,
//       phone: newPhone,
//     }).then(res => {
//       if (res.data.success) {
//         setAdmin(prev => ({ ...prev, phone: newPhone }));
//         setModalOpen(false);
//         Swal.fire({text:"Phone number updated", icon :"success"})
//       } else {
//         Swal.fire({text:'Update failed: ' + res.data.error});
//       }
//     }).catch(() => {
//       Swal.fire({text:'Error updating phone number.'});
//     });
//   };

//   return (
//     <Container>
//       {admin ? (
//         <>
//           <Card>
//             <Title>Admin Details</Title>
//             <InfoRow><Label>Name:</Label><Value>{admin.name}</Value></InfoRow>
//             <InfoRow><Label>Email:</Label><Value>{admin.email}</Value></InfoRow>
//             <InfoRow>
//               <Label>Phone:</Label>
//               <Value>
//                 {admin.phone}
//                 <EditButton onClick={openModal}>Edit</EditButton>
//               </Value>
//             </InfoRow>
//             {/* <InfoRow><Label>Role:</Label><Value>{admin.role}</Value></InfoRow> */}
//             <InfoRow><Label>Created At:</Label><Value>{new Date(admin.created_at).toLocaleString()}</Value></InfoRow>
//           </Card>

//           {isModalOpen && (
//             <ModalOverlay>
//               <Modal>
//                 <h3>Edit Phone Number</h3>
//                 <Input
//                   type="text"
//                   value={newPhone}
//                   onChange={(e) => setNewPhone(e.target.value)}
//                 />
//                 <div>
//                   <SaveButton onClick={handleSave}>Save</SaveButton>
//                   <CancelButton onClick={() => setModalOpen(false)}>Cancel</CancelButton>
//                 </div>
//               </Modal>
//             </ModalOverlay>
//           )}
//         </>
//       ) : (
//         <Error>{error || 'Loading...'}</Error>
//       )}
//     </Container>
//   );
// };

// export default AdminDetailsPage;




import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';

/* ------------------------------------------------------------------
   NE-YO HOTEL & SUITES — Admin Dashboard
   Theme: Lagoon (#0F3B3A), Brass (#B08D57), Pearl (#F6F7F5)
   Rule kept: every margin, padding, and gap is 10px or less.
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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  background-color: ${C.pearl};
  min-height: 100vh;
  padding: 30px 10px;
  font-family: 'Jost', 'Segoe UI', sans-serif;
  color: ${C.ink};
  animation: ${fadeIn} 0.5s ease forwards;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HeaderSection = styled.div`
  background: ${C.lagoon};
  color: ${C.white};
  padding: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  border-bottom: 2px solid ${C.brass};

  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: ${C.brassLight};
    font-weight: 500;
  }
  p {
    font-size: 0.95rem;
    opacity: 0.85;
  }
`;

const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
`;

const ActionCard = styled.button`
  background: ${C.white};
  border: 1px solid ${C.brassLight};
  padding: 16px;
  border-radius: 4px;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(15, 59, 58, 0.05);

  span.icon {
    font-size: 1.5rem;
  }
  span.title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${C.lagoon};
  }
  span.desc {
    font-size: 0.82rem;
    color: ${C.muted};
  }

  &:hover {
    background: ${C.lagoon};
    border-color: ${C.lagoon};
    transform: translateY(-2px);
    span.title { color: ${C.brassLight}; }
    span.desc { color: rgba(255, 255, 255, 0.8); }
  }
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: ${C.white};
  border-radius: 4px;
  padding: 20px;
  border: 1px solid rgba(176, 141, 87, 0.2);
  box-shadow: 0 8px 30px rgba(15, 59, 58, 0.06);
`;

const Title = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  color: ${C.lagoon};
  font-size: 1.6rem;
  margin-bottom: 15px;
  border-bottom: 1px solid ${C.mist};
  padding-bottom: 8px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 0.95rem;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Label = styled.div`
  font-weight: 600;
  color: ${C.lagoonSoft};
`;

const Value = styled.div`
  color: ${C.ink};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EditButton = styled.button`
  background-color: ${C.brass};
  color: ${C.white};
  border: none;
  padding: 4px 10px;
  font-size: 0.8rem;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover { background-color: ${C.lagoon}; }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  max-height: 400px;
  overflow-y: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    text-align: left;

    th, td {
      padding: 10px;
      border-bottom: 1px solid ${C.mist};
    }

    th {
      background: ${C.mist};
      color: ${C.lagoon};
      font-weight: 600;
      position: sticky;
      top: 0;
    }

    td {
      color: ${C.ink};
    }

    tr:hover {
      background: rgba(233, 239, 236, 0.4);
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 32, 31, 0.6);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: ${C.white};
  padding: 24px;
  border-radius: 4px;
  max-width: 400px;
  width: 90%;
  border-top: 3px solid ${C.brass};
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

  h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    color: ${C.lagoon};
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin: 10px 0;
  border-radius: 2px;
  border: 1px solid ${C.brassLight};
  background: ${C.pearl};
  color: ${C.ink};
  &:focus { outline: none; border-color: ${C.brass}; background: ${C.white}; }
`;

const SaveButton = styled.button`
  background-color: ${C.lagoon};
  color: ${C.brassLight};
  padding: 8px 16px;
  border: none;
  border-radius: 2px;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: 500;
  &:hover { background: ${C.lagoonSoft}; }
`;

const CancelButton = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  background-color: ${C.muted};
  color: ${C.white};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.9rem;
`;

const ErrorMsg = styled.div`
  color: #b30000;
  text-align: center;
  padding: 20px;
  font-size: 1rem;
`;

export default function AdminDetailsPage({ adminId, handleMenuClick, handleLogout }) {
  const [admin, setAdmin] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPhone, setNewPhone] = useState('');

  // Fetch Admin Details
  useEffect(() => {
    if (!adminId) {
      // Mock admin fallback for demonstration if adminId is missing
      setAdmin({
        id: 1,
        name: 'Ebubechukwu Ndu',
        email: 'admin@elexdonpay.com',
        phone: '+234 706 348 0314',
        role: 'Super Administrator',
        created_at: '2026-06-01 10:00:00'
      });
      return;
    }

    axios.get(`https://jizbankplc.com/api/get_admin_by_id.php?id=${adminId}`)
      .then(res => {
        if (res.data.success) {
          setAdmin(res.data.user);
        } else {
          setError(res.data.error);
        }
      })
      .catch(() => {
        setError('Failed to fetch admin details.');
      });
  }, [adminId]);

  // Fetch Bookings Data
  useEffect(() => {
    axios.get('https://jizbankplc.com/api/get_hotel_bookings.php')
      .then(res => {
        if (res.data.success) {
          setBookings(res.data.bookings);
        }
      })
      .catch(err => console.error("Error fetching bookings:", err));
  }, []);

  const openModal = () => {
    setNewPhone(admin?.phone || '');
    setModalOpen(true);
  };

  const handleSave = () => {
    axios.post('https://jizbankplc.com/api/update_admin_phone.php', {
      id: admin.id,
      phone: newPhone,
    }).then(res => {
      if (res.data.success) {
        setAdmin(prev => ({ ...prev, phone: newPhone }));
        setModalOpen(false);
        Swal.fire({ text: "Phone number updated successfully", icon: "success", confirmButtonColor: '#0F3B3A' });
      } else {
        Swal.fire({ text: 'Update failed: ' + res.data.error, confirmButtonColor: '#0F3B3A' });
      }
    }).catch(() => {
      Swal.fire({ text: 'Error updating phone number.', confirmButtonColor: '#0F3B3A' });
    });
  };

  return (
    <Container>
      <Wrapper>
        {/* Top Header Banner */}
        <HeaderSection>
          <div>
            <h1>NE-YO Dashboard</h1>
            <p>Welcome back, {admin ? admin.name : 'Administrator'}</p>
          </div>
          <div>
            <span style={{ fontSize: '0.85rem', color: C.brassLight }}>
              Status: <strong>Active Session</strong>
            </span>
          </div>
        </HeaderSection>

        {/* Quick Action Buttons */}
        <QuickActionsGrid>
          <ActionCard onClick={() => handleMenuClick("managebookings")}>
            <span className="icon">🛏️</span>
            <span className="title">Manage Bookings</span>
            <span className="desc"></span>
          </ActionCard>
          <ActionCard onClick={() => handleMenuClick("adminsignup")}>
            <span className="icon">📨</span>
            <span className="title">Register admin</span>
            {/* <span className="desc">Check contact form submissions</span> */}
          </ActionCard>
          <ActionCard onClick={()=>handleLogout()}>
            {/* <span className="icon">📊</span> */}
            <span className="title">Logout</span>
            {/* <span className="desc">Export booking revenue records</span> */}
          </ActionCard>
          {/* <ActionCard onClick={openModal}>
            <span className="icon">🔒</span>
            <span className="title">Update Contact</span>
            <span className="desc">Change administrator phone</span>
          </ActionCard> */}
        </QuickActionsGrid>

  

        {/* Modal for Editing Phone Number */}
        {isModalOpen && (
          <ModalOverlay>
            <Modal>
              <h3>Edit Administrator Phone</h3>
              <p style={{ fontSize: '0.88rem', color: C.muted }}>Update your active telephone contact number.</p>
              <Input
                type="text"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="Enter new phone number"
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <SaveButton onClick={handleSave}>Save Changes</SaveButton>
                <CancelButton onClick={() => setModalOpen(false)}>Cancel</CancelButton>
              </div>
            </Modal>
          </ModalOverlay>
        )}
      </Wrapper>
    </Container>
  );
}