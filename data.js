// Krisna Bou Portfolio — content data (sourced from resume + LinkedIn + live site)
window.PORTFOLIO_DATA = {
  experiences: [
    {
      role: 'Technology Intern (Test Coordinator)',
      org: 'Quorum Software',
      date: 'Jul 2025 – Present \u00b7 9 mos',
      bullets: [
        'Contributed to projects delivering Energy Components (EC) as a service for major oil and gas clients.',
        'Assisted in customizing EC screens and functions to meet client-specific requirements.',
        'Performed system testing and validation of new configurations to ensure quality and compliance.',
        'Executed and reviewed SQL database changes to support customization and maintain data integrity.',
      ],
    },
    {
      role: 'Database Developer',
      org: 'UQ Pro Bono Centre',
      date: 'Apr 2024 – Mar 2026 \u00b7 2 yrs',
      bullets: [
        'Designed and developed a web-based database system for QAI and UQ Pro Bono members to manage case records.',
        'Enabled public access to summarized NDIS Appeals cases for analysis of national trends and jurisdictional comparisons.',
        'Conducted user elicitation to determine needs and requirements for designed features.',
      ],
    },
    {
      role: 'Student Fellow',
      org: 'Startmate',
      date: 'Nov 2024 – Dec 2024 \u00b7 2 mos',
      bullets: [
        "Selected as a Startmate Student Fellow in Australia's leading startup accelerator ecosystem.",
        'Engaged with founders and operators to build skills in innovation, product thinking, and venture development.',
      ],
    },
    {
      role: 'Technology Intern',
      org: 'NFQ Asia',
      date: 'Nov 2023 – Dec 2023 \u00b7 2 mos',
      bullets: [
        'Implemented Google Apps Script and interfaced with APIs to automate a weekly cross-branch survey (Vietnam, Thailand, Singapore).',
        'Reduced processing times by 50% in the automation of raw survey results and reporting.',
        'Modularized the project to divide tasks among peers, smoothing the learning process.',
      ],
    },
    {
      role: 'Student Staff Partner',
      org: 'The University of Queensland',
      date: 'Jun 2023 – Dec 2023 \u00b7 6 mos',
      bullets: [
        "Researched faculty students' experiences through interviews, focus groups, and surveys.",
        'Investigated ways to improve student belongingness within the EAIT student experience.',
        'Presented an action plan for staff to act upon, including event redesign and advertising.',
      ],
    },
    {
      role: 'Get Set Mentor',
      org: 'The University of Queensland',
      date: 'Jun 2023 – Dec 2023 \u00b7 6 mos',
      bullets: [
        'Conducted weekly meetings for new students seeking advice on navigating university life.',
        'Orchestrated campus events to help students adjust and connect with new peers.',
      ],
    },
    {
      role: 'Retail Team Member',
      org: 'Coles',
      date: '2021 – 2024 \u00b7 3 yrs',
      bullets: [
        'Completed daily tasks by assessing priorities and efficiently allocating store resources.',
        'Cultivated team-building, quick problem-solving, and communication skills among coworkers.',
      ],
    },
  ],

  volunteering: [
    {
      org: 'Street Groove Dance Society',
      logo: 'assets/orgs/StreetGroove.png',
      roles: [
        { title: 'Marketing Executive', date: 'Nov 2024 – Nov 2025' },
        { title: 'Class Manager', date: 'Jul 2023 – Nov 2024' },
      ],
      bullets: [
        'Developed schedules, selected dance styles, and handled overall class management for members.',
        'Managed contracts for teachers and studios, ensuring smooth day-to-day operations.',
        'Planned and executed special events to enhance member engagement and community building.',
      ],
    },
    {
      org: 'Brisbane-Asian Student Association',
      logo: 'assets/orgs/BSA.png',
      roles: [{ title: 'Events Committee Member', date: 'Jan 2024 – Nov 2024' }],
      bullets: [
        'Oversaw event management: logistics, scheduling, and coordination with vendors and participants.',
        'Focused on memorable experiences that fostered community engagement and member satisfaction.',
      ],
    },
  ],

  projects: [
    {
      title: 'NDIS Appeals Database',
      href: 'https://ndis.project.uq.edu.au/',
      image: 'assets/projects/laptop.png',
      laptop: true,
      description:
        'A pro bono project for Queensland Advocacy for Inclusion, collecting NDIS Appeals case data from 2014 to today. Enables comprehensive analysis of appeal outcomes to the Administrative Review Tribunal.',
      tags: [
        { label: 'CodeIgniter', category: 'framework' },
        { label: 'Front-End Development', category: 'software' },
        { label: 'UX/UI Design', category: 'software' },
        { label: 'PHP', category: 'language' },
        { label: 'HTML', category: 'language' },
        { label: 'CSS', category: 'language' },
      ],
    },
    {
      title: 'Sleepless Violin',
      href: 'https://www.sleeplessviolin.com/',
      github: 'https://github.com/Krisna-Bou/Sleepless-Violin',
      image: 'assets/projects/SleeplessViolin.png',
      description:
        "An online portfolio for a classical musician to showcase performances and experience. Polished, minimalist aesthetic aligned with the client's vision and a seamless user experience.",
      tags: [
        { label: 'CSS', category: 'language' },
        { label: 'Front-End Development', category: 'software' },
        { label: 'Freelance', category: 'framework' },
        { label: 'HTML', category: 'language' },
      ],
    },
    {
      title: 'Project Display System',
      href: 'https://reit4841-krisna-bou.uqcloud.net/Project-Display/',
      github: 'https://github.com/Krisna-Bou/Project-Display-System',
      image: 'assets/projects/Project-Display.png',
      description:
        'Honours thesis project: a project display and resource management system for UQ, deployed to UQCloud to display projects within the School of Electrical Engineering and Computer Science.',
      tags: [
        { label: 'PHP', category: 'language' },
        { label: 'Front-End Development', category: 'software' },
        { label: 'UX/UI Design', category: 'software' },
        { label: 'CSS', category: 'language' },
        { label: 'CodeIgniter', category: 'framework' },
        { label: 'Thesis Project', category: 'framework' },
      ],
    },
    {
      title: 'Baiae Imperiali',
      href: 'https://krisna-bou.github.io/Baiae_Imperiali/',
      github: 'https://github.com/Krisna-Bou/Baiae_Imperiali',
      image: 'assets/projects/Baiae.png',
      description:
        'A web application centred on an ancient Roman resort, offering a booking system for restaurants and hotels alongside informative content on Roman history and culture.',
      tags: [
        { label: 'CSS', category: 'language' },
        { label: 'Front-End Development', category: 'software' },
        { label: 'HTML', category: 'language' },
      ],
    },
  ],

  miniProjects: [
    {
      title: 'Pigeon E2EE Messenger',
      github: 'https://github.com/Krisna-Bou/Pigeon-E2EE-Messenger',
      description:
        'A secure end-to-end encrypted instant messaging application with client and server subsystems (pigeon-client / pigeon-server).',
      tags: [
        { label: 'Python', category: 'language' },
        { label: 'Software Architecture', category: 'software' },
        { label: 'AWS', category: 'software' },
        { label: 'HTTP', category: 'framework' },
        { label: 'Docker', category: 'framework' },
      ],
    },
    {
      title: 'Spam Overflow',
      github: 'https://github.com/Krisna-Bou/SpamOverflow',
      description:
        'An AWS-hosted application for detecting spam emails within a system, assessing AWS metrics to determine anomalies and unusual behavior.',
      tags: [
        { label: 'Terraform', category: 'software' },
        { label: 'REST APIs', category: 'framework' },
        { label: 'AWS', category: 'software' },
        { label: 'ECS', category: 'language' },
        { label: 'Docker', category: 'framework' },
      ],
    },
  ],

  tech: ['python', 'java', 'mysql', 'javascript', 'html', 'css', 'docker', 'git', 'web'],
};
