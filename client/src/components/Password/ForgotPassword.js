import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./../Auth/newStyle.css";
import "./styles.css";
import { forgetPassword } from "../../api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const notify = (status) =>{
     if(status=="success")
     return toast.success("Reset link sent to Email Address!", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    else return toast.warn("Email Id not found", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  }
  const [emailId, setEmailId] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try{
      const response =await forgetPassword(emailId);
      notify("success");
    }catch(error){
      notify("failure");
    }
  };

  return (
    <div className="w3layouts-main">
      <div className="bg-layer">
        <h1 className="h1-home">CDC Placement Portal</h1>
        <div className="forgot_password ">
          <div className="forgot_container bg-white">
            <div className="forgot_header">Forgot Password</div>
            <form className="forgot_content" onSubmit={handleSubmit}>
              <h5>
                A reset password link would be sent to the below email address
                if there exist's any user registered with the given mail id.
              </h5>
              <TextField
                name="emailId"
                label="Email"
                type="email"
                variant="filled"
                style={{ width: "100%" }}
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                required
                autoFocus
              />
              <Button
                endIcon={<SendIcon />}
                style={{
                  position: "relative",
                  margin: "auto",
                  marginTop: "1.8rem",
                  background: "rgb(60,85,165)",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                }}
                type="submit"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ForgotPassword;
