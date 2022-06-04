import { TabContext, TabPanel } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import { getInfById, submitInf, updateInfById } from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';

import INF1 from './page1/INF1';
import INF2 from './page2/INF2';
import INF4 from './page4/INF4';
import ReviewInf from './ReviewInf/ReviewInf';

import './styles.css';
import Loading from '../../Loading/Loading';

const Inf = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState('1');
  const Navigate = useNavigate();

  const { InfId } = useParams();

  let user = JSON.parse(localStorage.getItem('user'));
  const company = JSON.parse(localStorage.getItem('company'));

  useEffect(() => {
    if (
      !user ||
      user.isemailVerified === false ||
      !company ||
      company.length === 0
    ) {
      Navigate('/auth');
    }
  }, [Navigate, user]);

  let companyData;
  if (company && company.length !== 0) {
    companyData = {
      Name_Of_The_Company: company[0]?.name,
      Category_Or_Sector: '',
      Category: company[0]?.categoryData,
      Sector: company[0]?.sectorData,
      About: company[0]?.about,
      Website: company[0]?.website,
    };
  }
  const jobData = {
    Internship_Duration: `Jan – June 2022 Dual Degree/ Integrated M. Tech courses only (2022 batch)`,
    Job_Designation: '',
    Job_Description: '',
    Mode_Of_Internship: 'Virtual',
    Place_Of_Posting: '',
  };
  const stipendData = {
    Salary_Per_Month: '',
    Salary_Unit: '',
    PPO_provision_on_performance_basis: 'Yes',
    CTC: '',
  };
  const hrData = {
    Primary_Hr: {
      name: '',
      email: '',
      mobile: '',
    },
    Alternate_Hr: {
      name: '',
      email: '',
      mobile: '',
    },
  };

  const [companyFormData, setCompanyFormData] = useState({ ...companyData });
  const [jobFormData, setJobFormData] = useState({ ...jobData });
  const [stipendFormData, setStipendFormData] = useState({ ...stipendData });
  const [hrDetails, setHrDetails] = useState({ ...hrData });

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
  const handleHrDetailsChange = (type, name, value) => {
    setHrDetails((prevData) => ({
      ...prevData,
      [type]: { ...prevData[type], [name]: value },
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
    if (e.target.name !== 'Select_All' && fourYearData.Select_All === true) {
      setFourYearData((prevData) => ({
        ...prevData,
        Select_All: false,
        [e.target.name]: e.target.checked ? true : false,
      }));
    } else if (e.target.name === 'Select_All') {
      let newValue = !fourYearData[e.target.name];
      for (let i in fourYearData) {
        setFourYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
    } else {
      setFourYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
  };
  const handleFiveYearChange = (e) => {
    if (e.target.name !== 'Select_All' && fiveYearData.Select_All === true) {
      setFiveYearData((prevData) => ({
        ...prevData,
        Select_All: false,
        [e.target.name]: e.target.checked ? true : false,
      }));
    } else if (e.target.name === 'Select_All') {
      let newValue = !fiveYearData[e.target.name];
      for (let i in fiveYearData) {
        setFiveYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
    } else {
      setFiveYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
  };
  const handleSkillChange = (e) => {
    setSkillData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
  };

  useEffect(() => {}, [fourYearData]);

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
    if (e.target.name !== 'Select_All' && threeYearData.Select_All === true) {
      setThreeYearData((prevData) => ({
        ...prevData,
        Select_All: false,
        [e.target.name]: e.target.checked ? true : false,
      }));
    } else if (e.target.name === 'Select_All') {
      let newValue = !threeYearData[e.target.name];
      for (let i in threeYearData) {
        setThreeYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
    } else {
      setThreeYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
  };
  const handleTwoYearChange = (e) => {
    if (e.target.name !== 'Select_All' && twoYearData.Select_All === true) {
      setTwoYearData((prevData) => ({
        ...prevData,
        Select_All: false,
        [e.target.name]: e.target.checked ? true : false,
      }));
    } else if (e.target.name === 'Select_All') {
      let newValue = !twoYearData[e.target.name];
      for (let i in twoYearData) {
        setTwoYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
    } else {
      setTwoYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
  };
  const handleTwoYearMbaChange = (e) => {
    if (e.target.name !== 'Select_All' && twoYearMbaData.Select_All === true) {
      setTwoYearMbaData((prevData) => ({
        ...prevData,
        Select_All: false,
        [e.target.name]: e.target.checked ? true : false,
      }));
    } else if (e.target.name === 'Select_All') {
      let newValue = !twoYearMbaData[e.target.name];
      for (let i in twoYearMbaData) {
        setTwoYearMbaData((prevData) => ({ ...prevData, [i]: newValue }));
      }
    } else {
      setTwoYearMbaData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
  };
  const handleTwoYearMscChange = (e) => {
    if (e.target.name !== 'Select_All' && twoYearMscData.Select_All === true) {
      setTwoYearMscData((prevData) => ({
        ...prevData,
        Select_All: false,
        [e.target.name]: e.target.checked ? true : false,
      }));
    } else if (e.target.name === 'Select_All') {
      let newValue = !twoYearMscData[e.target.name];
      for (let i in twoYearMscData) {
        setTwoYearMscData((prevData) => ({ ...prevData, [i]: newValue }));
      }
    } else {
      setTwoYearMscData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
  };

  // ------------------------------------------------------------
  const selectionData = {
    Total_Number_Of_Rounds: '',
    Number_Of_Offers: '',
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
  const priorityData = {
    Priority_One: '',
    Priority_Two: '',
  };
  const [priorityFormData, setPriorityFormData] = useState({ ...priorityData });
  const handlePriorityDataChange = (e) => {
    setPriorityFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const [selectionFormData, setSelectionFormData] = useState(selectionData);

  const handleResumeShortListingChange = (e) => {
    if (e.target.value == 1) {
      setResumeShortListingData((prevData) => ({
        Yes: false,
        No: true,
      }));
      setInfData((prevData) => ({
        ...prevData,
        Selection_Procedure: {
          ...prevData.Selection_Procedure,
          Resume_Shortlisting: {
            Yes: false,
            No: true,
          },
        },
      }));
    }
    if (e.target.value == 0) {
      setResumeShortListingData((prevData) => ({
        Yes: true,
        No: false,
      }));
      setInfData((prevData) => ({
        ...prevData,
        Selection_Procedure: {
          ...prevData.Selection_Procedure,
          Resume_Shortlisting: {
            Yes: true,
            No: false,
          },
        },
      }));
    }
  };
  const handleTypeOfTestChange = (e) => {
    let temp = {
      Technical: false,
      Aptitude: false,
      Both: false,
      None: false,
    };
    switch (e.target.value) {
      case '0':
        temp.Technical = true;
        break;
      case '1':
        temp.Aptitude = true;
        break;
      case '2':
        temp.Both = true;
        break;
      default:
        temp.None = true;
        break;
    }
    setTypeOfTestData(temp);
    setInfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        Type_Of_Test: {
          Technical: temp.Technical,
          Aptitude: temp.Aptitude,
          Both: temp.Both,
          None: temp.None,
        },
      },
    }));
  };
  const handleOtherQualificationRoundsChange = (e) => {
    setOtherQualificationRoundsData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    setInfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        Other_Qualification_Rounds: {
          ...prevData.Selection_Procedure.Other_Qualification_Rounds,
          [e.target.name]: e.target.checked ? true : false,
        },
      },
    }));
  };
  const handleSelectionDataChange = (e) => {
    setSelectionFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setInfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        [e.target.name]: e.target.value,
      },
    }));
  };

  useEffect(() => {}, [resumeShortListingData]);

  useEffect(() => {}, [typeOfTestData]);

  useEffect(() => {}, [otherQualificationRoundsData]);

  useEffect(() => {}, [selectionFormData]);

  // --------------------------------------------------

  // const [InfId, setInfId] = useState('');

  const [InfData, setInfData] = useState({});

  const fetchInfData = async (InfId) => {


    try {
      const response = await getInfById(InfId);

      setInfData((prevData) => ({ ...prevData, ...response.data.inf }));
      // setCompanyFormData({ ...response.data.inf.Company_Overview });
      setJobFormData({ ...response.data.inf.Intern_Profile });
      setStipendFormData({ ...response.data.inf.Salary_Details });
      setHrDetails({ ...response.data.inf.HR_Details });
      setPriorityFormData({ ...response.data.inf.Priority_Details });
      setFourYearData({
        ...response.data.inf.Eligible_Courses_And_Disciplines
          .Four_Year_Btech_Programs,
      });
      setFiveYearData({
        ...response.data.inf.Eligible_Courses_And_Disciplines
          .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs,
      });
      setSkillData({
        ...response.data.inf.Eligible_Courses_And_Disciplines.Skill_Based_Hiring,
      });
      setThreeYearData({
        ...response.data.inf.Eligible_Courses_And_Disciplines
          .Three_Year_MSc_Tech_Programs,
      });
      setTwoYearData({
        ...response.data.inf.Eligible_Courses_And_Disciplines
          .Two_Year_Mtech_Programs,
      });
      setTwoYearMbaData({
        ...response.data.inf.Eligible_Courses_And_Disciplines
          .Two_Year_MBA_Programs,
      });
      setTwoYearMscData({
        ...response.data.inf.Eligible_Courses_And_Disciplines
          .Two_Year_MSc_Programs,
      });
      setResumeShortListingData({
        ...response.data.inf.Selection_Procedure.Resume_Shortlisting,
      });
      setTypeOfTestData({
        ...response.data.inf.Selection_Procedure.Type_Of_Test,
      });
      setOtherQualificationRoundsData({
        ...response.data.inf.Selection_Procedure.Other_Qualification_Rounds,
      });
      setSelectionFormData({
        Total_Number_Of_Rounds:
          response.data.inf.Selection_Procedure.Total_Number_Of_Rounds,
        Number_Of_Offers: response.data.inf.Selection_Procedure.Number_Of_Offers,
        Eligibility_Criteria:
          response.data.inf.Selection_Procedure.Eligibility_Criteria,
      });
      setInfData({ ...response.data.inf });
    } catch (error) {
      Navigate("/badgateway");
    }


   
  };

  useEffect(() => {
    if (InfId) fetchInfData(InfId);
  }, [InfId]);

  const handleUpdateInfById = async (e) => {
    e.preventDefault();

    setInfData((prevData) => ({
      ...prevData,
      Company_Overview: { ...companyFormData },
      Intern_Profile: { ...jobFormData },
      Salary_Details: { ...stipendFormData },
      HR_Details: { ...hrDetails },
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
      Priority_Details: { ...priorityFormData },
    }));
    try {
      setIsLoading(true);
      let response = await updateInfById(InfData, InfId);
      setIsLoading(false);

      setPage((prevPage) => `${JSON.parse(prevPage) + 1}`);
    } catch (error) {
      Navigate("/badgateway");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      let response = await submitInf(InfId);
      setIsLoading(false);
      Navigate('/myjobs');
    } catch (error) {
      setIsLoading(false);
      Navigate("/badgateway");
    }
  };

  // -----------------------------------------------------------------

  // useEffect(async() => {
  //   let response = await getLatestInfOfUser();

  // }, [])

  return (
    <>
      <div className='INF'>
        <TabContext
          value={page}
          style={{ padding: '0', margin: '0', boxSizing: 'border-box' }}
        >
          <TabPanel value='1'>
            <INF1
              setPage={setPage}
              companyFormData={companyFormData}
              jobFormData={jobFormData}
              stipendFormData={stipendFormData}
              hrDetails={hrDetails}
              handleCompanyDataChange={handleCompanyDataChange}
              handleJobDataChange={handleJobDataChange}
              handleStipendDataChange={handleStipendDataChange}
              handleHrDetailsChange={handleHrDetailsChange}
              handleUpdateInfById={handleUpdateInfById}
            />
          </TabPanel>
          <TabPanel value={'2'}>
            <INF2
              setPage={setPage}
              fourYearData={fourYearData}
              fiveYearData={fiveYearData}
              skillData={skillData}
              handleFourYearChange={handleFourYearChange}
              handleFiveYearChange={handleFiveYearChange}
              handleSkillChange={handleSkillChange}
              handleUpdateInfById={handleUpdateInfById}
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
          </TabPanel> */}
          <TabPanel value={'3'}>
            <INF4
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
              handleUpdateInfById={handleUpdateInfById}
              priorityFormData={priorityFormData}
              handlePriorityDataChange={handlePriorityDataChange}
            />
          </TabPanel>
          <TabPanel value={'4'}>
            <ReviewInf
              setPage={setPage}
              InfData={InfData}
              handleFormSubmit={handleFormSubmit}
            />
          </TabPanel>
        </TabContext>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default Inf;
