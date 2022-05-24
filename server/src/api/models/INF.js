const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infSchema = new Schema(
  {
    userId: { type: Schema.ObjectId, ref: "User" },
    Company_Overview: {
      Name_Of_The_Company: { type: String, default: "" },
      Category_Or_Sector: { type: String, default: "" },
      Category: { type: String, default: "" },
      Sector: { type: String, default: "" },
      About: { type: String, default: "" },
      Website: { type: String, default: "" },
    },
    Intern_Profile: {
      Internship_Duration: {
        type: String,
        default: `Jan – June 2022 Dual Degree/ Integrated M. Tech courses only (2022 batch)`,
      },
      Job_Designation: { type: String, default: "" },
      Job_Description: { type: String, default: "" },
      Mode_Of_Internship: {
        type: String, // Virtual (or) Physical
        default: "Virtual",
      },
      Place_Of_Posting: { type: String, default: "" }, // If mode of internship is physical
    },
    Salary_Details: {
      Salary_Per_Month: { type: String, default: "" },
      Salary_Unit: { type: String, default: "" },
      PPO_provision_on_performance_basis: { type: String, default: "Yes" },
      CTC: { type: String, default: "" },
    },
    HR_Details: {
      Primary_Hr: {
        name: { type: String, default: "" },
        email: { type: String, default: "" },
        mobile: { type: Number, default: "" },
      },
      Alternate_Hr: {
        name: { type: String, default: "" },
        email: { type: String, default: "" },
        mobile: { type: Number, default: "" },
      },
    },
    Eligible_Courses_And_Disciplines: {
      Four_Year_Btech_Programs: {
        Select_All: { type: Boolean, default: false },
        Chemical_Engineering: { type: Boolean, default: false },
        Civil_Engineering: { type: Boolean, default: false },
        Computer_Science_and_Engineering: { type: Boolean, default: false },
        Electrical_Engineering: { type: Boolean, default: false },
        Electronics_and_Communication_Engineering: {
          type: Boolean,
          default: false,
        },
        Engineering_Physics: { type: Boolean, default: false },
        Environmental_Engineering: { type: Boolean, default: false },
        Mechanical_Engineering: { type: Boolean, default: false },
        Mineral_and_Metallurgical_Engineering: {
          type: Boolean,
          default: false,
        },
        Mining_Engineering: { type: Boolean, default: false },
        Mining_Machinery_Engineering: { type: Boolean, default: false },
        Petroleum_Engineering: { type: Boolean, default: false },
      },
      Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs: {
        Select_All: { type: Boolean, default: false },
        Computer_Science_and_Engineering: { type: Boolean, default: false },
        Mathematics_and_Computing: { type: Boolean, default: false },
        Applied_Geology: { type: Boolean, default: false },
        Applied_Geophysics: { type: Boolean, default: false },
      },
      Skill_Based_Hiring: {
        C_Cpp_Java_Python_etc: { type: Boolean, default: false },
        Full_Stack_Development_Frontend_or_Backend: {
          type: Boolean,
          default: false,
        },
        Civil_Engineering: { type: Boolean, default: false },
        AI_ML_DL_Data_Science: { type: Boolean, default: false },
        Business_Data_Analytics_Product_Management: {
          type: Boolean,
          default: false,
        },
      },
      Three_Year_MSc_Tech_Programs: {
        Select_All: { type: Boolean, default: false },
        Applied_Geology: { type: Boolean, default: false },
        Applied_Geophysics: { type: Boolean, default: false },
      },
      Two_Year_Mtech_Programs: {
        Select_All: { type: Boolean, default: false },
        Applied_Geology: { type: Boolean, default: false },
        Applied_Geophysics: { type: Boolean, default: false },
        Chemical_Engineering: { type: Boolean, default: false },
        Civil_Engineering: { type: Boolean, default: false },
        Computer_Science_and_Engineering: { type: Boolean, default: false },
        Data_Analytics: { type: Boolean, default: false },
        Electrical_Engineering: { type: Boolean, default: false },
        Electronics_and_Communication_Engineering: {
          type: Boolean,
          default: false,
        },
        Environmental_Engineering: { type: Boolean, default: false },
        Industrial_Engineering_and_Management: {
          type: Boolean,
          default: false,
        },
        Mechanical_Engineering: { type: Boolean, default: false },
        Fuel_Minerals_and_Metallurgical_Engineering: {
          type: Boolean,
          default: false,
        },
        Mining_Engineering: { type: Boolean, default: false },
        Mining_Machinery_Engineering: { type: Boolean, default: false },
        Petroleum_Engineering: { type: Boolean, default: false },
        Pharmaceutical_Science_and_Engineering: {
          type: Boolean,
          default: false,
        },
      },
      Two_Year_MBA_Programs: {
        Select_All: { type: Boolean, default: false },
        Business_Analytics: { type: Boolean, default: false },
        Finance: { type: Boolean, default: false },
        Human_Resources: { type: Boolean, default: false },
        Marketing: { type: Boolean, default: false },
        Operations: { type: Boolean, default: false },
      },
      Two_Year_MSc_Programs: {
        Select_All: { type: Boolean, default: false },
        Chemistry: { type: Boolean, default: false },
        Mathematics_and_Computing: { type: Boolean, default: false },
        Physics: { type: Boolean, default: false },
      },
    },
    Selection_Procedure: {
      Resume_Shortlisting: {
        Yes: { type: Boolean, default: false },
        No: { type: Boolean, default: false },
      },
      Type_Of_Test: {
        Technical: { type: Boolean, default: false },
        Aptitute: { type: Boolean, default: false },
        Both: { type: Boolean, default: false },
        None: { type: Boolean, default: false },
      },
      Other_Qualification_Rounds: {
        GD: { type: Boolean, default: false },
        Case_Study: { type: Boolean, default: false },
        Interview: { type: Boolean, default: false },
      },
      Total_Number_Of_Rounds: { type: String, default: "" },
      Number_Of_Offers: { type: String, default: "" },
      Eligibility_Criteria: { type: String, default: "" },
    },
    previewLink: String,
    downloadLink: String,
    studentPreview: String,
    studentDownload: String,
    status: { type: String, default: "incomplete" },
    isIntern: { type: Boolean, default: true },
    isJob: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const INFstatusSchema = new Schema(
  {
    userId: { type: Schema.ObjectId, ref: "User" },
    data: { type: Schema.ObjectId, ref: "INF" },
    progress: {
      type: String,
      default: "incomplete",
    },
  },
  {
    timestamps: true,
  }
);

const INF = mongoose.model("INF", infSchema);
const INFstatus = mongoose.model("INFstatus", INFstatusSchema);

module.exports = { INF, INFstatus };
