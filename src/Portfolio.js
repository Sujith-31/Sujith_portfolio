// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Linkedin, Phone, Mail, Moon, Sun, ArrowRight, Code, Database, Bot } from "lucide-react";

// export default function Portfolio() {
//     const [darkMode, setDarkMode] = useState(true);

//     const scrollToSection = (sectionId) => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     const projects = [
//         {
//             title: "Auto Test Pro",
//             desc: "Comprehensive automation framework using Python Selenium, Flask, and React for end-to-end testing.",
//             icon: Code,
//             color: "text-sky-500",
//         },
//         {
//             title: "Work Zen Pro",
//             desc: "Employee productivity tracking software with real-time analytics and performance monitoring.",
//             icon: Database,
//             color: "text-purple-500",
//         },
//         {
//             title: "AI/ML Validation",
//             desc: "Custom Vision model validation and production deployment with comprehensive testing.",
//             icon: Bot,
//             color: "text-pink-500",
//         },
//     ];

//     const skillCategories = [
//         {
//             title: "Programming & Automation",
//             skills: ["Python", "SQL", "Selenium", "TestNG", "Appium", "WinAppDriver"]
//         },
//         {
//             title: "Web & Tools",
//             skills: ["React", "CSS", "Flask (REST API)", "Jira", "Postman", "Jenkins"]
//         },
//         {
//             title: "Testing & AI/ML",
//             skills: ["Manual and Automation Testing", "YOLO", "Custom Vision", "AI/ML Model Development"]
//         }
//     ];

//     return (
//         <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen transition-all duration-500`}>

//             {/* Floating Navigation */}
//             <nav className="fixed top-8 right-8 z-50 flex items-center gap-4">
//                 <button
//                     onClick={() => setDarkMode(!darkMode)}
//                     className={`p-3 rounded-full backdrop-blur-lg transition-all ${darkMode ? "bg-gray-800/80 text-yellow-400" : "bg-white/80 text-gray-700"} shadow-lg hover:scale-110`}
//                 >
//                     {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//                 </button>
//             </nav>

//             {/* Hero Section */}
//             <section className="min-h-screen flex flex-col md:flex-row items-center relative overflow-hidden">
//                 <motion.div
//                     initial={{ x: -100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="w-full md:w-1/2 h-screen relative"
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-purple-500/20" />
//                     <img src="/profile.jpg" alt="Sujith Balaji A" className="w-full h-full object-cover" />
//                     <div className="absolute top-20 left-10 w-32 h-32 bg-sky-400/30 rounded-full blur-3xl" />
//                     <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl" />
//                 </motion.div>

//                 <motion.div
//                     initial={{ x: 100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     className="w-full md:w-1/2 h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24"
//                 >
//                     <motion.div
//                         initial={{ y: 20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 0.4 }}
//                     >
//                         <p className="text-sky-400 font-semibold text-lg mb-4 tracking-wider">HELLO, I'M</p>
//                         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">Sujith Balaji A</h1>
//                         <h2 className={`text-2xl md:text-3xl font-light mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
//                             Software Test Engineer
//                         </h2>
//                         <p className={`text-lg mb-8 leading-relaxed max-w-xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//                             3+ years of expertise in Manual & Automation Testing. Specializing in Python, Selenium, Appium, API Testing, and AI/ML model validation.
//                         </p>

//                         <div className="flex flex-wrap gap-4 mb-8">
//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => scrollToSection("contact")}
//                                 className="px-8 py-4 bg-sky-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-sky-600 transition"
//                             >
//                                 Reach Out <ArrowRight size={20} />
//                             </motion.button>
//                             <motion.a
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 href="/Sujith_A.pdf"
//                                 download
//                                 className={`px-8 py-4 rounded-full font-semibold border-2 transition ${darkMode ? "border-gray-600 hover:border-sky-400 hover:text-sky-400" : "border-gray-300 hover:border-sky-500 hover:text-sky-500"}`}
//                             >
//                                 Download CV
//                             </motion.a>
//                         </div>

//                         <div className="flex gap-6">
//                             <a href="mailto:sujithbalajia@gmail.com" className="text-2xl hover:text-sky-400 transition"><Mail size={28} /></a>
//                             <a href="https://www.linkedin.com/in/sujith-balaji/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-sky-400 transition"><Linkedin size={28} /></a>
//                             <a href="tel:+919677996675" className="text-2xl hover:text-sky-400 transition"><Phone size={28} /></a>

//                         </div>
//                     </motion.div>
//                 </motion.div>

//                 <motion.div
//                     animate={{ y: [0, 10, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.5 }}
//                     className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
//                     onClick={() => scrollToSection("about")}
//                 >
//                     <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${darkMode ? "border-gray-600" : "border-gray-400"}`}>
//                         <div className={`w-1 h-2 ${darkMode ? "bg-gray-400" : "bg-gray-600"} rounded-full mt-2`} />
//                     </div>
//                 </motion.div>
//             </section>

//             {/* About Section */}
//             <section id="about" className={`py-24 px-8 md:px-16 lg:px-32 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}>
//                 <div className="max-w-6xl mx-auto">
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="grid md:grid-cols-2 gap-12 items-center"
//                     >
//                         <div>
//                             <h2 className="text-5xl font-bold mb-6">About Me</h2>
//                             <div className="w-20 h-1 bg-sky-500 mb-6" />
//                             <p className={`text-lg leading-relaxed mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
//                                 Detail-oriented Software Test Engineer passionate about delivering
//                                 high-quality web, mobile, and desktop solutions. Experienced in
//                                 building automation frameworks, validating AI/ML models, and
//                                 collaborating with cross-functional teams to drive impactful results.
//                             </p>
//                             <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
//                                 I thrive in Agile environments and continuously seek to improve testing
//                                 methodologies and development processes through innovative automation
//                                 strategies.
//                             </p>
//                         </div>
//                         <div className="relative">
//                             <img src="/profile.jpg" alt="About" className="rounded-2xl shadow-2xl" />
//                             <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-sky-500 rounded-2xl -z-10" />
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Skills Section */}
//             <section id="skills" className={`py-24 px-8 md:px-16 lg:px-32 ${darkMode ? "bg-gray-800/50" : "bg-white"} relative overflow-hidden`}>
//                 {/* Animated background elements */}
//                 <motion.div
//                     animate={{
//                         rotate: 360,
//                         scale: [1, 1.2, 1]
//                     }}
//                     transition={{
//                         duration: 20,
//                         repeat: Infinity,
//                         ease: "linear"
//                     }}
//                     className="absolute top-20 left-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"
//                 />
//                 <motion.div
//                     animate={{
//                         rotate: -360,
//                         scale: [1, 1.3, 1]
//                     }}
//                     transition={{
//                         duration: 25,
//                         repeat: Infinity,
//                         ease: "linear"
//                     }}
//                     className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
//                 />

//                 <div className="max-w-6xl mx-auto relative z-10">
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h2 className="text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
//                         <div className="w-20 h-1 bg-sky-500 mb-16 mx-auto" />

//                         <div className="grid md:grid-cols-3 gap-8">
//                             {skillCategories.map((category, idx) => (
//                                 <motion.div
//                                     key={idx}
//                                     initial={{ opacity: 0, y: 30 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.5, delay: idx * 0.2 }}
//                                     whileHover={{
//                                         y: -10,
//                                         boxShadow: darkMode
//                                             ? "0 20px 60px rgba(14, 165, 233, 0.3)"
//                                             : "0 20px 60px rgba(14, 165, 233, 0.2)"
//                                     }}
//                                     className={`p-8 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 border relative ${darkMode
//                                         ? "bg-gray-900/70 border-gray-700 hover:border-sky-500/50"
//                                         : "bg-white/80 border-gray-200 hover:border-sky-400/50"
//                                         }`}
//                                 >
//                                     {/* Decorative corner accent */}
//                                     <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-sky-500/20 to-purple-500/20 rounded-bl-3xl rounded-tr-2xl" />

//                                     <motion.div
//                                         initial={{ scale: 0 }}
//                                         whileInView={{ scale: 1 }}
//                                         viewport={{ once: true }}
//                                         transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
//                                         className="mb-6"
//                                     >
//                                         <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${darkMode ? "bg-sky-500/10" : "bg-sky-100"
//                                             }`}>
//                                             <div className="text-4xl font-bold bg-gradient-to-br from-sky-400 to-purple-500 bg-clip-text text-transparent">
//                                                 {idx + 1}
//                                             </div>
//                                         </div>
//                                     </motion.div>

//                                     <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
//                                         {category.title}
//                                     </h3>

//                                     <div className="space-y-3">
//                                         {category.skills.map((skill, i) => (
//                                             <motion.div
//                                                 key={i}
//                                                 initial={{ opacity: 0, x: -20 }}
//                                                 whileInView={{ opacity: 1, x: 0 }}
//                                                 viewport={{ once: true }}
//                                                 transition={{ duration: 0.4, delay: idx * 0.2 + i * 0.1 }}
//                                                 whileHover={{ x: 5 }}
//                                                 className="flex items-center gap-3 group cursor-default"
//                                             >
//                                                 <motion.div
//                                                     whileHover={{ scale: 1.2, rotate: 90 }}
//                                                     className={`w-2 h-2 rounded-full ${darkMode ? "bg-sky-400" : "bg-sky-500"
//                                                         } group-hover:shadow-lg group-hover:shadow-sky-400/50`}
//                                                 />
//                                                 <span className={`text-lg transition-colors ${darkMode
//                                                     ? "text-gray-300 group-hover:text-white"
//                                                     : "text-gray-700 group-hover:text-gray-900"
//                                                     }`}>
//                                                     {skill}
//                                                 </span>
//                                             </motion.div>
//                                         ))}
//                                     </div>

//                                     {/* Progress indicator */}
//                                     <motion.div
//                                         initial={{ width: 0 }}
//                                         whileInView={{ width: "100%" }}
//                                         viewport={{ once: true }}
//                                         transition={{ duration: 1, delay: idx * 0.2 + 0.5 }}
//                                         className={`h-1 mt-6 rounded-full ${darkMode ? "bg-sky-500/30" : "bg-sky-400/30"
//                                             }`}
//                                     >
//                                         <motion.div
//                                             initial={{ width: 0 }}
//                                             whileInView={{ width: `${85 + idx * 5}%` }}
//                                             viewport={{ once: true }}
//                                             transition={{ duration: 1, delay: idx * 0.2 + 0.7 }}
//                                             className="h-full rounded-full bg-gradient-to-r from-sky-400 to-purple-500"
//                                         />
//                                     </motion.div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Projects Section */}
//             <section className="py-24 px-8 md:px-16 lg:px-32">
//                 <div className="max-w-6xl mx-auto">
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h2 className="text-5xl font-bold mb-12">Featured Projects</h2>
//                         <div className="grid md:grid-cols-3 gap-8">
//                             {projects.map((project, i) => (
//                                 <motion.div
//                                     key={i}
//                                     whileHover={{ y: -10, scale: 1.02 }}
//                                     className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-xl hover:shadow-2xl transition-all`}
//                                 >
//                                     <project.icon className={`${project.color} mb-4`} size={48} />
//                                     <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
//                                     <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{project.desc}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section id="contact" className={`py-24 px-8 md:px-16 lg:px-32 ${darkMode ? "bg-black" : "bg-gray-900 text-white"}`}>
//                 <div className="max-w-4xl mx-auto text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h2 className="text-5xl font-bold mb-6">Reach Out</h2>
//                         <div className="w-20 h-1 bg-sky-500 mb-12 mx-auto" />

//                         <img src="/profile.jpg" alt="Contact" className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-sky-500" />

//                         <h3 className="text-3xl font-bold mb-4">Sujith Balaji A</h3>
//                         <a href="mailto:sujithbalajia@gmail.com" className="text-xl text-sky-400 hover:text-sky-300 mb-8 block">
//                             sujithbalajia@gmail.com
//                         </a>

//                         <div className="flex justify-center gap-6 text-3xl mb-12">
//                             <a href="mailto:sujithbalajia@gmail.com" className="hover:text-sky-400 transition"><Mail size={36} /></a>
//                             <a href="https://www.linkedin.com/in/sujith-balaji/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition"><Linkedin size={36} /></a>
//                             <a href="tel:+911234567890" className="text-2xl hover:text-sky-400 transition"><Phone size={36} /></a>

//                         </div>

//                         <p className="text-gray-400">© {new Date().getFullYear()} Sujith • Built with React & Tailwind</p>
//                     </motion.div>
//                 </div>
//             </section>
//         </div>
//     );
// }



import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Phone, Mail, Moon, Sun, ArrowRight, Code, Database, Bot, Briefcase, Calendar } from "lucide-react";

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(true);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const projects = [
        {
            title: "Auto Test Pro",
            desc: "Comprehensive automation framework using Python Selenium, Flask, and React for end-to-end testing.",
            icon: Code,
            color: "text-sky-500",
        },
        {
            title: "Work Zen Pro",
            desc: "Employee productivity tracking software with real-time analytics and performance monitoring.",
            icon: Database,
            color: "text-purple-500",
        },
        {
            title: "AI/ML Validation",
            desc: "Custom Vision model validation and production deployment with comprehensive testing.",
            icon: Bot,
            color: "text-pink-500",
        },
    ];

    const workExperience = [
        {
            company: "RoshAI",
            position: "Software Test Engineer",
            duration: "June 2024 - Present",
            responsibilities: [
                "Execute manual and automated test cases for web and desktop applications with full functional coverage",
                "Developed Auto Test Pro, an automation framework and testing tool, using Python Selenium, Flask, React, and CSS",
                "Developed Work Zen Pro, an employee productivity tracker software, using Flask, React, and CSS",
                "Designed and validated AI/ML models using Custom Vision, delivering demos and production deployment",
                "Performed automation testing on desktop applications using Python Selenium, Appium, and WinAppDriver"
            ]
        },
        {
            company: "Ivy Mobility Solutions Pvt Ltd",
            position: "Junior Test Engineer",
            duration: "April 2022 - May 2024",
            responsibilities: [
                "Executed manual and automation test cases for web and mobile applications with full functional coverage",
                "Collaborated with web and mobile teams in Agile environments to analyze and resolve issues",
                "Performed regression, sanity, and functional testing logged and tracked defects in Jira to ensure timely resolution",
                "Validated backend data using SQL queries and executed test cases across web, mobile, and database environments",
                "Developed reusable and modular test cases, reducing testing time and enhancing coverage"
            ]
        }
    ];

    const skillCategories = [
        {
            title: "Programming & Automation",
            skills: ["Python", "SQL", "Selenium", "TestNG", "Appium", "WinAppDriver"]
        },
        {
            title: "Web & Tools",
            skills: ["React", "CSS", "Flask (REST API)", "Jira", "Postman", "Jenkins"]
        },
        {
            title: "Testing & AI/ML",
            skills: ["Manual and Automation Testing", "YOLO", "Custom Vision", "AI/ML Model Development"]
        }
    ];

    return (
        <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen transition-all duration-500`}>

            {/* Floating Navigation */}
            <nav className="fixed top-8 right-8 z-50 flex items-center gap-4">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`p-3 rounded-full backdrop-blur-lg transition-all ${darkMode ? "bg-gray-800/80 text-yellow-400" : "bg-white/80 text-gray-700"} shadow-lg hover:scale-110`}
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col md:flex-row items-center relative overflow-hidden">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 h-screen relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-purple-500/20" />
                    <img src="/profile.jpg" alt="Sujith Balaji A" className="w-full h-full object-cover" />
                    <div className="absolute top-20 left-10 w-32 h-32 bg-sky-400/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl" />
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24"
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-sky-400 font-semibold text-lg mb-4 tracking-wider">HELLO, I'M</p>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">Sujith Balaji A</h1>
                        <h2 className={`text-2xl md:text-3xl font-light mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                            Software Test Engineer
                        </h2>
                        <p className={`text-lg mb-8 leading-relaxed max-w-xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                            3+ years of expertise in Manual & Automation Testing. Specializing in Python, Selenium, Appium, API Testing, and AI/ML model validation.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection("contact")}
                                className="px-8 py-4 bg-sky-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-sky-600 transition"
                            >
                                Reach Out <ArrowRight size={20} />
                            </motion.button>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/Sujith_A.pdf"
                                download
                                className={`px-8 py-4 rounded-full font-semibold border-2 transition ${darkMode ? "border-gray-600 hover:border-sky-400 hover:text-sky-400" : "border-gray-300 hover:border-sky-500 hover:text-sky-500"}`}
                            >
                                Download CV
                            </motion.a>
                        </div>

                        <div className="flex gap-6">
                            <a href="mailto:sujithbalajia@gmail.com" className="text-2xl hover:text-sky-400 transition"><Mail size={28} /></a>
                            <a href="https://www.linkedin.com/in/sujith-balaji/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-sky-400 transition"><Linkedin size={28} /></a>
                            <a href="tel:+919677996675" className="text-2xl hover:text-sky-400 transition"><Phone size={28} /></a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                    onClick={() => scrollToSection("about")}
                >
                    <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${darkMode ? "border-gray-600" : "border-gray-400"}`}>
                        <div className={`w-1 h-2 ${darkMode ? "bg-gray-400" : "bg-gray-600"} rounded-full mt-2`} />
                    </div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className={`py-24 px-8 md:px-16 lg:px-32 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl font-bold mb-6 text-center">About Me</h2>
                        <div className="w-20 h-1 bg-sky-500 mb-12 mx-auto" />
                        <div className="max-w-4xl mx-auto text-center">
                            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                Detail-oriented Software Test Engineer with 3+ years of experience in Manual and Automation Testing (Python, Selenium, Appium, Agile).
                                Skilled in Functional, Regression, Smoke, Sanity Testing, Test Case Creation, STLC/SDLC, SQL, API Testing, and AI/ML model validation.
                            </p>
                            <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                Experienced in delivering enterprise-level web and mobile solutions, collaborating with cross-functional teams,
                                and ensuring high product quality and performance. I thrive in Agile environments and continuously seek to improve testing
                                methodologies and development processes through innovative automation strategies.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Work Experience Section */}
            <section id="experience" className={`py-24 px-8 md:px-16 lg:px-32 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl font-bold mb-12 text-center">Work Experience</h2>
                        <div className="w-20 h-1 bg-sky-500 mb-16 mx-auto" />

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-purple-500 to-pink-500" />

                            <div className="space-y-12">
                                {workExperience.map((job, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                                        className="relative"
                                    >
                                        {/* Timeline dot */}
                                        <div className="hidden md:block absolute left-6 top-10 w-5 h-5 bg-gradient-to-br from-sky-500 to-purple-500 rounded-full border-4 border-gray-900 z-10" />

                                        <div className={`md:ml-20 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-8 shadow-xl border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:shadow-2xl transition-all`}>
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                                <div className="flex items-start gap-4 mb-4 md:mb-0">
                                                    <div className={`p-3 rounded-xl ${darkMode ? "bg-sky-500/10" : "bg-sky-100"}`}>
                                                        <Briefcase className="text-sky-500" size={28} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
                                                            {job.position}
                                                        </h3>
                                                        <p className={`text-xl font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                                            {job.company}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={`flex items-center gap-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                    <Calendar size={18} />
                                                    <span className="text-sm font-medium">{job.duration}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                {job.responsibilities.map((resp, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.4, delay: idx * 0.2 + i * 0.1 }}
                                                        className="flex items-start gap-3 group"
                                                    >
                                                        <div className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${darkMode ? "bg-sky-400" : "bg-sky-500"}`} />
                                                        <p className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                                            {resp}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className={`py-24 px-8 md:px-16 lg:px-32 ${darkMode ? "bg-gray-800/50" : "bg-white"} relative overflow-hidden`}>
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1, 1.3, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
                        <div className="w-20 h-1 bg-sky-500 mb-16 mx-auto" />

                        <div className="grid md:grid-cols-3 gap-8">
                            {skillCategories.map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    whileHover={{
                                        y: -10,
                                        boxShadow: darkMode
                                            ? "0 20px 60px rgba(14, 165, 233, 0.3)"
                                            : "0 20px 60px rgba(14, 165, 233, 0.2)"
                                    }}
                                    className={`p-8 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 border relative ${darkMode
                                        ? "bg-gray-900/70 border-gray-700 hover:border-sky-500/50"
                                        : "bg-white/80 border-gray-200 hover:border-sky-400/50"
                                        }`}
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-sky-500/20 to-purple-500/20 rounded-bl-3xl rounded-tr-2xl" />

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                                        className="mb-6"
                                    >
                                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${darkMode ? "bg-sky-500/10" : "bg-sky-100"
                                            }`}>
                                            <div className="text-4xl font-bold bg-gradient-to-br from-sky-400 to-purple-500 bg-clip-text text-transparent">
                                                {idx + 1}
                                            </div>
                                        </div>
                                    </motion.div>

                                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
                                        {category.title}
                                    </h3>

                                    <div className="space-y-3">
                                        {category.skills.map((skill, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.2 + i * 0.1 }}
                                                whileHover={{ x: 5 }}
                                                className="flex items-center gap-3 group cursor-default"
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.2, rotate: 90 }}
                                                    className={`w-2 h-2 rounded-full ${darkMode ? "bg-sky-400" : "bg-sky-500"
                                                        } group-hover:shadow-lg group-hover:shadow-sky-400/50`}
                                                />
                                                <span className={`text-lg transition-colors ${darkMode
                                                    ? "text-gray-300 group-hover:text-white"
                                                    : "text-gray-700 group-hover:text-gray-900"
                                                    }`}>
                                                    {skill}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: idx * 0.2 + 0.5 }}
                                        className={`h-1 mt-6 rounded-full ${darkMode ? "bg-sky-500/30" : "bg-sky-400/30"
                                            }`}
                                    >
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${85 + idx * 5}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: idx * 0.2 + 0.7 }}
                                            className="h-full rounded-full bg-gradient-to-r from-sky-400 to-purple-500"
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section className={`py-24 px-8 md:px-16 lg:px-32 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl font-bold mb-12 text-center">Featured Projects</h2>
                        <div className="w-20 h-1 bg-sky-500 mb-16 mx-auto" />
                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-xl hover:shadow-2xl transition-all border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
                                >
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                                        <project.icon className={`${project.color}`} size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{project.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-24 px-8 md:px-16 lg:px-32 ${darkMode ? "bg-black" : "bg-gray-900 text-white"}`}>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl font-bold mb-6">Reach Out</h2>
                        <div className="w-20 h-1 bg-sky-500 mb-12 mx-auto" />

                        <img src="/Contact.png" alt="Contact" className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-sky-500" />

                        <h3 className="text-3xl font-bold mb-4">Sujith Balaji A</h3>
                        <a href="mailto:sujithbalajia@gmail.com" className="text-xl text-sky-400 hover:text-sky-300 mb-8 block">
                            sujithbalajia@gmail.com
                        </a>

                        <div className="flex justify-center gap-6 text-3xl mb-12">
                            <a href="mailto:sujithbalajia@gmail.com" className="hover:text-sky-400 transition"><Mail size={36} /></a>
                            <a href="https://www.linkedin.com/in/sujith-balaji/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition"><Linkedin size={36} /></a>
                            <a href="tel:+919677996675" className="hover:text-sky-400 transition"><Phone size={36} /></a>
                        </div>

                        <p className="text-gray-400">© {new Date().getFullYear()} Sujith Balaji A • Built with React & Tailwind</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}