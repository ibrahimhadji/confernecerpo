export type Speaker = {
  name: string;
  university: string;
  image: string;
};

export type Chair = {
  role: string;
  name: string;
  university: string;
};

export const speakers: Speaker[] = [
  {
    name: "Prof. Amina El Idrissi",
    university: "University of Algiers",
    image: "/speakers/amina.svg",
  },
  {
    name: "Dr. Karim Benyahia",
    university: "University of Science and Technology Houari Boumediene",
    image: "/speakers/karim.svg",
  },
  {
    name: "Prof. Sarah N. Douglas",
    university: "Massachusetts Institute of Technology",
    image: "/speakers/sarah.svg",
  },
  {
    name: "Dr. Youssef Haddad",
    university: "Sorbonne University",
    image: "/speakers/youssef.svg",
  },
];

export const subjects = [
  "AI for Cyber-Physical Systems",
  "Advanced Machine Learning in Cybernetics",
  "Edge Intelligence and Smart Control",
  "Autonomous Systems Safety",
  "Human-Centered Intelligent Interfaces",
  "Secure Intelligent Infrastructure",
  "Industrial Robotics and Optimization",
  "Data-Driven Decision Systems",
];

export const chairs: Chair[] = [
  {
    role: "General Chair",
    name: "Prof. Amina El Idrissi",
    university: "University of Algiers",
  },
  {
    role: "Program Chair",
    name: "Dr. Karim Benyahia",
    university: "USTHB",
  },
  {
    role: "Workshop Chair",
    name: "Prof. Sarah N. Douglas",
    university: "MIT",
  },
];

export const sponsors = ["TechNova Labs", "CyberGrid", "NextCompute", "DataSphere"];

export type ImportantDate = {
  event: string;
  date: string;
};

export const importantDates: ImportantDate[] = [
  { event: "Abstract Submission Opens", date: "April 15, 2026" },
  { event: "Full Paper Submission Deadline", date: "July 30, 2026" },
  { event: "Notification of Acceptance", date: "September 05, 2026" },
  { event: "Camera-Ready Deadline", date: "October 01, 2026" },
  { event: "Conference Dates", date: "November 18-20, 2026" },
];
