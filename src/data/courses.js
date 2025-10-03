import { Award, Clock, TrendingUp, Users } from "lucide-react";
import project1 from "@/../public/images/Project1.png";
import project2 from "@/../public/images/Project2.png";

const courses = {
  programming: {

    slug: "programming",
    title: "Programming Languages",
    image: "string",
    icon: "",
    description:
      "Master C, C++, Python, and Java with strong problem-solving and coding skills.",
    why: "why you should take our course within 50 words",
    modules: [
      {
        id: "1",
        title: "C Fundamentals",
        duration: "4 weeks",
        topics: ["Syntax", "Memory", "Pointers"],
        projects: 2,
      },
      {
        id: "2",
        title: "C++ Advanced",
        duration: "5 weeks",
        topics: ["OOP", "STL", "DSA"],
        projects: 3,
      },
      {
        id: "3",
        title: "Python Essentials",
        duration: "5 weeks",
        topics: ["OOP", "Libraries", "Automation"],
        projects: 3,
      },
      {
        id: "4",
        title: "Java Programming",
        duration: "6 weeks",
        topics: ["Core Java", "Collections", "OOP"],
        projects: 3,
      },
    ],
    tools: [
      { name: "GCC", icon: "http://icon8-gcc.com" },
      { name: "Eclipse", icon: "http://icon8-eclipse.com"}
    ],
    technologies: ["C", "C++", "Python", "Java"],
  },

  mern: {
    id: "2",
    slug: "mern",
    title: "MERN Stack Development",
    description:
      "Full-stack development with MongoDB, Express.js, React, and Node.js.",
    demand:
      "High demand for MERN developers as companies prefer full-stack engineers.",
    jobGrowth: "40%",
    abroadOpportunity: "high",
    avgSalary: "₹4-8 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "22 Weeks",
        label: "Course Duration",
        description: "Intensive, hands-on learning",
      },
      {
        icon: Users,
        value: "1:4",
        label: "Instructor Ratio",
        description: "Personalized attention",
      },
      {
        icon: Clock,
        value: "600+",
        label: "Learning Hours",
        description: "Comprehensive curriculum",
      },
      {
        icon: Award,
        value: "15+",
        label: "Live Projects",
        description: "Real-world experience",
      },
    ],
    jobScope: [
      {
        role: "Full Stack Developer",
        jd: "Develop and maintain frontend and backend with MERN stack.",
      },
      {
        role: "React Developer",
        jd: "Focus on interactive and dynamic frontend using React.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "Frontend Fundamentals",
        duration: "4 weeks",
        topics: ["HTML", "CSS", "JavaScript"],
        projects: 2,
      },
      {
        id: "2",
        title: "React Development",
        duration: "6 weeks",
        topics: ["Hooks", "State", "Router"],
        projects: 3,
      },
      {
        id: "3",
        title: "Backend Basics",
        duration: "5 weeks",
        topics: ["Node.js", "Express", "REST APIs"],
        projects: 3,
      },
      {
        id: "4",
        title: "Database Management",
        duration: "3 weeks",
        topics: ["MongoDB", "Schema Design"],
        projects: 2,
      },
    ],
    tools: [
      { name: "React", icon: "⚛️", category: "Frontend" },
      { name: "Node.js", icon: "🟢", category: "Backend" },
      { name: "MongoDB", icon: "🍃", category: "Database" },
      { name: "Express", icon: "🚀", category: "Backend" },
    ],
    technologies: ["React", "Redux", "Next.js", "TailwindCSS"],
    projects: [
      {
        id: "1",
        title: "E-Commerce Platform",
        description: "Online store with payments and dashboards.",
        technologies: ["MERN"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Arjun Patel",
      },
      {
        id: "2",
        title: "Analytics Dashboard",
        description: "Data visualization dashboard using React and MongoDB.",
        technologies: ["React", "MongoDB"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Priya Sharma",
      },
    ],
  },

  data_science: {
    id: "3",
    slug: "data-science",
    title: "Data Science",
    description:
      "Learn to analyze, visualize, and predict data using modern tools.",
    demand: "Data science is one of the fastest-growing tech fields worldwide.",
    jobGrowth: "35%",
    abroadOpportunity: "very high",
    avgSalary: "₹6-12 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "24 Weeks",
        label: "Course Duration",
        description: "Intensive program",
      },
      {
        icon: Users,
        value: "1:6",
        label: "Instructor Ratio",
        description: "Collaborative guidance",
      },
      {
        icon: Clock,
        value: "500+",
        label: "Learning Hours",
        description: "Theory and practical projects",
      },
      {
        icon: Award,
        value: "15+",
        label: "Capstone Projects",
        description: "Industry-focused learning",
      },
    ],
    jobScope: [
      {
        role: "Data Analyst",
        jd: "Interpret data and create visual reports for decision-making.",
      },
      {
        role: "Machine Learning Engineer",
        jd: "Develop predictive models using ML algorithms.",
      },
      {
        role: "Business Intelligence Specialist",
        jd: "Translate data into actionable business insights.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "Statistics & Math Foundations",
        duration: "4 weeks",
        topics: ["Probability", "Linear Algebra", "Regression"],
        projects: 2,
      },
      {
        id: "2",
        title: "Python for Data Science",
        duration: "5 weeks",
        topics: ["NumPy", "Pandas", "Matplotlib"],
        projects: 3,
      },
      {
        id: "3",
        title: "Data Visualization",
        duration: "4 weeks",
        topics: ["Power BI", "Seaborn", "Dashboarding"],
        projects: 2,
      },
      {
        id: "4",
        title: "Machine Learning",
        duration: "6 weeks",
        topics: ["Supervised ML", "Unsupervised ML", "Model Evaluation"],
        projects: 3,
      },
      {
        id: "5",
        title: "Big Data & Cloud Tools",
        duration: "5 weeks",
        topics: ["Hadoop", "Spark", "AWS S3"],
        projects: 2,
      },
    ],
    tools: [
      { name: "Python", icon: "🐍", category: "Programming" },
      { name: "Power BI", icon: "📊", category: "Visualization" },
      { name: "Jupyter Notebook", icon: "📓", category: "IDE" },
      { name: "TensorFlow", icon: "🔮", category: "ML Framework" },
    ],
    technologies: ["Python", "Power BI", "SQL", "TensorFlow", "Hadoop"],
    projects: [
      {
        id: "1",
        title: "Customer Churn Prediction",
        description:
          "Predict customer retention using ML classification algorithms.",
        technologies: ["Python", "Scikit-learn"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Aarav Mehta",
      },
      {
        id: "2",
        title: "Sales Dashboard",
        description:
          "Interactive Power BI dashboard visualizing regional sales insights.",
        technologies: ["Power BI"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Priya Sharma",
      },
    ],
  },

  uiux: {
    slug: "uiux",
    title: "UI/UX & Graphic Design",
    description:
      "Learn UI/UX design principles and graphic tools like Photoshop and Figma.",
    why: "why join uiux course",
    modules: [
      {
        id: "1",
        title: "Design Principles",
        duration: "4 weeks",
        topics: ["Color Theory", "Typography", "Layout"],
        projects: 2,
      },
      {
        id: "2",
        title: "Figma Basics",
        duration: "5 weeks",
        topics: ["Wireframing", "Prototyping", "Collaboration"],
        projects: 2,
      },
      {
        id: "3",
        title: "Adobe Tools",
        duration: "5 weeks",
        topics: ["Photoshop", "Illustrator", "Graphics"],
        projects: 3,
      },
    ],
    tools: [
      { name: "Figma", icon: "🎨" },
      { name: "Photoshop", icon: "🖌️" }
    ],
    technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  },

  frontend_dev: {
    id: "3",
    slug: "frontend_dev",
    title: "Frontend Development",
    description:
      "Design and build modern, responsive, and interactive web interfaces.",
    demand:
      "Frontend skills are essential for every business with a digital presence.",
    jobGrowth: "28%",
    abroadOpportunity: "medium",
    avgSalary: "₹4-8 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "20 Weeks",
        label: "Course Duration",
        description: "Practical and project-based",
      },
      {
        icon: Users,
        value: "1:5",
        label: "Instructor Ratio",
        description: "Guided mentorship",
      },
      {
        icon: Clock,
        value: "350+",
        label: "Learning Hours",
        description: "Hands-on training",
      },
      {
        icon: Award,
        value: "10+",
        label: "Mini Projects",
        description: "Real-world scenarios",
      },
    ],
    jobScope: [
      {
        role: "Frontend Developer",
        jd: "Build responsive websites and user-friendly interfaces.",
      },
      {
        role: "Web Designer",
        jd: "Design layouts and optimize UI for accessibility and performance.",
      },
      {
        role: "React Developer",
        jd: "Develop dynamic single-page applications using React.js.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "HTML & CSS Fundamentals",
        duration: "4 weeks",
        topics: ["HTML5", "CSS3", "Responsive Design"],
        projects: 2,
      },
      {
        id: "2",
        title: "JavaScript Essentials",
        duration: "5 weeks",
        topics: ["ES6+", "DOM Manipulation", "Events"],
        projects: 3,
      },
      {
        id: "3",
        title: "Frontend Frameworks",
        duration: "5 weeks",
        topics: ["React.js", "Routing", "State Management"],
        projects: 3,
      },
      {
        id: "4",
        title: "Styling & UI Libraries",
        duration: "3 weeks",
        topics: ["Bootstrap", "Tailwind CSS", "Material UI"],
        projects: 2,
      },
      {
        id: "5",
        title: "Capstone Project",
        duration: "3 weeks",
        topics: ["Integration", "Deployment", "Best Practices"],
        projects: 1,
      },
    ],
    tools: [
      { name: "VS Code", icon: "📝", category: "Editor" },
      { name: "Chrome DevTools", icon: "🌐", category: "Debugging" },
      { name: "GitHub", icon: "🐙", category: "Version Control" },
      { name: "Figma", icon: "🎨", category: "Design" },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    projects: [
      {
        id: "1",
        title: "Portfolio Website",
        description:
          "Responsive personal portfolio using HTML, CSS, and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Ananya Gupta",
      },
      {
        id: "2",
        title: "E-commerce Frontend",
        description:
          "Interactive shopping site frontend using React and Tailwind CSS.",
        technologies: ["React.js", "Tailwind CSS"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Rajat Verma",
      },
    ],
  },

  backend_dotnet: {
    id: "4",
    slug: "backend_dotnet",
    title: "Core .NET Development",
    description:
      "Develop scalable enterprise applications using C#, ASP.NET, and SQL.",
    demand:
      ".NET remains a top choice for enterprise and cloud-based solutions.",
    jobGrowth: "25%",
    abroadOpportunity: "high",
    avgSalary: "₹5-10 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "22 Weeks",
        label: "Course Duration",
        description: "Enterprise-focused program",
      },
      {
        icon: Users,
        value: "1:6",
        label: "Instructor Ratio",
        description: "Personalized mentoring",
      },
      {
        icon: Clock,
        value: "420+",
        label: "Learning Hours",
        description: "Practical backend mastery",
      },
      {
        icon: Award,
        value: "12+",
        label: "Projects",
        description: "Business-grade applications",
      },
    ],
    jobScope: [
      {
        role: "Backend Developer",
        jd: "Build and maintain APIs with .NET Core and C#.",
      },
      {
        role: "Enterprise App Engineer",
        jd: "Develop scalable enterprise systems with ASP.NET MVC.",
      },
      {
        role: "Cloud Developer",
        jd: "Deploy secure and robust apps on Azure with .NET.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "C# Fundamentals",
        duration: "4 weeks",
        topics: ["Syntax", "OOP Basics", "Data Types"],
        projects: 2,
      },
      {
        id: "2",
        title: ".NET Core Basics",
        duration: "5 weeks",
        topics: ["Framework", "Entity Framework", "APIs"],
        projects: 3,
      },
      {
        id: "3",
        title: "ASP.NET MVC",
        duration: "5 weeks",
        topics: ["Controllers", "Views", "Routing"],
        projects: 3,
      },
      {
        id: "4",
        title: "Database Integration",
        duration: "4 weeks",
        topics: ["SQL Server", "LINQ", "Stored Procedures"],
        projects: 2,
      },
      {
        id: "5",
        title: "Cloud Deployment",
        duration: "4 weeks",
        topics: ["Azure", "Authentication", "CI/CD"],
        projects: 2,
      },
    ],
    tools: [
      { name: "Visual Studio", icon: "🛠️", category: "IDE" },
      { name: "SQL Server", icon: "💾", category: "Database" },
      { name: "Postman", icon: "📮", category: "API Testing" },
      { name: "Azure DevOps", icon: "☁️", category: "Cloud/Deployment" },
    ],
    technologies: ["C#", ".NET Core", "ASP.NET MVC", "SQL Server", "Azure"],
    projects: [
      {
        id: "1",
        title: "Hospital Management System",
        description: "Develop a full-featured hospital app with ASP.NET MVC.",
        technologies: ["C#", "ASP.NET"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Mehul Shah",
      },
      {
        id: "2",
        title: "E-commerce Backend API",
        description: "Build a secure shopping API with .NET Core and SQL.",
        technologies: [".NET Core", "SQL Server"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Simran Kaur",
      },
    ],
  },

  backend_java: {
    id: "5",
    slug: "backend_java",
    title: "Java Development",
    description:
      "Build robust, scalable applications using Core and Advanced Java.",
    demand:
      "Java remains a cornerstone in backend, enterprise, and Android development.",
    jobGrowth: "27%",
    abroadOpportunity: "high",
    avgSalary: "₹5-11 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "24 Weeks",
        label: "Course Duration",
        description: "Comprehensive backend program",
      },
      {
        icon: Users,
        value: "1:6",
        label: "Instructor Ratio",
        description: "Personalized mentorship",
      },
      {
        icon: Clock,
        value: "450+",
        label: "Learning Hours",
        description: "Theory with practical coding",
      },
      {
        icon: Award,
        value: "14+",
        label: "Projects",
        description: "Enterprise-level applications",
      },
    ],
    jobScope: [
      {
        role: "Java Developer",
        jd: "Develop web and enterprise applications using Java technologies.",
      },
      {
        role: "Spring Boot Engineer",
        jd: "Create RESTful APIs and microservices with Spring Boot.",
      },
      {
        role: "Backend Engineer",
        jd: "Design scalable systems with Java frameworks and databases.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "Core Java Fundamentals",
        duration: "5 weeks",
        topics: ["OOP", "Collections", "Multithreading"],
        projects: 2,
      },
      {
        id: "2",
        title: "Advanced Java",
        duration: "5 weeks",
        topics: ["JDBC", "Servlets", "JSP"],
        projects: 2,
      },
      {
        id: "3",
        title: "Spring Framework",
        duration: "5 weeks",
        topics: ["Spring Core", "Spring MVC", "Spring Boot"],
        projects: 3,
      },
      {
        id: "4",
        title: "Hibernate & JPA",
        duration: "4 weeks",
        topics: ["ORM", "Entities", "JPQL"],
        projects: 2,
      },
      {
        id: "5",
        title: "Capstone Project",
        duration: "5 weeks",
        topics: ["Full-stack integration", "Deployment"],
        projects: 1,
      },
    ],
    tools: [
      { name: "Eclipse", icon: "☕", category: "IDE" },
      { name: "IntelliJ IDEA", icon: "💡", category: "IDE" },
      { name: "Postman", icon: "📮", category: "API Testing" },
      { name: "Maven", icon: "📦", category: "Build Tool" },
    ],
    technologies: [
      "Core Java",
      "Advanced Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
    ],
    projects: [
      {
        id: "1",
        title: "Library Management System",
        description:
          "Manage books, users, and transactions with JDBC and Servlets.",
        technologies: ["Core Java", "JDBC"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Sanya Rao",
      },
      {
        id: "2",
        title: "E-commerce Backend",
        description:
          "Develop an online store backend using Spring Boot and Hibernate.",
        technologies: ["Spring Boot", "Hibernate"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Arjun Patel",
      },
    ],
  },

  backend_php: {
    id: "6",
    slug: "backend_php",
    title: "PHP Development",
    description:
      "Learn to develop dynamic and data-driven web applications using PHP and MySQL.",
    demand:
      "PHP powers a majority of websites, including WordPress and e-commerce platforms.",
    jobGrowth: "22%",
    abroadOpportunity: "medium",
    avgSalary: "₹3-7 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "20 Weeks",
        label: "Course Duration",
        description: "Industry-ready backend program",
      },
      {
        icon: Users,
        value: "1:7",
        label: "Instructor Ratio",
        description: "Mentorship and peer support",
      },
      {
        icon: Clock,
        value: "380+",
        label: "Learning Hours",
        description: "Practical backend training",
      },
      {
        icon: Award,
        value: "10+",
        label: "Projects",
        description: "Real-world PHP applications",
      },
    ],
    jobScope: [
      {
        role: "PHP Developer",
        jd: "Develop and maintain dynamic web applications with PHP and MySQL.",
      },
      {
        role: "WordPress Developer",
        jd: "Build and customize WordPress themes and plugins.",
      },
      {
        role: "Backend Engineer",
        jd: "Create APIs and manage server-side logic using PHP frameworks.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "PHP Basics",
        duration: "4 weeks",
        topics: ["Syntax", "Variables", "Control Structures"],
        projects: 1,
      },
      {
        id: "2",
        title: "Working with Forms & Sessions",
        duration: "4 weeks",
        topics: ["GET/POST", "Sessions", "Cookies"],
        projects: 1,
      },
      {
        id: "3",
        title: "Database Integration",
        duration: "4 weeks",
        topics: ["MySQL", "CRUD Operations", "Joins"],
        projects: 2,
      },
      {
        id: "4",
        title: "PHP Frameworks",
        duration: "4 weeks",
        topics: ["Laravel Basics", "Routing", "Blade Templates"],
        projects: 2,
      },
      {
        id: "5",
        title: "Capstone Project",
        duration: "4 weeks",
        topics: ["End-to-end application"],
        projects: 1,
      },
    ],
    tools: [
      { name: "XAMPP", icon: "⚙️", category: "Local Server" },
      { name: "VS Code", icon: "🖥️", category: "IDE" },
      { name: "phpMyAdmin", icon: "🗄️", category: "Database Management" },
      { name: "Postman", icon: "📮", category: "API Testing" },
    ],
    technologies: ["Core PHP", "MySQL", "Laravel", "WordPress", "REST APIs"],
    projects: [
      {
        id: "1",
        title: "Blog Management System",
        description:
          "A blogging platform with authentication and CRUD features.",
        technologies: ["PHP", "MySQL"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Ravi Mehta",
      },
      {
        id: "2",
        title: "E-commerce Store",
        description: "An online shop backend with cart, orders, and payments.",
        technologies: ["Laravel", "MySQL"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Priya Sharma",
      },
    ],
  },

  backend_python: {
    id: "7",
    slug: "backend_python",
    title: "Python Backend Development",
    description:
      "Learn to build scalable and secure backend systems using Python, Django, and Flask.",
    demand:
      "Python dominates in backend, AI, and data science, making it highly versatile across industries.",
    jobGrowth: "35%",
    abroadOpportunity: "high",
    avgSalary: "₹4-10 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "24 Weeks",
        label: "Course Duration",
        description: "Comprehensive backend program",
      },
      {
        icon: Users,
        value: "1:6",
        label: "Instructor Ratio",
        description: "Individual guidance and mentorship",
      },
      {
        icon: Clock,
        value: "420+",
        label: "Learning Hours",
        description: "Frameworks, databases, and APIs",
      },
      {
        icon: Award,
        value: "12+",
        label: "Projects",
        description: "Real-world backend applications",
      },
    ],
    jobScope: [
      {
        role: "Python Developer",
        jd: "Develop web applications, APIs, and automation scripts with Python.",
      },
      {
        role: "Backend Engineer",
        jd: "Design scalable and secure backend systems with Django/Flask.",
      },
      {
        role: "API Developer",
        jd: "Build and maintain RESTful and GraphQL APIs.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "Python Programming Basics",
        duration: "4 weeks",
        topics: ["Syntax", "Functions", "OOP"],
        projects: 1,
      },
      {
        id: "2",
        title: "Web Development with Flask",
        duration: "4 weeks",
        topics: ["Routing", "Templates", "REST APIs"],
        projects: 2,
      },
      {
        id: "3",
        title: "Django Framework",
        duration: "6 weeks",
        topics: ["Models", "ORM", "Authentication", "Admin"],
        projects: 3,
      },
      {
        id: "4",
        title: "Database & ORM",
        duration: "4 weeks",
        topics: ["PostgreSQL", "MySQL", "ORM Integrations"],
        projects: 2,
      },
      {
        id: "5",
        title: "Deployment & Scaling",
        duration: "6 weeks",
        topics: ["Docker", "Cloud Deployment", "Security"],
        projects: 2,
      },
    ],
    tools: [
      { name: "VS Code", icon: "🖥️", category: "Editor" },
      { name: "Postman", icon: "📮", category: "API Testing" },
      { name: "Docker", icon: "🐳", category: "Containerization" },
      { name: "PgAdmin", icon: "🗄️", category: "Database Management" },
    ],
    technologies: [
      "Python",
      "Flask",
      "Django",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
    ],
    projects: [
      {
        id: "1",
        title: "Task Manager API",
        description: "A REST API for task management with authentication.",
        technologies: ["Flask", "SQLite"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Ananya Gupta",
      },
      {
        id: "2",
        title: "E-learning Platform",
        description:
          "A Django-based platform for online courses with user management.",
        technologies: ["Django", "PostgreSQL"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Amit Verma",
      },
    ],
  },

  mean: {
    id: "8",
    slug: "mean",
    title: "MEAN Full Stack Development",
    description:
      "Master full stack development with MongoDB, Express.js, Angular, and Node.js to build scalable web applications.",
    demand:
      "MEAN stack developers are highly sought after for building modern, dynamic, and enterprise-grade web applications.",
    jobGrowth: "32%",
    abroadOpportunity: "high",
    avgSalary: "₹4-12 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "28 Weeks",
        label: "Course Duration",
        description: "Comprehensive end-to-end learning",
      },
      {
        icon: Users,
        value: "1:6",
        label: "Instructor Ratio",
        description: "Personalized mentorship and peer learning",
      },
      {
        icon: Clock,
        value: "450+",
        label: "Learning Hours",
        description: "Frontend, backend, and database mastery",
      },
      {
        icon: Award,
        value: "15+",
        label: "Projects",
        description: "Practical full-stack applications",
      },
    ],
    jobScope: [
      {
        role: "Full Stack Developer",
        jd: "Develop and deploy applications using Angular, Node.js, Express, and MongoDB.",
      },
      {
        role: "Frontend Engineer",
        jd: "Create dynamic and responsive interfaces with Angular.",
      },
      {
        role: "Backend Developer",
        jd: "Design APIs and manage server-side logic using Node.js and Express.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "JavaScript & TypeScript Fundamentals",
        duration: "4 weeks",
        topics: ["ES6+", "Async JS", "TypeScript Basics"],
        projects: 1,
      },
      {
        id: "2",
        title: "Angular Frontend",
        duration: "6 weeks",
        topics: ["Components", "Services", "Routing", "RxJS"],
        projects: 3,
      },
      {
        id: "3",
        title: "Node.js & Express",
        duration: "6 weeks",
        topics: ["REST APIs", "Middleware", "Authentication"],
        projects: 3,
      },
      {
        id: "4",
        title: "MongoDB & Mongoose",
        duration: "4 weeks",
        topics: ["CRUD Operations", "Schemas", "Aggregation"],
        projects: 2,
      },
      {
        id: "5",
        title: "Deployment & Scaling",
        duration: "8 weeks",
        topics: ["Docker", "CI/CD", "Cloud Hosting"],
        projects: 2,
      },
    ],
    tools: [
      { name: "VS Code", icon: "🖥️", category: "Editor" },
      { name: "Postman", icon: "📮", category: "API Testing" },
      {
        name: "MongoDB Compass",
        icon: "🍃",
        category: "Database Management",
      },
      { name: "Docker", icon: "🐳", category: "Containerization" },
    ],
    technologies: ["MongoDB", "Express.js", "Angular", "Node.js", "TypeScript"],
    projects: [
      {
        id: "1",
        title: "E-commerce Platform",
        description:
          "A complete shopping website with cart, payment, and order management.",
        technologies: ["Angular", "Node.js", "MongoDB"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Karan Mehta",
      },
      {
        id: "2",
        title: "Job Portal",
        description:
          "A MEAN-based platform for job seekers and recruiters with authentication.",
        technologies: ["Angular", "Express.js", "MongoDB"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Priya Sharma",
      },
    ],
  },

  app_dev: {
    id: "9",
    slug: "app_dev",
    title: "App Development",
    description:
      "Learn to design, develop, and deploy mobile applications for Android and iOS platforms.",
    demand:
      "Mobile app development is booming with high demand in startups, enterprises, and global markets.",
    jobGrowth: "35%",
    abroadOpportunity: "very high",
    avgSalary: "₹4-15 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "30 Weeks",
        label: "Course Duration",
        description: "Android and iOS specialization",
      },
      {
        icon: Users,
        value: "1:5",
        label: "Instructor Ratio",
        description: "Dedicated mentorship",
      },
      {
        icon: Clock,
        value: "500+",
        label: "Learning Hours",
        description: "Practical mobile-first development",
      },
      {
        icon: Award,
        value: "12+",
        label: "Live Projects",
        description: "Hands-on industry projects",
      },
    ],
    jobScope: [
      {
        role: "Mobile App Developer",
        jd: "Develop cross-platform mobile applications with modern frameworks.",
      },
      {
        role: "Android Developer",
        jd: "Build scalable Android apps with Kotlin and Java.",
      },
      {
        role: "iOS Developer",
        jd: "Design and implement high-performance iOS apps using Swift.",
      },
      {
        role: "Flutter Developer",
        jd: "Create apps with single codebase using Flutter & Dart.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "Mobile Fundamentals",
        duration: "4 weeks",
        topics: ["App lifecycle", "UI basics", "APIs"],
        projects: 1,
      },
      {
        id: "2",
        title: "Android Development",
        duration: "6 weeks",
        topics: ["Java/Kotlin", "XML UI", "Firebase"],
        projects: 2,
      },
      {
        id: "3",
        title: "iOS Development",
        duration: "6 weeks",
        topics: ["Swift", "Xcode", "Core Data"],
        projects: 2,
      },
      {
        id: "4",
        title: "Cross-Platform Apps",
        duration: "6 weeks",
        topics: ["Flutter", "Dart", "React Native"],
        projects: 2,
      },
      {
        id: "5",
        title: "Publishing & Deployment",
        duration: "8 weeks",
        topics: ["App Store", "Play Store", "CI/CD"],
        projects: 2,
      },
    ],
    tools: [
      { name: "Android Studio", icon: "🤖", category: "IDE" },
      { name: "Xcode", icon: "🍏", category: "IDE" },
      { name: "Firebase", icon: "🔥", category: "Backend" },
      { name: "Figma", icon: "🎨", category: "Design" },
    ],
    technologies: [
      "Java",
      "Kotlin",
      "Swift",
      "Flutter",
      "React Native",
      "Dart",
      "Firebase",
    ],
    projects: [
      {
        id: "1",
        title: "Food Delivery App",
        description: "Build a mobile app for food ordering with live tracking.",
        technologies: ["Flutter", "Firebase"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Arjun Verma",
      },
      {
        id: "2",
        title: "Fitness Tracker",
        description:
          "Create a health and fitness tracking app with analytics dashboard.",
        technologies: ["Kotlin", "Swift", "Firebase"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Simran Kaur",
      },
    ],
  },

  testing: {
    id: "10",
    slug: "testing",
    title: "Software Testing",
    description:
      "Learn manual and automation testing to ensure high-quality software applications.",
    demand:
      "Testing skills are critical for delivering reliable, bug-free applications across industries.",
    jobGrowth: "30%",
    abroadOpportunity: "high",
    avgSalary: "₹3-8 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "20 Weeks",
        label: "Course Duration",
        description: "Hands-on testing program",
      },
      {
        icon: Users,
        value: "1:6",
        label: "Instructor Ratio",
        description: "Guided practice sessions",
      },
      {
        icon: Clock,
        value: "350+",
        label: "Learning Hours",
        description: "Manual and automation testing",
      },
      {
        icon: Award,
        value: "8+",
        label: "Projects",
        description: "Real-world QA projects",
      },
    ],
    jobScope: [
      {
        role: "QA Tester",
        jd: "Test applications manually to identify bugs and ensure functionality.",
      },
      {
        role: "Automation Tester",
        jd: "Write automated test scripts using Selenium, Cypress, or other tools.",
      },
      {
        role: "Test Lead",
        jd: "Plan, coordinate, and manage testing activities across projects.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "Introduction to Software Testing",
        duration: "2 weeks",
        topics: ["SDLC", "Testing types", "Bug lifecycle"],
        projects: 1,
      },
      {
        id: "2",
        title: "Manual Testing",
        duration: "4 weeks",
        topics: ["Test cases", "Defect reporting", "Regression testing"],
        projects: 2,
      },
      {
        id: "3",
        title: "Automation Testing",
        duration: "6 weeks",
        topics: ["Selenium WebDriver", "TestNG", "Cypress"],
        projects: 3,
      },
      {
        id: "4",
        title: "API & Performance Testing",
        duration: "4 weeks",
        topics: ["Postman", "JMeter", "Load testing"],
        projects: 2,
      },
      {
        id: "5",
        title: "Capstone Project",
        duration: "4 weeks",
        topics: ["End-to-end testing"],
        projects: 1,
      },
    ],
    tools: [
      { name: "Selenium", icon: "🖥️", category: "Automation" },
      { name: "Postman", icon: "📮", category: "API Testing" },
      { name: "JMeter", icon: "⏱️", category: "Performance Testing" },
      { name: "TestRail", icon: "📊", category: "Test Management" },
    ],
    technologies: [
      "Manual Testing",
      "Selenium",
      "Cypress",
      "Postman",
      "JMeter",
    ],
    projects: [
      {
        id: "1",
        title: "E-commerce Testing",
        description:
          "Test an online shopping platform for functionality, UI, and performance.",
        technologies: ["Selenium", "Postman"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Rohit Kumar",
      },
      {
        id: "2",
        title: "Banking Application Testing",
        description:
          "Perform manual and automated testing of banking workflows.",
        technologies: ["Cypress", "JMeter"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Neha Singh",
      },
    ],
  },

  marketing: {
    id: "11",
    slug: "marketing",
    title: "Digital Marketing",
    description:
      "Master SEO, social media, and online campaigns to grow business digitally.",
    demand:
      "Digital marketing is essential for businesses to reach customers and increase sales.",
    jobGrowth: "30%",
    abroadOpportunity: "high",
    avgSalary: "₹3-7 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "16 Weeks",
        label: "Course Duration",
        description: "Hands-on marketing program",
      },
      {
        icon: Users,
        value: "1:5",
        label: "Instructor Ratio",
        description: "Guided learning",
      },
      {
        icon: Clock,
        value: "300+",
        label: "Learning Hours",
        description: "SEO, PPC, and social media",
      },
      {
        icon: Award,
        value: "10+",
        label: "Campaign Projects",
        description: "Practical digital campaigns",
      },
    ],
    jobScope: [
      {
        role: "Digital Marketing Executive",
        jd: "Plan and execute online marketing campaigns across platforms.",
      },
      {
        role: "SEO Specialist",
        jd: "Optimize websites to rank higher in search engines.",
      },
      {
        role: "Social Media Manager",
        jd: "Manage social channels to increase engagement and brand awareness.",
      },
      {
        role: "Content Strategist",
        jd: "Create and manage content for digital marketing campaigns.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "SEO Fundamentals",
        duration: "3 weeks",
        topics: ["Keyword Research", "On-page SEO", "Backlinks"],
        projects: 2,
      },
      {
        id: "2",
        title: "Social Media Marketing",
        duration: "3 weeks",
        topics: ["Facebook", "Instagram", "LinkedIn Ads"],
        projects: 2,
      },
      {
        id: "3",
        title: "Content Marketing",
        duration: "3 weeks",
        topics: ["Blogs", "Video", "Infographics"],
        projects: 2,
      },
      {
        id: "4",
        title: "Google Ads & Analytics",
        duration: "4 weeks",
        topics: ["PPC Campaigns", "Conversions", "Analytics"],
        projects: 2,
      },
      {
        id: "5",
        title: "Email & Affiliate Marketing",
        duration: "3 weeks",
        topics: ["Campaigns", "Automation", "Affiliate Programs"],
        projects: 1,
      },
    ],
    tools: [
      { name: "Google Analytics", icon: "📊", category: "Analytics" },
      { name: "Google Ads", icon: "💰", category: "Advertising" },
      { name: "Canva", icon: "🎨", category: "Design" },
      { name: "Hootsuite", icon: "📅", category: "Social Media Management" },
    ],
    technologies: [
      "SEO",
      "PPC",
      "Social Media Marketing",
      "Google Analytics",
      "Email Marketing",
    ],
    projects: [
      {
        id: "1",
        title: "Brand Awareness Campaign",
        description: "Run a social media campaign to increase engagement.",
        technologies: ["Facebook Ads", "Instagram"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Priya Sharma",
      },
      {
        id: "2",
        title: "E-commerce Marketing",
        description:
          "Create an online marketing strategy to boost sales for an online store.",
        technologies: ["Google Ads", "SEO"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Rohit Kumar",
      },
    ],
  },

  cloud_computing: {
    id: "12",
    slug: "cloud-computing",
    title: "Cloud Computing & DevOps",
    description:
      "Become a certified cloud professional with deep skills in AWS, Linux, and Networking. Learn to design, deploy, and manage scalable cloud solutions using industry-standard tools.",
    demand:
      "Cloud computing is in high demand as businesses move from traditional infrastructure to scalable, secure cloud platforms.",
    jobGrowth: "38%",
    abroadOpportunity: "Very High",
    avgSalary: "₹7-18 Lakhs (India) / $90K–$140K (Abroad)",
    stats: [
      {
        icon: TrendingUp,
        value: "22 Weeks",
        label: "Course Duration",
        description: "Intensive cloud training with live projects",
      },
      {
        icon: Users,
        value: "1:6",
        label: "Instructor Ratio",
        description: "Hands-on mentoring with industry experts",
      },
      {
        icon: Clock,
        value: "450+",
        label: "Learning Hours",
        description: "Linux, Networking, AWS Tools, DevOps",
      },
      {
        icon: Award,
        value: "12+",
        label: "Projects",
        description: "Deploy real-time cloud infrastructure",
      },
    ],
    jobScope: [
      {
        role: "Cloud Engineer",
        jd: "Manage and automate cloud infrastructure using Linux and AWS tools.",
      },
      {
        role: "DevOps Engineer",
        jd: "Build CI/CD pipelines, deploy containerized apps, and monitor cloud systems.",
      },
      {
        role: "Cloud Solutions Architect",
        jd: "Design scalable, secure, and fault-tolerant cloud architectures.",
      },
      {
        role: "Network & Cloud Engineer",
        jd: "Apply CCNA skills to manage VPCs, subnets, routing, and network security in cloud environments.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "Linux for Cloud",
        duration: "4 weeks",
        topics: [
          "Linux Shell",
          "File Systems",
          "Permissions",
          "Package Management",
        ],
        projects: 1,
      },
      {
        id: "2",
        title: "Networking with CCNA",
        duration: "4 weeks",
        topics: [
          "IP Addressing",
          "Routing & Switching",
          "Subnetting",
          "Protocols (TCP/IP, DNS, DHCP)",
          "VLANs",
          "NAT",
          "ACLs",
        ],
        projects: 1,
      },
      {
        id: "3",
        title: "AWS Core Services",
        duration: "4 weeks",
        topics: ["EC2", "S3", "IAM", "VPC", "RDS", "CloudWatch"],
        projects: 2,
      },
      {
        id: "4",
        title: "AWS Advanced Tools",
        duration: "5 weeks",
        topics: [
          "Lambda",
          "CloudFormation",
          "ECS",
          "EKS",
          "Elastic Beanstalk",
          "Route 53",
          "SNS",
          "SQS",
          "CloudTrail",
          "WAF",
          "ELB",
          "Auto Scaling",
          "Config",
          "CodeDeploy",
          "Systems Manager",
        ],
        projects: 3,
      },
      {
        id: "5",
        title: "CI/CD & Monitoring",
        duration: "5 weeks",
        topics: [
          "Docker",
          "Jenkins",
          "Terraform",
          "GitHub Actions",
          "Cloud Monitoring",
          "Scaling & Load Balancing",
        ],
        projects: 3,
      },
    ],
    tools: [
      { name: "AWS", icon: "☁", category: "Cloud Platform" },
      { name: "Linux", icon: "🐧", category: "Operating System" },
      { name: "Docker", icon: "🐳", category: "Containerization" },
      { name: "Terraform", icon: "🛠", category: "Infrastructure as Code" },
      { name: "CloudFormation", icon: "📐", category: "AWS IaC" },
      { name: "EC2", icon: "🖥", category: "Compute" },
      { name: "S3", icon: "📦", category: "Storage" },
      { name: "Lambda", icon: "⚡", category: "Serverless" },
      { name: "CloudWatch", icon: "👀", category: "Monitoring" },
      { name: "RDS", icon: "🗄", category: "Database" },
      { name: "VPC", icon: "🌐", category: "Networking" },
      { name: "IAM", icon: "🔐", category: "Security" },
      { name: "Route 53", icon: "🧭", category: "DNS Service" },
      { name: "SQS", icon: "📩", category: "Messaging Queue" },
      { name: "CodeDeploy", icon: "🚀", category: "Deployment" },
    ],
    technologies: [
      "AWS",
      "Linux",
      "Docker",
      "Terraform",
      "CCNA",
      "GitHub Actions",
      "CI/CD",
      "VPC",
      "Cloud Monitoring",
    ],
    projects: [
      {
        id: "1",
        title: "Cloud Web Hosting",
        description:
          "Deploy a web server on AWS EC2 with auto-scaling and monitoring.",
        technologies: ["Linux", "EC2", "CloudWatch"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Ananya Gupta",
      },
      {
        id: "2",
        title: "Secure VPC Network",
        description:
          "Create and manage a VPC with public/private subnets, NAT gateway, and ACLs using CCNA concepts.",
        technologies: ["AWS", "VPC", "Networking"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Rohit Kumar",
      },
      {
        id: "3",
        title: "Serverless File Uploader",
        description:
          "Build a serverless app using S3, Lambda, and API Gateway for secure file uploads.",
        technologies: ["Lambda", "S3", "IAM"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Priya Sharma",
      },
    ],
  },

  salesforce: {
    id: "13",
    slug: "salesforce",
    title: "Salesforce",
    description:
      "Learn Salesforce CRM, automation, and cloud solutions for business growth.",
    demand:
      "Salesforce skills are highly valued in enterprises for CRM, automation, and sales optimization.",
    jobGrowth: "28%",
    abroadOpportunity: "high",
    avgSalary: "₹5-12 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "16 Weeks",
        label: "Course Duration",
        description: "Hands-on Salesforce learning",
      },
      {
        icon: Users,
        value: "1:5",
        label: "Instructor Ratio",
        description: "Guided practice",
      },
      {
        icon: Clock,
        value: "320+",
        label: "Learning Hours",
        description: "CRM, automation, and reporting",
      },
      {
        icon: Award,
        value: "8+",
        label: "Projects",
        description: "Practical Salesforce applications",
      },
    ],
    jobScope: [
      {
        role: "Salesforce Developer",
        jd: "Develop and customize Salesforce applications using Apex and Lightning components.",
      },
      {
        role: "Salesforce Administrator",
        jd: "Manage Salesforce orgs, automation, and user workflows.",
      },
      {
        role: "Salesforce Consultant",
        jd: "Design and implement Salesforce solutions for clients.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "Introduction to Salesforce",
        duration: "2 weeks",
        topics: ["CRM Basics", "Salesforce Overview", "Cloud Concepts"],
        projects: 1,
      },
      {
        id: "2",
        title: "Salesforce Administration",
        duration: "4 weeks",
        topics: ["User Management", "Automation", "Reports & Dashboards"],
        projects: 2,
      },
      {
        id: "3",
        title: "Apex & Lightning",
        duration: "4 weeks",
        topics: ["Apex Programming", "Triggers", "Lightning Components"],
        projects: 2,
      },
      {
        id: "4",
        title: "Integration & Deployment",
        duration: "3 weeks",
        topics: ["APIs", "Data Loader", "Deployment Best Practices"],
        projects: 1,
      },
      {
        id: "5",
        title: "Capstone Project",
        duration: "3 weeks",
        topics: ["End-to-end Salesforce Implementation"],
        projects: 1,
      },
    ],
    tools: [
      { name: "Salesforce Platform", icon: "☁️", category: "CRM Platform" },
      { name: "Data Loader", icon: "💾", category: "Data Management" },
      { name: "Workbench", icon: "🛠️", category: "Integration & Testing" },
      { name: "Trailhead", icon: "🎓", category: "Learning Platform" },
    ],
    technologies: [
      "Salesforce CRM",
      "Apex",
      "Lightning Components",
      "Workflow Automation",
      "Reports & Dashboards",
    ],
    projects: [
      {
        id: "1",
        title: "Sales Management App",
        description:
          "Develop a sales tracking system with automation and dashboards.",
        technologies: ["Salesforce", "Apex"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Neha Singh",
      },
      {
        id: "2",
        title: "Customer Service Portal",
        description:
          "Create a support portal with case management and reporting.",
        technologies: ["Salesforce Lightning"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Rohit Kumar",
      },
    ],
  },

  sap: {
    id: "14",
    slug: "sap",
    title: "SAP",
    description:
      "Learn SAP ERP, modules, and business process management for enterprises.",
    demand:
      "SAP professionals are in high demand for managing enterprise resource planning and business operations.",
    jobGrowth: "25%",
    abroadOpportunity: "high",
    avgSalary: "₹5-12 Lakhs",
    stats: [
      {
        icon: TrendingUp,
        value: "18 Weeks",
        label: "Course Duration",
        description: "Hands-on SAP training",
      },
      {
        icon: Users,
        value: "1:6",
        label: "Instructor Ratio",
        description: "Practical guidance",
      },
      {
        icon: Clock,
        value: "360+",
        label: "Learning Hours",
        description: "ERP modules and workflow",
      },
      {
        icon: Award,
        value: "8+",
        label: "Projects",
        description: "Industry-based SAP implementations",
      },
    ],
    jobScope: [
      {
        role: "SAP Consultant",
        jd: "Implement and customize SAP modules based on business requirements.",
      },
      {
        role: "SAP Analyst",
        jd: "Analyze business processes and support SAP ERP system management.",
      },
      {
        role: "SAP Developer",
        jd: "Develop ABAP programs and extensions within SAP ERP.",
      },
    ],
    modules: [
      {
        id: "1",
        title: "Introduction to SAP",
        duration: "2 weeks",
        topics: ["ERP Basics", "SAP Overview", "Modules Overview"],
        projects: 1,
      },
      {
        id: "2",
        title: "SAP FI/CO",
        duration: "4 weeks",
        topics: ["Financial Accounting", "Controlling", "Reporting"],
        projects: 2,
      },
      {
        id: "3",
        title: "SAP MM/SD",
        duration: "4 weeks",
        topics: ["Materials Management", "Sales & Distribution", "Procurement"],
        projects: 2,
      },
      {
        id: "4",
        title: "SAP HCM & ABAP Basics",
        duration: "4 weeks",
        topics: ["Human Capital Management", "ABAP Introduction"],
        projects: 2,
      },
      {
        id: "5",
        title: "Capstone Project",
        duration: "4 weeks",
        topics: ["End-to-end SAP Implementation"],
        projects: 1,
      },
    ],
    tools: [
      { name: "SAP GUI", icon: "💻", category: "ERP Platform" },
      { name: "ABAP Workbench", icon: "🛠️", category: "Development" },
      { name: "SAP Fiori", icon: "📱", category: "UI/UX" },
      { name: "SAP HANA Studio", icon: "🗄️", category: "Database/Analytics" },
    ],
    technologies: ["SAP ERP", "FI/CO", "MM/SD", "HCM", "ABAP", "Fiori"],
    projects: [
      {
        id: "1",
        title: "Finance Management System",
        description:
          "Implement SAP FI module for financial tracking and reporting.",
        technologies: ["SAP FI"],
        image: project1,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Arjun Verma",
      },
      {
        id: "2",
        title: "Inventory & Sales System",
        description:
          "Create SAP MM/SD workflow to manage procurement, stock, and sales.",
        technologies: ["SAP MM", "SAP SD"],
        image: project2,
        liveUrl: "#",
        githubUrl: "#",
        studentName: "Simran Kaur",
      },
    ],
  },
};


// const courses = [
//   {
//     id: "1",
//     slug: "mern",
//     title: "MERN Stack Development",
//     image: mernImg,
//     icon: "https://img.icons8.com/color/48/react-native.png",
//     description:
//       "Master full-stack development using MongoDB, Express, React, and Node.js.",
//     technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redux"]
//   },
//   {
//     id: "2",
//     slug: "programming",
//     title: "Programming Languages",
//     image: langImg,
//     icon: "https://img.icons8.com/color/48/code.png",
//     description: "Learn foundational programming with C, C++, Java, and Python.",
//     technologies: ["C", "C++", "Core Java", "Python"],
//   },
//   {
//     id: "3",
//     slug: "data_science",
//     title: "Data Science",
//     image: dsImg,
//     icon: "https://img.icons8.com/color/48/artificial-intelligence.png",
//     description:"Explore analytics, visualization, and AI-powered insights with real data.",
//     technologies: ["Python", "Power BI", "SQL", "Data Analytics"],
//   },
//   {
//     id: "4",
//     slug: "uiux",
//     title: "UI/UX",
//     image: uiuxImg,
//     icon: "https://img.icons8.com/color/48/design.png",
//     description: "Design modern, user-friendly interfaces with top creative tools.",
//     technologies: ["Figma", "Photoshop", "Illustrator", "Adobe XD"],
//   },
//   {
//     id: "5",
//     slug: "frontend_dev",
//     title: "Frontend Development",
//     image: phpImg,
//     icon: "https://img.icons8.com/color/48/html-5--v1.png",
//     description: "Build responsive websites with HTML, CSS, JavaScript, and frameworks.",
//     technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Tailwind CSS"]
//   },
//   {
//     id: "6",
//     slug: "backend_dotnet",
//     title: "Core .NET Development",
//     image: dotnetImg,
//     icon: "https://img.icons8.com/color/48/c-sharp-logo.png",
//     description: "Develop enterprise-grade apps using C#, ASP.NET, and SQL server.",
//     technologies: ["C#", ".NET Core", "ASP.NET", "SQL", "MVC"]
//   },
//   {
//     id: "7",
//     slug: "backend_java",
//     title: "Java Development",
//     image: javaImg,
//     icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png",
//     description: "Build scalable apps with Core Java, Spring, and Hibernate.",
//     technologies: ["Core Java", "Advance Java", "SQL", "Spring", "Hibernate"]
//   },
//   {
//     id: "8",
//     slug: "backend_php",
//     title: "PHP Web Development",
//     image: phpImg,
//     icon: "https://img.icons8.com/officel/48/php-logo.png",
//     description: "Create robust websites using PHP, MySQL, and frameworks together.",
//     technologies: ["PHP", "Advance PHP", "MySQL", "CodeIgniter", "Laravel"]
//   },
//   {
//     id: "9",
//     slug: "backend_python",
//     title: "Python Web Development",
//     image: pythonImg,
//     icon: "https://img.icons8.com/color/48/python.png",
//     description: "Develop dynamic web applications using Python, Django, and databases.",
//     technologies: ["Python", "Advance Python", "MySQL", "Django", "Flask"]
//   },
//   {
//     id: "10",
//     slug: "mean",
//     title: "MEAN Stack Development",
//     image: meanImg,
//     icon: "https://img.icons8.com/color/48/angularjs.png",
//     description: "Full-stack development with MongoDB, Express, Angular, and Node.js.",
//     technologies: ["Angular", "Node.js", "Express.js", "MongoDB"]
//   },
//   {
//     id: "11",
//     slug: "app_dev",
//     title: "App Development",
//     image: meanImg,
//     icon: "https://img.icons8.com/color/48/android-os.png",
//     description: "Build cross-platform mobile applications for Android and iOS devices.",
//     technologies: ["React Native", "Flutter", "Java", "Kotlin"]
//   },
//   {
//     id: "12",
//     slug: "testing",
//     title: "Software Testing",
//     image: testingImg,
//     icon: "https://img.icons8.com/color/48/test-passed.png",
//     description: "Ensure quality with manual, automation, and performance testing skills.",
//     technologies: ["Manual Testing", "Automation Testing", "Selenium", "JMeter"]
//   },
//   {
//     id: "13",
//     slug: "marketing",
//     title: "Digital Marketing",
//     image: marketingImg,
//     icon: "https://img.icons8.com/?size=100&id=MQiz3TkEm0h6&format=png&color=000000",
//     description: "Learn SEO, social media, and digital branding for businesses.",
//     technologies: ["SEO", "Social Media", "Google Ads", "Analytics"]
//   },
//   {
//     id: "14",
//     slug: "cloud_computing",
//     title: "Cloud Computing",
//     image: cloudImg,
//     icon: "https://img.icons8.com/color/48/cloud.png",
//     description: "Master AWS, Azure, and cloud-based infrastructure deployment skills.",
//     technologies: ["AWS", "Azure", "Linux", "Networking"]
//   },
//   {
//     id: "15",
//     slug: "salesforce",
//     title: "Salesforce",
//     image: salesforceImg,
//     icon: "https://img.icons8.com/color/48/salesforce.png",
//     description: "Learn Salesforce CRM development, customization, and administration.",
//     technologies: ["Salesforce CRM", "Apex", "Lightning Components"]
//   },
//   {
//     id: "16",
//     slug: "sap",
//     title: "SAP",
//     image: sapImg,
//     icon: "https://img.icons8.com/color/48/sap.png",
//     description: "Understand enterprise SAP modules for business process management.",
//     technologies: ["SAP HANA", "SAP ABAP", "SAP FICO"]
//   },
// ]

export default courses;
