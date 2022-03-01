import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Input } from "reactstrap";



import "./styles.css";
import {
  AccountCircleTwoTone,
  PeopleAltTwoTone,
} from "@material-ui/icons";
import {
  FileOpenRounded,
  HomeOutlined,
  HomeWork
} from "@mui/icons-material";
import Company from "../Company/Company";
import Jobs from "../Jobs/Jobs";
import Account from "../Account/Account";
import { TabContext, TabPanel } from "@mui/lab";
import Contact from "./Contact";

import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {
  const [value, setValue] = React.useState("Home");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const style = {
    width: "10vw",
  };
  return (
    <>
      <div className="admin_home">
        <TabContext value={value}>
          <Box sx={{ width: "100%", height: "90px" }}>

            <TabPanel value="Home">
              <div className="admin_home_container">
                <div className="admin_home_cards">
                  <div className="home_users_card home_card">
                    <div className="card_avatar">
                      <PeopleAltTwoTone
                        style={{
                          width: "35px",
                          height: "35px",
                          color: "rgb(60, 85, 165)",
                        }}
                      />
                      <h3>Users</h3>
                    </div>
                    <div className="card_content">
                      <h3>Total:- 43</h3>
                    </div>
                  </div>
                  <div className="home_jobs_card home_card">
                    <div className="card_avatar">
                      <FileOpenRounded
                        style={{
                          width: "35px",
                          height: "35px",
                          color: "rgb(60, 85, 165)",
                        }}
                      />
                      <h3>Jobs</h3>
                    </div>
                    <div className="card_content">
                      <h3>Total:- 43</h3>
                    </div>
                  </div>
                  <div className="home_jobs_card home_card">
                    <div className="card_avatar">
                      <HomeWork
                        style={{
                          width: "35px",
                          height: "35px",
                          color: "rgb(60, 85, 165)",
                        }}
                      />
                      <h3>Companies</h3>
                    </div>
                    <div className="card_content">
                      <h3>Total:- 43</h3>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center p-5">

</div>
<div id="setyear">
  <h4>Set the Graduation Year :</h4>
<Input
              id="exampleSelect"
              name="Internship_Duration"
              type="select"
              className="inputText"
            
            >
              <option>
                2022
              </option>
              <option>
                2023
              </option>
              <option>
                2024
              </option>
            </Input>
              
              
                
              </div>
                <Contact />
              </div>
              
     
            </TabPanel>
            <TabPanel value="Companies"><Company /></TabPanel>
            <TabPanel value="Jobs">
              <Jobs />
            </TabPanel>
            <TabPanel value="Account">
              <Account />
            </TabPanel>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              style={{
                borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                boxShadow: "2px 2px 5px 5px rgba(0,0,0,0.06)",
                width: "100%",
                position: "fixed",
                bottom: "0"
              }}
            >
              <BottomNavigationAction
                sx={style}
                label="Home"
                value={"Home"}
                icon={<HomeOutlined />}
              />
              <BottomNavigationAction sx={style} label="Companies" value={"Companies"} icon={<HomeWork />} />
              <BottomNavigationAction
                sx={style}
                label="Jobs"
                value={"Jobs"}
                icon={<FileOpenRounded />}
              />
              <BottomNavigationAction
                sx={style}
                label="Account"
                value={"Account"}
                icon={<AccountCircleTwoTone />}
              />
            </BottomNavigation>
          </Box>
        </TabContext>
      </div>
    </>
  );
};

export default Home;
