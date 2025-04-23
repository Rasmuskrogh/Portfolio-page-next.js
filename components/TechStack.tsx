"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiStrapi,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMagento,
  SiStoryblok,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiVuedotjs,
  SiNuxtdotjs,
} from "react-icons/si";

const TechStack = (): JSX.Element => {
  const categories = [
    {
      title: "Main Stack",
      description: "My primary tools and technologies",
      items: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-8 h-8 text-black" />,
          level: "Expert",
        },
        {
          name: "React",
          icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />,
          level: "Expert",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
          level: "Expert",
        },
        {
          name: "Supabase",
          icon: <SiSupabase className="w-8 h-8 text-[#3ECF8E]" />,
          level: "Expert",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" />,
          level: "Expert",
        },
      ],
    },
    {
      title: "Frontend",
      description: "Frontend technologies and frameworks",
      items: [
        {
          name: "Vue.js",
          icon: <SiVuedotjs className="w-8 h-8 text-[#4FC08D]" />,
          level: "Intermediate",
        },
        {
          name: "Nuxt.js",
          icon: <SiNuxtdotjs className="w-8 h-8 text-[#00DC82]" />,
          level: "Intermediate",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
          level: "Expert",
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />,
          level: "Expert",
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" />,
          level: "Expert",
        },
      ],
    },
    {
      title: "Backend & CMS",
      description: "Backend technologies and content management systems",
      items: [
        {
          name: "Strapi",
          icon: <SiStrapi className="w-8 h-8 text-[#2F2E8B]" />,
          level: "Expert",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-8 h-8 text-[#339933]" />,
          level: "Intermediate",
        },
        {
          name: "Express",
          icon: <SiExpress className="w-8 h-8 text-black" />,
          level: "Intermediate",
        },
        {
          name: "Magento",
          icon: <SiMagento className="w-8 h-8 text-[#EE672F]" />,
          level: "Intermediate",
        },
        {
          name: "Storyblok",
          icon: <SiStoryblok className="w-8 h-8 text-[#09B3AF]" />,
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Databases & Tools",
      description: "Database systems and development tools",
      items: [
        {
          name: "MySQL",
          icon: <SiMysql className="w-8 h-8 text-[#4479A1]" />,
          level: "Intermediate",
        },
        {
          name: "SQLite",
          icon: <SiSqlite className="w-8 h-8 text-[#003B57]" />,
          level: "Intermediate",
        },
        {
          name: "Git",
          icon: <FaGitAlt className="w-8 h-8 text-[#F05032]" />,
          level: "Expert",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-black"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center space-x-3">
                    <div>{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-black">{item.name}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            item.level === "Expert"
                              ? "bg-green-500/20 text-green-600"
                              : item.level === "Intermediate"
                              ? "bg-yellow-500/20 text-yellow-600"
                              : "bg-gray-500/20 text-gray-600"
                          }`}
                        >
                          {item.level}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
