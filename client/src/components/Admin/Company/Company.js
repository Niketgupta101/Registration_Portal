import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { Pagination, Stack, Button } from "@mui/material";
import { getAllCompanyDetails, searchCompanyByPattern } from "../../../api";
import Loading from "../../Loading/Loading";
import { FaSearch } from "react-icons/fa";

const Company = () => {
  const Navigate = useNavigate();

  const [IsLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [Companies, setCompanies] = useState();
  const [search, setSearch] = useState();

  async function fetchAllCompanies() {
    if (!user) Navigate("/auth");
    else {
      setUser(localStorage.getItem("user"));
      setIsLoading(true);
      const response = await getAllCompanyDetails();
      setIsLoading(false);
      setCompanies(response.data.companyList);
    }
  }

  useEffect(() => {
    fetchAllCompanies();
  }, []);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function fetchCompanies() {
      // console.log({ search });
      var response;
      if (!search) {
        response = await getAllCompanyDetails();
      } else {
        response = await searchCompanyByPattern(search);
      }
      // console.log(response);
      setCompanies(response.data.companyList);
    }
    fetchCompanies();
  }, [search]);

  return (
    <>
      <div className="admin_company">
        <div className="admin_company_header d-flex justify-content-between">
          <h1 className="flex-grow-1">Companies</h1>

          <div>
            <div className="input-group d-flex">
              <div className="form-outline d-flex justify-content-end">
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Type Company Name"
                  name="search"
                  value={search}
                  onChange={handleOnChange}
                />
              </div>
              <Button variant="outlined">
                <FaSearch />
              </Button>
            </div>
          </div>
        </div>
        <small className=" h6 admin_company_header_small">
          {" "}
          Total Registered Companies:{" "}
          {Companies !== undefined ? Companies.length : 0}
        </small>

        <div className="company_items">
          {Companies &&
            Companies.map((company) => (
              <div className="job_card job_card1">
                <div id="companyname">{company.name}</div>
                <div>
                  <span className="head">Website : </span>
                  {company.website}
                </div>
                <div>
                  <span className="head">Type : </span>
                  {company.company_type}
                </div>

                <div>
                  <div className="company-hr-heading">Primary HR. Details</div>
                  <div className="company-hr-details">
                    <div>
                      <span className="head">Name :</span>{" "}
                      {company.primary_hr.name}
                    </div>
                    <div>
                      <span className="head">Email :</span>{" "}
                      {company.primary_hr.emailId}
                    </div>
                    <div>
                      <span className="head">Contact Number :</span>{" "}
                      {company.primary_hr.contactNo}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="company-hr-heading">
                    Secondary HR. Details
                  </div>
                  <div className="company-hr-details">
                    <div>
                      <span className="head">Name :</span>{" "}
                      {company.secondary_hr.name}
                    </div>
                    <div>
                      <span className="head">Email :</span>{" "}
                      {company.secondary_hr.emailId}
                    </div>
                    <div>
                      <span className="head">Contact Number :</span>{" "}
                      {company.secondary_hr.contactNo}
                    </div>
                  </div>
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
      {IsLoading && <Loading />}
    </>
  );
};

export default Company;
