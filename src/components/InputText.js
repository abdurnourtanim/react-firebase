import React from "react";

const InputText = ({ styled, ...rest }) => {
  return (
    <div className={styled}>
      <input {...rest} className="form-control" />
    </div>
  );
};

export default InputText;
