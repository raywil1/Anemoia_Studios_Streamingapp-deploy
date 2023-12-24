import React, { useState } from "react";
import "./Form.css";

function CreateAccount() {
  const genders = [
    "Woman",
    "Man",
    "Transgender",
    "Non-binary",
    "Other",
    "Prefer not to respond",
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="form">
      <h3>Create A New Account</h3>
      <div className="container">
        <h3>First Name</h3>
        <input type="text" placeholder="first name" name="first_name" />
      </div>
      <div className="container">
        <h3>Last Name</h3>
        <input type="text" placeholder="last name" name="last_name" />
      </div>
      <div className="container">
        <h3>Age</h3>
        <input type="number" placeholder="age" name="age" min="0" max="150" />
      </div>
      <div className="container">
        <h3>Gender</h3>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          name="gender"
        >
          <option value="">...</option>
          {genders.map((gender, index) => (
            <option key={index} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        <h3>Email</h3>
        <input type="text" placeholder="email" name="email" />
      </div>
      <div className="container">
        <h3>Password</h3>
        <input type="password" placeholder="password" name="password" />
      </div>
      <div className="container">
        <h3>Comfirm Password</h3>
        <input
          type="password"
          placeholder="comfirm password"
          name="c_password"
        />
      </div>
      <button type="submit">Create New Account</button>
    </div>
  );
}

export default CreateAccount;
