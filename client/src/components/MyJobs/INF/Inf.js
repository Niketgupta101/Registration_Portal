import { TabContext, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import { createNewInf, submitInf, updateInfById } from "../../../api";
import { useNavigate } from 'react-router-dom';

import INF1 from "./page1/INF1";
import INF2 from "./page2/INF2";
import INF3 from "./page3/INF3";
import INF4 from "./page4/INF4";
import ReviewInf from "./ReviewInf/ReviewInf"

import "./styles.css";

const Inf = () => {
  const [page, setPage] = useState("1");
  const Navigate = useNavigate();

  const companyData = {
    Name_Of_The_Company: "",
    Category_Or_Sector: "",
    Website: "",
  };
  const jobData = {
    Internship_Duration: "",
    Job_Designation: "",
    Job_Description: "",
    Mode_Of_Internship: "",
    Place_Of_Posting: "",
  };
  const stipendData = {
    Salary_Per_Month: "",
    PPO_provision_on_performance_basis: "",
    CTC: "",
  };

  const [companyFormData, setCompanyFormData] = useState(companyData);
  const [jobFormData, setJobFormData] = useState(jobData);
  const [stipendFormData, setStipendFormData] = useState(stipendData);

  const handleCompanyDataChange = (e) => {
    setCompanyFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleJobDataChange = (e) => {
    setJobFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleStipendDataChange = (e) => {
    setStipendFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // ------------------------------------------------------------

  const [fourYearData, setFourYearData] = useState({
    Select_All: false,
    Chemical_Engineering: false,
    Civil_Engineering: false,
    Computer_Science_and_Engineering: false,
    Electrical_Engineering: false,
    Electronics_and_Communication_Engineering: false,
    Engineering_Physics: false,
    Environmental_Engineering: false,
    Mechanical_Engineering: false,
    Mineral_and_Metallurgical_Engineering: false,
    Mining_Engineering: false,
    Mining_Machinery_Engineering: false,
    Petroleum_Engineering: false,
  });
  const [fiveYearData, setFiveYearData] = useState({
    Select_All: false,
    Computer_Science_and_Engineering: false,
    Mathematics_and_Computing: false,
    Applied_Geology: false,
    Applied_Geophysics: false,
  });
  const [skillData, setSkillData] = useState({
    C_Cpp_Java_Python_etc: false,
    Full_Stack_Development_Frontend_or_Backend: false,
    Civil_Engineering: false,
    AI_ML_DL_Data_Science: false,
    Business_Data_Analytics_Product_Management: false,
  });

  const handleFourYearChange = (e) => {
    setFourYearData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(fourYearData);
  };
  const handleFiveYearChange = (e) => {
    setFiveYearData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(fiveYearData);
  };
  const handleSkillChange = (e) => {
    setSkillData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(skillData);
  };

  // ------------------------------------------------------

  const [threeYearData, setThreeYearData] = useState({
    Select_All: false,
    Applied_Geology: false,
    Applied_Geophysics: false,
  });
  const [twoYearData, setTwoYearData] = useState({
    Select_All: false,
    Applied_Geology: false,
    Applied_Geophysics: false,
    Chemical_Engineering: false,
    Civil_Engineering: false,
    Computer_Science_and_Engineering: false,
    Data_Analytics: false,
    Electrical_Engineering: false,
    Electronics_and_Communication_Engineering: false,
    Environmental_Engineering: false,
    Industrial_Engineering_and_Management: false,
    Mechanical_Engineering: false,
    Fuel_Minerals_and_Metallurgical_Engineering: false,
    Mining_Engineering: false,
    Mining_Machinery_Engineering: false,
    Petroleum_Engineering: false,
    Pharmaceutical_Science_and_Engineering: false,
  });
  const [twoYearMbaData, setTwoYearMbaData] = useState({
    Select_All: false,
    Business_Analytics: false,
    Finance: false,
    Human_Resources: false,
    Marketing: false,
    Operations: false,
  });
  const [twoYearMscData, setTwoYearMscData] = useState({
    Select_All: false,
    Chemistry: false,
    Mathematics_and_Computing: false,
    Physics: false,
  });

  const handleThreeYearChange = (e) => {
    setThreeYearData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(threeYearData);
  };
  const handleTwoYearChange = (e) => {
    setTwoYearData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(twoYearData);
  };
  const handleTwoYearMbaChange = (e) => {
    setTwoYearMbaData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(twoYearMbaData);
  };
  const handleTwoYearMscChange = (e) => {
    setTwoYearMscData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(twoYearMscData);
  };

  // ------------------------------------------------------------
// (InfData.resumeShortlisting.yes)
  const selectionData = {
    Total_Number_Of_Rounds: 0,
    Number_Of_Offers: 0,
    Eligibility_Criteria: "",
  };
  const [resumeShortListingData, setResumeShortListingData] = useState({
    Yes: false,
    No: false,
  });
  const [typeOfTestData, setTypeOfTestData] = useState({
    Technical: false,
    Aptitude: false,
    Both: false,
    None: false,
  });
  const [otherQualificationsRoundData, setOtherQualificationsRoundData] =
    useState({
      GD: false,
      Case_Study: false,
      Interview: false,
    });
  const [selectionFormData, setSelectionFormData] = useState(selectionData);

  const handleResumeShortListingChange = (e) => {
    setResumeShortListingData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(resumeShortListingData);
  };
  const handleTypeOfTestChange = (e) => {
    setTypeOfTestData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(typeOfTestData);
  };
  const handleOtherQualificationsRoundChange = (e) => {
    setOtherQualificationsRoundData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(otherQualificationsRoundData);
  };
  const handleSelectionDataChange = (e) => {
    setSelectionFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // --------------------------------------------------

  const [InfId, setInfId] = useState("");

  const [InfData, setInfData] = useState({
    Company_Overview: companyFormData,
    Intern_Profile: jobFormData,
    Salary_Details: stipendFormData,
    Eligible_Courses_And_Disciplines: {
      Four_Year_Btech_Programs: fourYearData,
      Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs: fiveYearData,
      Skill_Based_Hiring: skillData,
      Three_Year_MSc_Tech_Programs: threeYearData,
      Two_Year_Mtech_Programs: twoYearData,
      Two_Year_MBA_Programs: twoYearMbaData,
      Two_Year_MSc_Programs: twoYearMscData,
    },
    Selection_Procedure: {
      Resume_Shortlisting: resumeShortListingData,
      Type_Of_Test: typeOfTestData,
      Other_Qualification_Rounds: otherQualificationsRoundData,
      Total_Number_Of_Rounds: selectionData.Total_Number_Of_Rounds,
      Number_Of_Offers: selectionData.Number_Of_Offers,
      Eligibility_Criteria: selectionData.Eligibility_Criteria,
    },
  });

  const handleCreateNewInf = async (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("token"));

    setInfData((prevData) => ({
      ...prevData,
      Company_Overview: { ...companyFormData },
      Intern_Profile: { ...jobFormData },
      Salary_Details: { ...stipendFormData },
    }));

    try {
      let response = await createNewInf(InfData);
      console.log(response);
      setInfId(response.data.newInf._id);
      console.log(response);
      setPage(prevPage => `${JSON.parse(prevPage) + 1}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateInfById = async (e) => {
    e.preventDefault();

    await setInfData((prevData) => ({
      ...prevData,
      Eligible_Courses_And_Disciplines: {
        ...prevData.Eligible_Courses_And_Disciplines,
        Four_Year_Btech_Programs: { ...fourYearData },
        Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs: { ...fiveYearData },
        Skill_Based_Hiring: { ...skillData },
        Three_Year_MSc_Tech_Programs: { ...threeYearData },
        Two_Year_Mtech_Programs: { ...twoYearData },
        Two_Year_MBA_Programs: { ...twoYearMbaData },
        Two_Year_MSc_Programs: { ...twoYearMscData },
      },
      Selection_Procedure: {
        Resume_Shortlisting: { ...resumeShortListingData},
        Type_Of_Test: { ...typeOfTestData},
        Other_Qualification_Rounds: { ...otherQualificationsRoundData},
        Total_Number_Of_Rounds: selectionData.Total_Number_Of_Rounds,
        Number_Of_Offers: selectionData.Number_Of_Offers,
        Eligibility_Criteria: selectionData.Eligibility_Criteria,
      },
    }));
    console.log(InfData, InfId)
    try {
      let response = await updateInfById(InfData, InfId);

      console.log(response);
      setPage(prevPage => `${JSON.parse(prevPage) + 1}`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(page);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(InfData);

    try {
      let response = await submitInf(InfId);

      console.log(response);
      Navigate('/myjobs');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="INF">
        <TabContext
          value={page}
          style={{ padding: "0", margin: "0", boxSizing: "border-box" }}
        >
          <TabPanel value="1">
            <INF1
              setPage={setPage}
              companyFormData={companyFormData}
              jobFormData={jobFormData}
              stipendFormData={stipendFormData}
              handleCompanyDataChange={handleCompanyDataChange}
              handleJobDataChange={handleJobDataChange}
              handleStipendDataChange={handleStipendDataChange}
              handleCreateNewInf={handleCreateNewInf}
            />
          </TabPanel>
          <TabPanel value={"2"}>
            <INF2
              setPage={setPage}
              fourYearData={fourYearData}
              fiveYearData={fiveYearData}
              skillData={skillData}
              handleFourYearChange={handleFourYearChange}
              handleFiveYearChange={handleFiveYearChange}
              handleSkillChange={handleSkillChange}
              handleUpdateInfById={handleUpdateInfById}
            />
          </TabPanel>
          <TabPanel value={"3"}>
            <INF3
              setPage={setPage}
              threeYearData={threeYearData}
              twoYearData={twoYearData}
              twoYearMbaData={twoYearMbaData}
              twoYearMscData={twoYearMscData}
              handleThreeYearChange={handleThreeYearChange}
              handleTwoYearChange={handleTwoYearChange}
              handleTwoYearMbaChange={handleTwoYearMbaChange}
              handleTwoYearMscChange={handleTwoYearMscChange}
              handleUpdateInfById={handleUpdateInfById}
            />
          </TabPanel>
          <TabPanel value={"4"}>
            <INF4
              setPage={setPage}
              resumeShortListingData={resumeShortListingData}
              typeOfTestData={typeOfTestData}
              otherQualificationsRoundData={otherQualificationsRoundData}
              selectionFormData={selectionFormData}
              handleResumeShortListingChange={handleResumeShortListingChange}
              handleTypeOfTestChange={handleTypeOfTestChange}
              handleOtherQualificationsRoundChange={
                handleOtherQualificationsRoundChange
              }
              handleSelectionDataChange={handleSelectionDataChange}
              handleUpdateInfById={handleUpdateInfById}
            />
          </TabPanel>
          <TabPanel value={"5"}>
            <ReviewInf
            setPage={setPage}
            InfData={InfData}
            handleFormSubmit = {handleFormSubmit}
            />
          </TabPanel>
        </TabContext>
      </div> 
    </>
  );
};

export default Inf;
