"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiGithub, SiNotion } from "react-icons/si";

// about me
const aboutMe = {
  title: "A propos de moi",
  description: "Je suis un développeur web passionné par la création de sites web et d'applications web. J'ai suivi une formation en développement web chez OpenClassRooms, dans laquelle j'ai travaillé sur plusieurs projets web et j'ai acquis des compétences en HTML, CSS, JavaScript, React, Node.js, MongoDB, Tailwind CSS, Next.js, Figma et Github.",
  info: [
    {
      fieldName: "name:",
      fieldValue: "Youssef Jnah"
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+33) 7 67 44 66 52"
    },
    {
      fieldName: "email:",
      fieldValue: "jnah.youssf@gmail.com"
    },
    {
      fieldName: "Langues:",
      fieldValue: "Français, Anglais, Arabe"
    },
  ],
};

// Experiences
const experience = {
  title: "Mes expériences",
  description: "",
  items: [
    {
      company: "OpenClassRooms",
      position: "Développeur Web - Reconversion",
      duration: "2024 - Présent",
    },
    {
      company: "Lycée Charif Idrissi / Maroc",
      position: "Professeur d'informatique",
      duration: "2016-2020",
    },
    
  ],
};

// Education data
const education = {
  title: "Formations",
  description: "",
  items: [
    {
      institution: "OpenClassRomms",
      degree: "Développeur Web",
      duration: "2024",
    },
    {
      institution: "Cours en ligne",
      degree: "Développement Web",
      duration: "2023-2024",
    },
    {
      institution: "Institut Supérieure de Technologie Appliqueé",
      degree: "Techniques de développement informatique",
      duration: "2007",
    },
  ],
};

// Skills data
const skills = {
  title: "Mes Compétences",
  description: "Je suis à l'aise avec l'univers JavaScript et ses différentes bibliothèques et frameworks;",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaSass />,
      name: "Sass",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    },
    {
      icon: <SiNotion />,
      name: "Notion",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="aboutMe"
          className="flex flex-col xl:flex-row gap-[60px]"  
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="aboutMe">A propos de moi</TabsTrigger>
            <TabsTrigger value="experience">Expériences</TabsTrigger>
            <TabsTrigger value="education">Formations</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">

            {/*About me*/}
            <TabsContent value="aboutMe" className="w-full text-center xl:text-left"> 
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold">{aboutMe.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{aboutMe.description}</p>
                <ul>
                  {aboutMe.info.map((item, index) =>{
                    return <li key={index} className="flex items-center gap-3 justify-center xl:justify-start">
                      <span className="text-accent">{item.fieldName}</span>
                      <span>{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*Experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*Education*/}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*Skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                   return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[110px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                   </li>
                    })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );  
};

export default About;