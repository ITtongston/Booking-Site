import {Route, Routes} from 'react-router-dom';
import BookHome from'./T-bookin-page/pages/Book-Home';
import Contact from './T-bookin-page/pages/Book-Contact';
import About from './T-bookin-page/pages/Book-About';
import {useEffect, useState} from 'react'
import HashLoader from "react-spinners/HashLoader";
import TrainingFlow from './T-bookin-page/pages/TrainingRoom/TrainingFlow';
import Consult1 from './T-bookin-page/components/Consultations/Consult1';
import BookingForm from './T-bookin-page/components/Consultations/Form/BookingForm';

const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  bottom: "50%",
  right:'50%',
  transform: "translate(-50,-50)",
  borderColor: "red"
};


function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(()=>{
        // setSpinner(false); 
        setTimeout(() => {
          setSpinner(false);
        }, 3000);
  },[])


   return(
      spinner ? 
      <HashLoader color={'#D0021B'} loading={spinner} cssOverride={override}  size={50} />
     : 
    <div>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element= {<BookHome />} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="/about" element= {<About/>} />
      <Route path="/trainingflow" element= {<TrainingFlow/>} />
      <Route path="/cba" element= {<Consult1/>} />
      <Route path="/bookform" element= {<BookingForm/>} />
    </Routes>
    </div>
  )
  
}

export default App;
