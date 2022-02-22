import React from "react";
import { Form } from "reactstrap";

import "./INF2.css";

const INF2 = ({
  setPage,
  fourYearData,
  fiveYearData,
  skillData,
  handleFourYearChange,
  handleFiveYearChange,
  handleSkillChange,
  handleUpdateInfById,
}) => {

  

  return (
    <div className="overallDiv1">
      <Form>
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
                  value={fourYearData.Select_All}
                  onChange={handleFourYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Chemical Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Chemical_Engineering"
                  value={fourYearData.Chemical_Engineering}
                  onChange={handleFourYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Civil Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Civil_Engineering"
                  value={fourYearData.Civil_Engineering}
                  onChange={handleFourYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Computer Science and Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Computer_Science_and_Engineering"
                  value={fourYearData.Computer_Science_and_Engineering}
                  onChange={handleFourYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Electrical Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Electrical_Engineering"
                  value={fourYearData.Electrical_Engineering}
                  onChange={handleFourYearChange}
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
                  value={fourYearData.Electronics_and_Communication_Engineering}
                  onChange={handleFourYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Engineering Physics</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Engineering_Physics"
                  value={fourYearData.Engineering_Physics}
                  onChange={handleFourYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Environmental Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Environmental_Engineering"
                  value={fourYearData.Environmental_Engineering}
                  onChange={handleFourYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mechanical Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Mechanical_Engineering"
                  value={fourYearData.Mechanical_Engineering}
                  onChange={handleFourYearChange}
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
                  value={fourYearData.Mineral_and_Metallurgical_Engineering}
                  onChange={handleFourYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mining Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Mining_Engineering"
                  value={fourYearData.Mining_Engineering}
                  onChange={handleFourYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mining Machinery Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Mining_Machinery_Engineering"
                  value={fourYearData.Mining_Machinery_Engineering}
                  onChange={handleFourYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Petroleum Engineering</td>
              <td className="courseCheckBoxBtech">
                <input
                  name="Petroleum_Engineering"
                  value={fourYearData.Petroleum_Engineering}
                  onChange={handleFourYearChange}
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
                  value={fiveYearData.Select_All}
                  onChange={handleFiveYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Computer Science and Engineering</td>
              <td className="courseCheckBox5year">
                <input
                  name="Computer_Science_and_Engineering"
                  value={fiveYearData.Computer_Science_and_Engineering}
                  onChange={handleFiveYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mathematics & Computing</td>
              <td className="courseCheckBox5year">
                <input
                  name="Mathematics_and_Computing"
                  value={fiveYearData.Mathematics_and_Computing}
                  onChange={handleFiveYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geology</td>
              <td className="courseCheckBox5year">
                <input
                  name="Applied_Geology"
                  value={fiveYearData.Applied_Geology}
                  onChange={handleFiveYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geophysics</td>
              <td className="courseCheckBox5year">
                <input
                  name="Applied_Geophysics"
                  value={fiveYearData.Applied_Geophysics}
                  onChange={handleFiveYearChange}
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
                  value={skillData.C_Cpp_Java_Python_etc}
                  onChange={handleSkillChange}
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
                  value={skillData.Full_Stack_Development_Frontend_or_Backend}
                  onChange={handleSkillChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Civil Engineering</td>
              <td className="courseCheckBoxSkill">
                <input
                  name="Civil_Engineering"
                  value={skillData.Civil_Engineering}
                  onChange={handleSkillChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">AI/ML/DL, Data Science</td>
              <td className="courseCheckBoxSkill">
                <input
                  name="AI_ML_DL_Data_Science"
                  value={skillData.AI_ML_DL_Data_Science}
                  onChange={handleSkillChange}
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
                  value={skillData.Business_Data_Analytics_Product_Management}
                  onChange={handleSkillChange}
                  type="checkbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex">
          <button
            className="submit_btn"
            onClick={(e) => e.preventDefault() / setPage("1")}
          >
            Back
          </button>
          <button
            className="submit_btn"
            onClick={handleUpdateInfById}
          >
            Save and Continue
          </button>
        </div>
      </Form>
    </div>
  );
};
export default INF2;
