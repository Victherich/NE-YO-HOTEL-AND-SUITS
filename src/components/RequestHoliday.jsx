import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

// --- Styled Components ---
const FormContainer = styled.div`
  max-width: 700px;
  margin: 100px auto;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

const FormTitle = styled.h2`
  font-size: 28px;
  color:#0d286d;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
`;

const FormDescription = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const SectionHeader = styled.h3`
  font-size: 22px;
  color: #444;
  margin-top: 35px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ff9900; /* Orange line */
  padding-bottom: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
  font-size: 15px;
`;

const Input = styled.input`
  width: calc(100% - 20px); /* Adjust for padding */
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    border-color: #ff9900;
    outline: none;
    box-shadow: 0 0 5px rgba(255, 153, 0, 0.3);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #fff;
  appearance: none; /* Remove default arrow */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  &:focus {
    border-color: #ff9900;
    outline: none;
    box-shadow: 0 0 5px rgba(255, 153, 0, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: calc(100% - 20px); /* Adjust for padding */
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical; /* Allow vertical resizing */
  &:focus {
    border-color: #ff9900;
    outline: none;
    box-shadow: 0 0 5px rgba(255, 153, 0, 0.3);
  }
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px 0;
  border-bottom: 1px dashed #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const CounterLabel = styled.span`
  font-size: 16px;
  color: #333;
`;

const CounterControls = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled.button`
  background-color: #ff9900;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #e68a00;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const CounterValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 0 15px;
  min-width: 20px;
  text-align: center;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #28a745; /* Green for submit */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #218838;
  }
`;

// --- Country List Data ---
const countries = [
  "Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda",
  "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belau", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Saint Eustatius and Saba", "Bosnia and Herzegovina",
  "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island",
  "Cocos (Keeling) Islands", "Colombia", "Comoros", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic",
  "Democratic Republic of the Congo (Kinshasa)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana",
  "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland",
  "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands",
  "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Ivory Coast",
  "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao S.A.R., China", "Macedonia", "Madagascar", "Malawi",
  "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
  "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "Northern Mariana Islands", "Norway",
  "Oman", "Pakistan", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal",
  "Puerto Rico", "Qatar", "Republic of the Congo (Brazzaville)", "Reunion", "Romania", "Russia", "Rwanda", "Saint Barthélemy", "Saint Helena",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (Dutch part)", "Saint Martin (French part)", "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia/Sandwich Islands",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom (UK)", "United States (US)",
  "United States (US) Minor Outlying Islands", "United States (US) Virgin Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican", "Venezuela",
  "Vietnam", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
];

// --- React Component ---
const CustomizedTourForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    choiceOfCountry: '',
    numAdults: 0,
    numChildren: 0,
    numInfants: 0,
    departureLocation: '',
    departureDate: '',
    returnDate: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCounterChange = (name, delta) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: Math.max(0, prevData[name] + delta), // Ensure value doesn't go below 0
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Submitted:', formData);
  //   // Here you would typically send the formData to a backend server
  //   alert('Form submitted! Check console for data.');
  // };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Submitting Request...',
      text: 'Please wait while we send your customized tour request.',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    try {
      const response = await fetch('https://harvannatravelsandtour.com/api/customized_tour_endpoint.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Request Sent!',
          text: result.message,
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          choiceOfCountry: '',
          numAdults: 0,
          numChildren: 0,
          numInfants: 0,
          departureLocation: '',
          departureDate: '',
          returnDate: '',
          additionalInfo: '',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: result.error,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Unable to send your request. Please try again later.',
      });
    }
  };

  return (
    <FormContainer>
      <FormTitle>Are you interested in a customized tour package?</FormTitle>
      <FormDescription>
        Fill the form below to help us plan your customized package.
      </FormDescription>

      <form onSubmit={handleSubmit}>
        <SectionHeader>Contact Information</SectionHeader>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone/Mobile</Label>
          <Input
            type="tel" // Use type="tel" for phone numbers
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SectionHeader>Choice of Country(ies)</SectionHeader>
        <FormGroup>
          <Label htmlFor="choiceOfCountry">Select Country</Label>
          <Select
            id="choiceOfCountry"
            name="choiceOfCountry"
            value={formData.choiceOfCountry}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Select>
        </FormGroup>

        <SectionHeader>Travel Details</SectionHeader>
        <FormGroup>
          <Label>Number of Adult (12 years and above)</Label>
          <CounterContainer>
            <CounterControls>
              <CounterButton
                type="button"
                onClick={() => handleCounterChange('numAdults', -1)}
                disabled={formData.numAdults === 0}
              >
                -
              </CounterButton>
              <CounterValue>{formData.numAdults}</CounterValue>
              <CounterButton
                type="button"
                onClick={() => handleCounterChange('numAdults', 1)}
              >
                +
              </CounterButton>
            </CounterControls>
          </CounterContainer>
        </FormGroup>

        <FormGroup>
          <Label>Number of Children (2-12 years)</Label>
          <CounterContainer>
            <CounterControls>
              <CounterButton
                type="button"
                onClick={() => handleCounterChange('numChildren', -1)}
                disabled={formData.numChildren === 0}
              >
                -
              </CounterButton>
              <CounterValue>{formData.numChildren}</CounterValue>
              <CounterButton
                type="button"
                onClick={() => handleCounterChange('numChildren', 1)}
              >
                +
              </CounterButton>
            </CounterControls>
          </CounterContainer>
        </FormGroup>

        <FormGroup>
          <Label>Number of Infant (0-2 years)</Label>
          <CounterContainer>
            <CounterControls>
              <CounterButton
                type="button"
                onClick={() => handleCounterChange('numInfants', -1)}
                disabled={formData.numInfants === 0}
              >
                -
              </CounterButton>
              <CounterValue>{formData.numInfants}</CounterValue>
              <CounterButton
                type="button"
                onClick={() => handleCounterChange('numInfants', 1)}
              >
                +
              </CounterButton>
            </CounterControls>
          </CounterContainer>
        </FormGroup>

        <SectionHeader>Passenger Details</SectionHeader>
        <FormGroup>
          <Label htmlFor="departureLocation">Departure Location (Abuja or Lagos)</Label>
          <Select
            id="departureLocation"
            name="departureLocation"
            value={formData.departureLocation}
            onChange={handleChange}
            required
          >
            <option value="">- Select -</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="departureDate">Departure Date</Label>
          <Input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="returnDate">Return Date</Label>
          <Input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="additionalInfo">Any Additional Information</Label>
          <TextArea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows="5"
          />
        </FormGroup>

        <SubmitButton type="submit">Submit Request</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CustomizedTourForm;