/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Haoyan Yang",
  title: "Hi all, I'm Haoyan",
  subTitle: emoji(
    `I am a <span style="color: #55198b; font-weight: 500;">First-Year CS PhD student at Stony Brook University</span>, advised by
    <a href="https://joezhouai.com/"
      target="_blank"
      rel="noopener noreferrer"
      style="color: #55198b; text-decoration: none; font-weight: 500">
      Prof. Jiawei Zhou
    </a>
    and
    <a href="https://www3.cs.stonybrook.edu/~niranjan/"
      target="_blank"
      rel="noopener noreferrer"
      style="color: #55198b; text-decoration: none; font-weight: 500">
      Prof. Niranjan Balasubramanian
    </a>.<br /><br />

    My research interests primarily lie in the field of <span style="color: #55198b; font-weight: 500;">Large Language Models (LLMs)</span>, specifically focusing on the following four aspects:<br />
    <span style="color: #55198b; font-weight: 500;">Self-improvement</span>: Developing mechanisms for LLMs to autonomously refine their reasoning via iterative feedback.<br />
    <span style="color: #55198b; font-weight: 500;">Reliability</span>: Ensuring model outputs remain robust and truthful in complex, real-world settings.<br />
    <span style="color: #55198b; font-weight: 500;">Alignment</span>: Tuning models to faithfully follow user intent through preference learning and post-training..<br />
    <span style="color: #55198b; font-weight: 500;">RAG</span>: Enhancing generation capabilities by grounding models with external, trustworthy knowledge.<br /><br />

    I warmly welcome connections and collaborations on related research topics. Feel free to reach out!`,
  ),
  resumeLink:
    "https://drive.google.com/file/d/1z9m9cWw30auCfju0Coq5hppg8AAso2We/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
  profilePicture: require("./assets/images/profile2.jpg"),
};

// Social Media Links

const socialMediaLinks = {
  gmail: "haoyan.yang@stonybrook.edu",
  linkedin: "https://www.linkedin.com/in/haoyan-yang/",
  github: "https://github.com/Joyyang158",
  // googlescholar: "saadpasta70@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stony Brook University",
      logo: require("./assets/images/sbuLogo.png"),
      subHeader: "PhD, Computer Science",
      duration: "September 2025 - Present",
      desc: "GPA: 4.0 / 4.0",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "New York University",
      logo: require("./assets/images/NYULogo.png"),
      subHeader: "MS, Data Science",
      duration: "September 2023 - May 2025",
      desc: "GPA: 3.92 / 4.0",
      descBullets: ["<a href='https://cds.nyu.edu/masters-in-data-science-capstone/' target='_blank' style='color: #6c757d; text-decoration: none;'>Best Capstone Poster</a> "]
    },
    {
      schoolName: "Beijing Normal-Hong Kong Baptist University",
      logo: require("./assets/images/bnbuLogo.png"),
      subHeader: "BS, Data Science (Conferred with the Bachelor of Science degree from Hong Kong Baptist University)",
      duration: "September 2019 - June 2023",
      desc: "GPA: 3.84 / 4.0 (Ranked 1st out of 94)",
      descBullets: [
        "<a href='https://ar.hkbu.edu.hk/student-services/graduation/scholastic-awards' target='_blank' style='color: #6c757d; text-decoration: none;'>Scholastic Award</a>",
        "<a href='https://sao.uic.edu.cn/en/info/1123/14392.htm' target='_blank' style='color: #6c757d; text-decoration: none;'>Academic Scholarships</a> for all four years(First-Class x3, Second-Class x1).",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Intern",
      company: "GE HealthCare",
      companylogo: require("./assets/images/ge.jpg"),
      date: "January 2025 – May 2025",
      desc: "Remote, WA; Advisor: Dr. Runxue Bao",
      descBullets: [
        "Reliability of LLM: Developed a Reasoning-based Bias Detector (RBD) to debias LLM-as-a-judge evaluations.",
      ]
    },
    {
      role: "Research Capstone Project Collaborator",
      company: "S&P Global Rating",
      companylogo: require("./assets/images/sp.jpg"),
      date: "September 2024 – May 2025",
      desc: "New York, NY ; Advisor: Mr. Urjit Patel",
      descBullets: [
        "LLM for Finance:: Developed Fin-RAG, a RAG-enhanced LLM system with dynamic chunking and hybrid retrieval for financial QA.",
      ]
    },
    {
      role: "Research Intern",
      company: "Samsung Research America",
      companylogo: require("./assets/images/sra.png"),
      date: "May 2024 – Augest 2024",
      desc: "Mountain View, CA ; Advisors: Dr. Ting Hua & Dr. Shangqian Gao",
      descBullets: [
        "Self-Improvement of LLM: Proposed Dynamic Noise Preference Optimization (DNPO) leveraging synthetic data to enable LLM self-improvement.",
      ]
    },
    {
      role: "Research Assistant",
      company: "NYU Langone Health",
      companylogo: require("./assets/images/langone.png"),
      date: "March 2024 - Augest 2025",
      desc: "Remote, NY ; Advisor: Dr. Yiqiu Shen",
      descBullets: [
        "Self-LLM for Healthcare: of LLM: Built an automated multi-modal pipeline for breast ultrasound report generation.",
      ]
    },
    {
      role: "Research Intern",
      company: "Ping An Technology",
      companylogo: require("./assets/images/pingan.png"),
      date: "March 2023 - June 2023",
      desc: "Shenzhen, China ; Advisor: Mr. Zhitao Li",
      descBullets: [
        "RAG in LLM: Developed PRCA, a pluggable adapter that improves retrieval-augmented QA with black-box LLMs.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
  subtitle:
    `Check out my latest research on <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=q8sCVVcAAAAJ&sortby=pubdate" target="_blank" rel="noopener noreferrer" style="color: #7d44b1; font-weight: bold; text-decoration: none;">Google Scholar</a>`,
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://arxiv.org/pdf/2505.17100",
      title: "Any Large Language Model Can Be a Reliable Judge: Debiasing with a Reasoning-based Bias Detector",
      description:
        "NeurIPS 2025"
    },
    {
      url: "https://arxiv.org/pdf/2502.05400",
      title: "Dynamic Noise Preference Optimization for LLM Self-Improvement via Synthetic Data",
      description:
        "ArXiv 2025"
    },
    {
      url: "https://arxiv.org/pdf/2411.16002?",
      title: "Exploring Performance Contrasts in TableQA: Step-by-Step Reasoning Boosts Bigger Language Models, Limits Smaller Language Models",
      description:
        "ArXiv 2024"
    },
    {
      url: "https://dl.acm.org/doi/pdf/10.1145/3688868.3689200",
      title: "Burextract-llama: An llm for clinical concept extraction in breast ultrasound reports",
      description:
        "MM 2024 - Workshop on Multimedia Computing for Health and Medicine (Oral Paper)"
    },
    {
      url: "https://arxiv.org/pdf/2406.12238?",
      title: "PFID: Privacy First Inference Delegation Framework for LLMs",
      description:
        "ArXiv 2024"
    },
    {
      url: "https://arxiv.org/pdf/2405.16856",
      title: "Can We Trust LLMs? Mitigate Overconfidence Bias in LLMs through Knowledge Transfer",
      description:
        "ArXiv 2024"
    },
    {
      url: "https://arxiv.org/pdf/2310.18347",
      title: "PRCA: Fitting Black-Box Large Language Models for Retrieval Question Answering via Pluggable Reward-Driven Contextual Adapter",
      description:
        "EMNLP 2023"
    },
    {
      url: "https://link.springer.com/chapter/10.1007/978-981-97-2390-4_31",
      title: "Multimodal Stock Price Forecasting Using Attention Mechanism Based on Multi-Task Learning",
      description:
        "APWeb-WAIM 2023"
    },
    {
      url: "https://ieeexplore.ieee.org/abstract/document/10154746",
      title: "Swarm Intelligence Optimization of UAV Routing with Simultaneously Stochastic Pick-up and Delivery during COVID-19",
      description:
        "ICCCBDA 2023"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "haoyan.yang@stonybrook.edu, haoyanyang5@gmail.com",
  display: false
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
