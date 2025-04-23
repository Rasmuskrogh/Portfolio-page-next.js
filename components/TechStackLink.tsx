"use client";

import Link from "next/link";

const TechStackLink = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("techstack");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <span>
      <Link className="underline" href="#techstack" onClick={handleClick}>
        tech stack
      </Link>
    </span>
  );
};

export default TechStackLink;
