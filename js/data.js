const PROFILE = {
  firstName: "Kolipaka",
  lastName: "Venkata Sai",
  photo: "assets/images/profile/profile.jpg",
  roles: ["BTech Computer Science Student", "Data Science Enthusiast"],
  intro: "A dedicated Computer Science student with a passion for innovation and technology.",
  about: "I am a Fourth-year Computer Science student at Andhra University with a strong focus on Data Science and Machine Learning Concepts. I build scalable web applications with HTML, CSS and JavaScript, and use Python for Data Science. My goal is to create intuitive, high-impact software solutions.",
  email: "venkatsai582523@gmail.com",
  phone: "+91 96186 17413",
  location: "Vizianagaram, Andhra Pradesh",
  github: "https://github.com/KolipakaVenkatasai",
  linkedin: "https://www.linkedin.com/in/venkata-sai-kolipaka-981b23311/",
  openToWork: "Open to internships and collaborative projects.",
  footer: "© 2025 Kolipaka Venkata Sai. Built with passion and code."
};

// Numbers that count up in the About section (projects and certificates are counted automatically)
const STATS = [
  { value: 8.45, decimals: 2, label: "CGPA" },
  { value: "projects", label: "Projects" },
  { value: 10, label: "Certificates" },
];

const ABOUT_CARDS = [
  { icon: "fas fa-graduation-cap", title: "Education", text: "Pursuing BTech in CSE at Andhra University with 8.5 CGPA" },
  { icon: "fas fa-bullseye", title: "Focus", text: "Specializing in Data Science and Python Programming." },
  { icon: "fas fa-user-friends", title: "Soft Skills", text: "Teaching, Communication and Problem-Solving" }
];

const SKILLS = [
  { icon: "fas fa-code", title: "Programming Languages", tags: ["C", "C++", "Python", "Java"] },
  { icon: "fas fa-laptop-code", title: "Frontend Development", tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
  { icon: "fas fa-database", title: "Databases", tags: ["MySQL"] },
  { icon: "fas fa-tools", title: "DevOps & Tools", tags: ["Git & GitHub", "VS Code", "Excel"] },
  { icon: "fas fa-tools", title: "Data Science", tags: ["sklearn", "matplotlib", "Python","joblib","ML"] },
  { icon: "fas fa-tools", title: "DSA", tags: ["Arrays", "Sliding WIndow", "2pointers" , "Trees" , "strings"] }
];

const EXPERIENCE = [
  { icon: "fas fa-briefcase", title: "Data Science Using Python", where: "NSIC HYD", badge: "2 months internship",
    text: "Hands-on experience developing insightful dashboard with predictable multiple ML models.",
    tags: ["ML Development", "Data Science", "Python", "Data Cleaning" , "EDA" , "Streamlit"] },
  { icon: "fas fa-briefcase", title: "Data Science", where: "Pivotal Soft PVT LDT", badge: "6 months internship",
    text: "Hands-on experience developing fair price prediction models, and developed regression models.",
    tags: ["ML Development", "Data Science", "Python", "Data Cleaning" , "EDA" , "Matplotlib"] },
  { icon: "fas fa-briefcase", title: "AI & ML Full Stack Developer", where: "ROBOCOUPLER PVT LTD", badge: "2 month internship",
    text: "Hands-on experience developing AI/ML solutions and full-stack applications.",
    tags: ["AI/ML Development", "Full Stack", "Chatbots", "Object Detection"] },
];

// link is optional: leave it as "" if the project has no live demo
const PROJECTS = [
  { icon: "fas fa-taxi", title: "Uber Fare Price Detection", link: "https://uber-fare-price-prediction.onrender.com",
    text: "Developed Ml models to predict the fare amount using hystorical ride data.", tags: ["Data Science", "Machine Learning" , "Python",] },
  { icon: "fas fa-chart-pie", title: "Vega Insight Pro AI powered retail analytics Platform", link: "https://vega-insight-pro-ovghqra35fr4huesvgezee.streamlit.app/",
    text: "A web application showing retail analysis and customer behavior.", tags: ["Data Science", "Python","EDA","Machine Learning"] },
  { icon: "fas fa-cloud-sun", title: "Weather App", link: "https://kolipakavenkatasai.github.io/Weather_APP/",
    text: "A web application showing live weather and forecasts using APIs.", tags: ["Frontend", "API"] },
  { icon: "fas fa-leaf", title: "Crop Disease Detection", link: "https://kolipakavenkatasai.github.io/CROP_RAKSHAK/",
    text: "A machine learning solution using pre-trained models to detect and classify crop diseases early.", tags: ["Python", "Deep Learning", "Computer Vision"] },
  { icon: "fas fa-mobile-alt", title: "AI Face Recognition Attendance", link: "",
    text: "An Android app with AI face recognition for automated attendance in government schools.", tags: ["AI/ML", "Face Recognition", "Mobile"] },
];

const EDUCATION = [
  { icon: "fas fa-user-graduate", title: "B.Tech, Computer Science Engineering", where: "Andhra University College Of Engineering, Visakhapatnam", badge: "Current CGPA 8.45", text: "CS&SE" },
  { icon: "fas fa-book-open", title: "Intermediate (MPC)", where: "Sri Chaitanya Junior College", badge: "70%", text: "" },
  { icon: "fas fa-school", title: "Secondary Education (SSC)", where: "Sri Chaitanya Techno School, Vizianagaram", badge: "98%", text: "" }
];

// file = the certificate image/PDF in the same folder (or a full web link)
const CERTS = [
  { icon: "fas fa-briefcase", title: "Internship Certificate", issuer: "NSIC HYD", file: "assets/certificates/nsic-internship.jpg" },
  { icon: "fas fa-briefcase", title: "Internship Certificate", issuer: "PivotalSOft PVT LTD", file: "assets/certificates/pivotalsoft-internship.jpg" },
  { icon: "fas fa-laptop-code", title: "Others", get: "Click here to view all other certificates", file: "assets/certificates/more-certificates.png" }
];
