export interface Project {
  id: string;
  title: string;
  name: string;
  category: string;
  filterCategory: 'all' | 'ai' | 'web' | 'agritech' | 'education' | 'property' | 'hardware';
  tagline?: string;
  description: string;
  longDescription?: string[];
  features?: string[];
  statusLabel: string;
  statusType: 'prototype' | 'live' | 'concept' | 'experiment';
  image: string;
  imageAlt: string;
  techTags: string[];
  demoUrl?: string;
  githubUrl?: string;
  keyFeatureHighlight?: {
    title: string;
    description: string;
    details?: { label: string; value: string }[];
  };
  mandiComparisonExample?: {
    crop: string;
    mandiA: { name: string; price: string };
    mandiB: { name: string; price: string };
    transportCostNote: string;
  };
  servicesList?: string[];
  pricingModel?: {
    formFilling: string;
    optionalAssistant: string;
  };
  disclaimer?: string;
}

export const PERSONAL_INFO = {
  name: "Surya Pratap Singh",
  monogram: "SP.",
  headline: "I build ideas into real-world digital products.",
  professionalIdentity: [
    "B.Tech Computer Science & Engineering Student",
    "AI & Full-Stack Developer",
    "Technology Builder",
    "Innovator"
  ],
  shortIntro: "I am a Computer Science & Engineering student and technology builder based in Lucknow, India. I enjoy turning real-world problems into practical digital products using AI, web technologies, software engineering and experimentation.",
  aboutDetailed: [
    "I'm a Computer Science & Engineering student and technology builder based in Lucknow, India.",
    "I enjoy turning real-world problems into practical digital products using AI, web technologies, software engineering and experimentation.",
    "My work spans AI-powered applications, agriculture technology, property and registry platforms, educational tools, automation concepts and other practical digital solutions.",
    "I also enjoy exploring the connection between software and hardware, experimenting with microcontrollers, communication modules and IoT concepts."
  ],
  brandTagline: "Build. Experiment. Solve Real Problems.",
  college: "Babu Banarasi Das Northern India Institute of Technology (BBDNIIT), Lucknow",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  semester: "5th Semester",
  location: "Lucknow, Uttar Pradesh, India",
  email: "surya286351@gmail.com",
  phone: "+91 9431683881",
  github: "https://github.com/Suryasingh072",
  linkedin: "https://www.linkedin.com/in/surya-pratap-singh-b82a0b367?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  twitter: "https://x.com/suryasingh2567",
  instagram: "https://www.instagram.com/suryasingh072?stkn=MW0zZzc5ZDRnOWw4bw==",
  website: "https://pyqwalebhaiya.in",
  resumePath: "/resume/Surya-Pratap-Singh-Resume.pdf"
};

export const QUICK_INFO_CHIPS = [
  "B.Tech CSE",
  "5th Semester",
  "BBDNIIT Lucknow",
  "AI + Full Stack",
  "Builder"
];

export const ABOUT_METRICS = [
  { label: "Education", value: "B.Tech CSE", detail: "Computer Science & Engineering" },
  { label: "Current", value: "5th Semester", detail: "BBDNIIT Lucknow" },
  { label: "Focus", value: "AI • Full Stack", detail: "Product Building & Solving Problems" },
  { label: "Location", value: "Lucknow, India", detail: "Uttar Pradesh" }
];

export const WHAT_I_BUILD = [
  {
    num: "01",
    title: "AI Products",
    description: "AI-powered applications, prediction systems, intelligent assistants and automation concepts designed for practical everyday challenges.",
    tags: ["Machine Learning", "Generative AI", "APIs", "Data Intelligence"]
  },
  {
    num: "02",
    title: "Full-Stack Web Apps",
    description: "Modern responsive websites and complete web applications focused on usability, clean user flows and practical workflows.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Modern Web Architecture"]
  },
  {
    num: "03",
    title: "Real-World Platforms",
    description: "Digital solutions designed around practical problems faced by users, students, farmers and businesses in regional ecosystems.",
    tags: ["AgriTech", "Education Tech", "Legal Tech", "Utility Tools"]
  },
  {
    num: "04",
    title: "Hardware + Software",
    description: "Experiments combining software with ESP32, NodeMCU, GSM modules and IoT concepts to bridge physical and digital systems.",
    tags: ["ESP32", "NodeMCU", "GSM Automation", "IoT Telemetry"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "agripredict",
    name: "AgriPredict",
    title: "AI-Powered Crop Price Prediction & Mandi Intelligence Platform",
    category: "Smart Agriculture & Rural Innovation",
    filterCategory: "agritech",
    tagline: "Predict the Market. Plan the Sale. Protect the Farmer's Profit.",
    description: "AgriPredict is an AgriTech platform designed to help farmers make better selling decisions using crop price intelligence, mandi information, weather context and predictive insights. The platform focuses on helping farmers compare markets and understand whether travelling to another mandi is actually profitable after transportation costs.",
    statusLabel: "Prototype / Hackathon Project",
    statusType: "prototype",
    image: "/src/assets/images/agripredict_preview_1791039686989.jpg",
    imageAlt: "AgriPredict Crop Price Intelligence and Mandi Profit Comparison Platform",
    techTags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Recharts", "AI", "Agriculture"],
    mandiComparisonExample: {
      crop: "Potato (आलू)",
      mandiA: { name: "Lucknow Mandi", price: "₹25 / kg" },
      mandiB: { name: "Barabanki Mandi", price: "₹27 / kg" },
      transportCostNote: "Barabanki offers ₹2/kg higher rate, but AgriPredict factors in vehicle haulage, loading charges, and distance to show true net margin before the farmer travels."
    },
    keyFeatureHighlight: {
      title: "Mandi Profit Comparison Engine",
      description: "Rather than displaying isolated mandi prices, the system evaluates transport overheads, distance, fuel expenses, and batch volume to calculate real estimated profitability.",
      details: [
        { label: "Research Factor 1", value: "Historical Crop Prices" },
        { label: "Research Factor 2", value: "Weather & Seasonality Context" },
        { label: "Research Factor 3", value: "Supply & Demand Trends" },
        { label: "Research Factor 4", value: "Regional Transportation Matrix" }
      ]
    },
    disclaimer: "AgriPredict is developed as a prototype / hackathon project exploring market price intelligence. It is not an officially endorsed government portal or guaranteed financial advisor."
  },
  {
    id: "registrysathi",
    name: "RegistrySathi",
    title: "Bihar Property & Registry Assistance Platform",
    category: "Property Technology / Digital Services",
    filterCategory: "property",
    tagline: "Simplifying property documentation, deed drafting, and registry office workflows.",
    description: "A digital customer-handling platform designed to simplify access to property and registry-related services in Bihar. The platform provides service information, estimated expenses and assistance options while connecting customers with registry-office assistants / deed writers.",
    statusLabel: "Product Concept / Digital Platform",
    statusType: "concept",
    image: "/src/assets/images/registrysathi_mockup_1791039703343.jpg",
    imageAlt: "RegistrySathi Bihar Property and Registry Assistance Portal",
    techTags: ["React", "Tailwind CSS", "Web Platform", "Legal Tech", "Regional Services"],
    servicesList: [
      "बैनामा (Sale Deed)",
      "बख्शीशनामा (Gift Deed)",
      "वसीयतनामा (Will)",
      "तीतिमा (Rectification Deed)",
      "सामान्य प्रतिनिधि पत्र (General Power of Attorney)",
      "लीज (Lease Agreement)",
      "बंधक पत्र (Mortgage Deed)",
      "बयमोकासा",
      "बयमियादी रेहन",
      "ट्रस्ट Registry (Trust Deed)",
      "Marriage Registry Assistance",
      "Mutation / दाखिल-खारिज Guidance",
      "Land Record & Document Assistance",
      "Stamp Duty & Registration Fee Information"
    ],
    pricingModel: {
      formFilling: "₹2,000 (Form Filling & Document Structuring)",
      optionalAssistant: "₹1,000 (Optional Personal Assistant Support)"
    },
    disclaimer: "RegistrySathi is a private digital platform and product concept designed to assist users with documentation workflows. It is not affiliated with, authorized by, or owned by any government body."
  },
  {
    id: "printdrop",
    name: "PrintDrop",
    title: "On-Demand Campus Document Printing & Queue Automation Platform",
    category: "Campus Utility / Digital Printing Workflow",
    filterCategory: "web",
    tagline: "Upload documents. Skip print shop queues. Rapid on-campus fulfillment.",
    description: "A lightweight digital printing workflow platform designed for college campuses. Students can upload lecture notes, assignments, and documents, configure custom print settings (color/grayscale, page range, duplex, spiral binding), and pick up prints without waiting in crowded campus stationary shop queues.",
    statusLabel: "Campus Utility Platform",
    statusType: "prototype",
    image: "/src/assets/images/printdrop_mockup_1791042156526.jpg",
    imageAlt: "PrintDrop Campus Document Printing and Fulfillment Platform",
    techTags: ["React", "JavaScript", "Tailwind CSS", "PDF Processing", "Campus Workflow"],
    features: [
      "Instant PDF & document upload preview",
      "Custom print configuration (B&W / Color, Duplex, Binding)",
      "Automated print queue handling",
      "Designated on-campus pickup counter integration"
    ],
    keyFeatureHighlight: {
      title: "Queue Elimination Workflow",
      description: "Directly solves morning rush-hour friction at university print shops before exams and submission deadlines through pre-ordered print slots."
    }
  },
  {
    id: "pyqwalebhaiya",
    name: "PYQWaleBhaiya",
    title: "Lightweight Previous-Year Question & Study Resource Hub",
    category: "Education Technology",
    filterCategory: "education",
    tagline: "Free, streamlined study resources and previous year exam papers for college students.",
    description: "An educational platform focused on helping students access previous-year question papers and study resources through a simple and lightweight web experience.",
    statusLabel: "Live Web Platform",
    statusType: "live",
    image: "/src/assets/images/pyq_platform_mockup_1791039728577.jpg",
    imageAlt: "PYQWaleBhaiya Education Platform Interface",
    techTags: ["Web Platform", "JavaScript", "HTML5", "Responsive Design", "Education"],
    demoUrl: "https://pyqwalebhaiya.in",
    githubUrl: "https://github.com/surya286351/pyqwalebhaiya",
    keyFeatureHighlight: {
      title: "Lightweight Student Repository",
      description: "Engineered specifically for low-bandwidth mobile devices, removing heavy ad clutter and allowing students to quickly find verified semester question papers and subject syllabi."
    }
  },
  {
    id: "nazari-naksha",
    name: "Nazari Naksha",
    title: "Digital Nazari Naksha Tool",
    category: "Property / Utility Web Tool",
    filterCategory: "property",
    tagline: "Interactive directional property layout and synchronized road placement.",
    description: "A web-based tool designed around the creation and presentation of property / nazari naksha layouts with directional information, road placement and plot details. Elements stay visually synchronized with the property and plot layout.",
    statusLabel: "Interactive Web Tool",
    statusType: "prototype",
    image: "/src/assets/images/nazari_naksha_mockup_1791039716292.jpg",
    imageAlt: "Digital Nazari Naksha Property Layout Tool Interface",
    techTags: ["React", "Canvas / SVG", "Geometry Computation", "Tailwind CSS", "Utility Tool"],
    features: [
      "Property Layout Drafting",
      "Dynamic Cardinal Directions (North / South / East / West)",
      "Road Alignment & Placement Representation",
      "Digital Form Workflow for Plot Details",
      "Synchronized Plot Dimensions & Adjoining Boundary Markers"
    ],
    keyFeatureHighlight: {
      title: "Synchronized Road & Plot Alignment",
      description: "Maintains exact visual fidelity between road angles, boundary coordinates, and directional compass markers for clear property demarcation."
    }
  },
  {
    id: "cardioguard",
    name: "CardioGuard",
    title: "Cardiovascular Risk Awareness & Digital Health Concept",
    category: "AI / Healthcare Technology Concept",
    filterCategory: "ai",
    tagline: "AI-oriented exploration into early risk factors and health awareness.",
    description: "An AI-oriented project concept developed around technology-assisted cardiovascular risk awareness and digital health innovation, studying predictive risk parameter relationships.",
    statusLabel: "Research Concept",
    statusType: "concept",
    image: "/src/assets/images/agripredict_preview_1791039686989.jpg",
    imageAlt: "CardioGuard Digital Health Awareness Concept",
    techTags: ["Python", "Machine Learning Concepts", "Health Tech", "Data Exploration"],
    disclaimer: "CardioGuard is strictly an academic exploratory technology concept for risk factor awareness. It does not provide medical diagnosis, clinical validation, or doctor-approved advice."
  },
  {
    id: "experiments",
    name: "Hardware & IoT Lab",
    title: "Microcontroller Automation & Sensor Experiments",
    category: "Hardware + Software Experiments",
    filterCategory: "hardware",
    tagline: "Connecting physical sensors, microcontrollers, and cloud telemetry.",
    description: "A collection of hands-on experimental projects bridging embedded microcontrollers with software workflows: sensor data logging, GSM alert triggers, and remote telemetry prototypes.",
    statusLabel: "Lab Experiments",
    statusType: "experiment",
    image: "/src/assets/images/nazari_naksha_mockup_1791039716292.jpg",
    imageAlt: "Hardware and Microcontroller Experiments",
    techTags: ["ESP32", "NodeMCU", "GSM Modules", "C++ / Arduino", "IoT Protocols", "Sensors"],
    features: [
      "ESP32 Wi-Fi / Bluetooth telemetry workflows",
      "NodeMCU sensor interfacing and data packets",
      "GSM module automated alert and SMS trigger prototypes",
      "Student utility and automation scripts"
    ]
  }
];

export const TECH_STACK = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Programming",
    skills: ["Python", "JavaScript"]
  },
  {
    category: "AI",
    skills: ["Generative AI", "Machine Learning", "AI APIs", "Gemini Ecosystem"]
  },
  {
    category: "Backend / Data",
    skills: ["Supabase", "APIs", "Database Concepts", "Google Drive Workflows"]
  },
  {
    category: "Visualization",
    skills: ["Recharts"]
  },
  {
    category: "Hardware",
    skills: ["ESP32", "NodeMCU", "GSM", "IoT"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "AI Development Tools"]
  }
];

export const EXPLORING_TOPICS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "Full-Stack Development",
  "AgriTech",
  "Automation",
  "IoT",
  "Product Development",
  "Entrepreneurship"
];

export const INTERNSHIP_DATA = {
  title: "MakeX Intern — Kalam Pragati",
  program: "Kalam Pragati MakeX Internship",
  organization: "ERA Foundation",
  partner: "Central Training & Placement Cell, AKTU",
  location: "AKTU Campus, Lucknow, India",
  category: "Internship • Robotics • Innovation • Prototyping",
  timeline: "AUG 2025 — SEP 2025",
  type: "Internship",
  description: "Completed the Kalam Pragati MakeX Internship organized by ERA Foundation in collaboration with the Central Training & Placement Cell, AKTU. The program provided hands-on exposure to technology, prototyping, innovation, design thinking and real-world problem solving.",
  technologies: [
    "Robotics",
    "Innovation & Design Thinking",
    "Rapid Prototyping",
    "Arduino",
    "Raspberry Pi",
    "Python",
    "Sensors",
    "Computer Vision",
    "IoT"
  ],
  badges: [
    "ERA Foundation",
    "Kalam Pragati",
    "AKTU"
  ],
  certificateAvailable: false, // Only enable certificate button if actual certificate is provided
  note: "Presented as a hands-on internship and innovation program experience in collaboration with AKTU."
};

export const TIMELINE = [
  {
    year: "2026",
    title: "AgriPredict Development",
    organization: "Smart AgriTech Innovation",
    description: "Worked on an AI-powered agriculture and mandi intelligence concept focused on crop price intelligence and practical market comparison accounting for transport costs."
  },
  {
    year: "AUG 2025 — SEP 2025",
    title: "MakeX Intern — Kalam Pragati",
    organization: "ERA Foundation & Central Training & Placement Cell, AKTU",
    description: "Completed hands-on internship focused on robotics, rapid prototyping, innovation, design thinking, sensors, Arduino, and embedded systems problem solving at AKTU Campus, Lucknow."
  },
  {
    year: "2025 — 2026",
    title: "Innovation & Product Building",
    organization: "Independent Technology Projects",
    description: "Worked on multiple practical technology products including PrintDrop (campus print queue automation), RegistrySathi, PYQWaleBhaiya, and Nazari Naksha."
  }
];

export const HOW_I_BUILD_STEPS = [
  {
    step: "01",
    title: "Find the Problem",
    description: "Understand a real-world problem faced by real people, students, farmers, or daily workflows."
  },
  {
    step: "02",
    title: "Research",
    description: "Study users, existing friction points, existing solutions and technical possibilities."
  },
  {
    step: "03",
    title: "Prototype",
    description: "Build the interface and core functionality quickly to validate feasibility."
  },
  {
    step: "04",
    title: "Test",
    description: "Identify rough edges, gather practical input, and collect honest feedback."
  },
  {
    step: "05",
    title: "Improve",
    description: "Iterate on usability, clarity, technical stability, and visual craft."
  },
  {
    step: "06",
    title: "Ship",
    description: "Turn the prototype into a usable, lightweight product that solves the intended challenge."
  }
];

export const GITHUB_REPOS_STATIC = [
  {
    name: "Suryasingh072",
    description: "Personal GitHub organization and open-source experimental repositories.",
    language: "JavaScript / Python",
    url: "https://github.com/Suryasingh072"
  },
  {
    name: "pyqwalebhaiya",
    description: "Educational portal for engineering students to download semester question papers and study guides.",
    language: "JavaScript / HTML",
    url: "https://github.com/surya286351/pyqwalebhaiya"
  },
  {
    name: "agripredict-prototype",
    description: "AI-assisted crop price intelligence and mandi transportation cost comparison prototype.",
    language: "React / Vite / Tailwind",
    url: "https://github.com/Suryasingh072"
  }
];
