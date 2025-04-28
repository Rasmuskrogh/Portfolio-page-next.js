"use client";

import Link from "next/link";

const TechStackLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link
      href="#techstack"
      scroll={false}
      className="underline cursor-pointer"
    >
      {children || "tech stack"}
    </Link>
  );
};

export default TechStackLink;

