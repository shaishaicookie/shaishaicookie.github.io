import React from "react";

export function NavBar() {
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about-me");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <nav className="py-4 flex justify-between fixed top-0 w-full bg-white px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-72 border-b border-[#e5e7eb]">
        <h1 className="font-GoldenSignature text-4xl">sherry wang</h1>
        <ul className="flex items-center">
          <li className="mr-4 md:mr-6 lg:mr-8 lg:text-lg">
            <div onClick={handleAboutClick}>About</div>
          </li>
          <li>
            <div onClick={handleProjectsClick}>Projects</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
