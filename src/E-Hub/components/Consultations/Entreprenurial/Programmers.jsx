import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { FaCaretRight } from "react-icons/fa";
import prog from "../../../Assets/img/prog.gif";
import workspaceApi from "../../../api/workspaceApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "whitesmoke",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  padding: "1rem",
};

const Btn = styled.a`
  color: rgba(217, 6, 6, 1);
  display: flex;
  align-items: center;
  margin-top: 15px;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledBox = styled(Box)`
  max-width: 100%;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border: 1px solid #000;
  color: #000;
  background: transparent;
  margin: 0 auto;

  &:hover h2 {
    transform: scale(0.9);
  }

  & h2 {
    margin-left: 5px;
    transition: all 0.3s ease;
  }

  &:after {
    content: "";
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 5px;
    left: 5px;
    transition: 0.2s;
    background-color: rgba(206, 206, 202, 0.55);
  }

  &:hover:after {
    top: 0;
    left: 0;
  }

  @media (max-width: 800px) {
    max-width: 80%;
  }
`;

const InputCont = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items
  gap: 0.6rem;

  & input {
    width: 300px;
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

const StyledTextarea = styled.textarea`
  border: none;
  border-bottom: 2px solid #2e2c2c;
  padding: 2px 4px 1px;
  outline: none;
  width: 300px;
  background-color: transparent;
  &::placeholder {
    opacity: 0.8;
  }
`;

const StyledButton = styled.button`
  min-width: 100px;
  margin: 0 auto;
  height: 40px;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 20px;
  z-index: 0;
  background: rgba(0, 0, 0, 1);
  overflow: hidden;
  border: 2px solid rgba(1, 2, 50, 0.97);
  color: #fff;
  font-size: 16px;
  margin: 0 auto;
  text-align: center;

  &:hover {
    color: rgba(0, 0, 0, 1);
    background: #fff;
  }

  &:hover:after {
    height: 0%;
    background: #fff;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 1);
  }
`;

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [inputValues, setInputValues] = React.useState({
    FullName: "",
    contactEmail: "",
    PhoneNumber: "",
    role: "",
    progDetail: "",
  });

  const [loading, setLoading] = React.useState(false);

  const Inputs = [
    {
      id: 1,
      type: "text",
      label: "Full Name",
      name: "FullName",
    },
    {
      id: 3,
      type: "email",
      label: "Email address",
      placeholder: "name@email.com",
      name: "contactEmail",
    },
    {
      id: 4,
      type: "text",
      label: "Phone no",
      placeholder: "phone number...",
      name: "PhoneNumber",
    },
    {
      id: 6,
      type: "text",
      label: "Career/profession",
      placeholder: "Full Stack Engineer..",
      name: "role",
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formBody = {
        name: inputValues.FullName,
        email: inputValues.contactEmail,
        Phone: inputValues.PhoneNumber,
        designation: inputValues.address,
        progDetail: inputValues.progDetail,
      };
      const response = await workspaceApi.post(
        "/programmers-den.json",
        formBody
      );
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }

    setInputValues({
      FullName: "",
      contactEmail: "",
      PhoneNumber: "",
      role: "",
      progDetail: "",
    });
    
    setLoading(false);
  };

  return (
    <div>
      <StyledBox>
        <h2 style={{ width: "100%" }}>Programmers Den</h2>
        <p>
          A platform to learn programming and leverage our access to new
          technologies such as Vue.js, NodeJs, Javascript and Python
        </p>
        <Btn onClick={handleOpen} sx={{ color: "rgba(217, 6, 6, 1)" }}>
          More
          <span>
            <FaCaretRight />
          </span>
        </Btn>
      </StyledBox>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form style={style} onSubmit={handleSubmit}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              textAlign: "center",
              mb: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            Kindly Register Your Interest! <img src={prog} alt="logo" />
          </Typography>

          <InputCont>
            {Inputs.map((input) => (
              <div key={input.id}>
                <label
                  htmlFor=""
                  style={{
                    fontWeight: 600,
                    color: "rgba(21, 21, 19, 0.87)",
                  }}
                >
                  {input.label}
                </label>
                <br></br>
                <input
                  onChange={handleOnchange}
                  {...input}
                  value={inputValues[input.name]}
                  required
                />
              </div>
            ))}
          </InputCont>
          <div>
            <label
              htmlFor="details"
              style={{
                padding: "1rem 0  0",
                fontWeight: "600",
                color: "rgba(21, 21, 19, 0.87)",
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "5px",
              }}
            >
              Programming languange of Interest
            </label>
            <div style={{ textAlign: "center" }}>
              <StyledTextarea
                placeholder="e.g Python"
                name="progDetail"
                value={inputValues.progDetail}
                onChange={handleOnchange}
                min="300"
                max="1000"
              />
            </div>
          </div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 2,
            }}
          >
            <StyledButton type="submit">
              {loading ? "registering..." : "Sign-Up"}
            </StyledButton>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
