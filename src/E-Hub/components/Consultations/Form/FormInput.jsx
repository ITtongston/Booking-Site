import React from "react";
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

&:invalid ~ span{
display: block;
}

&:is(:valid,:focus) & {
  margin-bottom: 1em; 
}

`


const FormInput = (props) => {
  const { label, id, onChange, errowMessage, ...Inputprops } = props;

  return (
    <div style={{padding: '4% 0'}}>
      <label style={{marginTop: "8px", fontFamily:'Arial', fontWeight: '600', color: "#2E2C2C"}}>{label}</label><br/>
      <div style={{margin: '0 auto'}}><StyledInput  {...Inputprops} onChange={onChange} />
      <span style={{fontSize: '12px', color: 'red', display: 'none'}}>{errowMessage}</span></div>
      
    </div>
  );
};

export default FormInput;
