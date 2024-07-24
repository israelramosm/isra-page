export interface SkillsI {
  name: string;
  primary: Array<string>;
  secondary: Array<string>;
}

export const SKILS_DATA: Array<SkillsI> = [
  {
    name: "FrontEnd",
    primary: [
      "React",
      "Redux",
      "Svelte",
      "Javascript",
      "Typescript",
      "HTML5",
      "CSS3",
      "Sass",
    ],
    secondary: ["Angularjs", "Bootstrap", "Webpack"],
  },
  {
    name: "Backend",
    primary: [
      "Nodejs",
      "Javascript",
      "Typescript",
      "Nestjs",
      "Expressjs",
      "REST",
      "Cloudant",
    ],
    secondary: ["NoSQL", "kafkajs", "C#", ".NET", "Core", "Java"],
  },
  {
    name: "Development & Operations",
    primary: ["Git", "Github", "Agile", "Scrum", "IBM Cloud", "Jest", "CI/CD"],
    secondary: [],
  },
];
