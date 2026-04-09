export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export const aboutCards = [
  {
    title: 'Who I am',
    description:
      'I am a software engineer focused on building dependable backend systems and polished product experiences. My work sits at the intersection of API design, scalable architecture, and clean interfaces that help teams ship with confidence.',
  },
  {
    title: 'What I bring',
    description:
      'I enjoy taking ownership of features end to end, from database and API design to front-end integration, testing, and production readiness. I care about clarity, maintainability, and solving business problems with practical engineering choices.',
  },
]

export const aboutHighlights = [
  '2+ years building production applications with ASP.NET Core and SQL Server',
  'Hands-on delivery across APIs, Blazor, MVC flows, and real-time SignalR features',
  'Comfortable collaborating across backend, database, and frontend responsibilities',
]

export const metrics = [
  { value: '2+ Years', label: 'Professional .NET development' },
  { value: 'ASP.NET', label: 'REST APIs and backend delivery' },
  { value: 'SQL', label: 'Database-driven application work' },
]

export const heroLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Harsh4507',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harsh-rajput-065100239',
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Grazitti Interactive',
    period: 'Apr 2024 - Apr 2026',
    context:
      'Full-stack software engineer with 2+ years of experience developing scalable applications using ASP.NET Core, Web APIs, Blazor, and SQL Server. Delivered end-to-end features including RESTful services, responsive UI, and real-time communication using SignalR. Focused on clean architecture, maintainability, and performance optimization across both backend and database layers.',
    stack: ['C#', 'ASP.NET Core', 'Web APIs', 'MVC', 'React', 'Blazor', 'SQL Server', 'Javascript', 'JQuery', 'Postman', 'Git', 'Azure DevOps', 'Azure'],
    highlights: [
      'Developed and scaled backend services using ASP.NET Core and Web APIs, supporting critical business functionalities.',
      'Architected modular components following clean architecture and CQRS patterns for better maintainability and scalability.',
      'Integrated SQL Server with EF Core and Dapper, optimizing queries for performance-critical operations.',
      'Built real-time features using SignalR for live updates and improved user experience.',
      'Worked closely with cross-functional teams to deliver production-ready features and resolve system issues efficiently.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Grazitti Interactive',
    period: 'Oct 2023 - Mar 2024',
    context:
      'Software Developer Intern with hands-on experience in backend development using ASP.NET and SQL Server. Contributed to API development, database operations, and testing workflows while gaining exposure to production-grade coding standards and collaborative team environments.',
    stack: ['C#', 'ASP.NET Core', 'Web APIs', 'MVC', 'SQL Server', 'Postman', 'Git'],
    highlights: [
      'Developed and tested RESTful API endpoints under guidance, ensuring correctness and maintainability.',
      'Implemented database queries and assisted in backend logic development for feature enhancements.',
      'Identified and fixed bugs in existing modules, contributing to improved system reliability.',
      'Utilized Postman for API validation and Git for version control within a collaborative development environment.',
      'Gained practical experience with real-world development workflows, including debugging, testing, and release cycles.',
    ],
  },
]

export const projects = [
  {
    title: '.NET Full Stack Developer',
    tag: 'DCGONE – Enterprise Portal (Multiple Modules) | (Aug 25 – Apr 26) ',
    teamSize: '5 members',
    duration: 'Oct 2024 - Mar 2026',
    description:
      'A full-stack enterprise portal featuring modular architecture, clean API design, and scalable backend workflows. Built using ASP.NET Core MVC and Web APIs with CQRS-based separation of concerns and optimized SQL Server performance.',
    stack: ['ASP.NET Core','MVC','Web APIs','Blazor','JavaScript','jQuery','SQL Server','Jira','JWT Authentication',
  'Dependency Injection','Middleware','Git','Azure DevOps','Azure','Postman','Swagger','Unit Testing','Cursor'
],
    highlights: [
      'Developed and enhanced full-stack features using ASP.NET MVC and Web API, following the CQRS pattern for separating read and write operations.',
      'Built Compliance & Offer module using MVC and SQL Server, optimizing queries for performance.',
    ],
  },
  {
    title: 'Dotnet Developer',
    tag: 'DLOOP – User Management | (Jan 25 – Jul 25) ',
    teamSize: '3 members',
    duration: 'Jun 2024 - Sep 2024',
    description:
      'A backend-focused user management system implementing secure and scalable APIs using ASP.NET Core and SQL Server. Designed with CQRS and MediatR to handle user workflows, authentication, and role-based access control.',
   stack: ['ASP.NET Core','Web APIs','React','SQL Server','JWT Authentication','2FA Authentication','RBAC',
  'Dependency Injection','Middleware','Identity','Git','Azure DevOps','Azure','Postman','Swagger','Unit Testing'],
    highlights: [
      'Developed secure RESTful APIs for user management using CQRS with MediatR, including authentication, authorization, RBAC, and 2FA.',
      'Optimized SQL Server procedures, wrote xUnit unit tests, and improved API performance.',
    ],
  },
  {
    title: '.NET Full Stack Developer',
    tag: 'H&R Block – Enterprise Tax Module | (Apr 24 – Jan 25) ',
    teamSize: 'Solo project',
    duration: 'Apr 2026 - Apr 2026',
    description:
      'Contributed to enterprise-level tax workflow modules by developing scalable full-stack features using ASP.NET Core APIs and Blazor, focusing on clean architecture and efficient data handling.',
    stack: ['ASP.NET Core','Web APIs','Blazor','SQL Server',
      'Dependency Injection','Git','Azure DevOps','Azure','Azure Functions','Postman','Swagger','Unit Testing','Component Testing'],
    highlights: [
      'Developed Blazor components and ASP.NET Core APIs for enterprise tax workflow modules.',
      'Optimized SQL Server procedures and implemented Controller–Service–Repository layered architecture for clean, maintainable code.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Language',
    items: ['C#', 'Java'],
  },
  {
    title: 'Architecture',
    items: ['Clean Architecture', 'CQRS', 'MediatR', 'Microservices'],
  },
  {
    title: 'Backend',
    items: ['.NET', 'ASP.NET Core', 'Web APIs', 'REST APIs','Azure','JWT Authentication','Caching', 'Dependency Injection', 'Middleware', 'SignalR'],
  },
  {
    title: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'JavaScript', 'JQuery', 'Blazor'],
  },
  {
    title: 'DATA ACCESS',
    items: ['SQL Server', 'EF Core', 'Dapper', 'LINQ', 'Stored Procedures'],
  },
  {
    title: 'Unit Testing',
    items: ['xUnit','Moq'],
  },
  {
    title: 'Tools',
    items: ['Azure DevOps','Jira', 'Postman', 'Swagger','Git', 'GitHub', 'Visual Studio', 'VS Code'],
  },
  //   {
  //   title: 'AI Tools',
  //   items: ['Cursor','Claude Code','Chat GPT'],
  // },
]

export const codingProfiles = [
  {
    title: 'LeetCode',
    description:
      'Practice high-quality coding problems to improve algorithmic thinking and interview performance.',
    href: 'https://leetcode.com/u/harsh4507/',
    cta: 'View Profile',
  },
  {
    title: 'GeeksforGeeks',
    description:
      'Revise fundamentals and deepen understanding with guided problems and concept-driven learning.',
    href: 'https://www.geeksforgeeks.org/profile/harshrajput4507',
    cta: 'View Profile',
  },
]

export const achievements = [
  {
    value: '4',
    label: 'Awards & Recognition',
    description:
      'Recognized three times as Star Performer of the Month at Grazitti Interactive and received the Quarterly Award for Delivery Ninja.',
  },
  {
    value: '3',
    label: 'Production Modules Delivered',
    description:
      'Contributed across DCGONE, DLOOP, and H&R Block modules with a focus on maintainable backend systems and practical feature delivery.',
  },
  {
    value: '2+',
    label: 'Years in Backend Development',
    description:
      'Built and maintained production-ready APIs, optimized SQL performance, and contributed to UI integration in collaborative environments.',
  },
  {
    value: '200+',
    label: 'DSA Problems Solved',
    description:
      'Continuously improving problem-solving skills through consistent practice on LeetCode and GeeksforGeeks.',
    links: codingProfiles,
  },
]

export const education = [
  {
    title: 'B.Tech in Computer Science Engineering | 8.73 CGPA | 2020–2024',
    period: 'Maharishi Markandeshwar University, Mullana',
    description:
      'Built a strong base in programming fundamentals, object-oriented design, database systems, software engineering, and problem solving that now informs production work.',
  },
  {
    title: 'Higher Secondary Education (12th Grade) | 79.5% | 2020',
    period: 'Modern Era Public School, Bijnor (CBSE)',
    description:
      'Actively deepen knowledge through project execution, platform-based coding practice, and day-to-day exposure to architecture, APIs, testing, and performance tuning.',
  },
    {
    title: 'Secondary Education (10th Grade) | 81% | 2018',
    period: 'Modern Era Public School, Bijnor (CBSE)',
    description:
      'Actively deepen knowledge through project execution, platform-based coding practice, and day-to-day exposure to architecture, APIs, testing, and performance tuning.',
  },
]

export const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:harshrajput4507@gmail.com',
    variant: 'secondary',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harsh-rajput-065100239',
    variant: 'secondary',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Harsh4507',
    variant: 'secondary',
  },
]

export const footerLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/harsh_4507_?igsh=MXg1Mmt2dzZ1bTlqNw==',
    icon: 'instagram',
  },
  {
    label: 'Mobile',
    href: 'tel:+919634821847',
    icon: 'phone',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Harsh4507',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:harshrajput4507@gmail.com',
    icon: 'mail',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harsh-rajput-065100239',
    icon: 'linkedin',
  },
]
