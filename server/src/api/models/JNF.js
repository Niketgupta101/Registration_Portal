const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jnfSchema = new Schema(
  {
    userId: { type: Schema.ObjectId, ref: 'User' },
    Company_Overview: {
      Name_Of_The_Company: { type: String },
      Category_Or_Sector: { type: String },
      Website: { type: String },
    }, 
    Job_Details: {
      Designation: { type: String },
      Place_Of_Posting: { type: String },
      Job_Description: {
        type: String,
      },
    },
    Salary_Details: {
      CTC: { type: String },
      CTC_Breakup: { type: String },
      Bond_Details: { type: String },
    },
    HR_Details: {
      Primary_Hr: {
        name: { type: String, default: '' },
        email: { type: String, default: '' },
        mobile: { type: Number, default: '' },
      },
      Alternate_Hr: {
        name: { type: String, default: '' },
        email: { type: String, default: '' },
        mobile: { type: Number, default: '' },
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
      Total_Number_Of_Rounds: { type: Number, default: 0 },
      Number_Of_Offers: String,
      Eligibility_Criteria: String,
    },
    previewLink: String,
    downloadLink: String, 
    studentPreview: String,
    studentDownload: String,
    isIntern: { type: Boolean, default: false },
    isJob: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const JNFstatusSchema = new Schema(
  {
    userId: { type: Schema.ObjectId, ref: 'User' },
    data: { type: Schema.ObjectId, ref: 'JNF' },
    progress: {
      type: String,
      default: 'incomplete',
    },
  },
  {
    timestamps: true,
  }
);

const JNF = mongoose.model('JNF', jnfSchema);
const JNFstatus = mongoose.model('JNFstatus', JNFstatusSchema);

module.exports = { JNF, JNFstatus };
