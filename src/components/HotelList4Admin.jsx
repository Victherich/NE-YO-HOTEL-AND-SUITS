
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Styled Components
const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding:20px;
`;

const HotelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  
`;

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #fff;
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  color:blue;
`;

const CardText = styled.p`
  margin: 5px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background: ${(props) => props.bg || "#0077ff"};

  &:hover {
    opacity: 0.9;
  }
`;

export default function HotelList() {
    const n = useNavigate();
  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    try {
      const res = await axios.get("https://harvannatravelsandtour.com/api/get_hotels.php");
      if (res.data.success) {
        setHotels(res.data.hotels);
      } else {
        Swal.fire("Error", res.data.error, "error");
      }
    } catch (err) {
      Swal.fire("Error", "Failed to fetch hotels.", "error");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "This will delete the hotel permanently!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.post("https://harvannatravelsandtour.com/api/delete_hotel.php", { id });
        if (res.data.success) {
          Swal.fire("Deleted!", res.data.message, "success");
          fetchHotels();
        } else {
          Swal.fire("Error", res.data.error, "error");
        }
      } catch (err) {
        Swal.fire("Error", "Failed to delete hotel.", "error");
      }
    }
  };

  const handleEdit = (hotel) => {
    Swal.fire("Edit Hotel", `You clicked edit for ${hotel.hotel_name}`, "info");
    // You can redirect to edit page or open modal here
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <Container>
      <h2 style={{color:"blue", marginBottom:"10px"}}>All Hotels</h2>
      <HotelGrid>
        {hotels.map((hotel) => (
          <Card key={hotel.id}>
            {hotel.hotel_images[0] && (
              <CardImage src={`https://harvannatravelsandtour.com/api/uploads/hotels/${hotel.hotel_images[0]}`} alt={hotel.hotel_name} />
            )}
            <CardBody>
              <CardTitle>{hotel.hotel_name}</CardTitle>
              <CardText><strong>Location:</strong> {hotel.location}</CardText>
              <CardText><strong>Price/Night:</strong> NGN {hotel.price_per_night}</CardText>
              {/* <CardText><strong>Rooms:</strong> {hotel.rooms_available}</CardText> */}
              <ButtonGroup>
                {/* <Button bg="#f39c12" onClick={() => handleEdit(hotel)}>Edit</Button> */}
                <Button bg="green" onClick={() =>n(`/hoteldetail/${hotel.id}`)}>View</Button>
                <Button bg="#e74c3c" onClick={() => handleDelete(hotel.id)}>Delete</Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        ))}
      </HotelGrid>
    </Container>
  );
}
