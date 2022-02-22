import * as React from "react";

import './styles.css';
import { Pagination, Stack } from "@mui/material";


const Company = () => {
  return (
    <>
      <div className="admin_company">
        <div className="admin_company_header">
          <h1>Companies</h1>
        </div>
        <div className="company_items">
        <div className="job_card">
              <div className="card_content">
                <div className="content_heading">
                  <h4>Software Developer</h4>
                </div>
                <div className="content_text">
                  <h5><span>Duration</span>: 2-3 months</h5>
                  <h5><span>Mode</span>: Virtual</h5>
                  <h5><span>Stipend</span>: 10-20k</h5>
                  <h5><span>Provision for PPO</span>: Yes</h5>
                  <button className="secondary_btn">View more</button>
                </div>
              </div>
            </div>
            <div className="job_card">
              <div className="card_content">
                <div className="content_heading">
                  <h4>Software Developer</h4>
                </div>
                <div className="content_text">
                  <h5><span>Duration</span>: 2-3 months</h5>
                  <h5><span>Mode</span>: Virtual</h5>
                  <h5><span>Stipend</span>: 10-20k</h5>
                  <h5><span>Provision for PPO</span>: Yes</h5>
                  <button className="secondary_btn">View more</button>
                </div>
              </div>
            </div>
            <div className="job_card">
              <div className="card_content">
                <div className="content_heading">
                  <h4>Software Developer</h4>
                </div>
                <div className="content_text">
                  <h5><span>Duration</span>: 2-3 months</h5>
                  <h5><span>Mode</span>: Virtual</h5>
                  <h5><span>Stipend</span>: 10-20k</h5>
                  <h5><span>Provision for PPO</span>: Yes</h5>
                  <button className="secondary_btn">View more</button>
                </div>
              </div>
            </div>
            <div className="job_card">
              <div className="card_content">
                <div className="content_heading">
                  <h4>Software Developer</h4>
                </div>
                <div className="content_text">
                  <h5><span>Duration</span>: 2-3 months</h5>
                  <h5><span>Mode</span>: Virtual</h5>
                  <h5><span>Stipend</span>: 10-20k</h5>
                  <h5><span>Provision for PPO</span>: Yes</h5>
                  <button className="secondary_btn">View more</button>
                </div>
              </div>
            </div>
            <div className="job_card">
              <div className="card_content">
                <div className="content_heading">
                  <h4>Software Developer</h4>
                </div>
                <div className="content_text">
                  <h5><span>Duration</span>: 2-3 months</h5>
                  <h5><span>Mode</span>: Virtual</h5>
                  <h5><span>Stipend</span>: 10-20k</h5>
                  <h5><span>Provision for PPO</span>: Yes</h5>
                  <button className="secondary_btn">View more</button>
                </div>
              </div>
            </div>
            <div className="job_card">
              <div className="card_content">
                <div className="content_heading">
                  <h4>Software Developer</h4>
                </div>
                <div className="content_text">
                  <h5><span>Duration</span>: 2-3 months</h5>
                  <h5><span>Mode</span>: Virtual</h5>
                  <h5><span>Stipend</span>: 10-20k</h5>
                  <h5><span>Provision for PPO</span>: Yes</h5>
                  <button className="secondary_btn">View more</button>
                </div>
              </div>
            </div>
        </div>
        <Stack spacing={2}>
          <Pagination count={7} color="primary" style={{ margin: "3rem auto" }} />
        </Stack>
      </div>
    </>
  );
};

export default Company;
