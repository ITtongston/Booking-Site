import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";

const Details = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onNext();
  };


const FormCont = styled.div`
background: rgba(98, 105, 158, 0.1);

`




  return (
    <div>
      <FormCont>
        <form onSubmit={submitHandler} action="">
          <button type="submit">Next</button>
        </form>
      </FormCont>
    </div>
  );
};

export default Details;
