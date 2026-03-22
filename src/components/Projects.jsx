import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { useDarkMode } from "../context/DarkModeContext";

export default function Projects() {
  const { isDarkMode } = useDarkMode();
  const { data } = useFetchData();

  return (
    <section className="flex flex-col gap-12 px-2 pb-10">
      <h2 className={`font-bold text-5xl tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        {data && data.projectsSection.project}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data &&
          data.projectsSection.projects.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.siteUrl, "_blank", "noopener,noreferrer")}
              className={`group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 hover:border-indigo-500 hover:shadow-indigo-900/40"
                  : "bg-white border-gray-200 hover:border-indigo-400 hover:shadow-indigo-100"
              }`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.url}
                  alt={project.projectName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="flex flex-col gap-3 p-3 flex-1">
                <h3
                  className={`text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-indigo-500 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.projectName}
                </h3>

                <p className={`text-sm leading-relaxed flex-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {project.content}
                </p>

                <div className="flex gap-4 pt-2 mt-auto">
                  {project.githubUrl && (
                    <Link
                      to={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-400 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      {project.github}
                    </Link>
                  )}
                  <Link
                    to={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-400 transition-colors duration-200 ml-auto"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {project.viewSite}
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
