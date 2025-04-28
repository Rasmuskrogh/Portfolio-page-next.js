"use client";

import Link from "next/link";

const TechStackLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link href="#techstack" className="underline cursor-pointer">
      {children || "tech stack"}
    </Link>
  );
};

export default TechStackLink;
