export type Education = {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  cgpa?: string;
  percentage?: string;
  grade?: string;
  description: string;
  coursework?: string[];
  achievements?: string[];
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
    cgpa: "7.7",

    description:
      "Currently pursuing a Bachelor's degree with a specialization in Data Analytics, focusing on economics, econometrics, statistics, programming, financial analysis, and machine learning.",

    coursework: [
      "Econometrics",
      "Statistics",
      "Macroeconomics",
      "Microeconomics",
      "International Economics",
      "Research Methodology",
      "Python",
      "R Programming",
      "Data Analytics",
      "Machine Learning",
      "Financial Economics",
      "Public Policy",
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
      "Completed CBSE Senior Secondary education with Physics, Chemistry, Mathematics and Economics.",

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