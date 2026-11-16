export type Education = {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  cgpa?: string;
  percentage?: string;
  grade?: string;
  totalUndergraduateCredits?: number;
  description: string;
  coursework?: SemesterCoursework[];
  achievements?: string[];
};

export type Course = {
  title: string;
  credits?: number | null | "Non-credit";
};

export type SemesterCoursework = {
  semester: number;
  courses: Course[];
};

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  grade?: string;
};

export const education: Education[] = [
  {
    id: 1,
    institution: "Symbiosis School of Economics",
    degree: "B.Sc. Economics (Honours with Research)",
    duration: "2023 – 2027",
    location: "Pune, Maharashtra",
    cgpa: "7.7/10",
    totalUndergraduateCredits: 170,

    description:
      "Currently pursuing a Bachelor's degree with a specialization in Data Analytics, focusing on economics, econometrics, statistics, programming, financial analysis, and machine learning.",

    coursework: [
      {
        semester: 1,
        courses: [
          { title: "Principles of Economics", credits: 3 },
          { title: "Foundation of Mathematics", credits: 4 },
          { title: "Indian Constitution", credits: 2 },
          { title: "Foundations of Ethics", credits: 2 },
          { title: "Academic Writing with LaTeX", credits: 3 },
          { title: "IT Applications in Economics", credits: 2 },
          { title: "Indian Kaleidoscope: Culture and Communication", credits: 2 },
          { title: "Integrated Disaster Management", credits: "Non-credit" },
          { title: "Fundamentals of Marketing Research", credits: 3 },
        ],
      },
      {
        semester: 2,
        courses: [
          { title: "Microeconomics I", credits: 4 },
          { title: "Macroeconomics I", credits: 4 },
          { title: "Business Accounting and Financial Analysis", credits: 4 },
          { title: "Statistics for Economics I", credits: 4 },
          { title: "Basic German I", credits: 2 },
          { title: "Introduction to Python", credits: 3 },
          { title: "Indian Ethos and Values for Management", credits: 2 },
          { title: "Fitness for Life", credits: "Non-credit" },
          { title: "Introduction to Digital Marketing", credits: 3 },
        ],
      },
      {
        semester: 3,
        courses: [
          { title: "Microeconomics II", credits: 4 },
          { title: "Macroeconomics II", credits: 4 },
          { title: "Indian Economy", credits: 4 },
          { title: "Mathematical Economics", credits: 4 },
          { title: "Statistics for Economics II", credits: 4 },
          { title: "Basic German II", credits: 2 },
          { title: "Data Visualization", credits: 4 },
          { title: "Introduction to the Indian Epics: Ramayana and Mahabharata", credits: 2 },
          { title: "Internship with NGO", credits: 2 },
          { title: "Emotional Well-Being", credits: "Non-credit" },
          { title: "Law of Contracts", credits: 3 },
        ],
      },
      {
        semester: 4,
        courses: [
          { title: "Public Finance: Theory and Practice", credits: 3 },
          { title: "Introductory Econometrics", credits: 4 },
          { title: "Research Methodology", credits: 4 },
          { title: "Operations Research", credits: 2 },
          { title: "Theory of Political Economy in India", credits: 4 },
          { title: "Big Data", credits: 3 },
          { title: "Economic Journalism", credits: 2 },
          { title: "Vasudhaiva Kutumbakam", credits: "Non-credit" },
        ],
      },
      {
        semester: 5,
        courses: [
          { title: "International Economics", credits: 4 },
          { title: "Intermediate Econometrics", credits: 4 },
          { title: "History of Economic Thought", credits: 4 },
          { title: "Introduction to Behavioral Economics and Finance", credits: 3 },
          { title: "Deep Learning for Economics", credits: 4 },
          { title: "Core Environmental Studies", credits: "Non-credit" },
          { title: "Internship with Business Unit", credits: 2 },
        ],
      },
      {
        semester: 6,
        courses: [
          { title: "Environmental Economics", credits: 4 },
          { title: "Development Economics", credits: 3 },
          { title: "Growth Models", credits: 3 },
          { title: "Primary and Secondary Research", credits: 4 },
          { title: "R Programming", credits: 3 },
        ],
      },
      {
        semester: 7,
        courses: [
          { title: "International Relations", credits: 4 },
          { title: "Advanced Microeconomics", credits: 2 },
          { title: "Advanced Macroeconomics", credits: 2 },
          { title: "Data Architecture and Warehousing", credits: 3 },
          { title: "Introduction to Data Mining", credits: 3 },
        ],
      },
      {
        semester: 8,
        courses: [{ title: "Law and Economics", credits: 4 }],
      },
    ],

    achievements: [
      "Merchant Operations & Risk Intern – Paytm Payments Services",
      "Research Paper: Impact of Monetary Policy on Income Inequality in India",
      "Research Paper: Determinants of Profitability in the Automobile Sector",
      "Specialization in Data Analytics",
    ],
  },

  {
    id: 2,
    institution: "Delhi Public School",
    degree: "Senior Secondary (Class XII) – PCM with Economics",
    duration: "2023",
    location: "Noida, Uttar Pradesh",
    percentage: "87%",

    description:
      "Completed CBSE Senior Secondary education with Physics, Chemistry, Mathematics, Economics, English and Fine Arts.",

    achievements: [
      "Scored 100/100 in English in the CBSE Class XII Board Examination.",
    ],
  },

  {
    id: 3,
    institution: "Delhi Public School",
    degree: "Secondary (Class X)",
    duration: "2021",
    location: "Noida, Uttar Pradesh",
    percentage: "95.6%",

    description:
      "Completed CBSE Secondary education with distinction.",

    achievements: [
      "Scholar Badge Holder throughout school tenure (2009–2023).",
      "Gold Medal & Certificate of Merit for six consecutive years (Class 5–10).",
      "Scholar Blazer for four consecutive years.",
    ],
  },
];

export const academicHighlights = [
  "Scored 100/100 in English in the CBSE Class XII Board Examination (2023).",

  "Recipient of Gold Medal and Certificate of Merit for being a scholar for six consecutive years (Class 5–10).",

  "Awarded the Scholar Blazer for maintaining scholar status for four consecutive years.",

  "Scholar Badge Holder throughout school tenure (2009–2023).",

  "Certificate of Merit for Best Interjector in Economics Symposium – Ecomforum (2021–22), Amity International School, Saket.",

  "Participant in BURLESQUE-O-MANIA – Arthashastra & Confest 2022 hosted by Delhi Public School, Vasant Kunj.",

  "Certificate of Achievement for scoring 100% in the Online Sanskrit Quiz (Junior Level) conducted by Chinmaya Vishwavidyapeeth during Sanskrit Month 2020.",
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "German Language – A2 Level",
    issuer:
      "Symbiosis Institute of Foreign & Indian Languages (SIFIL), Pune",
    date: "December 2024",
  },

  {
    id: 2,
    title: "Fit in Deutsch 1 (A1)",
    issuer: "Goethe-Institut / Max Mueller Bhavan, New Delhi",
    grade: "53/60",
    date: "10 January 2019",
  },
];
