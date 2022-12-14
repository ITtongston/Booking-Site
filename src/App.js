import { Route, Routes } from "react-router-dom";
import BookHome from "./E-Hub/pages/Book-Home";
import Contact from "./E-Hub/pages/Book-Contact";
import About from "./E-Hub/pages/Book-About";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import TrainingFlow from "./E-Hub/pages/TrainingRoom/TrainingFlow";
import Media from "./E-Hub/components/Consultations/Media/Media";
import BookingForm from "./E-Hub/components/Consultations/Form/MediaBookingForm";
// import NavBar from './E-Hub/components/Navbar'
import Data from "./E-Hub/components/Consultations/Entreprenurial/Data";
import TIEEC from "./E-Hub/components/Consultations/Entreprenurial/TIEEC";
import MeetingFlow from "./E-Hub/pages/MeetingRoom/MeetingFlow";
import CoworkigFlow from "./E-Hub/pages/CoworkingSpace/CoworkingFlow";


const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  bottom: "50%",
  right: "50%",
  transform: "translate(-50,-50)",
  borderColor: "red",
};

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    // setSpinner(false);
    setTimeout(() => {
      setSpinner(false);
    }, 3000);
  }, []);

  return (
    <>
      {spinner ? (
        <HashLoader
          color={"#D0021B"}
          loading={spinner}
          cssOverride={override}
          size={50}
        />
      ) : (
        <div>
          {/* <NavBar/> */}
          <Routes>
            <Route path="/" element={<BookHome />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/trainingflow" element={<TrainingFlow />} />
            <Route path="/meetingflow" element={<MeetingFlow />} />
            <Route path="/coworkingflow" element={<CoworkigFlow />} />
            <Route path="/media" element={<Media />} />
            <Route path="/bookform" element={<BookingForm />} />
            <Route path="/data" element={<Data />} />
            <Route path="/Tieec" element={<TIEEC />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
