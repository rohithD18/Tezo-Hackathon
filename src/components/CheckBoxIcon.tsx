import React, { useState } from "react";
import "../styles/CheckBoxIcon.css";

interface IProps {
  setSelectedId: (id: number) => void;
  index: number;
  selectedId: number;
}

const CheckBoxIcon: React.FC<IProps> = ({
  setSelectedId,
  index,
  selectedId,
}: IProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChecked = () => {
    setIsChecked(!isChecked);
    setSelectedId(index);
  };
  return (
    <div className="checkBoxOuter" onClick={handleChecked}>
      <div className={index === selectedId ? "checkBoxMiddle" : "checkBoxIcon"}>
        <div className={index === selectedId ? "checkBoxInner" : ""}></div>
      </div>
    </div>
  );
};

export default CheckBoxIcon;
