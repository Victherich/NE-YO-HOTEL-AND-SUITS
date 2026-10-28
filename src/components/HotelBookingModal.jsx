

// import React, { useState } from "react";
// import styled from "styled-components";
// import Swal from "sweetalert2";
// import PaystackPop from "@paystack/inline-js";
// import { FaCopy, FaCheck, FaTimes, FaCreditCard, FaUniversity, FaArrowLeft, FaCalendarCheck, FaClock } from "react-icons/fa";

// /* ---------------------------- THEME COLORS ------------------------ */
// const C = {
//   pearl: "#F6F7F5",
//   mist: "#E9EFEC",
//   white: "#FFFFFF",
//   lagoon: "#0F3B3A",
//   lagoonSoft: "#1D5754",
//   brass: "#B08D57",
//   brassLight: "#E3CFA6",
//   ink: "#1B2523",
//   muted: "#5E6D69",
// };

// /* ---------------------------- STYLED COMPONENTS ------------------- */

// const ModalOverlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(10, 32, 31, 0.8);
//   backdrop-filter: blur(5px);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
//   padding: 16px;
//   overflow-y: auto;
// `;

// const ModalContent = styled.div`
//   background: ${C.white};
//   padding: 30px 24px;
//   border-radius: 4px;
//   width: 520px;
//   max-width: 100%;
//   max-height: 90vh;
//   overflow-y: auto;
//   position: relative;
//   box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
//   border: 1px solid ${C.brassLight};

//   h2 {
//     font-family: 'Cormorant Garamond', serif;
//     font-size: 2.1rem;
//     font-weight: 500;
//     color: ${C.lagoon};
//     margin-bottom: 6px;
//     line-height: 1.1;
//   }

//   .subtitle {
//     font-family: 'Cormorant Garamond', serif;
//     font-style: italic;
//     font-size: 1.1rem;
//     color: ${C.brass};
//     margin-bottom: 20px;
//     border-bottom: 1px solid ${C.brassLight};
//     padding-bottom: 10px;
//   }
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   background: transparent;
//   border: none;
//   font-size: 1.4rem;
//   color: ${C.muted};
//   cursor: pointer;
//   transition: color 0.3s;
//   &:hover { color: ${C.lagoon}; }
// `;

// const BackNavButton = styled.button`
//   background: transparent;
//   border: none;
//   color: ${C.brass};
//   font-weight: 500;
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   cursor: pointer;
//   margin-bottom: 16px;
//   font-size: 0.95rem;
//   &:hover { color: ${C.lagoon}; }
// `;

// const ChoiceGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 14px;
//   margin-top: 10px;
// `;

// const ChoiceCard = styled.button`
//   background: ${C.mist};
//   border: 1px solid ${C.brassLight};
//   padding: 20px;
//   border-radius: 2px;
//   text-align: left;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   gap: 16px;

//   &:hover {
//     border-color: ${C.brass};
//     background: ${C.white};
//     transform: translateY(-2px);
//     box-shadow: 0 8px 20px rgba(176, 141, 87, 0.15);
//   }

//   .icon-box {
//     width: 48px;
//     height: 48px;
//     background: ${C.lagoon};
//     color: ${C.brassLight};
//     display: grid;
//     place-items: center;
//     font-size: 1.3rem;
//     border-radius: 2px;
//     flex-shrink: 0;
//   }

//   .info {
//     h4 {
//       font-family: 'Cormorant Garamond', serif;
//       font-size: 1.35rem;
//       color: ${C.lagoon};
//       margin-bottom: 4px;
//       font-weight: 600;
//     }
//     p {
//       font-size: 0.9rem;
//       color: ${C.muted};
//       margin: 0;
//     }
//   }
// `;

// const FormGroup = styled.div`
//   margin-bottom: 14px;
// `;

// const Label = styled.label`
//   font-size: 0.85rem;
//   font-weight: 500;
//   color: ${C.muted};
//   display: block;
//   margin-bottom: 4px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border-radius: 2px;
//   border: 1px solid ${C.brassLight};
//   background: ${C.pearl};
//   font-size: 1rem;
//   color: ${C.ink};
//   &:focus {
//     outline: none;
//     border-color: ${C.brass};
//     background: ${C.white};
//   }
// `;

// const BankCard = styled.div`
//   background: ${C.mist};
//   border: 1px solid ${C.brassLight};
//   padding: 12px;
//   border-radius: 2px;
//   margin-bottom: 12px;
//   font-size: 0.95rem;

//   .bank-title {
//     font-weight: 600;
//     color: ${C.lagoon};
//     margin-bottom: 6px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .detail-row {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 4px 0;
//     color: ${C.ink};
//     font-size: 0.9rem;
//   }
// `;

// const CopyButton = styled.button`
//   background: ${C.brass};
//   color: ${C.white};
//   border: none;
//   padding: 4px 10px;
//   font-size: 0.8rem;
//   border-radius: 2px;
//   cursor: pointer;
//   display: inline-flex;
//   align-items: center;
//   gap: 4px;
//   transition: background 0.3s;

//   &:hover {
//     background: ${C.lagoon};
//   }
// `;

// const ActionButton = styled.button`
//   width: 100%;
//   background: linear-gradient(110deg, ${C.brass}, #D4B77E, ${C.brass});
//   background-size: 200% 100%;
//   color: ${C.lagoon};
//   font-weight: 600;
//   border: none;
//   border-radius: 2px;
//   padding: 12px;
//   font-size: 1rem;
//   letter-spacing: 1px;
//   cursor: pointer;
//   transition: all 0.4s ease;
//   margin-top: 10px;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 10px 24px rgba(176, 141, 87, 0.35);
//   }
// `;

// /* ---------------------------- COMPONENT --------------------------- */

// const HotelBookingModal = ({ hotel, onClose }) => {
//   const [step, setStep] = useState("choice"); // "choice", "paynow", "paylater"
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
//   const [proofFile, setProofFile] = useState(null);
//   const [copiedField, setCopiedField] = useState("");

//   const amountToPay = hotel.price_per_night;

//   const banks = [
//     { name: "First Bank", accNo: "2024259158", accName: "Neyo Hotel" },
//     { name: "Zenith Bank", accNo: "1015542938", accName: "Neyo Hotel" },
//     { name: "Access Bank", accNo: "0038035600", accName: "Neyo Hotel" },
//   ];

//   const handleCopy = (text, fieldName) => {
//     navigator.clipboard.writeText(text);
//     setCopiedField(fieldName);
//     setTimeout(() => setCopiedField(""), 2500);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setProofFile(e.target.files[0]);
//     }
//   };

//   const sendBookingDetailsToBackend = (paymentMethodLabel, reference = "N/A") => {
//     const submissionData = new FormData();
//     submissionData.append("name", formData.name);
//     submissionData.append("email", formData.email);
//     submissionData.append("phone", formData.phone);
//     submissionData.append("hotel_name", hotel.hotel_name);
//     submissionData.append("amount", amountToPay);
//     submissionData.append("payment_method", paymentMethodLabel);
//     submissionData.append("payment_reference", reference);
//     if (proofFile) {
//       submissionData.append("proof_of_payment", proofFile);
//     }

//     fetch("https://harvannatravelsandtour.com/api/send_hotel_booking_details.php", {
//       method: "POST",
//       body: submissionData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           console.log("Booking successfully submitted");
//         } else {
//           console.error("Backend warning:", data.error);
//         }
//       })
//       .catch((err) => console.error("Error submitting booking:", err));
//   };



//   const handleTransferSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, phone } = formData;
//     if (!name || !email || !phone) {
//       Swal.fire("Error", "Please fill in all contact details", "error");
//       return;
//     }
//     if (!proofFile) {
//       Swal.fire("Error", "Please upload proof of payment", "error");
//       return;
//     }

//     sendBookingDetailsToBackend("Bank Transfer (Proof Uploaded)");
//     Swal.fire({
//       icon: "success",
//       title: "Booking & Proof Submitted",
//       text: "Your payment proof has been uploaded! Our reservation team will verify and contact you shortly.",
//       confirmButtonColor: C.lagoon,
//     });
//     onClose();
//   };

//   const handlePayLaterSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, phone } = formData;
//     if (!name || !email || !phone) {
//       Swal.fire("Error", "Please fill in all contact details", "error");
//       return;
//     }

//     sendBookingDetailsToBackend("Pay Later / Reserve");
//     Swal.fire({
//       icon: "success",
//       title: "Reservation Successful",
//       text: "Your room has been reserved. Our agent will reach out to you with payment instructions.",
//       confirmButtonColor: C.lagoon,
//     });
//     onClose();
//   };

//   return (
//     <ModalOverlay>
//       <ModalContent>
//         <CloseButton onClick={onClose}><FaTimes /></CloseButton>
//         <h2>Book {hotel.hotel_name}</h2>
//         <div className="subtitle">Rate: ₦{Number(amountToPay).toLocaleString()} / night</div>

//         {/* STEP 1: CHOICE SCREEN */}
//         {step === "choice" && (
//           <>
//             <p style={{ color: C.muted, marginBottom: '16px', fontSize: '0.95rem' }}>
//               How would you like to proceed with your booking?
//             </p>
//             <ChoiceGrid>
//               <ChoiceCard onClick={() => setStep("paynow")}>
//                 <div className="icon-box"><FaCalendarCheck /></div>
//                 <div className="info">
//                   <h4>Book &amp; Pay Now</h4>
//                   <p>View bank account details, transfer, and upload your payment proof.</p>
//                 </div>
//               </ChoiceCard>

//               <ChoiceCard onClick={() => setStep("paylater")}>
//                 <div className="icon-box"><FaClock /></div>
//                 <div className="info">
//                   <h4>Book &amp; Pay Later</h4>
//                   <p>Secure your reservation now and pay at a later time.</p>
//                 </div>
//               </ChoiceCard>
//             </ChoiceGrid>
//           </>
//         )}

//         {/* STEP 2A: BOOK & PAY NOW (BANK TRANSFER + PROOF) */}
//         {step === "paynow" && (
//           <form onSubmit={handleTransferSubmit}>
//             <BackNavButton type="button" onClick={() => setStep("choice")}>
//               <FaArrowLeft /> Back to options
//             </BackNavButton>

//             <div style={{ margin: "4px 0 14px", fontWeight: "600", color: C.lagoon, fontSize: "0.95rem" }}>
//               Transfer exact amount (₦{Number(amountToPay).toLocaleString()}) to any account below:
//             </div>

//             {banks.map((b, idx) => (
//               <BankCard key={idx}>
//                 <div className="bank-title">
//                   <span>{b.name}</span>
//                   <CopyButton type="button" onClick={() => handleCopy(b.accNo, `${b.name}-${b.accNo}`)}>
//                     {copiedField === `${b.name}-${b.accNo}` ? <FaCheck /> : <FaCopy />} Copy Acc No
//                   </CopyButton>
//                 </div>
//                 <div className="detail-row">
//                   <span>Account Name: <strong>{b.accName}</strong></span>
//                 </div>
//                 <div className="detail-row">
//                   <span>Account Number: <strong style={{ color: C.lagoon, fontSize: "1.05rem" }}>{b.accNo}</strong></span>
//                 </div>
//               </BankCard>
//             ))}

//             <BankCard style={{ background: C.white, border: `1px dashed ${C.brass}` }}>
//               <div className="detail-row" style={{ justifyContent: "space-between" }}>
//                 <span>Exact Amount Due:</span>
//                 <strong style={{ color: C.brass, fontSize: "1.1rem" }}>₦{Number(amountToPay).toLocaleString()}</strong>
//               </div>
//               <div style={{ marginTop: "6px" }}>
//                 <CopyButton type="button" onClick={() => handleCopy(String(amountToPay), "amount")}>
//                   {copiedField === "amount" ? <FaCheck /> : <FaCopy />} Copy Amount
//                 </CopyButton>
//               </div>
//             </BankCard>

//             <FormGroup style={{ marginTop: "16px" }}>
//               <Label>Full Name</Label>
//               <Input name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
//             </FormGroup>

//             <FormGroup>
//               <Label>Email Address</Label>
//               <Input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
//             </FormGroup>

//             <FormGroup>
//               <Label>Phone Number</Label>
//               <Input type="tel" name="phone" placeholder="080XXXXXXXX" value={formData.phone} onChange={handleChange} required />
//             </FormGroup>

//             <FormGroup>
//               <Label>Upload Proof of Payment (Receipt / Screenshot)</Label>
//               <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange} required />
//             </FormGroup>

//             <ActionButton type="submit">
//               Submit Booking &amp; Payment Proof
//             </ActionButton>
//           </form>
//         )}

//         {/* STEP 2B: BOOK & PAY LATER */}
//         {step === "paylater" && (
//           <form onSubmit={handlePayLaterSubmit}>
//             <BackNavButton type="button" onClick={() => setStep("choice")}>
//               <FaArrowLeft /> Back to options
//             </BackNavButton>

//             <FormGroup style={{ marginTop: "10px" }}>
//               <Label>Full Name</Label>
//               <Input name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
//             </FormGroup>

//             <FormGroup>
//               <Label>Email Address</Label>
//               <Input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
//             </FormGroup>

//             <FormGroup>
//               <Label>Phone Number</Label>
//               <Input type="tel" name="phone" placeholder="080XXXXXXXX" value={formData.phone} onChange={handleChange} required />
//             </FormGroup>

//             <ActionButton type="submit">
//               Complete Reservation (Pay Later)
//             </ActionButton>
//           </form>
//         )}
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default HotelBookingModal;



import React, { useContext, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import PaystackPop from "@paystack/inline-js";
import { FaCopy, FaCheck, FaTimes, FaCalendarCheck, FaClock, FaArrowLeft } from "react-icons/fa";
import { Context } from "./Context";

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

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 32, 31, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 16px;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: ${C.white};
  padding: 30px 24px;
  border-radius: 4px;
  width: 520px;
  max-width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid ${C.brassLight};

  h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.1rem;
    font-weight: 500;
    color: ${C.lagoon};
    margin-bottom: 6px;
    line-height: 1.1;
  }

  .subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.1rem;
    color: ${C.brass};
    margin-bottom: 20px;
    border-bottom: 1px solid ${C.brassLight};
    padding-bottom: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 1.4rem;
  color: ${C.muted};
  cursor: pointer;
  transition: color 0.3s;
  &:hover { color: ${C.lagoon}; }
`;

const BackNavButton = styled.button`
  background: transparent;
  border: none;
  color: ${C.brass};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  margin-bottom: 16px;
  font-size: 0.95rem;
  &:hover { color: ${C.lagoon}; }
`;

const ChoiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  margin-top: 10px;
`;

const ChoiceCard = styled.button`
  background: ${C.mist};
  border: 1px solid ${C.brassLight};
  padding: 20px;
  border-radius: 2px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    border-color: ${C.brass};
    background: ${C.white};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(176, 141, 87, 0.15);
  }

  .icon-box {
    width: 48px;
    height: 48px;
    background: ${C.lagoon};
    color: ${C.brassLight};
    display: grid;
    place-items: center;
    font-size: 1.3rem;
    border-radius: 2px;
    flex-shrink: 0;
  }

  .info {
    h4 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.35rem;
      color: ${C.lagoon};
      margin-bottom: 4px;
      font-weight: 600;
    }
    p {
      font-size: 0.9rem;
      color: ${C.muted};
      margin: 0;
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 14px;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${C.muted};
  display: block;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 2px;
  border: 1px solid ${C.brassLight};
  background: ${C.pearl};
  font-size: 1rem;
  color: ${C.ink};
  &:focus {
    outline: none;
    border-color: ${C.brass};
    background: ${C.white};
  }
`;

const BankCard = styled.div`
  background: ${C.mist};
  border: 1px solid ${C.brassLight};
  padding: 12px;
  border-radius: 2px;
  margin-bottom: 12px;
  font-size: 0.95rem;

  .bank-title {
    font-weight: 600;
    color: ${C.lagoon};
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0;
    color: ${C.ink};
    font-size: 0.9rem;
  }
`;

const CopyButton = styled.button`
  background: ${C.brass};
  color: ${C.white};
  border: none;
  padding: 4px 10px;
  font-size: 0.8rem;
  border-radius: 2px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.3s;

  &:hover {
    background: ${C.lagoon};
  }
`;

const ActionButton = styled.button`
  width: 100%;
  background: linear-gradient(110deg, ${C.brass}, #D4B77E, ${C.brass});
  background-size: 200% 100%;
  color: ${C.lagoon};
  font-weight: 600;
  border: none;
  border-radius: 2px;
  padding: 12px;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.4s ease;
  margin-top: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(176, 141, 87, 0.35);
  }
`;

/* ---------------------------- COMPONENT --------------------------- */

const HotelBookingModal = ({ hotel, onClose }) => {
  const [step, setStep] = useState("choice"); // "choice", "paynow", "paylater"
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [proofFile, setProofFile] = useState(null);
  const [copiedField, setCopiedField] = useState("");
  const {api_url}=useContext(Context);

  const amountToPay = hotel.price_per_night;

  const banks = [
    { name: "First Bank", accNo: "2024259158", accName: "Neyo Hotel" },
    { name: "Zenith Bank", accNo: "1015542938", accName: "Neyo Hotel" },
    { name: "Access Bank", accNo: "0038035600", accName: "Neyo Hotel" },
  ];

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(""), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProofFile(e.target.files[0]);
    }
  };

  const sendBookingDetailsToBackend = async (paymentMethodLabel, reference = "N/A") => {
    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("hotel_name", hotel.hotel_name);
    submissionData.append("amount", amountToPay);
    submissionData.append("payment_method", paymentMethodLabel);
    submissionData.append("payment_reference", reference);
    if (proofFile) {
      submissionData.append("proof_of_payment", proofFile);
    }

    try {
      const response = await fetch(`${api_url}/send_hotel_booking_details.php`, {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error submitting booking:", err);
      return { success: false, error: "Could not connect to the server." };
    }
  };

  const handleTransferSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      Swal.fire("Error", "Please fill in all contact details", "error");
      return;
    }
    if (!proofFile) {
      Swal.fire("Error", "Please upload proof of payment", "error");
      return;
    }

    Swal.fire({
      title: "Submitting booking...",
      text: "Please wait while we save your reservation and upload your proof...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    const result = await sendBookingDetailsToBackend("Bank Transfer (Proof Uploaded)");

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Booking & Proof Submitted",
        text: "Your payment proof has submitted! Please check your email inbox or spam folder for updates on confirmation.",
        confirmButtonColor: C.lagoon,
        allowOutsideClick:false,
      });
      onClose();
    } else {
      Swal.fire("Error ❌", result.error || "Failed to submit booking.", "error");
    }
  };

  const handlePayLaterSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      Swal.fire("Error", "Please fill in all contact details", "error");
      return;
    }

    Swal.fire({
      title: "Reserving room...",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    const result = await sendBookingDetailsToBackend("Pay Later / Reserve");

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Reservation Request submitted",
        text: "Please check your email inbox or spam folder for updates on confirmation.",
        confirmButtonColor: C.lagoon,
        allowOutsideClick:false,
      });
      onClose();
    } else {
      Swal.fire("Error ❌", result.error || "Failed to reserve room.", "error");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}><FaTimes /></CloseButton>
        <h2>Book {hotel.hotel_name}</h2>
        <div className="subtitle">Rate: ₦{Number(amountToPay).toLocaleString()} / night</div>

        {/* STEP 1: CHOICE SCREEN */}
        {step === "choice" && (
          <>
            <p style={{ color: C.muted, marginBottom: '16px', fontSize: '0.95rem' }}>
              How would you like to proceed with your booking?
            </p>
            <ChoiceGrid>
              <ChoiceCard onClick={() => setStep("paynow")}>
                <div className="icon-box"><FaCalendarCheck /></div>
                <div className="info">
                  <h4>Book &amp; Pay Now</h4>
                  <p>View bank account details, transfer, and upload your payment proof.</p>
                </div>
              </ChoiceCard>

              <ChoiceCard onClick={() => setStep("paylater")}>
                <div className="icon-box"><FaClock /></div>
                <div className="info">
                  <h4>Book &amp; Pay Later</h4>
                  <p>Secure your reservation now and pay at a later time.</p>
                </div>
              </ChoiceCard>
            </ChoiceGrid>
          </>
        )}

        {/* STEP 2A: BOOK & PAY NOW (BANK TRANSFER + PROOF) */}
        {step === "paynow" && (
          <form onSubmit={handleTransferSubmit}>
            <BackNavButton type="button" onClick={() => setStep("choice")}>
              <FaArrowLeft /> Back to options
            </BackNavButton>

            <div style={{ margin: "4px 0 14px", fontWeight: "600", color: C.lagoon, fontSize: "0.95rem" }}>
              Transfer exact amount (₦{Number(amountToPay).toLocaleString()}) to any account below:
            </div>

            {banks.map((b, idx) => (
              <BankCard key={idx}>
                <div className="bank-title">
                  <span>{b.name}</span>
                  <CopyButton type="button" onClick={() => handleCopy(b.accNo, `${b.name}-${b.accNo}`)}>
                    {copiedField === `${b.name}-${b.accNo}` ? <FaCheck /> : <FaCopy />} Copy Acc No
                  </CopyButton>
                </div>
                <div className="detail-row">
                  <span>Account Name: <strong>{b.accName}</strong></span>
                </div>
                <div className="detail-row">
                  <span>Account Number: <strong style={{ color: C.lagoon, fontSize: "1.05rem" }}>{b.accNo}</strong></span>
                </div>
              </BankCard>
            ))}

            <BankCard style={{ background: C.white, border: `1px dashed ${C.brass}` }}>
              <div className="detail-row" style={{ justifyContent: "space-between" }}>
                <span>Exact Amount Due:</span>
                <strong style={{ color: C.brass, fontSize: "1.1rem" }}>₦{Number(amountToPay).toLocaleString()}</strong>
              </div>
              <div style={{ marginTop: "6px" }}>
                <CopyButton type="button" onClick={() => handleCopy(String(amountToPay), "amount")}>
                  {copiedField === "amount" ? <FaCheck /> : <FaCopy />} Copy Amount
                </CopyButton>
              </div>
            </BankCard>

            <FormGroup style={{ marginTop: "16px" }}>
              <Label>Full Name</Label>
              <Input name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Email Address</Label>
              <Input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Phone Number</Label>
              <Input type="tel" name="phone" placeholder="080XXXXXXXX" value={formData.phone} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Upload Proof of Payment (Receipt / Screenshot)</Label>
              <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange} required />
            </FormGroup>

            <ActionButton type="submit">
              Submit Booking &amp; Payment Proof
            </ActionButton>
          </form>
        )}

        {/* STEP 2B: BOOK & PAY LATER */}
        {step === "paylater" && (
          <form onSubmit={handlePayLaterSubmit}>
            <BackNavButton type="button" onClick={() => setStep("choice")}>
              <FaArrowLeft /> Back to options
            </BackNavButton>

            <FormGroup style={{ marginTop: "10px" }}>
              <Label>Full Name</Label>
              <Input name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Email Address</Label>
              <Input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label>Phone Number</Label>
              <Input type="tel" name="phone" placeholder="080XXXXXXXX" value={formData.phone} onChange={handleChange} required />
            </FormGroup>

            <ActionButton type="submit">
              Complete Reservation (Pay Later)
            </ActionButton>
          </form>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default HotelBookingModal;