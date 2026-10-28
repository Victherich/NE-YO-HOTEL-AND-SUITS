import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaSearch, FaCheckCircle, FaTimesCircle, FaFileDownload, FaSpinner } from 'react-icons/fa';
import { Context } from './Context';

/* ---------------------------- THEME COLORS ------------------------ */
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

/* ---------------------------- STYLED COMPONENTS ------------------- */
const Container = styled.div`
  padding: 10px;
  max-width: 1400px;
  margin: 0 auto;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;

  h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem;
    font-weight: 500;
    color: ${C.lagoon};
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: ${C.white};
  border: 1px solid ${C.brassLight};
  border-radius: 2px;
  padding: 8px 14px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 4px 12px rgba(15, 59, 58, 0.04);

  input {
    border: none;
    outline: none;
    width: 100%;
    background: transparent;
    font-size: 0.95rem;
    color: ${C.ink};
    margin-left: 8px;
    font-family: 'Jost', sans-serif;
  }

  svg {
    color: ${C.brass};
  }
`;

/* Table Container with both Vertical and Horizontal Scrollbars */
const TableWrapper = styled.div`
  background: ${C.white};
  border: 1px solid ${C.brassLight};
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(15, 59, 58, 0.06);
  max-height: 650px; /* Enables vertical scrollbar */
  overflow: auto;    /* Enables both vertical and horizontal scrollbars */
  position: relative;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 1100px; /* Forces horizontal scrollbar on smaller screens */
    text-align: left;
    font-size: 0.92rem;
  }

  th {
    background: ${C.lagoon};
    color: ${C.brassLight};
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 7px 8px;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  td {
    padding: 7px 8px;
    border-bottom: 1px solid ${C.mist};
    color: ${C.ink};
    font-size:0.7rem;
  }

  tr:hover {
    background-color: ${C.pearl};
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 2px 4px;
  border-radius: 20px;
  font-size: 0.6rem;
  font-weight: 600;
  background: ${(props) => (props.confirmed ? '#E2F0D9' : '#FCE4D6')};
  color: ${(props) => (props.confirmed ? '#385723' : '#C65911')};
  border: 1px solid ${(props) => (props.confirmed ? '#C9E0B2' : '#F8CBAD')};
`;

const ActionButton = styled.button`
  background: ${(props) => (props.confirmed ? '#A61C1C' : C.lagoon)};
  color: ${C.white};
  border: none;
  padding: 3px 6px;
  font-size: 0.6rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const ProofLink = styled.a`
  color: ${C.brass};
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
    color: ${C.lagoon};
  }
`;

const LoadingBox = styled.div`
  text-align: center;
  padding: 60px;
  color: ${C.lagoon};
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

/* ---------------------------- COMPONENT --------------------------- */
const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const {api_url}=useContext(Context);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${api_url}/get_hotel_bookings.php`);
      if (response.data.success) {
        setBookings(response.data.bookings);
      } else {
        Swal.fire('Error', response.data.error || 'Failed to fetch bookings', 'error');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      Swal.fire('Error', 'Could not connect to the server.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Handle status toggle (Confirm <-> Not Confirmed)
  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Confirmed' ? 'Not Confirmed' : 'Confirmed';

    const confirmAction = await Swal.fire({
      title: `Change status to "${newStatus}"?`,
      text: "This will update the reservation status.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: C.lagoon,
      cancelButtonColor: "#B08D57",
      confirmButtonText: "Yes, update",
    });

    if (!confirmAction.isConfirmed) return;

    try {
      const response = await axios.post(`${api_url}/update_booking_status.php`, {
        id,
        order_status: newStatus,
      });

      if (response.data.success) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, order_status: newStatus } : b))
        );
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: `Order status changed to ${newStatus}`,
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        Swal.fire('Error', response.data.error || 'Failed to update status', 'error');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      Swal.fire('Error', 'Server connection error.', 'error');
    }
  };

  // Filter bookings by Name and Email
  const filteredBookings = bookings.filter((b) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = b.name && b.name.toLowerCase().includes(term);
    const emailMatch = b.email && b.email.toLowerCase().includes(term);
    return nameMatch || emailMatch;
  });

  if (loading) {
    return (
      <LoadingBox>
        <FaSpinner className="fa-spin" size={32} />
        <span>Loading hotel bookings...</span>
      </LoadingBox>
    );
  }

  return (
    <Container>
      <HeaderRow>
        <h2>Hotel Bookings Management</h2>
        <SearchBar>
          <FaSearch />
          <input
            type="text"
            placeholder="Search by guest name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
      </HeaderRow>

      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Guest Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Hotel / Suite</th>
              <th>Amount (₦)</th>
              <th>Payment Method</th>
              <th>Reference</th>
              <th>Payment Proof</th>
              <th>Order Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((b) => {
                const isConfirmed = b.order_status === 'Confirmed';
                return (
                  <tr key={b.id}>
                    <td>#{b.id}</td>
                    <td><strong>{b.name}</strong></td>
                    <td>{b.email}</td>
                    <td>{b.phone}</td>
                    <td>{b.hotel_name}</td>
                    <td>₦{Number(b.amount).toLocaleString()}</td>
                    <td>{b.payment_method}</td>
                    <td>{b.payment_reference}</td>
                    <td>
                      {b.proof_url ? (
                        <ProofLink href={b.proof_url} target="_blank" rel="noopener noreferrer">
                          <FaFileDownload /> View Receipt
                        </ProofLink>
                      ) : (
                        <span style={{ color: C.muted, fontStyle: 'italic' }}>None</span>
                      )}
                    </td>
                    <td>
                      <StatusBadge confirmed={isConfirmed}>
                        {b.order_status || 'Not Confirmed'}
                      </StatusBadge>
                    </td>
                    <td>
                      <ActionButton
                        confirmed={isConfirmed}
                        onClick={() => handleToggleStatus(b.id, b.order_status)}
                      >
                        {isConfirmed ? (
                          <>
                            <FaTimesCircle /> Cancel Confirmation
                          </>
                        ) : (
                          <>
                            <FaCheckCircle /> Confirm Order
                          </>
                        )}
                      </ActionButton>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="11" style={{ textAlign: 'center', padding: '40px', color: C.muted }}>
                  No bookings found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableWrapper>
    </Container>
  );
};

export default ManageBookings;