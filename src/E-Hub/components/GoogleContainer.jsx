import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import { ThreeDots } from "svg-loaders-react";
import "../Assets/css/mapstyle.css";
import { Typography } from "@mui/material";

const Centralise = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 4rem;
`;

const GoogleContainer = () => {
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold",
            fontSize: "30px",
            color: "#373434",px: 10, mb: 2, mt: 4}}>Need Direction?</Typography>
      <Centralise>
        <div style={{ width: "70%",height: '300px' }}>
          <iframe
            style={{ width: "100%", height: "100%", borderRadius: "15px" }}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Emeka%20ayaoko%20street%20abuja&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </Centralise>
    </>
  );
};

export default GoogleContainer;
