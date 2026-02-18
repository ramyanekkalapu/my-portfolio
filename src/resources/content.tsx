import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ramya",
  lastName: "Nekkalapu",
  name: `Ramya Nekkalapu`,
  role: "Frontend/UI Developer",
  avatar: "/images/avatar.jpg",
  email: "nekkalapu.ramya7@gmail.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Telugu", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system",
  //   essential: true,
  // },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ramyanekkalapu",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend Software Engineer - React | Angular | TypeScript | JavaScript</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Ramya, a frontend software engineer and I build accessible, modular UIs and ship production features with REST/GraphQL, performance tuning, and CI/CD releases.  
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Ramya Nekkalapu, an MS CS student (graduating May 2026) and a frontend engineer focused on
        building modular, scalable and accessible UI solutions. My background includes building reusable UI components
        in Angular/React, integrating REST/GraphQL APIs, and improving load time and reliability through performance optimizations, testing, 
        and CI/CD.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "DELOITTE USI",
        timeframe: "Jun 2022 - Sep 2024",
        role: "Software Engineer - Frontend",
        achievements: [
          <>
            Built 20+ Angular/TypeScript UI components (forms, tables, filters, modals) and standardized validation/error/loading patterns, 
            cutting UI rework ~25% and improving sprint delivery speed through agile development. 
          </>,
          <>
            Partnered with UX using Figma to translate 8+ prototypes into responsive, accessible screens 
            (keyboard navigation/ARIA patterns), reducing design-to-dev cycle time ~20%. 
          </>,
           <>
           Integrated Angular UI with 15+ REST/GraphQL endpoints using best practices from JavaScript frameworks, 
          improving client-side state handling and error recovery, and reducing API-related UI defects ~30% post-release.  
          </>,
          <>
           Developed/extended 15+ REST/GraphQL APIs supporting UI workflows; improved responsiveness by 
          reducing payload size ~20% and tightening queries to prevent over-fetching
          </>,
          <>
           Noticed a spike in UI errors on a high-traffic workflow, investigated 3 hypotheses 
            (API regression, state bug, browser-specific issue), ruled out root causes using logs + reproducible steps, fixed an async state race condition, and reduced user-facing failures ~30%.   
          </>,
          <>
           Identified a drop in page performance after a release, tested 3 hypotheses (large payloads, expensive rendering, redundant API calls), 
            optimized rendering and reduced over-fetching, and improved page responsiveness ~20% while cutting repeated calls
          </>,
          <>
          Implemented CI/CD checks in Azure DevOps / GitHub Actions (build + lint + unit tests + deploy gates), 
            leveraging front-end modular builds to reduce release failures ~30% and improve deployment confidence.
          </>,
          <>
          Strengthened quality with unit/integration/regression testing for critical UI/API flows, 
            cutting escaped defects ~25% and improving sprint predictability.
          </>,
          <>
           Led production triage for 40+ P1/P2 incidents by isolating root cause via logs/metrics, shipping fixes quickly, 
            and documenting runbooks-reducing recurring incidents ~20%.
          </>,
          <>
           Led onboarding for new team members, creating a quick-start guide (local setup, branching/PR checklist, testing workflow) 
            and mentoring them through first deliverables to help them ramp faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "I&T Labs",
        timeframe: "Jan 2021 - Aug 2021",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Built 20+ responsive web components using JavaScript (ES6+), HTML5, CSS3, and component libraries for a 
            customer-facing portal; standardized reusable UI patterns across 4+ screens.
          </>,
          <>
            Implemented React dashboard components using JavaScript frameworks (Hooks: useState/useEffect) and 
            applied accessibility basics (semantic HTML, ARIA labels, keyboard navigation). 
          </>,
          <>
            Created 8+ REST APIs using Node.js to retrieve data from MongoDB; added validation + error handling to improve API reliability.
          </>,
          <>
            Configured Jenkins CI/CD to automate build/test/deploy and added unit test execution as a quality gate; 
            reduced release rework by  ~25% and improved modularity of builds.
          </>,
           <>
            Troubleshot 25+ defects with log analysis and structured debugging; delivered fixes in ~1–2 days during QA cycles.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Lewis University, Romeoville, IL",
        description: <>MS in Computer Science (Concentration: Artificial Intelligence)</>,
      },
      {
        name: "VR Siddhartha Engineering College, Vijayawada, India",
        description: <>Bachelor of Technology, Information Technology</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>Angular, React, TypeScript, JavaScript, HTML5, CSS3, Responsive UI, Component Libraries, Accessibility(a11y)</>
        ),
        tags: [
          {
            name: "Angular",
            icon: "angular",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "HTML5",
            icon: "html",
          },
          {
            name: "CSS3",
            icon: "css",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Backend/APIs",
        description: (
          <>Python, FastAPI, Node.js, REST, GraphQL</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "FastAPI",
            icon: "fastapi",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "REST",
            icon: "rest",
          },
          {
            name: "GraphQL",
            icon: "graphql",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Cloud/DevOps",
        description: (
          <>AWS (EC2/S3/RDS), Docker, CI/CD (Azure DevOps, GitHub Actions, Jenkins)</>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "CI/CD",
            icon: "cicd",
          },
        ],
      },
      {
        title: "Databases",
        description: (
          <>SQL, MySQL, PostgreSQL, MongoDB, CosmosDB (exposure)</>
        ),
        tags: [
          {
            name: "SQL",
            icon: "sql",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "CosmosDB",
            icon: "cosmosdb",
          },
        ],
      },
      {
        title: "Testing/Quality",
        description: (
          <>Unit Testing, Integration Testing, Regression Testing, API Testing (Postman), Debugging/RCA</>
        ),
        tags: [
          {
            name: "Unit Testing",
            icon: "unittesting",
          },
          {
            name: "Integration Testing",
            icon: "integrationtesting",
          },
          {
            name: "Regression Testing",
            icon: "regressiontesting",
          },
          {
            name: "API Testing",
            icon: "postman",
          },
          {
            name: "Debugging",
            icon: "debugging",
          },
        ],
      },
      {
        title: "Tools",
        description: (
          <>Git, Jira, Postman, Figma</>
        ),
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "Jira",
            icon: "jira",
          },
          {
            name: "Postman",
            icon: "postman",
          },
          {
            name: "Figma",
            icon: "figma",
          },
        ],
      },
      {
        title: "Methodologies",
        description: (
          <>JavaScript Frameworks, Agile Development</>
        ),
        tags: [
          
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
