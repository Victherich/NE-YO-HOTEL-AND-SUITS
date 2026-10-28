
import React, { useState } from 'react';
import styled from 'styled-components';

// --- Styled Components ---
const FormContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 100px 40px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  font-family: 'Inter', sans-serif; /* Using Inter font */
  color: #333;

  @media (max-width: 768px) {
    margin: 100px auto;
    padding: 20px;
  }
`;

const FormTitle = styled.h2`
  font-size: 32px;
  color: #0d286d; /* Dark blue from previous header */
  text-align: center;
  margin-bottom: 15px;
  font-weight: 700;
`;

const FormSubtitle = styled.p`
  font-size: 17px;
  color: #555;
  text-align: center;
  margin-bottom: 35px;
  line-height: 1.6;
`;

const SectionHeader = styled.h3`
  font-size: 24px;
  color: #0d286d;
  margin-top: 40px;
  margin-bottom: 25px;
  border-bottom: 3px solid #ff9900; /* Orange line */
  padding-bottom: 10px;
  font-weight: 600;

  &:first-of-type {
    margin-top: 0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box; /* Include padding in width */
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #ff9900;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fff;
  box-sizing: border-box;
  appearance: none; /* Remove default arrow */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 15px center;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #ff9900;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  min-height: 120px;
  resize: vertical; /* Allow vertical resizing */
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #ff9900;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.2);
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: wrap; /* Allow wrapping on small screens */
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #555;
  cursor: pointer;

  input[type="radio"] {
    margin-right: 8px;
    accent-color: #ff9900; /* Style radio button */
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px 25px;
  background-color: #28a745; /* Green for submit */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 40px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

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
const VisaApplicationForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    middleName: '',
    dob: '',
    gender: '',
    nationality: '', // This will be the dropdown for countries of the world
    passportNumber: '',
    passportIssueDate: '',
    passportExpiryDate: '',
    placeOfBirth: '',
    currentAddress: '',
    city: '',
    stateProvince: '',
    zipCode: '',
    countryOfResidence: '',
    phoneNumber: '',
    emailAddress: '',
    maritalStatus: '',

    // Travel Information
    destinationCountry: '', // Placeholder country name in title
    purposeOfVisit: '',
    intendedArrivalDate: '',
    intendedDepartureDate: '',
    durationOfStay: '',
    accommodationAddress: '',

    // Employment Information
    employmentStatus: '',
    occupation: '',
    employerName: '',
    employerAddress: '',
    employerPhone: '',
    monthlyIncome: '',

    // Financial Information
    fundsAvailable: '',
    sourceOfFunds: '',

    // Family Information
    fatherFullName: '',
    motherFullName: '',
    spouseFullName: '',

    // Previous Travel History
    everRefusedVisa: '',
    refusalDetails: '',
    everOverstayed: '',
    overstayDetails: '',
    visitedOtherCountries: '',
    otherCountriesDetails: '',

    // Security Questions
    criminalRecord: '',
    criminalRecordDetails: '',
    seriousIllness: '',
    seriousIllnessDetails: '',

    // Declaration
    declarationConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Visa Application Form Submitted:', formData);
    // In a real application, you would send this data to a backend server
    alert('Visa application submitted successfully! Check console for data.');
    // You might want to clear the form here or show a success message
  };

  return (
    <FormContainer>
      <FormTitle>Visa Application Form</FormTitle>
      <FormSubtitle>
        Please fill out this form accurately and completely to apply for your visa.
        All fields marked with an asterisk (*) are required.
      </FormSubtitle>

      <form onSubmit={handleSubmit}>
        {/* Section 1: Personal Information */}
        <SectionHeader>Personal Information</SectionHeader>
        <FormGroup>
          <Label htmlFor="firstName">First Name *</Label>
          <Input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="middleName">Middle Name(s)</Label>
          <Input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dob">Date of Birth *</Label>
          <Input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Gender *</Label>
          <RadioGroup>
            <RadioLabel>
              <Input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male
            </RadioLabel>
            <RadioLabel>
              <Input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
            </RadioLabel>
            <RadioLabel>
              <Input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} /> Other
            </RadioLabel>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="nationality">Nationality *</Label>
          <Select id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required>
            <option value="">Select your Nationality</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="placeOfBirth">Place of Birth *</Label>
          <Input type="text" id="placeOfBirth" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} required />
        </FormGroup>

        {/* Section 2: Passport Information */}
        <SectionHeader>Passport Information</SectionHeader>
        <FormGroup>
          <Label htmlFor="passportNumber">Passport Number *</Label>
          <Input type="text" id="passportNumber" name="passportNumber" value={formData.passportNumber} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passportIssueDate">Passport Issue Date *</Label>
          <Input type="date" id="passportIssueDate" name="passportIssueDate" value={formData.passportIssueDate} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passportExpiryDate">Passport Expiry Date *</Label>
          <Input type="date" id="passportExpiryDate" name="passportExpiryDate" value={formData.passportExpiryDate} onChange={handleChange} required />
        </FormGroup>

        {/* Section 3: Contact Information */}
        <SectionHeader>Contact Information</SectionHeader>
        <FormGroup>
          <Label htmlFor="currentAddress">Current Address *</Label>
          <Input type="text" id="currentAddress" name="currentAddress" value={formData.currentAddress} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="city">City *</Label>
          <Input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="stateProvince">State/Province</Label>
          <Input type="text" id="stateProvince" name="stateProvince" value={formData.stateProvince} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="zipCode">Postal/Zip Code</Label>
          <Input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="countryOfResidence">Country of Residence *</Label>
          <Select id="countryOfResidence" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleChange} required>
            <option value="">Select Country of Residence</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phoneNumber">Phone Number *</Label>
          <Input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="emailAddress">Email Address *</Label>
          <Input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="maritalStatus">Marital Status *</Label>
          <Select id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
            <option value="">Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
            <option value="Separated">Separated</option>
          </Select>
        </FormGroup>

        {/* Section 4: Travel Information */}
        <SectionHeader>Travel Information</SectionHeader>
  

 <FormGroup>
          <Label htmlFor="destinationCountry">Destination Country *</Label>
          <Select id="destinationCountry" name="destinationCountry" value={formData.countryOfResidence} onChange={handleChange} required>
            <option value="">Select Destination Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </Select>
        </FormGroup>



        <FormGroup>
          <Label htmlFor="purposeOfVisit">Purpose of Visit *</Label>
          <Select id="purposeOfVisit" name="purposeOfVisit" value={formData.purposeOfVisit} onChange={handleChange} required>
            <option value="">Select Purpose</option>
            <option value="Tourism">Tourism</option>
            <option value="Business">Business</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Family Visit">Family Visit</option>
            <option value="Medical Treatment">Medical Treatment</option>
            <option value="Transit">Transit</option>
            <option value="Other">Other</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="intendedArrivalDate">Intended Date of Arrival *</Label>
          <Input type="date" id="intendedArrivalDate" name="intendedArrivalDate" value={formData.intendedArrivalDate} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="intendedDepartureDate">Intended Date of Departure *</Label>
          <Input type="date" id="intendedDepartureDate" name="intendedDepartureDate" value={formData.intendedDepartureDate} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="durationOfStay">Intended Duration of Stay (e.g., 30 days, 2 months) *</Label>
          <Input type="text" id="durationOfStay" name="durationOfStay" value={formData.durationOfStay} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="accommodationAddress">Address of Accommodation in Destination Country *</Label>
          <TextArea id="accommodationAddress" name="accommodationAddress" value={formData.accommodationAddress} onChange={handleChange} required />
        </FormGroup>

        {/* Section 5: Employment & Financial Information */}
        <SectionHeader>Employment & Financial Information</SectionHeader>
        <FormGroup>
          <Label htmlFor="employmentStatus">Employment Status *</Label>
          <Select id="employmentStatus" name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} required>
            <option value="">Select Status</option>
            <option value="Employed">Employed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Student">Student</option>
            <option value="Retired">Retired</option>
            <option value="Unemployed">Unemployed</option>
          </Select>
        </FormGroup>
        {formData.employmentStatus === 'Employed' || formData.employmentStatus === 'Self-Employed' ? (
          <>
            <FormGroup>
              <Label htmlFor="occupation">Occupation *</Label>
              <Input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="employerName">Employer/Company Name *</Label>
              <Input type="text" id="employerName" name="employerName" value={formData.employerName} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="employerAddress">Employer/Company Address *</Label>
              <Input type="text" id="employerAddress" name="employerAddress" value={formData.employerAddress} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="employerPhone">Employer/Company Phone Number</Label>
              <Input type="tel" id="employerPhone" name="employerPhone" value={formData.employerPhone} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="monthlyIncome">Monthly Income (approx. in USD) *</Label>
              <Input type="number" id="monthlyIncome" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required />
            </FormGroup>
          </>
        ) : null}

        <FormGroup>
          <Label htmlFor="fundsAvailable">Funds available for your trip (approx. in USD) *</Label>
          <Input type="number" id="fundsAvailable" name="fundsAvailable" value={formData.fundsAvailable} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="sourceOfFunds">Source of Funds *</Label>
          <Input type="text" id="sourceOfFunds" name="sourceOfFunds" value={formData.sourceOfFunds} onChange={handleChange} required />
        </FormGroup>

        {/* Section 6: Family Information */}
        <SectionHeader>Family Information</SectionHeader>
        <FormGroup>
          <Label htmlFor="fatherFullName">Father's Full Name</Label>
          <Input type="text" id="fatherFullName" name="fatherFullName" value={formData.fatherFullName} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="motherFullName">Mother's Full Name</Label>
          <Input type="text" id="motherFullName" name="motherFullName" value={formData.motherFullName} onChange={handleChange} />
        </FormGroup>
        {formData.maritalStatus === 'Married' && (
          <FormGroup>
            <Label htmlFor="spouseFullName">Spouse's Full Name *</Label>
            <Input type="text" id="spouseFullName" name="spouseFullName" value={formData.spouseFullName} onChange={handleChange} required />
          </FormGroup>
        )}

        {/* Section 7: Previous Travel History */}
        <SectionHeader>Previous Travel History</SectionHeader>
        <FormGroup>
          <Label>Have you ever been refused a visa for any country? *</Label>
          <RadioGroup>
            <RadioLabel>
              <Input type="radio" name="everRefusedVisa" value="Yes" checked={formData.everRefusedVisa === 'Yes'} onChange={handleChange} required /> Yes
            </RadioLabel>
            <RadioLabel>
              <Input type="radio" name="everRefusedVisa" value="No" checked={formData.everRefusedVisa === 'No'} onChange={handleChange} /> No
            </RadioLabel>
          </RadioGroup>
          {formData.everRefusedVisa === 'Yes' && (
            <FormGroup style={{ marginTop: '15px' }}>
              <Label htmlFor="refusalDetails">If Yes, please provide details:</Label>
              <TextArea id="refusalDetails" name="refusalDetails" value={formData.refusalDetails} onChange={handleChange} />
            </FormGroup>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Have you ever overstayed a visa in any country? *</Label>
          <RadioGroup>
            <RadioLabel>
              <Input type="radio" name="everOverstayed" value="Yes" checked={formData.everOverstayed === 'Yes'} onChange={handleChange} required /> Yes
            </RadioLabel>
            <RadioLabel>
              <Input type="radio" name="everOverstayed" value="No" checked={formData.everOverstayed === 'No'} onChange={handleChange} /> No
            </RadioLabel>
          </RadioGroup>
          {formData.everOverstayed === 'Yes' && (
            <FormGroup style={{ marginTop: '15px' }}>
              <Label htmlFor="overstayDetails">If Yes, please provide details:</Label>
              <TextArea id="overstayDetails" name="overstayDetails" value={formData.overstayDetails} onChange={handleChange} />
            </FormGroup>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Have you visited any other countries in the last 10 years? *</Label>
          <RadioGroup>
            <RadioLabel>
              <Input type="radio" name="visitedOtherCountries" value="Yes" checked={formData.visitedOtherCountries === 'Yes'} onChange={handleChange} required /> Yes
            </RadioLabel>
            <RadioLabel>
              <Input type="radio" name="visitedOtherCountries" value="No" checked={formData.visitedOtherCountries === 'No'} onChange={handleChange} /> No
            </RadioLabel>
          </RadioGroup>
          {formData.visitedOtherCountries === 'Yes' && (
            <FormGroup style={{ marginTop: '15px' }}>
              <Label htmlFor="otherCountriesDetails">If Yes, please list countries and dates:</Label>
              <TextArea id="otherCountriesDetails" name="otherCountriesDetails" value={formData.otherCountriesDetails} onChange={handleChange} />
            </FormGroup>
          )}
        </FormGroup>

        {/* Section 8: Security Questions */}
        <SectionHeader>Security Questions</SectionHeader>
        <FormGroup>
          <Label>Do you have any criminal record? *</Label>
          <RadioGroup>
            <RadioLabel>
              <Input type="radio" name="criminalRecord" value="Yes" checked={formData.criminalRecord === 'Yes'} onChange={handleChange} required /> Yes
            </RadioLabel>
            <RadioLabel>
              <Input type="radio" name="criminalRecord" value="No" checked={formData.criminalRecord === 'No'} onChange={handleChange} /> No
            </RadioLabel>
          </RadioGroup>
          {formData.criminalRecord === 'Yes' && (
            <FormGroup style={{ marginTop: '15px' }}>
              <Label htmlFor="criminalRecordDetails">If Yes, please provide details:</Label>
              <TextArea id="criminalRecordDetails" name="criminalRecordDetails" value={formData.criminalRecordDetails} onChange={handleChange} />
            </FormGroup>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Do you have any serious communicable diseases or mental disorders? *</Label>
          <RadioGroup>
            <RadioLabel>
              <Input type="radio" name="seriousIllness" value="Yes" checked={formData.seriousIllness === 'Yes'} onChange={handleChange} required /> Yes
            </RadioLabel>
            <RadioLabel>
              <Input type="radio" name="seriousIllness" value="No" checked={formData.seriousIllness === 'No'} onChange={handleChange} /> No
            </RadioLabel>
          </RadioGroup>
          {formData.seriousIllness === 'Yes' && (
            <FormGroup style={{ marginTop: '15px' }}>
              <Label htmlFor="seriousIllnessDetails">If Yes, please provide details:</Label>
              <TextArea id="seriousIllnessDetails" name="seriousIllnessDetails" value={formData.seriousIllnessDetails} onChange={handleChange} />
            </FormGroup>
          )}
        </FormGroup>

        {/* Section 9: Declaration */}
        <SectionHeader>Declaration</SectionHeader>
        <FormGroup>
          <RadioLabel>
            <Input
              type="checkbox"
              name="declarationConsent"
              checked={formData.declarationConsent}
              onChange={handleChange}
              required
            />
            I certify that the information provided in this application is true and correct to the best of my knowledge.
          </RadioLabel>
        </FormGroup>

        <SubmitButton type="submit">Submit Application</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default VisaApplicationForm;