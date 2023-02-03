import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
border: none;
border-bottom: 2px solid #2E2C2C;
padding: 2px 4px 2px;
outline: none;
margin: 0 auto 0.5em;
width: 100%;
background-color: transparent; 

&::placeholder{
 opacity: 0.5;
}

& ~ span{
  display: none;
  font-size: 12px;
  color: rgba(254, 7, 7, 0.8);
  padding: 3px 0;
  }

&:invalid ~  span{
display: block;
}

`;

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, id, onChange, errowMessage, ...Inputprops } = props;
  

  const handleFocus = () => {
    setFocused(true); 
  }

  console.log(focused)
  return (
    <div style={{ padding: "4% 0" }}>
      <label
        style={{
          marginTop: "8px",
          fontFamily: "Arial",
          fontWeight: "600",
          color: "#2E2C2C",
        }}
      >
        {label}
      </label>
      <br />
      <div style={{ margin: "0 auto" }}>
        <StyledInput {...Inputprops} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
        {focused && <span>{errowMessage}</span>}
      </div>
    </div>
  );
};

export default FormInput;
