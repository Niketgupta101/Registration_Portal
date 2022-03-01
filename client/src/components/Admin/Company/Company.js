import * as React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { Pagination, Stack } from "@mui/material";
import { getAllCompanyDetails } from "../../../api";

const Company = () => {
  const Navigate = useNavigate();

  // let user = JSON.parse(localStorage.getItem("user"));

  // const [Companies, setCompanies] = React.useState();

  // React.useEffect(async () => {
  //   if (!user) Navigate("/auth");

  //   let response = await getAllCompanyDetails();

  //   console.log(response);
  //   setCompanies(response.data.companyList);
  // }, []);

  return (
    <>
      <div className="admin_company">
        <div className="admin_company_header">
          <h1>Companies</h1>
        </div>
        <div className="company_items">
          {/* {Companies.map(company => (
            <div className="job_card">
            </div>
          ))} */}
          <div className="job_card">
          </div>
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
