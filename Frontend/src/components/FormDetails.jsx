import React, { useState } from "react";
import "../styles/FormDetails.css";

const FormDetails = () => {
  const [formData, setFormData] = useState({
    photo: null,
    branch: "",
    name: "",
    dob: "",
    yearOfAdmission: "",
    motherTongue: "",
    currentAddress: "",
    fathersName: "",
    fathersOccupation: "",
    fathersPhoneNumber: "",
    residentialLandline: "",
    mothersName: "",
    mothersOccupation: "",
    mothersPhoneNumber: "",
    mothersEmail: "",
    residenceOption: "", 
    relativeName: "", 
    relativeContact: "",
    guardianName: "",
    guardianContact: "",
    friendName: "",
    friendContact: "",
    hostelName: "",
    hostelContact: "",
  });

  const [showOtherFields, setShowOtherFields] = useState({
    hobbies: false,
    extracurricularActivities: false,
    dietaryRestrictions: false,
    preferredLanguage: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "hobbies" && value === "Other") {
      setShowOtherFields({ ...showOtherFields, hobbies: true });
    } else if (name === "hobbies") {
      setShowOtherFields({ ...showOtherFields, hobbies: false });
      setFormData({ ...formData, otherHobbies: "" });
    }

    if (name === "extracurricularActivities" && value === "Other") {
      setShowOtherFields({ ...showOtherFields, extracurricularActivities: true });
    } else if (name === "extracurricularActivities") {
      setShowOtherFields({ ...showOtherFields, extracurricularActivities: false });
      setFormData({ ...formData, otherActivities: "" });
    }

    if (name === "dietaryRestrictions" && value === "Other") {
      setShowOtherFields({ ...showOtherFields, dietaryRestrictions: true });
    } else if (name === "dietaryRestrictions") {
      setShowOtherFields({ ...showOtherFields, dietaryRestrictions: false });
      setFormData({ ...formData, otherDietaryRestrictions: "" });
    }

    if (name === "preferredLanguage" && value === "Other") {
      setShowOtherFields({ ...showOtherFields, preferredLanguage: true });
    } else if (name === "preferredLanguage") {
      setShowOtherFields({ ...showOtherFields, preferredLanguage: false });
      setFormData({ ...formData, otherPreferredLanguage: "" });
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit} className="form-details-form">
      <h2>Fill Your Form</h2>

      {/* Row 1: Photo upload and Branch selection */}
      <div className="form-row">
        <label>
          Upload Your Photo:
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </label>

        <label>
          Select Branch:
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="">Select your branch</option>
            <option value="ECS">ECS</option>
            <option value="EXTC">EXTC</option>
            <option value="IT">IT</option>
            <option value="CE">CE</option>
            <option value="AIDS">AIDS</option>
            <option value="AIML">AIML</option>
            <option value="MECH">MECH</option>
            <option value="IOT">IOT</option>
          </select>
        </label>
      </div>

      {/* Row 2: Full Name and Date of Birth */}
      <div className="form-row">
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      {/* Row 3: Year of Admission and Mother Tongue */}
      <div className="form-row">
      <label>
          Year of Admission:
          <input
            type="text"
            name="yearofadmission"
            value={formData.yearOfadmission}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mother Tongue:
          <input
            type="text"
            name="mothertongue"
            value={formData.mothertongue}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <label>
        Current Address:
        <textarea
          name="currentAddress"
          value={formData.currentAddress}
          onChange={handleChange}
          required
        />
      </label>

      {/* Row 4: Preferred Contact Method and Emergency Contact */}
      <div className="form-row">
    <label>
      Father's Name:
      <input
        type="text"
        name="fathersName"
        value={formData.fathersName}
        onChange={handleChange}
        required
      />
    </label>

    <label>
      Father's Occupation:
      <input
        type="text"
        name="fathersOccupation"
        value={formData.fathersOccupation}
        onChange={handleChange}
        required
      />
    </label>
  </div>

  {/* Row 5: Father's Phone Number and Residential Landline */}
  <div className="form-row">
    <label>
      Father's Phone Number:
      <input
        type="tel"
        name="fathersPhoneNumber"
        value={formData.fathersPhoneNumber}
        onChange={handleChange}
        required
      />
    </label>

    <label>
      Residential Landline:
      <input
        type="tel"
        name="residentialLandline"
        value={formData.residentialLandline}
        onChange={handleChange}
      />
    </label>
  </div>

  {/* Row 6: Mother's Details */}
  <div className="form-row">
    <label>
      Mother's Name:
      <input
        type="text"
        name="mothersName"
        value={formData.mothersName}
        onChange={handleChange}
        required
      />
    </label>

    <label>
      Mother's Occupation:
      <input
        type="text"
        name="mothersOccupation"
        value={formData.mothersOccupation}
        onChange={handleChange}
        required
      />
    </label>
  </div>

  {/* Row 7: Mother's Phone Number and Email */}
  <div className="form-row">
    <label>
      Mother's Phone Number:
      <input
        type="tel"
        name="mothersPhoneNumber"
        value={formData.mothersPhoneNumber}
        onChange={handleChange}
        required
      />
    </label>

    <label>
      Mother's Email:
      <input
        type="email"
        name="mothersEmail"
        value={formData.mothersEmail}
        onChange={handleChange}
        required
      />
    </label>
  </div>

  {/* Question asking if not residing with parents */}
<div className="form-row">
  <label>
    If not residing currently with your parents, provide the following details (Tick appropriate option):
  </label>
</div>

{/* Options for Relative, Guardian, Friend, Hostel */}
<div className="form-row">
  <label>
    <input
      type="radio"
      name="residenceOption"
      value="relative"
      checked={formData.residenceOption === "relative"}
      onChange={handleChange}
    />
    Relative
  </label>

  <label>
    <input
      type="radio"
      name="residenceOption"
      value="guardian"
      checked={formData.residenceOption === "guardian"}
      onChange={handleChange}
    />
    Guardian
  </label>

  <label>
    <input
      type="radio"
      name="residenceOption"
      value="friend"
      checked={formData.residenceOption === "friend"}
      onChange={handleChange}
    />
    Friend
  </label>

  <label>
    <input
      type="radio"
      name="residenceOption"
      value="hostel"
      checked={formData.residenceOption === "hostel"}
      onChange={handleChange}
    />
    Hostel
  </label>
</div>

{/* Additional questions for Name and Contact Details */}
{formData.residenceOption && (
  <div className="form-row">
    <label>
      {`${formData.residenceOption.charAt(0).toUpperCase() + formData.residenceOption.slice(1)}'s Name:`}
      <input
        type="text"
        name={`${formData.residenceOption}Name`}
        value={formData[`${formData.residenceOption}Name`] || ''}
        onChange={handleChange}
      />
    </label>

    <label>
      {`${formData.residenceOption.charAt(0).toUpperCase() + formData.residenceOption.slice(1)}'s Contact Number:`}
      <input
        type="tel"
        name={`${formData.residenceOption}Contact`}
        value={formData[`${formData.residenceOption}Contact`] || ''}
        onChange={handleChange}
      />
    </label>
  </div>
)}


  

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormDetails;
