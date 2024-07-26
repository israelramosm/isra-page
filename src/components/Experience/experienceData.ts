export interface ExperienceI {
  position: string;
  company: string;
  dates: string;
  summary: string;
  bullets: string[];
}

export const EXPERIENCE_DATA: ExperienceI[] = [
  {
    position: 'Full Stack Application Developer',
    company: 'IBM',
    dates: '2020-10 - 2024-05',
    summary:
      'Responsible for developing and migrating applications to new technologies using frontend frameworks such as react/redux and svelte, backend frameworks such as expressjs and nestjs, and working with IBM cloud technologies and resources.',
    bullets: [
      'Optimized the usability of the legacy application system to help employees with informational and behavioral issues within the organization by developing a new frontend application using react/redux and expressjs.',
      'Attended technical tickets that users raised on the application by talking to the user about the problems maintaining and supporting the frontend application developed in react/redux and expressjs for any errors.',
      'Facilitated the development experience for my teammates by configuring, developing, and monitoring IBM Cloud resources used within the applications.',
      'Lead event-driven microservices development using IBM Cloud technologies such as Event Stream built on Kafka to create cases within applications.',
      'Built and developed the user experience of new internal applications that create specific cases for the IBM business model using technologies and frameworks such as Svelte for the front end and nestjs for the back end.',
    ],
  },
  {
    position: 'Java Developer',
    company: 'Tata Consultancy Services',
    dates: '2019-02 - 2020-10',
    summary:
      'Responsible for developing and maintaining the backend and the frontend applications using Java as the main language',
    bullets: [
      'Gave maintenance and support for the credit cards and loans area by updating the code according to client requirements',
      'Collaborated with the Learning and Development team within the office, creating and developing applications using technologies such as HTML5, CSS3, Javascript, and JQuery.',
      "Created and organized meetings with other teammates to teach them new technologies used in the office and the company's projects",
      "I was part of the office's onboarding team, which followed up, resolved questions, and guided new developers.",
    ],
  },
  {
    position: 'Software Engineer',
    company: 'Unosquare',
    dates: '2016-09 - 2018-08',
    summary:
      'Responsible for developing various applications and projects using different technologies and frameworks such as Angular, React, C# .NET, and .NET Core and devices such as Raspberry Pi for internal and external use.',
    bullets: [
      "Developed the company's main page using technologies such as HTML5, Javascript, CSS3, and C# .NET, creating the views, home, and information page.",
      "Maintenance and development of the company's private and open-source projects using technologies such as Angular, React, Javascript, C# .NET, Raspberry Pi, and .NET Core technologies.",
      'Microsoft certification exams 480, 486, and 487.',
    ],
  },
];
