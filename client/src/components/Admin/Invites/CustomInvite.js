import React from 'react'
import { Input,FormGroup,Label,Button,Form,Row,Col } from 'reactstrap';
import { sendCustomEmail } from '../../../api';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';



const  CustomInvite = () => {
    const initialInvite = {       
        email: "",
        subject: "",
        message: "",
      };
      const [emailData, setEmailData] = useState(initialInvite);
    
      const handleChange = (e) => {
        setEmailData({ ...initialInvite, [e.target.name]: e.target.value });
      };
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(emailData)
        let response = await sendCustomEmail(emailData);
        console.log(response);
        setEmailData({ ...initialInvite });
      };
    
  return (
    <>
  
            <form onSubmit={handleFormSubmit} className="contact_form">
              <div className="form_item form_item1">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  
                />
              </div>
              <div className="form_item form_item2">
                <label htmlFor="">Email Id</label>
                <input
                  type="text"
                  name="email"
                  value={emailData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form_item form_item4">
                <label htmlFor="">Subject</label>
                <textarea
                  name="subject"
                  id="subject"
                  cols="30"
                  rows="10"
                  value={emailData.subject}
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
                  value={emailData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" variant="contained" endIcon={<SendIcon />} style={{ position: "relative", margin: "1rem 0"}}>
                Send
              </Button>
            </form>
    </>
  )
}

export default CustomInvite;
