import * as React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { Pagination, Stack } from "@mui/material";
import { getAllCompanyDetails } from "../../../api";

const Company = () => {
  const Navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("user"));

  const [Companies, setCompanies] = React.useState();

  React.useEffect(async () => {
    if (!user) Navigate("/auth");

    let response = await getAllCompanyDetails();

    console.log(response);
    setCompanies(response.data.companyList);
  }, []);

  return (
    <>
      <div className="admin_company">
        <div className="admin_company_header">
          <h1>Companies</h1>
        </div>
        <div className="company_items">
          { Companies && Companies.map(company => (
            <div className="job_card job_card1">
            <div id="companyname">{company.name}</div>
            <div><span className="head">Website : </span>{company.website}</div>
            <div><span className="head">Type : </span>{company.company_type}</div>       
   
            <div >Primary HR. Details
              <div><span className="head">Name :</span> {company.primary_hr.name}</div>
              <div><span className="head">Email :</span> {company.primary_hr.emailId}</div>
              <div><span className="head">Contact Number :</span> {company.primary_hr.contactNo}</div>
            </div>
       
            <div  >Secondary HR. Details
            <div><span className="head">Name :</span> {company.secondary_hr.name}</div>
              <div><span className="head">Email :</span> {company.secondary_hr.emailId}</div>
              <div><span className="head">Contact Number :</span> {company.secondary_hr.contactNo}</div>
            </div>
           </div>
          ))} 

          
        </div>
        <Stack spacing={2}>
          <Pagination
            count={7}
            color="primary"
            style={{ margin: "3rem auto" }}
          />
        </Stack>
      </div>
    </>
  );
};

export default Company;
