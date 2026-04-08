export const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
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
    stack: ['C#', 'ASP.NET Core', 'Web APIs', 'MVC', 'Reactjs', 'BlazorUI', 'SQL Server', 'Javascript', 'JQuery', 'Postman', 'Git', 'Azure Devops', 'Azure'],
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
    stack: ['ASP.NET Core','MVC','Web APIs','Blazor UI','JavaScript','jQuery','SQL Server','JWT Authentication',
  'Dependency Injection','Middleware','Git','Azure DevOps','Azure','Postman','Swagger','Unit Testing'
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
   stack: ['ASP.NET Core','Web APIs','Reactjs','SQL Server','JWT Authentication','2FA Authentication','RBAC',
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
      'Contributed to enterprise-level tax workflow modules by developing scalable full-stack features using ASP.NET Core APIs and Blazor UI, focusing on clean architecture and efficient data handling.',
    stack: ['ASP.NET Core','Web APIs','Blazor UI','SQL Server',
      'Dependency Injection','Git','Azure DevOps','Azure','Azure Functions','Postman','Swagger','Unit Testing','Component Testing'],
    highlights: [
      'Developed Blazor UI components and ASP.NET Core APIs for enterprise tax workflow modules.',
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
    items: ['.NET', 'ASP.NET Core', 'Web APIs', 'REST APIs', 'Dependency Injection', 'Middleware', 'SignalR'],
  },
  {
    title: 'Frontend',
    items: ['Reactjs', 'HTML', 'CSS', 'JavaScript', 'JQuery', 'Blazor UI'],
  },
  {
    title: 'DATA ACCESS',
    items: ['SQL Server', 'EF Core', 'Dapper', 'LINQ', 'Stored Procedures'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Azure Devops', 'Postman', 'Swagger', 'Visual Studio', 'VS Code'],
  },
  {
    title: 'Unit Testing',
    items: ['xUnit'],
  },
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

export const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:harshrajput4507@gmail.com',
    variant: 'primary',
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
