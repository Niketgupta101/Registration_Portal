import React from "react";
import { Form, FormGroup, Label, Col } from "reactstrap";
import "./styles.css";
const style = { alignItems: "center" };


const structure = ({ JnfData, setPage, handleFormSubmit }) => {
  return (
    <div className="overallDiv1">
      <div>
        <header className="headerText1">
          JOB NOTIFICATION FORM (2022-2023)
        </header>
      </div>
      <Form>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Name of the Company
          </Label>
          <Col sm={10}>
            <h1 className="inputText">
              {JnfData.Company_Overview.Name_Of_The_Company}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Category/Sector
          </Label>
          <Col sm={10}>
            <h1 className="inputText">
              {JnfData.Company_Overview.Category_Or_Sector}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Website
          </Label>
          <Col sm={10}>
            <h1 className="inputText">{JnfData.Company_Overview.Website}</h1>
          </Col>
        </FormGroup>
        <div>
          <header className="headerText">JOB DETAILS</header>
        </div>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Job Designation
          </Label>
          <Col sm={10}>
            <h1 className="inputText">
              {JnfData.Intern_Profile.Job_Designation}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Job Description
          </Label>
          <Col sm={10}>
            <h1 className="inputText">
              {JnfData.Intern_Profile.Job_Description}
            </h1>
          </Col>
        </FormGroup>
        <div>
          <header className="headerText">SALARY DETAILS</header>
        </div>
        <FormGroup row style={style}>
          <Label
            for="exampleText"
            sm={2}
            text-colour="blue"
            className="fontText"
          >
            CTC
          </Label>
          <Col sm={10}>
            <h1 className="inputText">
              {JnfData.Salary_Details.CTC}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleSelect" sm={2} className="fontText">
            CTC Breakup
          </Label>
          <Col sm={10}>
            <h1 className="inputText">
              {JnfData.Salary_Details.CTC_Breakup}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row style={style}>
          <Label for="exampleText" sm={2} className="fontText">
            Bond Details
          </Label>
          <Col sm={10}>
            <h1 className="inputText">{JnfData.Bond_Details.CTC}</h1>
          </Col>
        </FormGroup>
        <div>
          <header className="headerText">
            Eligible courses and disciplines
          </header>
        </div>
        <div className="startText">
          (List of courses and disciplines offered at IIT (ISM) are shown below.
          Please highlight or check by clicking as per your requirement)
        </div>
        <div className="startTextBold">4-Year B.Tech Programs</div>
        <div className="startTextBoldSmall">
          Admitted through JEE (Advanced)
        </div>
        <table>
          <tbody id="Four_Year">
            <tr>
              <td className="courseName">Select All</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Select_All"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Select_All
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Chemical Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Chemical_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Chemical_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Civil Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Civil_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Civil_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Computer Science and Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Computer_Science_and_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Computer_Science_and_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Electrical Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Electrical_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Electrical_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">
                Electronics & Communication Engineering
              </td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Electronics_and_Communication_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs
                      .Electronics_and_Communication_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Engineering Physics</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Engineering_Physics"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Engineering_Physics
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Environmental Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Environmental_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Environmental_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mechanical Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Mechanical_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Mechanical_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">
                Mineral & Metallurgical Engineering
              </td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Mineral_and_Metallurgical_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs
                      .Mineral_and_Metallurgical_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mining Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Mining_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Mining_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mining Machinery Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Mining_Machinery_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Mining_Machinery_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Petroleum Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Petroleum_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Four_Year_Btech_Programs.Petroleum_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="startTextBold">
          5-Year Dual Degree/ Integrated M.Tech Programs
        </div>
        <div className="startTextBoldSmall">
          Admitted through JEE (Advanced)
        </div>
        <table>
          <tbody id="Five_Year">
            <tr>
              <td className="courseName">Select All</td>
              <td className="courseCheckBox5year">
                <input
                  name="Select_All"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs
                      .Select_All
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Computer Science and Engineering</td>
              <td className="courseCheckBox5year">
                <input
                  name="Computer_Science_and_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs
                      .Computer_Science_and_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mathematics & Computing</td>
              <td className="courseCheckBox5year">
                <input
                  name="Mathematics_and_Computing"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs
                      .Mathematics_and_Computing
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geology</td>
              <td className="courseCheckBox5year">
                <input
                  name="Applied_Geology"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs
                      .Applied_Geology
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geophysics</td>
              <td className="courseCheckBox5year">
                <input
                  name="Applied_Geophysics"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs
                      .Applied_Geophysics
                  }
                  type="checkbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="startTextBold">Skill Based Hiring</div>
        <div className="startTextBoldSmall">
          Students with certified technical expertise in the following skills
          (from Coursera, Udemy etc.)
        </div>
        <table>
          <tbody id="Skill">
            <tr>
              <td className="courseName">C, C++, Java, Python etc.</td>
              <td className="courseCheckBoxSkill">
                <input
                  name="C_Cpp_Java_Python_etc"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines.Skill_Based_Hiring
                      .C_Cpp_Java_Python_etc
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">
                Full Stack Development (Frontend/Backend)
              </td>
              <td className="courseCheckBoxSkill">
                <input
                  name="Full_Stack_Development_Frontend_or_Backend"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines.Skill_Based_Hiring
                      .Full_Stack_Development_Frontend_or_Backend
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Civil Engineering</td>
              <td className="courseCheckBoxSkill">
                <input
                  name="Civil_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines.Skill_Based_Hiring
                      .Civil_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">AI/ML/DL, Data Science</td>
              <td className="courseCheckBoxSkill">
                <input
                  name="AI_ML_DL_Data_Science"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines.Skill_Based_Hiring
                      .AI_ML_DL_Data_Science
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">
                Business/Data Analytics, Product Management
              </td>
              <td className="courseCheckBoxSkill">
                <input
                  name="Business_Data_Analytics_Product_Management"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines.Skill_Based_Hiring
                      .Business_Data_Analytics_Product_Management
                  }
                  type="checkbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <header className="headerText">
            Eligible courses and disciplines
          </header>
        </div>
        <div className="startText">
          (List of courses and disciplines offered at IIT (ISM) are shown below.
          Please highlight or check by clicking as per your requirement)
        </div>
        <div className="startTextBold">3-Year MSc.Tech Programs</div>
        <div className="startTextBoldSmall">
          Admitted through <b>JAM</b>
        </div>
        <table>
          <tbody id="Three_Year">
            <tr>
              <td className="courseName">Select All</td>
              <td className="courseCheckBox3MSc">
                <input
                  name="Select_All"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Three_Year_MSc_Tech_Programs.Select_All
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geology</td>
              <td className="courseCheckBox3MSc">
                <input
                  name="Applied_Geology"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Three_Year_MSc_Tech_Programs.Applied_Geology
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geophysics</td>
              <td className="courseCheckBox3MSc">
                <input
                  name="Applied_Geophysics"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Three_Year_MSc_Tech_Programs.Applied_Geophysics
                  }
                  type="checkbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="startTextBold">2-Year M.Tech Programs</div>
        <div className="startTextBoldSmall">
          Admitted through <b>GATE</b>
        </div>
        <table>
          <tbody id="Two_Year">
            <tr>
              <td className="courseName">Select All</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Select_All"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Select_All
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geology</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Applied_Geology"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Applied_Geology
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geophysics</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Applied_Geophysics"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Applied_Geophysics
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Chemical Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Chemical_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Chemical_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Civil Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Civil_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Civil_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Computer Science and Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Computer_Science_and_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Computer_Science_and_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Data Analytics</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Data_Analytics"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Data_Analytics
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Electrical Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Electrical_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Electrical_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">
                Electronics & Communication Engineering
              </td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Electronics_and_Communication_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs
                      .Electronics_and_Communication_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Environmental Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Environmental_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Environmental_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">
                Industrial Engineering & Management
              </td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Industrial_Engineering_and_Management"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs
                      .Industrial_Engineering_and_Management
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mechanical Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Mechanical_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Mechanical_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">
                Fuel, Minerals & Metallurgical Engineering
              </td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Fuel_Minerals_and_Metallurgical_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs
                      .Fuel_Minerals_and_Metallurgical_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mining Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Mining_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Mining_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mining Machinery Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Mining_Machinery_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Mining_Machinery_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Petroleum Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Petroleum_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs.Petroleum_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">
                Pharmaceutical Science & Engineering
              </td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Pharmaceutical_Science_and_Engineering"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_Mtech_Programs
                      .Pharmaceutical_Science_and_Engineering
                  }
                  type="checkbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="startTextBold">2-Year MBA Programs</div>
        <div className="startTextBoldSmall">
          Admitted through <b>CAT</b>
        </div>
        <table>
          <tbody id="Two_Year_Mba">
            <tr>
              <td className="courseName">Select All</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Select_All"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_MBA_Programs.Select_All
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Business Analytics</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Business_Analytics"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_MBA_Programs.Business_Analytics
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Finance</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Finance"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_MBA_Programs.Finance
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Human Resources</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Human_Resources"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_MBA_Programs.Human_Resources
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Marketing</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Marketing"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_MBA_Programs.Marketing
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Operations</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Operations"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_MBA_Programs.Operations
                  }
                  type="checkbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="startTextBold">2-Year M.Sc. Programs</div>
        <div className="startTextBoldSmall">
          Admitted through <b>JAM</b>
        </div>
        <table>
          <tbody id="Two_Year_Msc">
            <tr>
              <td className="courseName">Select All</td>
              <td className="courseCheckBox2Msc">
                <input
                  name="Select_All"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_MSc_Programs.Select_All
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Chemistry</td>
              <td className="courseCheckBox2Msc">
                <input
                  name="Chemistry"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_MSc_Programs.Chemistry
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mathematics & Computing</td>
              <td className="courseCheckBox2Msc">
                <input
                  name="Mathematics_and_Computing"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_MSc_Programs.Mathematics_and_Computing
                  }
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Physics</td>
              <td className="courseCheckBox2Msc">
                <input
                  name="Physics"
                  checked={
                    JnfData.Eligible_Courses_And_Disciplines
                      .Two_Year_MSc_Programs.Physics
                  }
                  type="checkbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div> 
          <header className="headerText">SELECTION PROCEDURE</header>
        </div>
        <table>
          <tbody id="Selection_Procedure">
            <tr
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <td
                className="fontText"
                style={{ fontWeight: "700", margin: "0.5rem auto" }}
              >
                Resume Shortlisting
              </td>
              <td>
                <hr />
              </td>
              <td style={{ flexBasis: "70%" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="align">
                    <label className="resume">Yes</label>
                    <input
                      className="checkBox"
                      name="Yes"
                      checked={
                        JnfData.Selection_Procedure.Resume_Shortlisting.Yes
                      }
                      type="checkbox"
                    />
                  </div>
                  <div className="align">
                    <label className="resume">No</label>
                    <input
                      className="checkBox"
                      name="No"
                      checked={
                        JnfData.Selection_Procedure.Resume_Shortlisting.No
                      }
                      type="checkbox"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <td
                className="fontText"
                style={{ fontWeight: "700", margin: "0.5rem auto" }}
              >
                Type of Test
              </td>
              <td>
                <hr />
              </td>
              <td style={{ flexBasis: "70%" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <label className="type">Technical </label>
                    <input
                      className="checkBox"
                      name="Technical"
                      checked={
                        JnfData.Selection_Procedure.Type_Of_Test.Technical
                      }
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <label className="type">Aptitude </label>
                    <input
                      className="checkBox"
                      name="Aptitude"
                      checked={
                        JnfData.Selection_Procedure.Type_Of_Test.Aptitude
                      }
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <label className="type">Both</label>
                    <input
                      className="checkBox"
                      name="Technical_and_Aptitude"
                      checked={JnfData.Selection_Procedure.Type_Of_Test.Both}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <label className="type">None </label>
                    <input
                      className="checkBox"
                      name="None"
                      checked={JnfData.Selection_Procedure.Type_Of_Test.None}
                      type="checkbox"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <td
                className="fontText"
                style={{ fontWeight: "700", margin: "0.5rem auto" }}
              >
                Other Qualification Rounds
              </td>
              <td>
                <hr />
              </td>
              <td style={{ flexBasis: "70%" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="align">
                    <label className="round">GD </label>
                    <input
                      className="checkBox"
                      name="GD"
                      checked={
                        JnfData.Selection_Procedure.Other_Qualification_Rounds
                          .GD
                      }
                      type="checkbox"
                    />
                  </div>
                  <div className="align">
                    <label className="round"> Case Study</label>
                    <input
                      className="checkBox"
                      name="Case_Study"
                      checked={
                        JnfData.Selection_Procedure.Other_Qualification_Rounds
                          .Case_Study
                      }
                      type="checkbox"
                    />
                  </div>
                  <div className="align">
                    <label className="round">Interview </label>
                    <input
                      className="checkBox"
                      name="Interview"
                      checked={
                        JnfData.Selection_Procedure.Other_Qualification_Rounds
                          .Interview
                      }
                      type="checkbox"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <FormGroup row>
          <Label for="exampleText" sm={2} className="fontText">
            Total number of rounds
          </Label>
          <Col sm={10}>
            <h1 className="inputText">
              checked=
              {
                JnfData.Selection_Procedure.Total_Number_Of_Rounds
                  .Total_Number_Of_Rounds
              }
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2} className="fontText">
            Number of offers available for IIT(ISM) students (Range would be
            sufficient)
          </Label>
          <Col sm={10}>
            <h1 className="inputText">
              checked=
              {JnfData.Selection_Procedure.Number_Of_Offers.Number_Of_Offers}
            </h1>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2} className="fontText">
            Eligibility Criteria (if any)
          </Label>
          <Col sm={10}>
            <h1 className="inputText">
              checked=
              {
                JnfData.Selection_Procedure.Eligibility_Criteria
                  .Eligibility_Criteria
              }
            </h1>
          </Col>
        </FormGroup>
        <div
          className="formFlex"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            marginTop: "1.5rem",
          }}
        >
          <button
            className="submit_btn"
            type="submit"
            onClick={(e) => e.preventDefault() / setPage("4")}
          >
            Edit
          </button>
          <button
            className="submit_btn"
            type="submit"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ReviewStructure;
