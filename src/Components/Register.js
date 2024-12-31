import React, { useState } from "react";

function Register() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { value: "Member 3", label: "3 Months Package" },
    { value: "Member 6", label: "6 Months Package" },
    { value: "Member 12", label: "12 Months Package" },
    { value: "Member 18", label: "18 Months Package" },
    { value: "Member 24", label: "24 Months Package" },
    { value: "Employee Package", label: "Employees Package" },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div id="register">
      <h1>Registration</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Type Your E-mail" required />

        {/* Custom Dropdown */}
        <div className="custom-dropdown">
          <div
            className="dropdown-header"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedOption ? selectedOption.label : "Choose Your Favorite Package!"}
          </div>
          {isDropdownOpen && (
            <div className="dropdown-list">
              {options.map((option) => (
                <div
                  key={option.value}
                  className="dropdown-item"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <input type="hidden" name="package" value={selectedOption.value} required />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Register;
