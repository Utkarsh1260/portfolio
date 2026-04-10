import React, { useState } from 'react'
import { projects } from '../../constants'

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenModal = (project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-purple-500/30 bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-[0_0_30px_1px_rgba(130,69,236,0.1)] hover:shadow-[0_0_50px_1px_rgba(130,69,236,0.2)] overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-300"
          >
            <div className="p-4 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-purple-600/60 to-purple-500/60 text-xs font-semibold text-white rounded-full px-3 py-1 mr-2 mb-2 border border-purple-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <div className="bg-gray-900/95 rounded-3xl shadow-2xl border border-purple-500/30 w-full max-w-4xl max-h-[92vh] overflow-y-auto relative">
            <div className="sticky top-0 z-10 flex justify-end p-4 bg-gray-900/85 backdrop-blur-sm">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-400 transition-colors"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900/50 px-4 pb-6 pt-2 sm:pt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-w-4xl h-auto max-h-[46vh] object-contain rounded-2xl shadow-[0_0_30px_1px_rgba(130,69,236,0.2)]"
                />
              </div>

              <div className="lg:p-10 p-6 pt-0 sm:pt-2">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-2xl">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 mb-6 lg:text-base text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-600/60 to-purple-500/60 text-xs font-semibold text-white rounded-full px-3 py-1.5 border border-purple-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 flex-col sm:flex-row">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600/80 to-purple-500/80 hover:from-purple-600 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600/80 to-blue-500/80 hover:from-blue-600 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Work