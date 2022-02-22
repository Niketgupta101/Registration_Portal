import React from "react";

import "./styles.css";

const CompanyDetails = ({
  companyData,
  handleCompanyChange,
  handleCompanySubmit,
  setCompanyData,
}) => {
  return (
    <>
      <div className="company_container">
        <div className="company_card">
          <form
            action=""
            className="company_form"
            onSubmit={handleCompanySubmit}
          >
            <div className="company_card_header">
              <h1>Company Details ...</h1>
            </div>
            <div className="formFlex">
              <div className="company_form_item">
                <label htmlFor="name">Company Name</label>
                <input
                  type="text"
                  className="form_input_btn"
                  name="name"
                  required
                  value={companyData.name}
                  onChange={handleCompanyChange}
                />
              </div>
              <div className="company_form_item">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  className="form_input_btn"
                  name="website"
                  required
                  value={companyData.website}
                  onChange={handleCompanyChange}
                />
              </div>
            </div>
            <div className="company_form_item">
              <label htmlFor="company_type">Company Type / Sector</label>
              <input
                className="form_input_btn"
                name="company_type"
                type="text"
                required
                value={companyData.company_type}
                onChange={handleCompanyChange}
              />
            </div>
            <div className="company_form_item">
              <label htmlFor="about">About the company</label>
              <textarea
                name="about"
                id=""
                cols="30"
                rows="10"
                className="form_about_input"
                required
                value={companyData.about}
                onChange={handleCompanyChange}
              />
            </div>
            <div className="company_card_header">
              <h1>Alternate HR Details</h1>
            </div>
            <div className="person">
              <div className="company_form_item">
                <label htmlFor="name">Name (Primary Hr)</label>
                <input
                  type="text"
                  className="form_input_btn"
                  name="name"
                  value={companyData.primary_hr.name}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      primary_hr: {
                        ...companyData.primary_hr,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>
              <div className="formFlex">
                <div className="company_form_item">
                  <label htmlFor="contact_no">Contact Number</label>
                  <input
                    type="Number"
                    className="form_input_btn"
                    name="contactNo"
                    value={companyData.primary_hr.contactNo}
                    onChange={(e) =>
                      setCompanyData({
                        ...companyData,
                        primary_hr: {
                          ...companyData.primary_hr,
                          [e.target.name]: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </div>
                <div className="company_form_item">
                  <label htmlFor="emailId">Mail Id</label>
                  <input
                    type="email"
                    className="form_input_btn"
                    name="emailId"
                    value={companyData.primary_hr.emailId}
                    onChange={(e) =>
                      setCompanyData({
                        ...companyData,
                        primary_hr: {
                          ...companyData.primary_hr,
                          [e.target.name]: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="person">
              <div className="company_form_item">
                <label htmlFor="name">Name (Secondary Hr)</label>
                <input
                  type="text"
                  className="form_input_btn"
                  name="name"
                  value={companyData.secondary_hr.name}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      secondary_hr: {
                        ...companyData.secondary_hr,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>
              <div className="formFlex">
                <div className="company_form_item">
                  <label htmlFor="contact_no">Contact Number</label>
                  <input
                    type="number"
                    className="form_input_btn"
                    name="contactNo"
                    value={companyData.secondary_hr.contactNo}
                    onChange={(e) =>
                      setCompanyData({
                        ...companyData,
                        secondary_hr: {
                          ...companyData.secondary_hr,
                          [e.target.name]: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </div>
                <div className="company_form_item">
                  <label htmlFor="emailId">Mail Id</label>
                  <input
                    type="email"
                    className="form_input_btn"
                    name="emailId"
                    value={companyData.secondary_hr.emailId}
                    onChange={(e) =>
                      setCompanyData({
                        ...companyData,
                        secondary_hr: {
                          ...companyData.secondary_hr,
                          [e.target.name]: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="form_submit_btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
