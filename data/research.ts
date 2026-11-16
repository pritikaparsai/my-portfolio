export const research: {
  id: number;
  slug: string;
  title: string;
  year: string;
  status: "Ongoing" | "Completed";
  tags: string[];
  description: string;
  abstract: string;
  question: string;
  methodology: string[];
  findings: string[];
  skills: string[];
  pdf: string;
  thumbnail: string;
}[] = [
  {
    id: 1,
    slug: "monetary-policy-income-inequality",
    status: "Completed",
    title: "Impact of Monetary Policy on Income Inequality in India",
    year: "2025",
    tags: ["Econometrics", "ARDL", "R"],
    description:
      "An econometric analysis of monetary policy and income inequality.",
    abstract: "An econometric study of the relationship between monetary policy and income inequality in India using historical macroeconomic data and an ARDL framework.",
    question: "How does monetary policy relate to income inequality in India?",
    methodology: ["Unit Root Tests", "ARDL", "Bounds Testing", "Long-run Estimation"],
    findings: [
      "The study evaluates both short-run and long-run relationships within an ARDL framework.",
      "Estimates describe relationships in the selected historical data and model specification.",
      "The results are interpreted as econometric associations, not causal effects.",
    ],
    skills: ["Econometrics", "Time Series", "R", "Regression"],
    pdf: "/papers/monetary-policy.pdf",
    thumbnail: "/papers/research/monetary-policy.png",
  },
  {
    id: 2,
    slug: "automobile-sector-profitability",
    status: "Completed",
    title: "Determinants of Profitability in the Automobile Sector",
    year: "2025",
    tags: ["Financial Analysis", "Multiple Regression", "Automobile Sector"],
    description:
      "An analysis of how financial ratios relate to profitability in the automobile sector, using financial statement data and multiple regression.",
    abstract:
      "This paper examines the relationship between selected financial ratios and profitability among automobile companies using financial statement data and multiple regression analysis.",
    question: "Which selected financial ratios are associated with profitability in the automobile sector?",
    methodology: ["Financial Statement Analysis", "Ratio Analysis", "Multiple Regression"],
    findings: [
      "The analysis tests the relationship between selected financial ratios and profitability.",
      "The estimates describe the companies and period covered by the submitted paper.",
      "The analysis is observational and does not establish causal effects.",
    ],
    skills: ["Financial Analysis", "Regression Analysis", "Research Writing", "Data Interpretation"],
    pdf: "/portfolio/automobile-profitability.pdf",
    thumbnail: "/papers/research/automobile-profitability.png",
  },
  {
    id: 3,
    slug: "generative-ai-exposure-gender-wage-gap-india",
    title:
      "Generative AI Exposure and the Gender Wage Gap among Regular Salaried Workers in India",
    year: "2026",
    status: "Ongoing",
    tags: ["Labour Economics", "PLFS", "Explainable Machine Learning"],
    description:
      "A study of how occupation-level generative AI exposure relates to the gender earnings gap among regular salaried workers in India, using PLFS 2025 data.",
    abstract:
      "Using first-visit PLFS Calendar Year 2025 microdata and an ILO occupation-level exposure measure, this dissertation proposal examines associations between generative AI exposure and the gender earnings gap among regular salaried workers in India. It describes a weighted sample of 119,417 people across 125 occupations and combines regression, distributional, and predictive approaches. The analysis is associational and does not claim causal effects.",
    question:
      "How does occupation-level generative AI exposure relate to the gender earnings gap among regular salaried workers in India?",
    methodology: [
      "PLFS Calendar Year 2025 First-Visit Microdata",
      "ILO Occupation-Level Exposure Measure",
      "Survey-Weighted Regression",
      "Quantile and Predictive Analysis",
      "Explainable Machine Learning",
    ],
    findings: [
      "The proposal defines a weighted analytical sample of 119,417 workers across 125 occupations.",
      "It studies earnings-gap patterns across the wage distribution as well as average associations.",
      "The proposed design is observational; results should be interpreted as associations rather than causal effects.",
    ],
    skills: ["Labour Economics", "Survey Data", "Econometrics", "Machine Learning", "Explainability"],
    pdf: "/portfolio/dissertation-proposal-final-revised.pdf",
    thumbnail: "/portfolio/dissertation-proposal-thumbnail.svg",
  },
  {
    id: 4,
    slug: "women-household-decision-making-pune",
    title: "Decision-Making Power of Women in Low-Income Households: A Case Study of Pune",
    year: "2025–2026",
    status: "Completed",
    tags: ["Gender Economics", "Household Economics", "Primary Research"],
    description:
      "A case study of women’s decision-making power in low-income households in Pune, based on primary and secondary research.",
    abstract:
      "This study examines women’s participation in household decision-making among low-income households in Pune. It uses primary and secondary research, including responses from 162 participants, to explore household choices and the factors shaping women’s role in them.",
    question:
      "How much decision-making power do women have in low-income households in Pune?",
    methodology: [
      "Case Study of Pune",
      "Primary Research",
      "Secondary Research",
      "Survey Responses from 162 Participants",
    ],
    findings: [
      "The study draws on responses from 162 participants.",
      "It examines women’s participation in household decisions within the surveyed low-income households.",
      "As a case study, its observations describe the study sample and should not be generalized to all households without further evidence.",
    ],
    skills: ["Survey Research", "Gender Economics", "Data Collection", "Research Analysis"],
    pdf: "/portfolio/primary-and-secondary-research.pdf",
    thumbnail: "/portfolio/women-household-decisions-thumbnail.svg",
  },
];
