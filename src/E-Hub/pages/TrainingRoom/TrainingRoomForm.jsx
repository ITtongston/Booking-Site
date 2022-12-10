import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import training from "../../Assets/img/training.jpg";

const Details = (props) => {
  const [inputValues, setInputValues] = useState({
    FullName: "",
    contactEmail: "",
    PhoneNumber: "",
    capacity: "",
    address: "",
    checkIn: "",
    Dates: "daily",
  });


  const [DayPrice, setDayPrice] = useState(25000);
  const [weekPrice, setWeekPrice] = useState(400000);
  const [duration, setDuration] = useState(1);

// styles

  const FormBg = styled.div`
  background: rgba(98, 105, 158, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110vh;
  
  }
  `;
  const FormCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: relative;
  width: 60%;
  min-height: 500px;
  margin: 3rem 0;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 1px  rgba(7, 8, 8, 0.2);
  bacKground: rgba(243, 247, 250, 0.66);

  & .imgdiv{
    position: relative;
    width: 30%;
    height: 500px;

  }
  & img{
       width: 100%;
       height: 500px;
       object-fit: cover;
       object-position: center;
       position: relative;
       border-top-left-radius: 10px;
       border-bottom-left-radius: 10px;

  }
    & form{
      position: relative;
      height: 500px;
      width:70%;
      display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;  
  
  `;

  const InputCont = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 0.6rem;

    & input {
      width: 250px;
      height: 2.3rem;
      border-radius: 5px;
      outline: none;
      border: 2px solid rgba(4, 4, 4, 0.34);
      padding-left: 10px;
    }

    & input:focus {
      border: 2px solid rgba(148, 216, 255, 0.66);
    }
  `;

  const IncreaseBtn = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 1rem 0;

  & button{
background-color: rgba(216, 164, 2, 1);
width: 40px; 
height: 30px;
outline: none;
border-radius: 3px;
border: none;
cursor: pointer;
  }
  `;

  const RadioInput = styled.div`
  display:flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  `;

  const Inputs = [
    {
      id: 1,
      type: "text",
      label: "Contact Name",
      placeholder: "",
      name: "FullName",
    },
    {
      id: 2,
      type: "email",
      label: "Contact Email",
      placeholder: "name@email.com",
      name: "contactEmail",
    },
    {
      id: 3,
      type: "text",
      label: "Phone Number",
      placeholder: "phone number...",
      name: "PhoneNumber",
    },
    {
      id: 4,
      type: "number",
      max: "20",
      min: "1",
      placeholder: "10",
      label: "Expected Capacity",
      name: "capacity",
    },

    {
      id: 5,
      type: "text",
      label: "Address",
      placeholder: "enter address",
      name: "address",
    },
    {
      id: 6,
      type: "text",
      label: "Check-in Time",
      placeholder: "input a preferred time",
      name: "checkIn",
    },
  ];

  const handleOnchange = (e) => {
    const { value, type, checked, name } = e.target;

    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  let isChecked;

  if (inputValues.Dates === "daily") {
    isChecked = true;
  }
  if (inputValues.Dates === "weekly") {
    isChecked = false;
  }


  const handleDaysIncrease = ()=>{
    setDayPrice((prevAmount)=>(prevAmount + 25000));
  setDuration(prevDuration=>(prevDuration + 1));
    
  }
const handleDaysDecrease=()=>{

  if (DayPrice < 25000 ){
   return
  }
  else if (DayPrice === 25000) {
    return
  }
  else {
    setDayPrice((prevAmount)=>(prevAmount - 25000));
    setDuration(prevDuration=>(prevDuration - 1));
  }
  
 
  
}

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValues);
  };

  console.log(DayPrice)

  return (
    <div>
      <FormBg>
        <FormCont>
          <div className="imgdiv">
            <img src={training} alt="" />
          </div>
          <form onSubmit={submitHandler} action="">
            <InputCont>
              {Inputs.map((input) => (
                <div key={input.id}>
                  <label htmlFor="">{input.label}</label> <br></br>
                  <input
                    onChange={handleOnchange}
                    {...input}
                    value={inputValues[input.name]}
                  />
                </div>
              ))}
            </InputCont>
            <RadioInput>
              <div>
                <input
                  type="radio"
                  value="daily"
                  onChange={handleOnchange}
                  name="Dates"
                  id="days"
                  checked={inputValues.Dates === "daily"}
                />
                <label htmlFor="">Per Day</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="weekly"
                  onChange={handleOnchange}
                  name="Dates"
                  id="week"
                  checked={inputValues.Dates === "weekly"}
                />
                <label htmlFor="">Per Week</label>
              </div>
            </RadioInput>
            <div>
              {isChecked && (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' ,gap: '1rem'}} bo>
                 <span style={{ border: '1px solid rgba(216, 164, 2, 1)',borderRadius: '5px', padding: '4px' }}>Amount: NGN {DayPrice}</span> 
                  <IncreaseBtn>
                    <button onClick={handleDaysIncrease}><FaPlus/></button>
                    <button onClick={handleDaysDecrease}><FaMinus/></button>
                    <span>Duration {duration} Day/s</span>
                  </IncreaseBtn>
                </div>
              )}
              {!isChecked && (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' ,gap: '1rem'}} bo>
                 <span style={{ border: '1px solid rgba(216, 164, 2, 1)',borderRadius: '5px', padding: '4px' }}>Amount: NGN {weekPrice}</span> 
                  <IncreaseBtn>
                    <button><FaMinus/></button>
                    <button><FaPlus/></button>
                  </IncreaseBtn>
                  
                </div>
              )}
            </div>

            <button type="submit">Submit</button>
          </form>
        </FormCont>
      </FormBg>
    </div>
  );
};

export default Details;
