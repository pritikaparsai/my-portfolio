export type Experience = {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  logo: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Paytm Payments Services Ltd.",
    role: "Merchant Operations & Risk Intern",
    duration: "April 2025 – May 2025",
    location: "Noida, Uttar Pradesh",

    logo: "/experience/paytm.png",

    description:
      "Worked with the Merchant Operations & Risk team to analyse transaction patterns, optimise SQL workflows, and support merchant risk investigations through data-driven analysis.",

    responsibilities: [
      "Executed SQL queries using Starburst for merchant data extraction and validation.",
      "Performed ETL operations to clean and transform large transaction datasets.",
      "Analysed Transaction Per Minute (TPM) trends for merchant monitoring.",
      "Identified abnormal transaction behaviour for fraud and risk assessment.",
      "Mapped Merchant IDs, VPAs and Order IDs across multiple datasets.",
      "Generated commission and GMV reports for merchant categories.",
      "Collaborated with cross-functional teams to improve operational efficiency."
    ],

    technologies: [
      "SQL",
      "Starburst",
      "AWS",
      "Excel",
      "Google Sheets",
      "ETL",
      "Data Analysis"
    ],

    achievements: [
      "Optimised multiple SQL queries for faster reporting.",
      "Contributed to merchant transaction intelligence workflows.",
      "Supported data-driven fraud detection initiatives."
    ]
  },

  {
    id: 2,
    company: "Navratan Foundations",
    role: "Research Intern",
    duration: "May 2024 – June 2024",
    location: "Noida, Uttar Pradesh",

    logo: "/experience/navratan.png",

    description:
      "Worked on research initiatives focused on emotional wellness and community development through survey-based data collection and analysis.",

    responsibilities: [
      "Designed questionnaires for the Emotional Wellness Index project.",
      "Collected survey responses across different demographics.",
      "Performed data cleaning and organisation.",
      "Conducted preliminary statistical analysis.",
      "Prepared research documentation.",
      "Participated in community outreach programmes."
    ],

    technologies: [
      "Excel",
      "Survey Design",
      "Research",
      "Statistics",
      "Data Collection"
    ],

    achievements: [
      "Contributed to Emotional Wellness Index research.",
      "Improved survey quality through structured questionnaire design.",
      "Worked directly with field teams during data collection."
    ]
  }
];