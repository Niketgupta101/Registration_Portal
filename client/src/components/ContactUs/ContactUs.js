import { Button } from "@mui/material";
import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

import "./styles.css";
import { postContactData } from "../../api";

const ContactUs = () => {
  const initialData = {
    name: "",
    email: "",
    contactNo: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let response = await postContactData(formData);
    console.log(response);
    setFormData({ ...initialData });
  };
  return (
    <>
      <div className="contactus">
        <div className="contactContainer">
          <div className="contact_left">
            <div className="contact_header">
              <h3>Contact Form</h3>
            </div>
            <form onSubmit={handleFormSubmit} className="contact_form">
              <div className="form_item form_item1">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form_item form_item2">
                <label htmlFor="">Email Id</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form_item form_item3">
                <label htmlFor="">Contact Number</label>
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                />
              </div>
              <div className="form_item form_item4">
                <label htmlFor="">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" variant="contained" endIcon={<SendIcon />} style={{ position: "relative", margin: "1rem 0"}}>
                Send
              </Button>
            </form>
          </div>
          <hr />
          <div className="contact_right">
            <div className="contact_header">
              <h3>Reach Us</h3>
            </div>
            <div className="reach_item reach_item1">
              <h4>CONTACT NUMBER: </h4>
              <h5>+91-1234567890</h5>
            </div>
            <div className="reach_item reach_item2">
              <h4>EMAIL: </h4>
              <h5>registration@gmail.com</h5>
            </div>
            <div className="reach_item reach_item3">
              <h4>ADDRESS: </h4>
              <h5>Dhanbad, Jharkhand</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
