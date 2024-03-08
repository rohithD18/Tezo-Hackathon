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
  // console.log("actual", index, selectedId, !isChecked);
  // const { setIsSelectedId, index } = props;
  const handleChecked = () => {
    // props.setIsSelected(!props.isSelected);
    setIsChecked(!isChecked);
    setSelectedId(index);
    // setIsSelectedId(index);
    // console.log("index", index, selectedId, !isChecked);
    // isClicked(!isChecked);
    //  (!isChecked);
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
