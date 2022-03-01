import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { getAllContacts } from "../../../api";

const Contact = () => {
  const [expanded, setExpanded] = React.useState(false);
  const Navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [Contacts, setContacts] = React.useState();

  // React.useEffect(async () => {
  //   if (!user) Navigate("/auth");
  //   let response = await getAllContacts();

  //   console.log(response);
  //   setContacts(response.data.contactList);
  // }, []);

  console.log(Contacts);

  return (
    <>
      <div className="admin_contact_header">
        <h1>Contact Messages</h1>
      </div>
      <div className="admin_contact">
        {/* {Contacts.map((contact) => (
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              key = {contact._id}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {contact.name}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {contact.email}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {contact.message}
                </Typography>
              </AccordionDetails>
            </Accordion>
        ))} */}
      </div>
    </>
  );
};

export default Contact;
