import {Route, Routes} from 'react-router-dom';
import BookHome from './T-Institute/T-bookin-page/pages/Book-Home'
import HoldingsHome from './pages/HoldingsHome';
import Contact from './T-Institute/T-bookin-page/pages/Book-Contact';
import About from './T-Institute/T-bookin-page/pages/Book-About';
import InstutesHome from './T-Institute/pages/InstitutesHome';
import {useEffect, useState} from 'react'
import HashLoader from "react-spinners/HashLoader";


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
  const [spinner, setSpinner] = useState(true)
  useEffect(()=>{
        // setSpinner(false); 
        setTimeout(() => {
          setSpinner(false);
        }, 5000);
  },[])


   return(
      spinner ? 
      <HashLoader color={'#D0021B'} loading={spinner} cssOverride={override}  size={50} />
     : 
    <div>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element= {<HoldingsHome />} />
      <Route path="/T-Institute/pages/institutes-Home" element= {<InstutesHome  />} />
      <Route path="/T-bookin-page/pages/Book-Home" element= {<BookHome />} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="/about" element= {<About/>} />
    </Routes>
    </div>
  )
  
}

export default App;
