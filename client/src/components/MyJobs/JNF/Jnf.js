import { TabContext, TabPanel } from '@mui/lab';
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { getjnfById, submitJnf, updateJnfById } from '../../../api';
=======
import { getJnfById, submitJnf, updateJnfById } from '../../../api';
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf

import './styles.css';

import ReviewJnf from './ReviewJnf/ReviewJnf';
import JNF1 from './page1/JNF1';
import JNF2 from './page2/JNF2';
// import JNF3 from './page3/JNF3';
import JNF4 from './page4/JNF4';

import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const Jnf = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState('1');
  const Navigate = useNavigate();

  const { JnfId } = useParams();

  const company = JSON.parse(localStorage.getItem('company'));

  const companyData = {
    Name_Of_The_Company: company[0].name,
    Category_Or_Sector: '',
    Website: company[0].website,
  };
  const jobData = {
    Job_Designation: '',
    Job_Description: '',
    Place_Of_Posting: '',
  };
  const salaryData = {
    CTC_Breakup: '',
    Bond_Details: '',
    CTC: '',
  };
<<<<<<< HEAD

  const [companyFormData, setCompanyFormData] = useState(companyData);
  const [jobFormData, setJobFormData] = useState(jobData);
  const [salaryFormData, setSalaryFormData] = useState(salaryData);
  const [hrDetails, setHrDetails] = useState({});
=======
  const hrData = {
    Primary_Hr: {
      name: "",
      email: "",
      mobile: "",
    },
    Alternate_Hr: {
      name: "",
      email: "",
      mobile: "",
    },
  };

  const [companyFormData, setCompanyFormData] = useState({ ...companyData });
  const [jobFormData, setJobFormData] = useState({ ...jobData });
  const [salaryFormData, setSalaryFormData] = useState({ ...salaryData });
  const [hrDetails, setHrDetails] = useState({ ...hrData });
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf

  const handleCompanyDataChange = (e) => {
    console.log({ e: e.target.name, value: e.target.value });
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
  const handleSalaryDataChange = (e) => {
    setSalaryFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleHrDetailsChange = (type, name, value) => {
    setHrDetails((prevData) => ({
      ...prevData,
      [type]: { ...prevData[type], [name]: value },
    }));
  };
  useEffect(() => {
    // console.log(companyFormData);
  }, [companyFormData]);

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
<<<<<<< HEAD
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
=======
    if (e.target.name === "Select_All") {
      let newValue = !fourYearData[e.target.name];
      // setFourYearData((prevData) => ({
      //   ...prevData,
      //   [e.target.name]: e.target.checked ? true : false,
      // }));
      for (let i in fourYearData) {
        setFourYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
      // setFourYearData((prevData) => {
      //   for (let i in prevData) {
      //     prevData[i] = newValue;
      //   }
      //   return prevData;
      // });
    } else {
      setFourYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
  };
  const handleFiveYearChange = (e) => {
    if (e.target.name === "Select_All") {
      let newValue = !fiveYearData[e.target.name];
      for (let i in fiveYearData) {
        setFiveYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
    } else {
      setFiveYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
  };
  const handleSkillChange = (e) => {
    setSkillData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
<<<<<<< HEAD
    console.log(skillData);
  };

=======
  };

  useEffect(() => {
    console.log(fourYearData);
  }, [fourYearData]);

>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
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
<<<<<<< HEAD
    Fuel_Minerals_and_Metallurgical_Engineering: false,
=======
    Fuel_Minerals_and_Metallurgical_Engineering: false, 
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
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
<<<<<<< HEAD
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
=======
    if (e.target.name === "Select_All") {
      let newValue = !threeYearData[e.target.name];
      for (let i in threeYearData) {
        setThreeYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
    } else {
      setThreeYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
    //console.log(threeYearData);
  };
  const handleTwoYearChange = (e) => {
    if (e.target.name === "Select_All") {
      let newValue = !twoYearData[e.target.name];
      for (let i in twoYearData) {
        setTwoYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
    } else {
      setTwoYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
      //console.log(twoYearData);
    }
  };
  const handleTwoYearMbaChange = (e) => {
    if (e.target.name === "Select_All") {
      let newValue = !twoYearMbaData[e.target.name];
      for (let i in twoYearMbaData) {
        setTwoYearMbaData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
    } else {
      setTwoYearMbaData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
    //console.log(twoYearMbaData);
  };
  const handleTwoYearMscChange = (e) => {
    if (e.target.name === "Select_All") {
      let newValue = !twoYearMscData[e.target.name];
      for (let i in twoYearMscData) {
        setTwoYearMscData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
    } else {
      setTwoYearMscData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
    //console.log(twoYearMscData);
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
  };

  // ------------------------------------------------------------

  const selectionData = {
<<<<<<< HEAD
    Total_Number_Of_Rounds: 0,
    Number_Of_Offers: 0,
    Eligibility_Criteria: '',
=======
    Total_Number_Of_Rounds: "",
    Number_Of_Offers: "",
    Eligibility_Criteria: "",
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
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
  const [otherQualificationRoundsData, setOtherQualificationRoundsData] =
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
<<<<<<< HEAD
=======
    setJnfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        Resume_Shortlisting: {
          ...prevData.Selection_Procedure.Resume_Shortlisting,
          [e.target.name]: e.target.checked ? true : false,
        },
      },
    }));
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
  };
  const handleTypeOfTestChange = (e) => {
    setTypeOfTestData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
<<<<<<< HEAD
=======
    setJnfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        Type_Of_Test: {
          ...prevData.Selection_Procedure.Type_Of_Test,
          [e.target.name]: e.target.checked ? true : false,
        },
      },
    }));
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
    console.log(typeOfTestData);
  };
  const handleOtherQualificationRoundsChange = (e) => {
    setOtherQualificationRoundsData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(otherQualificationRoundsData);
<<<<<<< HEAD
=======
    setJnfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        Other_Qualification_Rounds: {
          ...prevData.Selection_Procedure.Other_Qualification_Rounds,
          [e.target.name]: e.target.checked ? true : false,
        },
      },
    }));
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
  };
  const handleSelectionDataChange = (e) => {
    setSelectionFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
<<<<<<< HEAD
=======
    setJnfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        [e.target.name]: e.target.value,
      },
    }));
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
  };

  // --------------------------------------------------

  // const [JnfId, setJnfId] = useState('');

<<<<<<< HEAD
  const [JnfData, setJnfData] = useState({
    Company_Overview: companyFormData,
    Job_Details: jobFormData,
    Salary_Details: salaryFormData,
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
      Other_Qualification_Rounds: otherQualificationRoundsData,
      Total_Number_Of_Rounds: selectionFormData.Total_Number_Of_Rounds,
      Number_Of_Offers: selectionFormData.Number_Of_Offers,
      Eligibility_Criteria: selectionFormData.Eligibility_Criteria,
    },
  });

  const fetchInfData = async (JnfId) => {
    const response = await getjnfById(JnfId);
=======
  const [JnfData, setJnfData] = useState({});

  const fetchJnfData = async (JnfId) => {
    const response = await getJnfById(JnfId);
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf

    console.log(response.data);
    setJnfData((prevData) => ({ ...prevData, ...response.data.jnf }));
    // setCompanyFormData({ ...response.data.jnf.Company_Overview });
    setJobFormData({ ...response.data.jnf.Job_Details });
    setSalaryFormData({ ...response.data.jnf.Salary_Details });
    setHrDetails({ ...response.data.jnf.HR_Details });
    setFourYearData({
      ...response.data.jnf.Eligible_Courses_And_Disciplines
        .Four_Year_Btech_Programs,
    });
    setFiveYearData({
      ...response.data.jnf.Eligible_Courses_And_Disciplines
        .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs,
    });
    setSkillData({
      ...response.data.jnf.Eligible_Courses_And_Disciplines.Skill_Based_Hiring,
    });
    setThreeYearData({
      ...response.data.jnf.Eligible_Courses_And_Disciplines
        .Three_Year_MSc_Tech_Programs,
    });
    setTwoYearData({
      ...response.data.jnf.Eligible_Courses_And_Disciplines
        .Two_Year_Mtech_Programs,
    });
    setTwoYearMbaData({
      ...response.data.jnf.Eligible_Courses_And_Disciplines
        .Two_Year_MBA_Programs,
    });
    setTwoYearMscData({
      ...response.data.jnf.Eligible_Courses_And_Disciplines
        .Two_Year_MSc_Programs,
    });
    setResumeShortListingData({
      ...response.data.jnf.Selection_Procedure.Resume_Shortlisting,
    });
    setTypeOfTestData({
      ...response.data.jnf.Selection_Procedure.Type_Of_Test,
    });
    setOtherQualificationRoundsData({
      ...response.data.jnf.Selection_Procedure.Other_Qualification_Rounds,
    });
    setSelectionFormData({
      Total_Number_Of_Rounds:
        response.data.jnf.Selection_Procedure.Total_Number_Of_Rounds,
      Number_Of_Offers: response.data.jnf.Selection_Procedure.Number_Of_Offers,
      Eligibility_Criteria:
        response.data.jnf.Selection_Procedure.Eligibility_Criteria,
    });
    console.log({ companyFormData });
<<<<<<< HEAD
  };

  useEffect(() => {
    if (JnfId) fetchInfData(JnfId);
  }, [JnfId]);
=======
    setJnfData({ ...response.data.jnf });
  };

  useEffect(() => {
    if (JnfId) fetchJnfData(JnfId);
  }, [JnfId]); 
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf

  const handleUpdateJnfById = async (e) => {
    e.preventDefault();

    setJnfData((prevData) => ({
      ...prevData,
      Company_Overview: { ...companyFormData },
      Job_Details: { ...jobFormData },
      Salary_Details: { ...salaryFormData },
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
<<<<<<< HEAD
      Selection_Procedure: {
        Resume_Shortlisting: { ...resumeShortListingData },
        Type_Of_Test: { ...typeOfTestData },
        Other_Qualification_Rounds: { ...otherQualificationRoundsData },
        Total_Number_Of_Rounds: selectionFormData.Total_Number_Of_Rounds,
        Number_Of_Offers: selectionFormData.Number_Of_Offers,
        Eligibility_Criteria: selectionFormData.Eligibility_Criteria,
      },
=======
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
    }));

    try {
      setIsLoading(true);
      let response = await updateJnfById(JnfData, JnfId);
      setIsLoading(false);
      console.log(response);
      setPage((prevPage) => `${JSON.parse(prevPage) + 1}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(JnfData);

    try {
      setIsLoading(true);
      let response = await submitJnf(JnfId);
      setIsLoading(false);
      console.log(response);
<<<<<<< HEAD
      Navigate('/myjobs');
=======
      Navigate("/myjobs");
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
<<<<<<< HEAD
      <TabContext value={page}>
=======
    <div className="JNF">
      <TabContext value={page} style={{ padding: "0", margin: "0", boxSizing: "border-box" }}>
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
        <TabPanel value='1'>
          <JNF1
            setPage={setPage}
            companyFormData={companyFormData}
            jobFormData={jobFormData}
            salaryFormData={salaryFormData}
            hrDetails={hrDetails}
            handleCompanyDataChange={handleCompanyDataChange}
            handleJobDataChange={handleJobDataChange}
            handleSalaryDataChange={handleSalaryDataChange}
            handleHrDetailsChange={handleHrDetailsChange}
            handleUpdateJnfById={handleUpdateJnfById}
          />
        </TabPanel>
        <TabPanel value={'2'}>
          <JNF2
            setPage={setPage}
            fourYearData={fourYearData}
            fiveYearData={fiveYearData}
            skillData={skillData}
            handleFourYearChange={handleFourYearChange}
            handleFiveYearChange={handleFiveYearChange}
            handleSkillChange={handleSkillChange}
            handleUpdateJnfById={handleUpdateJnfById}
            threeYearData={threeYearData}
            twoYearData={twoYearData}
            twoYearMbaData={twoYearMbaData}
            twoYearMscData={twoYearMscData}
            handleThreeYearChange={handleThreeYearChange}
            handleTwoYearChange={handleTwoYearChange}
            handleTwoYearMbaChange={handleTwoYearMbaChange}
            handleTwoYearMscChange={handleTwoYearMscChange}
          />
        </TabPanel>
        {/* <TabPanel value={"3"}>
          <JNF3
            setPage={setPage}
            threeYearData={threeYearData}
            twoYearData={twoYearData}
            twoYearMbaData={twoYearMbaData}
            twoYearMscData={twoYearMscData}
            handleThreeYearChange={handleThreeYearChange}
            handleTwoYearChange={handleTwoYearChange}
            handleTwoYearMbaChange={handleTwoYearMbaChange}
            handleTwoYearMscChange={handleTwoYearMscChange}
            handleUpdateJnfById={handleUpdateJnfById}
          />
        </TabPanel> */}
        <TabPanel value={'3'}>
          <JNF4
            setPage={setPage}
            resumeShortListingData={resumeShortListingData}
            typeOfTestData={typeOfTestData}
            otherQualificationRoundsData={otherQualificationRoundsData}
            selectionFormData={selectionFormData}
            handleResumeShortListingChange={handleResumeShortListingChange}
            handleTypeOfTestChange={handleTypeOfTestChange}
            handleOtherQualificationRoundsChange={
              handleOtherQualificationRoundsChange
            }
            handleSelectionDataChange={handleSelectionDataChange}
            handleUpdateJnfById={handleUpdateJnfById}
          />
        </TabPanel>
        <TabPanel value={'4'}>
          <ReviewJnf
            setPage={setPage}
            JnfData={JnfData}
            handleFormSubmit={handleFormSubmit}
          />
        </TabPanel>
      </TabContext>
<<<<<<< HEAD
=======
      </div>
>>>>>>> e254e0a9edf1ac772fcd6b9999f2138206b32baf
      {isLoading && <Loading />}
    </>
  );
};

export default Jnf;
