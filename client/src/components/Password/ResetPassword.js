import { Button, TextField } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { resetPassword } from "../../api";
import {
  FaEyeSlash,
  FaEye
} from "react-icons/fa";

import "./styles.css";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const [showPass,setShowPass]=useState(false);
    
    const {id} = useParams();

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
       
      await resetPassword(id, password);
      Navigate('/auth');
      } catch (error) {
        Navigate("/badgateway");
      }



    };
  
    return (
      <div className="forgot_password">
        <div className="forgot_container">
          <div className="forgot_header">Reset Password</div>
          <form className="forgot_content" onSubmit={handleSubmit}>
              <h5>Enter a secure password for your account</h5>
            <TextField
              name="password"
              label="New Password"
              type={showPass?"text":"password"}
              variant="filled"
              style={{ width: "100%"}}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
            >
           
            </TextField>
            {showPass?<FaEye style={{ fontSize: "1.5em" }} onClick={()=>setShowPass((prev)=>!prev) } />:<FaEyeSlash style={{ fontSize: "1.5em" }} onClick={()=>setShowPass((prev)=>!prev) }/>} 
            <Button
              endIcon={<Save />}
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
              Save
            </Button>
          </form>
        </div>
      </div>
    );
}

export default ResetPassword;