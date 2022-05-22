import React from "react";
import { Form } from "reactstrap";

// import "./JNF3.css";

const JNF3 = ({
  setPage,
  threeYearData,
  twoYearData,
  twoYearMbaData,
  twoYearMscData,
  handleThreeYearChange,
  handleTwoYearChange,
  handleTwoYearMbaChange,
  handleTwoYearMscChange,
  handleUpdateJnfById,
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
                  value={threeYearData.Select_All}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geology</td>
              <td className="courseCheckBox3MSc">
                <input
                  name="Applied_Geology"
                  value={threeYearData.Applied_Geology}
                  onChange={handleThreeYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geophysics</td>
              <td className="courseCheckBox3MSc">
                <input
                  name="Applied_Geophysics"
                  value={threeYearData.Applied_Geophysics}
                  onChange={handleThreeYearChange}
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
                  value={twoYearData.Select_All}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geology</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Applied_Geology"
                  value={twoYearData.Applied_Geology}
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Applied Geophysics</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Applied_Geophysics"
                  value={twoYearData.Applied_Geophysics}
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Chemical Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Chemical_Engineering"
                  value={twoYearData.Chemical_Engineering}
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Civil Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Civil_Engineering"
                  value={twoYearData.Civil_Engineering}
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Computer Science and Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Computer_Science_and_Engineering"
                  value={twoYearData.Computer_Science_and_Engineering}
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Data Analytics</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Data_Analytics"
                  value={twoYearData.Data_Analytics}
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Electrical Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Electrical_Engineering"
                  value={twoYearData.Electrical_Engineering}
                  onChange={handleTwoYearChange}
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
                  value={twoYearData.Electronics_and_Communication_Engineering}
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Environmental Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Environmental_Engineering"
                  value={twoYearData.Environmental_Engineering}
                  onChange={handleTwoYearChange}
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
                  value={twoYearData.Industrial_Engineering_and_Management}
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mechanical Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Mechanical_Engineering"
                  value={twoYearData.Mechanical_Engineering}
                  onChange={handleTwoYearChange}
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
                  value={
                    twoYearData.Fuel_Minerals_and_Metallurgical_Engineering
                  }
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mining Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Mining_Engineering"
                  value={twoYearData.Mining_Engineering}
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mining Machinery Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Mining_Machinery_Engineering"
                  value={twoYearData.Mining_Machinery_Engineering}
                  onChange={handleTwoYearChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Petroleum Engineering</td>
              <td className="courseCheckBox2MTech">
                <input
                  name="Petroleum_Engineering"
                  value={twoYearData.Petroleum_Engineering}
                  onChange={handleTwoYearChange}
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
                  value={twoYearData.Pharmaceutical_Science_and_Engineering}
                  onChange={handleTwoYearChange}
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
                  value={twoYearMbaData.Select_All}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Business Analytics</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Business_Analytics"
                  value={twoYearMbaData.Business_Analytics}
                  onChange={handleTwoYearMbaChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Finance</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Finance"
                  value={twoYearMbaData.Finance}
                  onChange={handleTwoYearMbaChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Human Resources</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Human_Resources"
                  value={twoYearMbaData.Human_Resources}
                  onChange={handleTwoYearMbaChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Marketing</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Marketing"
                  value={twoYearMbaData.Marketing}
                  onChange={handleTwoYearMbaChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Operations</td>
              <td className="courseCheckBoxmba">
                <input
                  name="Operations"
                  value={twoYearMbaData.Operations}
                  onChange={handleTwoYearMbaChange}
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
                  value={twoYearMscData.Select_All}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Chemistry</td>
              <td className="courseCheckBox2Msc">
                <input
                  name="Chemistry"
                  value={twoYearMscData.Chemistry}
                  onChange={handleTwoYearMscChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Mathematics & Computing</td>
              <td className="courseCheckBox2Msc">
                <input
                  name="Mathematics_and_Computing"
                  value={twoYearMscData.Mathematics_and_Computing}
                  onChange={handleTwoYearMscChange}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td className="courseName">Physics</td>
              <td className="courseCheckBox2Msc">
                <input
                  name="Physics"
                  value={twoYearMscData.Physics}
                  onChange={handleTwoYearMscChange}
                  type="checkbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex">
          <button
            className="submit_btn"
            onClick={(e) => e.preventDefault() / setPage("2")}
          >
            Back
          </button>
          <button className="submit_btn" onClick={handleUpdateJnfById}>
            Save and Continue
          </button>
        </div>
      </Form>
    </div>
  );
};

export default JNF3;
