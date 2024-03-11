import React, { useState, useEffect, useContext } from "react";
import "./index.scss";
import { UserUpdateContext } from "../../App";

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
  const [positions, setPositions] = useState([]);
  const [token, setToken] = useState(null);
  const [serverError, setServerError] = useState(null);

  const { userUpdated, setUserUpdated } = useContext(UserUpdateContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let errorMessage = "";

    if (name === "phone") {
      const phonePattern = /^\+?380([0-9]{9})$/;
      if (!phonePattern.test(value)) {
        errorMessage =
          "Phone number must start with +380 and contain 9 digits.";
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setServerError(errorMessage);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  };

  useEffect(() => {
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

    validateForm();
  }, [formData]);

  useEffect(() => {
    fetchPositions();
    fetchToken();
  }, []);

  const fetchToken = () => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
      })
      .catch((error) => {
        console.log("Error fetching token: ", error);
      });
  };

  const fetchPositions = () => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((response) => response.json())
      .then((data) => {
        setPositions(data.positions);
      })
      .catch((error) => {
        console.log("Error fetching positions: ", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServerError(null);

    if (token) {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("position_id", formData.position);
      formDataToSend.append("photo", selectedFile);

      fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Token: token,
        },
      })
        .then((response) => {
          console.log("Response status:", response.status);
          return response.json();
        })
        .then((data) => {
          console.log("Response data:", data);
          if (data.success) {
            setFormData({
              name: "",
              email: "",
              phone: "",
              position: "",
              file: null,
            });
            setSelectedFile(null);
            setFormValid(false);
            setUserUpdated(!userUpdated);
          } else {
            setServerError(data.message);
          }
        })
        .catch((error) => {
          console.log("Network error:", error);
          setServerError("Network error occurred. Please try again later.");
        });
    } else {
      console.log("Token not available yet.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {serverError && <div className="server-error">{serverError}</div>}

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

          {positions.map((pos, index) => (
            <div key={index} className="radio-group">
              <input
                id={pos.id}
                type="radio"
                name="position"
                value={pos.id}
                onChange={handleInputChange}
              />
              <label htmlFor={pos.id}>{pos.name}</label>
            </div>
          ))}
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
            type="submit"
            className={formValid ? "button" : "disabled-button"}
            disabled={!formValid}
          >
            Show more
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
