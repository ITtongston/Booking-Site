import React from 'react';
import { InlineWidget } from "react-calendly";
import styled from 'styled-components';



const Calendly = () => {
  return (
    <div  style={{ minWidth: '320px', height: '580px' }} >
      <InlineWidget url="https://calendly.com/femmanuel-t/cba" />
    </div>
  )
}

export default Calendly
