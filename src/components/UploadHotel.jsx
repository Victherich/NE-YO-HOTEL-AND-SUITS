
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 100px auto;
  padding: 25px;
  background: #fff;
  border-radius: 12px;
//   box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: blue;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  resize: vertical;
  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;

const FileInput = styled.input`
  border: none;
`;

const Button = styled.button`
  background: #0077ff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #005fcc;
  }
`;



const PaymentButton = styled.button`
  padding: 10px 20px;
  background-color: #00509d;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin:0 auto;
  width:100%;

  &:hover {
    background-color: #1a73e8;
    transform: translateY(-2px);
  }
`;

export default function HotelUpload() {
  const [hotelName, setHotelName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [roomsAvailable, setRoomsAvailable] = useState("1");
  const [hotelImages, setHotelImages] = useState([]);

  const [modalOpen, setModalOpen]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hotelName || !location || !description || !pricePerNight || !roomsAvailable || hotelImages.length === 0) {
      Swal.fire("Error", "Please fill in all fields and upload at least one image.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("hotelName", hotelName);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("pricePerNight", pricePerNight);
    formData.append("roomsAvailable", roomsAvailable);
    for (let i = 0; i < hotelImages.length; i++) {
      formData.append("hotelImages[]", hotelImages[i]);
    }

    Swal.fire({
      title: "Uploading...",
      text: "Please wait while your hotel is being uploaded.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await axios.post("https://harvannatravelsandtour.com/api/upload_hotel.php", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        window.location.reload();
        Swal.fire("Success", response.data.message, "success");
        setHotelName("");
        setLocation("");
        setDescription("");
        setPricePerNight("");
        setRoomsAvailable("");
        setHotelImages([]);
      } else {
        Swal.fire("Error", response.data.error, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong while uploading.", "error");
    }
  };

  return (
   <Container>
       {!modalOpen&&<PaymentButton onClick={() => setModalOpen(true)}> <FaPlusCircle/> Click here to post new Hotel</PaymentButton>}
    {modalOpen && (
  <div
    style={{
      position: "fixed",       // stay fixed on screen
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)", // semi-transparent dark overlay
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000             // make sure it’s on top
    }}
  >
    <Container
      style={{
        margin: 0,
        position: "relative",       // relative inside overlay
        transform: "translate(0, 0)" // no extra transform needed
      }}
    >

      <Title>Enter Hotel Details</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Hotel Name"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextArea
          rows="4"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Price per Night"
          value={pricePerNight}
          onChange={(e) => setPricePerNight(e.target.value)}
        />
        {/* <Input
          type="number"
          placeholder="Rooms Available"
          value={roomsAvailable}
          onChange={(e) => setRoomsAvailable(e.target.value)}
        /> */}
        <p>Upload up to 6 images at a time. (.png, .jpg, .jpeg)</p>
        <FileInput
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setHotelImages(e.target.files)}
        />
        <Button type="submit">Post Hotel</Button>

        <Button type="button" onClick={()=>setModalOpen(false)} style={{backgroundColor:"gray"}}>Cancel</Button>
      </Form>
    </Container>
    </div>)}

   </Container>
  );
}
