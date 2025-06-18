import React, { useState } from "react";

const BusinessRegistry = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    abn: "",
    contactNo: "",
    companyEmail: "",
    firstName: "",
    lastName: "",
    mobileNo: "",
    personEmail: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      alert("Please accept the terms and conditions");
      return;
    }
    alert("Registration successful!");
    console.log(formData);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#0b0b0b", // black background
        padding: "30px",
        borderRadius: "8px",
        color: "white",
        boxShadow: "0 0 15px rgba(128, 0, 0, 0.7)",
      }}
    >
      <h2 style={{ color: "#8B0000", marginBottom: "25px", textAlign: "center" }}>
        Business Registry Sign-Up
      </h2>

      <form onSubmit={handleSubmit}>
        <fieldset
          style={{
            borderColor: "#8B0000",
            borderWidth: "2px",
            borderStyle: "solid",
            padding: "15px",
            marginBottom: "25px",
            borderRadius: "6px",
          }}
        >
          <legend
            style={{
              color: "#8B0000",
              fontWeight: "bold",
              padding: "0 10px",
              fontSize: "1.1rem",
            }}
          >
            Company Information
          </legend>

          <label style={{ display: "block", marginBottom: "15px" }}>
            Company/Business Name:
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="Your company name"
            />
          </label>

          <label style={{ display: "block", marginBottom: "15px" }}>
            ABN:
            <input
              type="text"
              name="abn"
              value={formData.abn}
              onChange={handleChange}
              maxLength={11}
              required
              style={inputStyle}
              placeholder="11 digit ABN"
            />
          </label>

          <label style={{ display: "block", marginBottom: "15px" }}>
            Contact Number:
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="+61 4XX XXX XXX"
            />
          </label>

          <label style={{ display: "block", marginBottom: "15px" }}>
            Company Email:
            <input
              type="email"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="company@example.com"
            />
          </label>
        </fieldset>

        <fieldset
          style={{
            borderColor: "#8B0000",
            borderWidth: "2px",
            borderStyle: "solid",
            padding: "15px",
            marginBottom: "25px",
            borderRadius: "6px",
          }}
        >
          <legend
            style={{
              color: "#8B0000",
              fontWeight: "bold",
              padding: "0 10px",
              fontSize: "1.1rem",
            }}
          >
            Contact Person Details
          </legend>

          <label style={{ display: "block", marginBottom: "15px" }}>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="First name"
            />
          </label>

          <label style={{ display: "block", marginBottom: "15px" }}>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="Last name"
            />
          </label>

          <label style={{ display: "block", marginBottom: "15px" }}>
            Mobile Number:
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="+61 4XX XXX XXX"
            />
          </label>

          <label style={{ display: "block", marginBottom: "15px" }}>
            Email:
            <input
              type="email"
              name="personEmail"
              value={formData.personEmail}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="person@example.com"
            />
          </label>
        </fieldset>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "25px",
            fontSize: "0.9rem",
            userSelect: "none",
          }}
        >
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
            required
            style={{
              marginRight: "10px",
              width: "18px",
              height: "18px",
              accentColor: "#8B0000",
              cursor: "pointer",
            }}
          />
          I accept the{" "}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#a94442", marginLeft: "4px", textDecoration: "underline" }}
          >
            terms and conditions
          </a>
          .
        </label>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#8B0000",
            color: "white",
            fontWeight: "600",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5a0000")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#8B0000")}
        >
          Register
        </button>
      </form>
    </div>
  );
};

// Reusable input styles for consistency
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "4px",
  border: "1.5px solid #8B0000",
  backgroundColor: "#2b0000",
  color: "white",
  fontSize: "1rem",
  outline: "none",
  boxSizing: "border-box",
};

export default BusinessRegistry;
// This component provides a business registry form with a dark theme and red accents.
// It includes fields for company and contact person details, with validation for required fields.  