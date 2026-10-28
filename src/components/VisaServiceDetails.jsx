
// // VisaServiceDetails.js
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useParams, Link } from 'react-router-dom';
// import { Fade } from 'react-awesome-reveal';
// // import { visaServices } from './visaServicesData';
// import { visaServices } from './VisaServicesData';
// import Swal from 'sweetalert2';
// import PaymentComponent from './PaymentComponent';

// // --- Styled Components for the Page ---
// const DetailsContainer = styled.div`
//   font-family: 'Poppins', sans-serif;
//   padding: 80px 50px;
//   max-width: 1200px;
//   margin: auto;
//   color: #34495e;

//   @media (max-width: 767px) {
//     padding: 100px 20px;
//   }
// `;

// const BackLink = styled(Link)`
//   display: inline-block;
//   margin-bottom: 40px;
//   color: #00509d;
//   font-size: 1.1rem;
//   font-weight: 500;
//   text-decoration: none;
//   transition: color 0.3s ease;
  
//   &:hover {
//     color: #1a73e8;
//   }
// `;

// const VisaHeader = styled.div`
//   text-align: center;
//   margin-bottom: 50px;
  
//   h1 {
//     font-size: clamp(2rem, 5vw, 3.5rem);
//     color: #00509d;
//     margin-bottom: 10px;
//   }
  
//   img {
//     width: 100%;
//     max-height: 500px;
//     object-fit: cover;
//     border-radius: 12px;
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
//     margin-top: 30px;
//   }
// `;

// const ContentGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 50px;
//   margin-top: 40px;

//   @media (max-width: 992px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Section = styled.div`
//   background-color: #f8f9fa;
//   padding: 30px;
//   border-radius: 12px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

//   h2 {
//     font-size: 2rem;
//     color: #00509d;
//     margin-bottom: 20px;
//   }

//   p, li {
//     font-size: 1rem;
//     color: #555;
//     line-height: 1.6;
//   }

//   ul {
//     padding-left: 20px;
//     margin-top: 10px;
//   }

//   li {
//     margin-bottom: 8px;
//     list-style-type: '✔ ';
//   }
// `;

// const FeeGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;
//   margin-top: 20px;

//   @media (max-width: 767px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FeeBox = styled.div`
//   background-color: #e6f0ff;
//   padding: 20px;
//   border-radius: 8px;
//   border-left: 5px solid #f7c400;

//   h3 {
//     font-size: 1.2rem;
//     color: #00509d;
//   }

//   p {
//     font-size: 1rem;
//     font-weight: 600;
//   }
// `;

// // --- Styled Components for the Form (reused from before) ---
// const FormContainer = styled.div`
//   margin-top: 60px;
//   padding: 40px;
//   background-color: #f8f9fa;
//   border-radius: 12px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
// `;

// const FormTitle = styled.h2`
//   font-size: clamp(1.8rem, 4vw, 2.8rem);
//   color: #00509d;
//   margin-bottom: 10px;
//   text-align: center;
// `;

// const FormSubtitle = styled.p`
//   font-size: 1rem;
//   color: #555;
//   margin-bottom: 30px;
//   text-align: center;
// `;

// const Form = styled.form`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 25px;

//   @media (max-width: 767px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   font-size: 1rem;
//   font-weight: 500;
//   color: #34495e;
//   margin-bottom: 8px;
// `;

// const Input = styled.input`
//   padding: 12px 15px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   font-size: 1rem;
//   transition: border-color 0.3s ease, box-shadow 0.3s ease;
// `;

// const TextArea = styled.textarea`
//   padding: 12px 15px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   font-size: 1rem;
//   min-height: 120px;
//   resize: vertical;
//   grid-column: 1 / -1;
// `;

// const Button = styled.button`
//   grid-column: 1 / -1;
//   padding: 15px 30px;
//   background-color: #00509d;
//   color: #fff;
//   font-size: 1.2rem;
//   font-weight: 600;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.2s ease;
// `;


// // --- The Form Component (nested here as per request) ---
// const VisaApplicationForm = ({ visaTitle }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };

 
//    const handleSubmit = async (e) => {
//      e.preventDefault();
 
//      // Show loading alert
//      Swal.fire({
//        title: 'Sending Application...',
//        text: 'Please wait while we process your request.',
//        allowOutsideClick: false,
//        didOpen: () => {
//          Swal.showLoading();
//        }
//      });
 
//      try {
//        const response = await fetch('https://harvannatravelsandtour.com/api/submit_visa_application.php', {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json',
//          },
//          body: JSON.stringify({
//            ...formData,
//            visaTitle: visaTitle, // Send holiday title separately
//          }),
//        });
 
//        const result = await response.json();
 
//        if (result.success) {
//          Swal.fire({
//            icon: 'success',
//            title: 'Application Sent!',
//            text: result.message || 'We will get back to you shortly.',
//          });
//          // Reset form
//          setFormData({
//            name: '',
//            email: '',
//            phone: '',
//            message: '',
//          });
//        } else {
//          Swal.fire({
//            icon: 'error',
//            title: 'Error',
//            text: result.error || 'There was an issue sending your application.',
//          });
//        }
//      } catch (error) {
//        Swal.fire({
//          icon: 'error',
//          title: 'Network Error',
//          text: 'Unable to send your application. Please try again later.',
//        });
//      }
//    };
 

//   return (
//     <Fade triggerOnce>
//       <FormContainer>
//         <FormTitle>Apply for {visaTitle}</FormTitle>
//         <FormSubtitle>Fill out the form below and one of our experts will get in touch with you shortly.</FormSubtitle>
//         <Form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label htmlFor="name">Full Name</Label>
//             <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//           </FormGroup>
//           <FormGroup>
//             <Label htmlFor="email">Email Address</Label>
//             <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//           </FormGroup>
//           <FormGroup>
//             <Label htmlFor="phone">Phone Number</Label>
//             <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
//           </FormGroup>
//           <FormGroup>
//             <Label htmlFor="message">Your Message</Label>
//             <TextArea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any special requests or questions?" required />
//           </FormGroup>
//           <Button type="submit">Submit Application</Button>
//         </Form>
//       </FormContainer>
//     </Fade>
//   );
// };

// // --- The Main React Component for Details Page ---
// const VisaServiceDetails = () => {
//   const { id } = useParams();
//   const service = visaServices.find(s => s.id === parseInt(id));

//   if (!service) {
//     return (
//       <DetailsContainer>
//         <BackLink to="/visa-services">← Back to Visa Services</BackLink>
//         <p>Visa service not found!</p>
//       </DetailsContainer>
//     );
//   }

//   const { title, image, details } = service;

//   return (
//     <DetailsContainer>
//       <Fade triggerOnce>
//         <BackLink to="/visa-services">← Back to Visa Services</BackLink>
//         <VisaHeader>
//           <h1>{title}</h1>
//           <img src={image} alt={title} />
//         </VisaHeader>
        
//         <ContentGrid>
//           <Section>
//             <h2>Requirements</h2>
//             <ul>
//               {details.requirements.length > 0 ? (
//                 details.requirements.map((req, index) => <li key={index}>{req}</li>)
//               ) : (
//                 <li>No specific requirements listed.</li>
//               )}
//             </ul>
//           </Section>
          
//           <Section>
//             <h2>Required Fees</h2>
//             {/* Conditional rendering for different fee structures */}
//             {details.fees.harvannaProcessing && (
//               <p>
//                 <strong>Harvanna Processing Fee:</strong><br/>
//                 Adult: {details.fees.harvannaProcessing.adult}<br/>
//                 Child: {details.fees.harvannaProcessing.child}
//               </p>
//             )}
//             {details.fees.embassy && (
//               <p>
//                 <strong>Embassy Fee:</strong> {details.fees.embassy.price || details.fees.embassy.fee_type}
//                 {details.fees.embassy.price_vi && <><br/>VI: {details.fees.embassy.price_vi}</>}
//                 {details.fees.embassy.price_others && <><br/>Others: {details.fees.embassy.price_others}</>}
//               </p>
//             )}
//             {details.fees.extra && <p><strong>Additional:</strong> {details.fees.extra}</p>}
//             {details.fees.embassyService && <p><strong>Embassy Service Charge:</strong> {details.fees.embassyService}</p>}
//             {details.fees.vfsServiceCharge && <p><strong>VFS Service Charge:</strong> {details.fees.vfsServiceCharge}</p>}
//             {details.fees.biometricsAndInsurance && <p><strong>Biometrics & Insurance:</strong> {details.fees.biometricsAndInsurance}</p>}
//           </Section>

//           <Section>
//             <h2>Processing Timeline</h2>
//             <p>{details.processingTime}</p>
//             {details.notes && (
//               <ul>
//                 {details.notes.map((note, index) => <li key={index}>{note}</li>)}
//               </ul>
//             )}
//           </Section>
          
//           <Section>
//             <h2>Payments Process Flow</h2>
//             <ul>
//               {details.processFlow.map((step, index) => <li key={index}>{step}</li>)}
//             </ul>
//           </Section>
//         </ContentGrid>
//       </Fade>

//       <VisaApplicationForm visaTitle={title} />
//       <PaymentComponent/>
//     </DetailsContainer>
//   );
// };

// export default VisaServiceDetails;








import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { visaServices } from './VisaServicesData';
import Swal from 'sweetalert2';
import PaymentComponent from './PaymentComponent';

// --- Styled Components for the Page ---
const DetailsContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 80px 50px;
  max-width: 1200px;
  margin: auto;
  color: #34495e;

  @media (max-width: 767px) {
    padding: 100px 20px;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 40px;
  color: #00509d;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1a73e8;
  }
`;

const VisaHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: #00509d;
    margin-bottom: 10px;
  }
  
  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 2rem;
    color: #00509d;
    margin-bottom: 20px;
  }

  p, li {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }

  ul {
    padding-left: 20px;
    margin-top: 10px;
  }

  li {
    margin-bottom: 8px;
    list-style-type: '✔ ';
  }
`;

const FeeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const FeeBox = styled.div`
  background-color: #e6f0ff;
  padding: 20px;
  border-radius: 8px;
  border-left: 5px solid #f7c400;

  h3 {
    font-size: 1.2rem;
    color: #00509d;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
  }
`;

// --- Styled Components for the Form (reused from before) ---
const FormContainer = styled.div`
  margin-top: 60px;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
`;

const FormTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: #00509d;
  margin-bottom: 10px;
  text-align: center;
`;

const FormSubtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #34495e;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  grid-column: 1 / -1;
`;

const Button = styled.button`
  grid-column: 1 / -1;
  padding: 15px 30px;
  background-color: #00509d;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
`;

// --- The Form Component (nested here as per request) ---
const VisaApplicationForm = ({ visaTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Sending Application...',
      text: 'Please wait while we process your request.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await fetch('https://harvannatravelsandtour.com/api/submit_visa_application.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          visaTitle: visaTitle,
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Application Sent!',
          text: result.message || 'We will get back to you shortly.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: result.error || 'There was an issue sending your application.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Unable to send your application. Please try again later.',
      });
    }
  };

  return (
    <Fade triggerOnce>
      <FormContainer>
        <FormTitle>Apply for {visaTitle}</FormTitle>
        <FormSubtitle>Fill out the form below and one of our experts will get in touch with you shortly.</FormSubtitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Your Message</Label>
            <TextArea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any special requests or questions?" required />
          </FormGroup>
          <Button type="submit">Submit Application</Button>
        </Form>
      </FormContainer>
    </Fade>
  );
};

// --- The Main React Component for Details Page ---
const VisaServiceDetails = () => {
  const { id } = useParams();
  const service = visaServices.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <DetailsContainer>
        <BackLink to="/visa-services">← Back to Visa Services</BackLink>
        <p>Visa service not found!</p>
      </DetailsContainer>
    );
  }

  const { title, image, details } = service;

  return (
    <DetailsContainer>
      <Fade triggerOnce>
        <BackLink to="/visa-services">← Back to Visa Services</BackLink>
        <VisaHeader>
          <h1>{title}</h1>
          <img src={image} alt={title} />
        </VisaHeader>
        
        <ContentGrid>
          <Section>
            <h2>Requirements</h2>
            <ul>
              {details.requirements.length > 0 ? (
                details.requirements.map((req, index) => <li key={index}>{req}</li>)
              ) : (
                <li>No specific requirements listed.</li>
              )}
            </ul>
          </Section>
          
          <Section>
            <h2>Required Fees</h2>
            {details.fees.harvannaProcessing && (
              <FeeBox>
                <h3>Harvanna Processing Fee</h3>
                {details.fees.harvannaProcessing.adult && <p>Adult: {details.fees.harvannaProcessing.adult}</p>}
                {details.fees.harvannaProcessing.child && <p>Child: {details.fees.harvannaProcessing.child}</p>}
              </FeeBox>
            )}

            {details.fees.embassy && (
              <FeeBox>
                <h3>Embassy Fee</h3>
                {details.fees.embassy.note && <p><strong>Note:</strong> {details.fees.embassy.note}</p>}
                {details.fees.embassy.price && <p>{details.fees.embassy.price}</p>}
                {details.fees.embassy.price_vi && <p>VI Submission: {details.fees.embassy.price_vi}</p>}
                {details.fees.embassy.price_others && <p>Others: {details.fees.embassy.price_others}</p>}
                {details.fees.embassy.adult && <p>Adult: {details.fees.embassy.adult}</p>}
                {details.fees.embassy.child && <p>Child: {details.fees.embassy.child}</p>}
                {details.fees.embassy.fee && <p>{details.fees.embassy.fee}</p>}
              </FeeBox>
            )}

            {details.fees.extra && <p><strong>Additional:</strong> {details.fees.extra}</p>}
            {details.fees.embassyServiceCharge && <p><strong>Embassy Service Charge:</strong> {details.fees.embassyServiceCharge}</p>}
            {details.fees.vfsServiceCharge && <p><strong>VFS Service Charge:</strong> {details.fees.vfsServiceCharge}</p>}
            {details.fees.biometricsAndInsurance && <p><strong>Biometrics & Insurance:</strong> {details.fees.biometricsAndInsurance}</p>}
            
            {details.fees.onlineEVisa && (
                <FeeBox>
                    <h3>Online E-Visa</h3>
                    <p>Adult: {details.fees.onlineEVisa.harvannaProcessing.adult}</p>
                    <p>Child: {details.fees.onlineEVisa.harvannaProcessing.child}</p>
                    <p><em>({details.fees.onlineEVisa.note})</em></p>
                </FeeBox>
            )}

            {details.fees.physicalSubmission && (
                <FeeBox>
                    <h3>Physical Submission</h3>
                    <p>Adult: {details.fees.physicalSubmission.harvannaProcessing.adult}</p>
                    <p>Child: {details.fees.physicalSubmission.harvannaProcessing.child}</p>
                    <p><strong>Embassy Visa Fee:</strong> {details.fees.physicalSubmission.embassy}</p>
                </FeeBox>
            )}

            {details.fees.ukApplicants && (
                <FeeBox>
                    <h3>UK Applicants</h3>
                    <p>Visa Fee: {details.fees.ukApplicants.visaFee}</p>
                    <p>Processing Fee (Adult): {details.fees.ukApplicants.processingFee.adult}</p>
                    <p>Processing Fee (Child): {details.fees.ukApplicants.processingFee.child}</p>
                </FeeBox>
            )}

            {details.fees.usaApplicants && (
                <FeeBox>
                    <h3>USA Applicants</h3>
                    <p>Total Fee (Adult): {details.fees.usaApplicants.totalFee.adult}</p>
                    <p>Total Fee (Child): {details.fees.usaApplicants.totalFee.child}</p>
                    <p><em>({details.fees.usaApplicants.note})</em></p>
                </FeeBox>
            )}

            {details.fees.franceNetherlands && (
                <FeeBox>
                    <h3>France/Netherlands Schengen Visa</h3>
                    <p>Processing Fee (Adult): {details.fees.franceNetherlands.harvannaProcessing.adult}</p>
                    <p>Processing Fee (Child): {details.fees.franceNetherlands.harvannaProcessing.child}</p>
                    <p>Biometrics and Insurance Fee: {details.fees.franceNetherlands.biometricsAndInsurance}</p>
                    <p>Total (Adult): {details.fees.franceNetherlands.totalPayableToHarvanna.adult}</p>
                    <p>Total (Child): {details.fees.franceNetherlands.totalPayableToHarvanna.child}</p>
                    <p>Embassy Visa Fee: {details.fees.franceNetherlands.embassy.fee}</p>
                </FeeBox>
            )}

            {details.fees.spain && (
                <FeeBox>
                    <h3>Spain Schengen Visa</h3>
                    <p>Processing Fee (Adult): {details.fees.spain.harvannaProcessing.adult}</p>
                    <p>Processing Fee (Child): {details.fees.spain.harvannaProcessing.child}</p>
                    <p>Biometrics and Insurance Fee: {details.fees.spain.biometricsAndInsurance}</p>
                    <p>Total (Adult): {details.fees.spain.totalPayableToHarvanna.adult}</p>
                    <p>Total (Child): {details.fees.spain.totalPayableToHarvanna.child}</p>
                    <p>Embassy Visa Fee: {details.fees.spain.embassy.fee}</p>
                </FeeBox>
            )}

            {details.fees.embassyVisaFee && (
                <p><strong>Embassy Visa Fee:</strong> {details.fees.embassyVisaFee}</p>
            )}
             {details.fees.visaFee && (
                <p><strong>Visa Fee:</strong> {details.fees.visaFee}</p>
            )}

            {details.fees.harvannaProcessing && typeof details.fees.harvannaProcessing === 'string' && (
                <p><strong>Harvanna Processing Fee:</strong> {details.fees.harvannaProcessing}</p>
            )}
          </Section>

          <Section>
            <h2>Processing Timeline</h2>
            <p>{details.processingTime}</p>
            {details.visaDuration && <p><strong>Visa Duration:</strong> {details.visaDuration}</p>}
            {details.notes && (
              <ul>
                {details.notes.map((note, index) => <li key={index}>{note}</li>)}
              </ul>
            )}
          </Section>
          
          <Section>
            <h2>Payments Process Flow</h2>
            <ul>
              {details.processFlow.map((step, index) => <li key={index}>{step}</li>)}
            </ul>
          </Section>
        </ContentGrid>
      </Fade>

      <VisaApplicationForm visaTitle={title} />
      <PaymentComponent />
    </DetailsContainer>
  );
};

export default VisaServiceDetails;