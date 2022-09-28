import React from "react";
import { Link } from "react-router-dom";
// import Home from '../T-Institute/T-bookin-page/pages/Book-Home'
const HoldingsHome = () => {
  return (
    <div>
      Welcome to T-Holdings
      <Link to="/T-Institute/pages/institutes-Home"> Go to T-Instutes</Link>
    </div>
  );
};

export default HoldingsHome;
