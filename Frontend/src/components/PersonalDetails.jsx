import React, { useState } from "react";
import '../styles/PersonalDetails.css'; 

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    siblings: 0,
    siblingNames: [],
    longTermGoals: "",
    shortTermGoals: "",
    fiveYears: "",
    numberOfEarners: 0,
    salary: [],
  });

  const handleSiblingsChange = (e) => {
    const newSiblings = parseInt(e.target.value) || 0;
    setFormData({
      ...formData,
      siblings: newSiblings,
      siblingNames: Array(newSiblings).fill("").map((_, i) => formData.siblingNames[i] || ""),
    });
  };

  const handleSiblingNameChange = (index, e) => {
    const newSiblingNames = [...formData.siblingNames];
    newSiblingNames[index] = e.target.value;
    setFormData({ ...formData, siblingNames: newSiblingNames });
  };

  const handleEarnersChange = (e) => {
    const newEarners = parseInt(e.target.value) || 0;
    setFormData({
      ...formData,
      numberOfEarners: newEarners,
      salary: Array(newEarners).fill("").map((_, i) => formData.salary[i] || ""),
    });
  };

  const handleSalaryChange = (index, e) => {
    const newSalaries = [...formData.salary];
    newSalaries[index] = e.target.value;
    setFormData({ ...formData, salary: newSalaries });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, like saving data to the database
  };

  return (
    <form onSubmit={handleSubmit} className="personal-details-form">
      <h2>Personal Details</h2>

      <label>
        Number of Siblings:
        <input
          type="number"
          name="siblings"
          value={formData.siblings}
          onChange={handleSiblingsChange}
          required
        />
      </label>

      {formData.siblingNames.map((name, index) => (
        <label key={index}>
          Name of Sibling {index + 1}:
          <input
            type="text"
            value={name}
            onChange={(e) => handleSiblingNameChange(index, e)}
            required
          />
        </label>
      ))}

      <label>
        Long-Term Goals:
        <textarea
          name="longTermGoals"
          value={formData.longTermGoals}
          onChange={handleChange}
          placeholder="I wanna be..."
          required
        />
      </label>

      <label>
        Short-Term Goals:
        <textarea
          name="shortTermGoals"
          value={formData.shortTermGoals}
          onChange={handleChange}
          placeholder="I want to be..."
          required
        />
      </label>

      <label>
        Where Do You See Yourself in Five Years?
        <textarea
          name="fiveYears"
          value={formData.fiveYears}
          onChange={handleChange}
          placeholder="5 years from now, I-"
          required
        />
      </label>

      <label>
        Number of Earners in the Family:
        <input
          type="number"
          name="numberOfEarners"
          value={formData.numberOfEarners}
          onChange={handleEarnersChange}
          required
        />
      </label>

      {formData.salary.map((salary, index) => (
        <label key={index}>
          Salary of Earner {index + 1}:
          <input
            type="number"
            value={salary}
            onChange={(e) => handleSalaryChange(index, e)}
            required
          />
        </label>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonalDetails;
