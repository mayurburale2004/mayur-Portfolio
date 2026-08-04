import React, { useState } from 'react';

import { projects } from "../../constants";
const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };   
        return (
               <section
      id="Project"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative clip-path-custom-4"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => event.key === 'Enter' && handleOpenModal(project)}
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-xl shadow-black/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/70 hover:shadow-2xl hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <div className="relative m-4 mb-0 overflow-hidden rounded-xl bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 translate-y-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View details →
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-3 text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>
              <div className="mb-5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-purple-300 transition-colors group-hover:text-purple-200">
                Explore project <span aria-hidden="true">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <div className="relative max-h-[calc(100vh-2rem)] w-[95%] max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/60">
            <button
              type="button"
              onClick={handleCloseModal}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/85 text-3xl font-bold leading-none text-white shadow-lg transition-colors hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              &times;
            </button>

            <div className="flex flex-col">
              <div className="flex w-full justify-center bg-gradient-to-br from-slate-800 to-slate-950 px-5 pt-5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-h-[36vh] w-auto max-w-full rounded-xl object-contain shadow-xl shadow-black/40"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                  {selectedProject.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-300 lg:text-base">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${selectedProject.webapp ? 'w-full sm:w-1/2' : 'w-full'} rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-center text-sm font-semibold text-gray-200 transition-colors hover:bg-slate-700 lg:px-6 lg:text-base`}
                  >
                    View Code
                  </a>
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full rounded-xl bg-purple-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-colors hover:bg-purple-500 sm:w-1/2 lg:px-6 lg:text-base"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
        );
    }


export default Project;
