import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { Pagination, Stack, Button } from "@mui/material";
import { getAllCompanyDetails,searchCompanyByPattern } from "../../../api";
import Loading from "../../Loading/Loading";
import { FaSearch } from "react-icons/fa";

const Company = () => {
  const Navigate = useNavigate();
  const initialSearch= {
    search:""
  }
  const [IsLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [Companies, setCompanies] = useState();
  const [search,setSearch]=useState(initialSearch);
 

  useEffect(async () => {
    if (!user) Navigate("/auth");
    else {
      setUser(localStorage.getItem("user"));
      setIsLoading(true);
      const response = await getAllCompanyDetails();
      setIsLoading(false);
      setCompanies(response.data.companyList);
    }
  }, []);
  const handleChange = async(e) => {
    setSearch({ ...initialSearch, [e.target.name]: e.target.value });
    e.preventDefault();
    console.log(search);
    let response = await searchCompanyByPattern(search);
    
    console.log(response);
   
    
    setCompanies(response.data.companyList)
  };
  // const handleSearchSubmit = async (e) => {
  //   e.preventDefault();
    
  //   let response = await searchCompanyByPattern(search);
  //   console.log("res");
  //   console.log(response);
   
  //   setSearch({ ...initialSearch });
  //   setCompanies(response.data.companyList)
  // };
  

  

  return (
    <>
      <div className="admin_company">
        <div className="admin_company_header d-flex">
          <h1 className="flex-grow-1">Companies
          </h1>

          <div>
            <div className="input-group ">
              <div className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder="Type Company Name" name ="search" value={search.search} onChange={handleChange}/>
              </div>
              <Button variant="outlined" >
                <FaSearch />
              </Button>
            </div>
          </div>
        </div>
        <small className=" h6 admin_company_header_small"> Total Registered Companies: {' '}
          {Companies !== undefined ? (
            Companies.length
          ) : (
            0
          )}
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
                    <div >
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
                  <div className="company-hr-heading">Secondary HR. Details</div>
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
