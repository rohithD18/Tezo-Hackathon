import React, { useState } from "react";
import "../styles/InputSearch.css";
interface IProps {
  setQueary: (message: string) => void;
}

const InputSearch: React.FC<IProps> = (props: IProps) => {
  const { setQueary } = props;
  const [searchQueary, setSearchQueary] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueary(e.target.value);
  };

  const saveUser = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setQueary(searchQueary);
      setSearchQueary("");
    }
  };

  return (
    <div className="inputWithSearchIcon">
      <input
        type="text"
        value={searchQueary}
        placeholder="Search by names"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => saveUser(e)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    </div>
  );
};

export default InputSearch;
