import React, { useState } from "react";


const initialFormData = {
  emailId: "",
  password: "",
  firstName: "",
  lastName: "",
  address: "",
  countryCode: "",
  phoneNumber: "",
  acceptTermsAndCondition: false,
};

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { emailId, password } = formData;
    const newErrors = {};

    // Validate emailId
    if (!emailId) {
      newErrors.emailId = "Email is required";
    } else if (!isValidEmail(emailId)) {
      newErrors.emailId = "Invalid email";
    }

    // Validate password
    if (!password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(password)) {
      newErrors.password =
        "Password must contain 2 capital letters, 2 small letters, 2 numbers, and 2 special characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Email validation logic
    return true;
  };

  const isValidPassword = (password) => {
    // Password validation logic
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 1: Account Details</h2>
      <div>
        <label>Email ID:</label>
        <input
          type="text"
          name="emailId"
          value={formData.emailId}
          onChange={handleChange}
        />
        {errors.emailId && <p>{errors.emailId}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button onClick={handleNext}>Save and Next</button>
    </div>
  );
};

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { firstName, lastName, address } = formData;
    const newErrors = {};

    // Validate firstName
    if (!firstName) {
      newErrors.firstName = "First name is required";
    } else if (!isValidName(firstName)) {
      newErrors.firstName = "Invalid first name";
    }

    // Validate lastName
    if (lastName && !isValidName(lastName)) {
      newErrors.lastName = "Invalid last name";
    }

    // Validate address
    if (!address || address.length < 10) {
      newErrors.address = "Address must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidName = (name) => {
    // Name validation logic
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  const handlePrev = () => {
    prevStep();
  };

  return (
    <div>
      <h2>Step 2: Personal Details</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p>{errors.address}</p>}
      </div>
      <button onClick={handlePrev}>Back</button>
      <button onClick={handleNext}>Save and Next</button>
    </div>
  );
};

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { countryCode, phoneNumber, acceptTermsAndCondition } = formData;
    const newErrors = {};

    // Validate countryCode
    if (!countryCode) {
      newErrors.countryCode = "Country code is required";
    }

    // Validate phoneNumber
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    // Validate acceptTermsAndCondition
    if (!acceptTermsAndCondition) {
      newErrors.acceptTermsAndCondition = "Please accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Phone number validation logic
    return true;
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  const handlePrev = () => {
    prevStep();
  };

  return (
    <div>
      <h2>Step 3: Contact Details</h2>
      <div>
        <label>Country Code:</label>
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {errors.countryCode && <p>{errors.countryCode}</p>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="acceptTermsAndCondition"
            checked={formData.acceptTermsAndCondition}
            onChange={handleChange}
          />
          Accept Terms and Conditions
        </label>
        {errors.acceptTermsAndCondition && <p>{errors.acceptTermsAndCondition}</p>}
      </div>
      <button onClick={handlePrev}>Back</button>
      <button onClick={handleNext}>Save</button>
    </div>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Perform HTTP POST request with formData
    fetch("https://codebuddy.review/submit", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the API response
        // Redirect to /posts
        window.location.href = "http://localhost:3000/posts";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderForm()}
      {step === 3 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default MultiStepForm;
