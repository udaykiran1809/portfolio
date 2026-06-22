import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Uday Kiran Kothapalli",
  title: "Researcher",
  about: "I'm a Ph.D. student in the Department of Computer Science and Software Engineering at Auburn University, under the supervision of Dr. Sathyanarayanan N. Aakur. I'm trying to bridge the gap between cybersecurity and AI. I'm currently working as a Graduate Assistant in the RFID Lab at Auburn University.",
  skills: [
    "Python", "Rust", "C++", "C", "SQL", "R", "React", "Dart",
    "Deep Learning (LLMs, Transformers)", "RAG", "Computer Vision", "Agentic AI",
    "PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers", "scikit-learn",
    "NumPy", "Pandas", "OpenCV", "LangChain", "LlamaIndex",
    "RFID Technology", "Arduino Uno", "Raspberry Pi"
  ],
  experience: [
    {
      company: "RFID Lab at Auburn University",
      role: "Graduate Assistant",
      period: "Jan 2024 - Present",
      description: [
        "Contributed to a technical team integrating RFID technology with major retail self-checkout (SCO) systems, optimizing automated item identification and improving point-of-sale accuracy.",
        "Managed the end-to-end maintenance and troubleshooting of RFID hardware at live retail locations, ensuring high system uptime and adherence to strict safety and performance standards.",
        "Developed a data pipeline to ingest and process unstructured raw RFID telemetry from live retail environments, and trained deep learning models on this RFID time-series data to extract actionable insights for inventory movement and system efficiency.",
        "Communicated model results and technical findings to non-technical teammates and cross-functional stakeholders, translating complex machine learning outputs into clear, actionable insights."
      ]
    },
    {
      company: "Hyderabad City Police",
      role: "Cybersecurity Research Intern",
      period: "Oct 2022 - Jan 2023",
      description: [
        "Configured server infrastructures to support department-wide operations and data management, and implemented the local network architecture across the department, ensuring high-speed connectivity and secure data transmission protocols.",
        "Analyzed raw financial datasets and bank transactions, leading to the identification and prevention of credit card fraud and identity theft cases."
      ]
    },
    {
      company: "Pradhi.ai",
      role: "Research Intern",
      period: "Sep 2022 - Feb 2023",
      description: [
        "Engaged in in-depth exploration of transformer models and applied BERT (Bidirectional Encoder Representations from Transformers) to analyze a legal corpus, demonstrating proficiency in leveraging advanced NLP techniques for legal text comprehension."
      ]
    },
    {
      company: "Spotverge",
      role: "Mobile Application Developer Intern",
      period: "May 2022 - Aug 2022",
      description: [
        "Contributed to the front-end development of an iOS/Android mobile application using Dart and Flutter.",
        "Implemented user data management with Google Firebase and ensured seamless data synchronization across platforms."
      ]
    },
    {
      company: "Cephas Research",
      role: "Remote Blockchain Developer Intern",
      period: "May 2021 - Aug 2021",
      description: [
        "Engineered a blockchain-based supply chain system to store product specifications and real-time GPS location data, enhancing operational transparency and accountability through immutable data recording.",
        "Developed technical proficiency in the Substrate framework and Rust programming language to build custom blockchain modules."
      ]
    }
  ],
  education: [
    {
      institution: "Auburn University, Auburn, AL",
      degree: "Ph.D. in Computer Science and Software Engineering",
      period: "Aug 2025 - Present"
    },
    {
      institution: "Auburn University, Auburn, AL",
      degree: "Master of Science in Cybersecurity Engineering",
      period: "Aug 2023 - May 2025"
    },
    {
      institution: "TKR College of Engineering and Technology, Hyderabad, India",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "Aug 2019 - Jun 2023"
    }
  ],
  projects: [],
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
  blog: [],
  social: {
    linkedin: "https://www.linkedin.com/in/uday-kiran-kothapalli-046847177/",
    email: "uzk0006@auburn.edu",
    github: "https://github.com/udaykiran1809"
  }
};