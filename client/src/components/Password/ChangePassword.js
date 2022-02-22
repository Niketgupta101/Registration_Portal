import { Button, TextField } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import React, { useState } from "react";

import "./styles.css";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
    };
  
    return (
      <div className="forgot_password">
        <div className="change_container">
          <div className="forgot_header">Change Password</div>
          <form className="forgot_content" onSubmit={handleSubmit}>
              <h5>Change your existing password to a new and secure one for your account</h5>
            <TextField
              name="oldPassword"
              label="Old Password"
              type="password"
              variant="filled"
              style={{ width: "100%", margin: "1rem 0"}}
              value={formData.oldPassword}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              required
              autoFocus
            />
            <TextField
              name="newPassword"
              label="New Password"
              type="password"
              variant="filled"
              style={{ width: "100%", margin: "1rem 0"}}
              value={formData.newPassword}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              required
              autoFocus
            />
            <TextField
              name="confirmNewPassword"
              label="Comfirm New Password"
              type="password"
              variant="filled"
              style={{ width: "100%", margin: "1rem 0"}}
              value={formData.confirmNewPassword}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              required
              autoFocus
            />
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

export default ChangePassword;