import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Uday Kiran Kothapalli",
  title: "Researcher",
  about: "I'm a Ph.D. student in the department of Computer Science and Software Enginnering at Auburn University, under the supervision of Dr. Sathyanarayanan N. Aakur. I'm trying to bridge the gap between cybersecurity and AI. I'm currently working as a Graduate Assistance in RFID lab at Auburn University.",
  skills: [
    "React", "TypeScript", "Node.js", "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Git", "SQL", "REST APIs", "System Design", "Cloud Computing"
  ],
  experience: [
    {
      company: "Auburn University RFID Lab",
      role: "Graduate Assistant",
      period: "Dec 2023 - Present",
      description: [
        "Led the migration of a legacy monolithic application to a microservices architecture.",
        "Improved application performance by 40% through code optimization and caching strategies.",
        "Mentored junior developers and conducted code reviews to ensure high-quality standards."
      ]
    },
    {
      company: "Pradhi AI Solutions",
      role: "Research Intern",
      period: "Aug 2022 - Feb 2023",
      description: [
        "Developed and maintained user-facing features using React and Redux.",
        "Collaborated with product managers and designers to deliver intuitive user interfaces.",
        "Implemented CI/CD pipelines to streamline deployment processes."
      ]
    },
    {
      company: "Hyderabad City Police",
      role: "Cybersecurity Analyst Intern",
      period: "Sep 2022 - Dec 2022",
      description: [
        "Developed and maintained user-facing features using React and Redux.",
        "Collaborated with product managers and designers to deliver intuitive user interfaces.",
        "Implemented CI/CD pipelines to streamline deployment processes."
      ]
    },
    ,
    {
      company: "Spotverge",
      role: "Application Developer Intern",
      period: "May 2022 - Jul 2022",
      description: [
        "Developed and maintained user-facing features using React and Redux.",
        "Collaborated with product managers and designers to deliver intuitive user interfaces.",
        "Implemented CI/CD pipelines to streamline deployment processes."
      ]
    }
  ],
  education: [
    {
      institution: "Auburn University, Auburn, AL",
      degree: "Phd in Computer Science",
      period: "2025 - present"
    },
    {
      institution: "Auburn University, Auburn, AL",
      degree: "Master's in Cybersecurity Engineering",
      period: "2023 - 2025"
    },
    {
      institution: "TKR College of Engineering and Technology, Hyderabad, India",
      degree: "Bachelor of Technology in Computer Science",
      period: "2019 - 2023"
    }
  ],
  projects: [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing products, orders, and analytics for an e-commerce platform.",
      technologies: ["React", "TypeScript", "Chart.js", "Firebase"]
    },
    {
      title: "Task Management API",
      description: "A RESTful API for a task management application with authentication and real-time updates.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io"]
    }
  ],
  papers: [
    {
      title: "Towards Enhancing Device Anonymity and Classification Resistance in IoT",
      publication: "IEEE International Conference on Communications Workshops (ICC Workshops)",
      year: "2025",
      authors: "Lalith Medury, Uday Kiran Kothapalli, Farah Kandah",
      abstract: "IoT devices generate predictable traffic patterns, making them vulnerable to profiling by machine learning classifiers. While current defenses focus on external threats, they often fail against local adversaries who can decrypt traffic. To address this, we introduce ProTOF, a protocol-based obfuscation framework. ProTOF protects privacy by injecting protocol-specific packets that mimic other devices, effectively confusing classifiers. Experiments demonstrate that ProTOF reduces device identification accuracy from 95% to 31% without introducing transmission delays. With a minimal bandwidth overhead of just 12 MB/day, ProTOF provides a robust, efficient safeguard against sophisticated local surveillance.",
      link: "https://ieeexplore.ieee.org/abstract/document/11162286"
    }
  ],
  blog: [
    {
      title: "Understanding React Server Components",
      date: "Oct 15, 2023",
      excerpt: "A deep dive into how Server Components change the way we build React applications and improve performance.",
      readTime: "5 min read",
      link: "#"
    },
    {
      title: "My Journey into System Design",
      date: "Aug 22, 2023",
      excerpt: "Lessons learned while preparing for system design interviews and architecting real-world solutions.",
      readTime: "8 min read",
      link: "#"
    }
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/uday-kiran-kothapalli-046847177/",
    email: "uzk0006@auburn.edu",
    github: "https://github.com/udaykiran1809"
  }
};