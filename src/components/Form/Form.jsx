import React, { useState, useEffect } from "react";
import "./index.scss";

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    file: null,
  });
  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const { name, email, phone, position, file } = formData;
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      position !== "" &&
      file
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Your name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        placeholder="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        placeholder="Phone"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <div className="position-select">
        <label className="radio-title">Select your position</label>

        <div className="radio-group">
          <input
            id="frontend"
            type="radio"
            name="position"
            value="frontend"
            onChange={handleInputChange}
          />
          <label htmlFor="frontend">Frontend developer</label>
        </div>
        <div className="radio-group">
          <input
            id="backend"
            type="radio"
            name="position"
            value="backend"
            onChange={handleInputChange}
          />
          <label htmlFor="backend">Backend developer</label>
        </div>
        <div className="radio-group">
          <input
            id="designer"
            type="radio"
            name="position"
            value="designer"
            onChange={handleInputChange}
          />
          <label htmlFor="designer">Designer</label>
        </div>
        <div className="radio-group">
          <input
            id="qa"
            type="radio"
            name="position"
            value="qa"
            onChange={handleInputChange}
          />
          <label htmlFor="qa">QA</label>
        </div>
      </div>
      <div>
        <label htmlFor="file-upload" className="custom-file-upload">
          Upload
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <input
          type="text"
          readOnly
          value={selectedFile ? selectedFile.name : ""}
          placeholder="Upload your photo"
          className="input-file"
        />
      </div>
      <div className="button-section">
        <button
          className={formValid ? "button" : "disabled-button"}
          disabled={!formValid}
        >
          Show more
        </button>
      </div>
    </form>
  );
};

export default Form;
