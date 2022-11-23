import React from "react";
import styled from "styled-components";


const StyledInput = styled.input`
border: none;
border-bottom: 2px solid #2E2C2C;
padding: 2px 4px 2px;
outline: none;
margin-bottom: 0.5em;
width: 100%;
background-color: transparent; 

&::placeholder{
 opacity: 0.5;
}

&:is(:valid,:focus) & {
  margin-bottom: 1em; 
}

`

const FormInput = (props) => {
  const { label, id, onChange, ...Inputprops } = props;

  return (
    <div style={{padding: '4% 0'}}>
      <label style={{marginTop: "8px", fontFamily:'Arial', fontWeight: '500', color: "#2E2C2C"}}>{label}</label><br/>
      <StyledInput  {...Inputprops} onChange={onChange} />
    </div>
  );
};

export default FormInput;
