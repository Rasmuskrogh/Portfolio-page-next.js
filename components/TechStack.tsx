"use client";

import { useTranslations } from "next-intl";
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
  SiOpenai,
} from "react-icons/si";

const TechStack = (): JSX.Element => {
  const t = useTranslations("TechStack");
  const categories = [
    {
      title: "Main Stack",
      description: t("main"),
      items: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-8 h-8 text-black" />,
          level: "good",
        },
        {
          name: "React",
          icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />,
          level: "advanced",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
          level: "good",
        },
        {
          name: "Supabase",
          icon: <SiSupabase className="w-8 h-8 text-[#3ECF8E]" />,
          level: "good",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" />,
          level: "good",
        },
      ],
    },
    {
      title: "Frontend",
      description: t("frontend"),
      items: [
        {
          name: "Vue.js",
          icon: <SiVuedotjs className="w-8 h-8 text-[#4FC08D]" />,
          level: "profficient",
        },
        {
          name: "Nuxt.js",
          icon: <SiNuxtdotjs className="w-8 h-8 text-[#00DC82]" />,
          level: "profficient",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
          level: "advanced",
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />,
          level: "advanced",
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" />,
          level: "advanced",
        },
      ],
    },
    {
      title: "Backend & CMS",
      description: t("backend"),
      items: [
        {
          name: "Strapi",
          icon: <SiStrapi className="w-8 h-8 text-[#2F2E8B]" />,
          level: "good",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-8 h-8 text-[#339933]" />,
          level: "profficient",
        },
        {
          name: "Express",
          icon: <SiExpress className="w-8 h-8 text-black" />,
          level: "profficient",
        },
        {
          name: "Magento",
          icon: <SiMagento className="w-8 h-8 text-[#EE672F]" />,
          level: "basic",
        },
        {
          name: "Storyblok",
          icon: <SiStoryblok className="w-8 h-8 text-[#09B3AF]" />,
          level: "basic",
        },
      ],
    },
    {
      title: t("databasesTitle"),
      description: t("databases"),
      items: [
        {
          name: "MySQL",
          icon: <SiMysql className="w-8 h-8 text-[#4479A1]" />,
          level: "profficient",
        },
        {
          name: "SQLite",
          icon: <SiSqlite className="w-8 h-8 text-[#003B57]" />,
          level: "basic",
        },
        {
          name: "Git",
          icon: <FaGitAlt className="w-8 h-8 text-[#F05032]" />,
          level: "advanced",
        },
        {
          name: "ChatGPT",
          icon: <SiOpenai className="w-8 h-8 text-[#74AA9C]" />,
          level: "none",
        },
        {
          name: "Cursor",
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#000000" />
              <path d="M12 4L4 8v8l8 4 8-4V8l-8-4z" fill="#FFFFFF" />
              <path d="M12 6L6 9v6l6 3 6-3V9l-6-3z" fill="#808080" />
              <path d="M12 8l-2 1v2l2 1 2-1V9l-2-1z" fill="#000000" />
              <path d="M12 10l-1 0.5v1l1 0.5 1-0.5v-1l-1-0.5z" fill="#FFFFFF" />
            </svg>
          ),
          level: "none",
        },
      ],
    },
  ];

  return (
    <section id="techstack" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold"
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
                        {item.level !== "none" && (
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              item.level === "advanced"
                                ? "bg-blue-600/20 text-blue-700"
                                : item.level === "good"
                                ? "bg-purple-500/20 text-purple-600"
                                : item.level === "profficient"
                                ? "bg-green-500/20 text-green-600"
                                : item.level === "basic"
                                ? "bg-yellow-500/20 text-yellow-600"
                                : "bg-red-500/20 text-red-600"
                            }`}
                          >
                            {item.level}
                          </span>
                        )}
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
