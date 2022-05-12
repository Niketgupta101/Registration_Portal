import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

import "./styles.css";
import { forgetPassword } from "../../api";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [emailId, setEmailId] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgetPassword(emailId);
    Navigate('/auth');
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
                A reset password link would be sent to the below email address if
                there exist's any user registered with the given mail id.
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
    </div>
  );
};

export default ForgotPassword;
