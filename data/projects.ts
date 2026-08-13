export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  href: string;
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "StudXAI",
    category: "School ERP & Learning Platform",
    description:
      "A multi-role educational platform built for students, teachers, school administrators and super administrators. Designed and developed as a production mobile application.",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Next.js",
    ],
    features: [
      "4 role-based dashboards",
      "6+ ERP modules",
      "Firebase Authentication",
      "Role-based access control",
      "Real-time Firestore data",
      "Production deployment",
    ],
    href: "/projects/studxai",
    featured: true,
  },

  {
    number: "02",
    title: "AI Tutor",
    category: "Retrieval-Augmented Generation",
    description:
      "An AI tutoring system that retrieves relevant knowledge using semantic search and vector embeddings before generating document-grounded responses.",
    technologies: [
      "Python",
      "NLP",
      "RAG",
      "Transformers",
      "Vector Embeddings",
      "Semantic Search",
    ],
    features: [
      "Knowledge retrieval",
      "Semantic search",
      "Vector embeddings",
      "Document-grounded responses",
    ],
    href: "/projects/ai-tutor",
    featured: false,
  },

  {
    number: "03",
    title: "Smart AI Attendance",
    category: "Computer Vision",
    description:
      "A real-time facial recognition attendance system using computer vision to detect, encode and verify identities before storing attendance records.",
    technologies: [
      "Python",
      "OpenCV",
      "face_recognition",
      "Firebase",
      "NumPy",
    ],
    features: [
      "Face detection",
      "Face encoding",
      "Identity verification",
      "Firebase attendance storage",
    ],
    href: "/projects/ai-attendance",
    featured: false,
  },
];