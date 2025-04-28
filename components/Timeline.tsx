"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  skills?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  backgroundColor: "white" | "orange";
}

const Timeline = ({ items, backgroundColor }: TimelineProps) => {
  const isWhiteBg = backgroundColor === "white";

  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className={`absolute left-8 top-0 bottom-0 w-0.5 ${
          isWhiteBg ? "bg-gray-700" : "bg-black"
        } max-sm:left-4`}
      />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative pl-16 mb-12 max-sm:pl-12"
        >
          {/* Timeline dot */}
          <div
            className={`absolute left-6 w-4 h-4 rounded-full border-4 max-sm:left-[0.55rem] ${
              isWhiteBg
                ? "border-gray-900 bg-[#fb6f4c]"
                : "border-black bg-white"
            }`}
          />

          {/* Content card */}
          <div
            className={`group relative ${
              isWhiteBg
                ? "bg-white text-gray-900 shadow-lg"
                : "bg-[#fb6f4c]/90 text-black shadow-lg"
            } rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
          >
            <div
              className={`absolute top-0 left-0 w-1 h-full ${
                isWhiteBg ? "bg-[#fb6f4c]" : "bg-black"
              } rounded-l`}
            />

            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full ${
                  item.type === "work" ? "bg-[#fb6f4c]/20" : "bg-[#ffffff]/20"
                } flex items-center justify-center max-[480px]:hidden`}
              >
                {item.type === "work" ? (
                  <FaBriefcase className="w-6 h-6 text-[#fb6f4c]" />
                ) : (
                  <FaGraduationCap className="w-6 h-6 text-white" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p
                  className={`text-lg ${
                    isWhiteBg ? "text-gray-700" : "text-gray-800"
                  }`}
                >
                  {item.subtitle}
                </p>
                <p
                  className={`text-sm ${
                    isWhiteBg ? "text-gray-600" : "text-gray-700"
                  }`}
                >
                  {item.period}
                </p>

                {/* Description */}
                <ul className="mt-4 space-y-2">
                  {item.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-black">•</span>
                      <span
                        className={
                          isWhiteBg ? "text-gray-800" : "text-gray-800"
                        }
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                {item.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 ${
                          isWhiteBg
                            ? "bg-[#fb6f4c] text-white"
                            : "bg-black text-white"
                        } rounded-full text-sm font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
