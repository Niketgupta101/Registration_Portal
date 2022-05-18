import { TabContext, TabPanel } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import { getjnfById, submitJnf, updateJnfById } from '../../../api';

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

  const companyData = {
    Name_Of_The_Company: '',
    Category_Or_Sector: '',
    Website: '',
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

  const [companyFormData, setCompanyFormData] = useState(companyData);
  const [jobFormData, setJobFormData] = useState(jobData);
  const [salaryFormData, setSalaryFormData] = useState(salaryData);

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
  const handleSalaryDataChange = (e) => {
    setSalaryFormData((prevData) => ({
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

  const selectionData = {
    Total_Number_Of_Rounds: 0,
    Number_Of_Offers: 0,
    Eligibility_Criteria: '',
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
  };
  const handleTypeOfTestChange = (e) => {
    setTypeOfTestData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(typeOfTestData);
  };
  const handleOtherQualificationRoundsChange = (e) => {
    setOtherQualificationRoundsData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    console.log(otherQualificationRoundsData);
  };
  const handleSelectionDataChange = (e) => {
    setSelectionFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // --------------------------------------------------

  // const [JnfId, setJnfId] = useState('');

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

    console.log(response.data);
    setJnfData((prevData) => ({ ...prevData, ...response.data.jnf }));
    setCompanyFormData({ ...response.data.jnf.Company_Overview });
    setJobFormData({ ...response.data.jnf.Job_Details });
    setSalaryFormData({ ...response.data.jnf.Salary_Details });
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
  };

  useEffect(() => {
    if (JnfId) fetchInfData(JnfId);
  }, [JnfId]);

  const handleUpdateJnfById = async (e) => {
    e.preventDefault();

    setJnfData((prevData) => ({
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
        Resume_Shortlisting: { ...resumeShortListingData },
        Type_Of_Test: { ...typeOfTestData },
        Other_Qualification_Rounds: { ...otherQualificationRoundsData },
        Total_Number_Of_Rounds: selectionFormData.Total_Number_Of_Rounds,
        Number_Of_Offers: selectionFormData.Number_Of_Offers,
        Eligibility_Criteria: selectionFormData.Eligibility_Criteria,
      },
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
      Navigate('/myjobs');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TabContext value={page}>
        <TabPanel value='1'>
          <JNF1
            setPage={setPage}
            companyFormData={companyFormData}
            jobFormData={jobFormData}
            salaryFormData={salaryFormData}
            handleCompanyDataChange={handleCompanyDataChange}
            handleJobDataChange={handleJobDataChange}
            handleSalaryDataChange={handleSalaryDataChange}
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
      {isLoading && <Loading />}
    </>
  );
};

export default Jnf;
