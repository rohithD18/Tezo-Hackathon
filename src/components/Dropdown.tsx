import React, { useState } from "react";

const Dropdown = () => {
  const [department, setDepartment] = useState<string>("");
  const depArray = [
    "Digital Transoformation",
    "Product Engineering",
    "Data Analytics",
    "Digital Marketing",
    "Sales",
  ];
  const handleDepartment = (dep: string) => {
    setDepartment(dep);
  };

  return (
    <div className="dropdownComp">
      <button
        className="dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "rgb(39 49 68)",
          border: "1px solid rgb(61, 90, 128)",
          color: "white",
          fontSize: "small",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
      >
        {department ? department : "Department"}
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {depArray.map((item) => {
          return (
            <li
              key={item}
              onClick={() => handleDepartment(item)}
              className="dropdown-item"
              style={{ fontSize: "small", cursor: "pointer" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
