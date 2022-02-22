import React from "react";

import "./styles.css";

const Users = () => {
  return (
    <>
      <div className="admin_users">
        <div className="admin_users_header">
          <h1>Users Database</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th className="user_row1">Name</th>
              <th className="user_row2">Email</th>
              <th className="user_row3">Contact Number</th>
              <th className="user_row4">Action</th>
            </tr>
            <tr>
              <td className="user_row1">Niket Gupta</td>
              <td className="user_row2">niketgupta101@gmail.com</td>
              <td className="user_row3">1234567890</td>
              <td className="user_row4"><button className="submit_btn" style={{ padding: "4px 10px" }}>View</button></td>
            </tr>
            <tr>
            <td className="user_row1">Alfreds Futterkiste</td>
              <td className="user_row2">niketgupta101@gmail.com</td>
              <td className="user_row3">1234567890</td>
              <td className="user_row4"><button className="submit_btn" style={{ padding: "4px 10px" }}>View</button></td>
            </tr>
            <tr>
            <td className="user_row1">Alfreds Futterkiste</td>
              <td className="user_row2">niketgupta101@gmail.com</td>
              <td className="user_row3">1234567890</td>
              <td className="user_row4"><button className="submit_btn" style={{ padding: "4px 10px" }}>View</button></td>
            </tr>
            <tr>
              <td className="user_row1">Alfreds Futterkiste</td>
              <td className="user_row2">niketgupta101@gmail.com</td>
              <td className="user_row3">1234567890</td>
              <td className="user_row4"><button className="submit_btn" style={{ padding: "4px 10px" }}>View</button></td>
            </tr>
            <tr>
              <td className="user_row1">Alfreds Futterkiste</td>
              <td className="user_row2">niketgupta101@gmail.com</td>
              <td className="user_row3">1234567890</td>
              <td className="user_row4"><button className="submit_btn" style={{ padding: "4px 10px" }}>View</button></td>
            </tr>
            <tr>
              <td className="user_row1">Alfreds Futterkiste</td>
              <td className="user_row2">niketgupta101@gmail.com</td>
              <td className="user_row3">1234567890</td>
              <td className="user_row4"><button className="submit_btn" style={{ padding: "4px 10px" }}>View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
