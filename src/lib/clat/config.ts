export const clatConfig = {
  examId: "EXAM041",
  slug: "clat",
  name: "CLAT UG",
  fullName: "Common Law Admission Test — Undergraduate",
  category: "Law admissions",
  country: "India",
  region: "South Asia",
  languages: ["en"],
  primaryLanguage: "en",
  sections: ["English Language", "Current Affairs & General Knowledge", "Legal Reasoning", "Logical Reasoning", "Quantitative Techniques"],
  scoringModel: "rank",
  examFormat: "Paper-based",
  questionTypes: ["Passage MCQ"],
  tieredStructure: "Linear",
  theme: {
    accent: "#9333EA",
    accentDark: "#7E22CE",
  },
  ipRisk: "Medium" as const,
  ipDisclaimer:
    "CLAT is a registered trademark of the Consortium of NLUs. This application is an independent study tool and is not affiliated with, endorsed by, or associated with the Consortium of NLUs or any National Law University.",
  freemiumGate: {
    freeQuestionsPerDay: 10,
    requiresAuthForFree: false,
  },
  contentReuseCluster: "verbal_legal_reasoning",
  uiEngineProfile: "passage_objective",
};
