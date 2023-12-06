import { Route, Routes } from "react-router-dom";
import BookHome from "./E-Hub/pages/Book-Home";
import Contact from "./E-Hub/pages/Book-Contact";
import About from "./E-Hub/pages/Book-About";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import TrainingFlow from "./E-Hub/pages/TrainingRoom/TrainingFlow";
import Media from "./E-Hub/components/Consultations/Media/Media";
import BookingForm from "./E-Hub/components/Consultations/Form/MediaBookingForm";
// import NavBar from './E-Hub/components/Navbar'
import Data from "./E-Hub/components/Consultations/Entreprenurial/Data";
import MeetingFlow from "./E-Hub/pages/MeetingRoom/MeetingFlow";
import CoworkigFlow from "./E-Hub/pages/CoworkingSpace/CoworkingFlow";
import PackagePages from "./E-Hub/pages/VirtualOffice/PackagesPage";
import PackagesForm from "./E-Hub/pages/VirtualOffice/PackagesForm";
import EnterpriseCalendly from "./E-Hub/components/EnterpriseServices/FinanceAdmin/EnterpriseCalendly";
import Enterprise from "./E-Hub/components/EnterpriseServices/FinanceAdmin/Enterprise";
import styled from "styled-components";

const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderColor: "red",
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 10px;
  // height: 400px;
  // width: 700px;
  border-radius: 8px;
  min-width: 320px;
  max-width: 400px;
  text-align: center;
  position: relative;
  margin: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 25px;
  color: #333;
`;
const ModalDiv = styled.div`
  padding: 20px;
  text-align: center;
  margin: auto;
`;
const ModalIcon = styled.div`
  font-size: 4rem;
  color: red;
`;
const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: bolder;
`;
const ModalText = styled.p`
  padding-top: 10px;
  text-align: center;
  margin: auto;
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: semibold;
`;

const DiscountModal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalDiv>
          <ModalIcon>
            <i class="fas fa-gift"></i>
          </ModalIcon>
          <ModalTitle>Get 20% discount</ModalTitle>
          <ModalText>
            On all our Admin Hub services (VO, Training +Meeting Room) if booked
            on or before the <b> 31st of December 2023.</b>
          </ModalText>
        </ModalDiv>
      </ModalContent>
    </ModalOverlay>
  );
};

function App() {
  const [spinner, setSpinner] = useState(true);
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    sessionStorage.setItem("modalClosed", "true");
  };

  useEffect(() => {
    const isModalClosedInThisSession = sessionStorage.getItem("modalClosed");
    if (!isModalClosedInThisSession) {
      const timeout = setTimeout(() => {
        setIsModalOpen(true);
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  useEffect(() => {
    // setSpinner(false);

    setSpinner(false);

    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
      {isModalOpen && <DiscountModal onClose={closeModal} />}

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
            <Route path="/plans" element={<PackagePages />} />
            <Route path="/plans/form" element={<PackagesForm />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route
              path="/enterprise-calendly"
              element={<EnterpriseCalendly />}
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
