export type PortfolioItem = {
  id: number;
  slug: string;
  title: string;
  category:
    | "Research"
    | "Data Analytics"
    | "Economics"
    | "Academic Writing"
    | "Machine Learning"
    | "Web Development";

  year: string;
  
  overview: string;

  technologies: string[];

  skills: string[];

  image: string;

  status: "Completed" | "Ongoing";

  featured?: boolean;

  github?: string;

  demo?: string;

  pdf?: string;

  report?: string;

  presentation?: string;

  video?: string;
};

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    slug: "merchant-transaction-risk-analysis",
    title: "Merchant Transaction Risk Analysis",
    image: "/portfolio/merchant-risk-analysis.png",
    category: "Data Analytics",
    year: "2025",
    overview:
      "Analysed merchant transaction behaviour using SQL, ETL pipelines and transaction intelligence techniques during my internship at Paytm Payments Services. The project focused on identifying transaction patterns, supporting risk investigations, and optimizing data extraction workflows.",
    technologies: [
      "SQL",
      "Starburst",
      "AWS",
      "ETL",
    ],
    skills: [
      "Risk Analysis",
      "Fraud Detection",
      "SQL Optimization",
      "Data Cleaning",
      "Pattern Analysis",
    ],
    status: "Completed",
     pdf: "/portfolio/merchant-risk-analysis.pdf",
  },

  {
    id: 2,
    slug: "bank-marketing-analytics",
    title: "Bank Marketing Analytics",
    category: "Data Analytics",
    year: "2025",
    overview:
      "Developed predictive models using a banking dataset to identify customers likely to subscribe to term deposits. The project involved preprocessing, exploratory analysis, feature engineering, and model evaluation.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
    ],
    skills: [
      "Data Analysis",
      "Classification",
      "Feature Engineering",
      "Machine Learning",
      "Visualization",
    ],
    status: "Completed",
    image: "/portfolio/bank.jpg",
  },

  {
    id: 3,
    slug: "medical-insurance-cost-prediction",
    title: "Medical Insurance Cost Prediction",
    category: "Machine Learning",
    year: "2025",
    overview:
      "Built regression models to predict individual medical insurance charges using demographic and health-related variables. Compared multiple regression algorithms and evaluated model performance.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Regression",
    ],
    skills: [
      "Regression",
      "Model Evaluation",
      "Feature Selection",
      "Data Preprocessing",
      "Machine Learning",
    ],
    status: "Completed",
    image: "/portfolio/insurance.jpg",
  },

  {
    id: 4,
    slug: "behavioral-nudges-upi-adoption",
    title: "Behavioral Nudges & UPI Adoption",
    category: "Research",
    year: "2025",
    overview:
      "Research examining how behavioural economics principles and nudges influence UPI adoption and digital payment behaviour among consumers in India.",
    technologies: [
      "Behavioural Economics",
      "Research",
      "Policy Analysis",
    ],
    skills: [
      "Literature Review",
      "Research Writing",
      "Behavioural Analysis",
      "Critical Thinking",
    ],
    status: "Completed",
    image: "/portfolio/behavioral-nudges.png",
    pdf: "/projects/behavioral-nudges.pdf",
    featured: true,
  },

  {
    id: 5,
    slug: "monetary-policy-income-inequality",
    title: "Impact of Monetary Policy on Income Inequality in India",
    category: "Research",
    year: "2025",
    overview:
      "Econometric research analysing the relationship between India's monetary policy and income inequality using an ARDL framework with historical macroeconomic data.",
    technologies: [
      "Econometrics",
      "ARDL",
      "EViews",
      "Time Series",
    ],
    skills: [
      "Econometric Modelling",
      "Time Series Analysis",
      "Research",
      "Data Interpretation",
    ],
    status: "Completed",
    image: "/portfolio/monetary.jpg",
  },

  {
    id: 6,
    slug: "automobile-sector-profitability",
    title: "Determinants of Profitability in the Automobile Sector",
    category: "Research",
    year: "2025",
    overview:
      "Investigated how financial ratios influence profitability within the automobile sector using multiple regression analysis and financial statement data.",
    technologies: [
      "Finance",
      "Regression",
      "Excel",
      "Research",
    ],
    skills: [
      "Financial Analysis",
      "Regression Analysis",
      "Research Writing",
      "Data Interpretation",
    ],
    status: "Completed",
    image: "/portfolio/automobile.jpg",
  },

  {
    id: 7,
    slug: "holocaust-essay",
    title: "Holocaust Essay",
    category: "Academic Writing",
    year: "2024",
    overview:
      "Historical essay examining the Holocaust, its causes, global consequences, and the importance of preserving historical memory.",
    technologies: [
      "Historical Research",
      "Academic Writing",
    ],
    skills: [
      "Research",
      "Academic Writing",
      "Critical Analysis",
    ],
    status: "Completed",
    image: "/portfolio/holocaust.jpg",
  },

  {
    id: 8,
    slug: "indian-ethics-essay",
    title: "Indian Ethics Essay",
    category: "Academic Writing",
    year: "2024",
    overview:
      "Essay discussing Indian ethical philosophy with emphasis on Dharma, Karma, and Moksha while relating classical ideas to contemporary ethical challenges.",
    technologies: [
      "Ethics",
      "Philosophy",
      "Academic Writing",
    ],
    skills: [
      "Critical Thinking",
      "Writing",
      "Philosophical Analysis",
    ],
    status: "Completed",
    image: "/portfolio/ethics.jpg",
  },

  {
    id: 9,
    slug: "time-use-surveys",
    title: "Time Use Surveys",
    category: "Academic Writing",
    year: "2025",
    overview:
      "Analytical article discussing the importance of time-use surveys in measuring unpaid labour and understanding gender disparities in household work.",
    technologies: [
      "Economics",
      "Public Policy",
      "Writing",
    ],
    skills: [
      "Policy Analysis",
      "Research",
      "Academic Writing",
    ],
    status: "Completed",
    image: "/portfolio/time-use-surveys.png",
    pdf: "/projects/time-use-surveys.pdf",
  },

  {
    id: 10,
    slug: "eu-asean-trade-relations",
    title: "EU–ASEAN Trade Relations",
    category: "Economics",
    year: "2025",
    overview:
      "Research exploring trade relations between the European Union and ASEAN, examining economic integration, trade agreements, and strategic partnerships.",
    technologies: [
      "International Economics",
      "Trade Policy",
      "Research",
    ],
    skills: [
      "Economic Analysis",
      "Policy Research",
      "Report Writing",
    ],
    status: "Completed",
    image: "/portfolio/euasean.jpg",
  },

  {
    id: 11,
    slug: "leontief-paradox",
    title: "Leontief Paradox",
    category: "Economics",
    year: "2025",
    overview:
      "Academic reflection discussing the Leontief Paradox and its implications for the Heckscher–Ohlin theory of international trade.",
    technologies: [
      "International Trade",
      "Economic Theory",
    ],
    skills: [
      "Economic Reasoning",
      "Critical Analysis",
      "Academic Writing",
    ],
    status: "Completed",
    image: "/portfolio/leontief-paradox.jpg",
    pdf: "/projects/leontief-paradox.pdf",
  },

  {
    id: 12,
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",
    year: "2026",
    overview:
      "Designed and developed a responsive portfolio website using Next.js, TypeScript, and Tailwind CSS to showcase research, projects, academic work, and professional experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    skills: [
      "Frontend Development",
      "Responsive Design",
      "Component Architecture",
      "UI/UX",
    ],
    status: "Ongoing",
    image: "/portfolio/portfolio.jpg",
  },
];