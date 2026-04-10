import React from 'react'
import { experiences } from '../../constants'

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A timeline of my professional roles and the work I’ve contributed to across different teams.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-white/70"></div>

        <div className="space-y-12 sm:space-y-16">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={experience.id}
                className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-0 ${
                  isEven ? 'sm:justify-end' : 'sm:justify-start'
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 top-8 sm:top-10 z-10 h-12 w-12 sm:h-16 sm:w-16 -translate-x-1/2 rounded-full border-4 border-[#8245ec] bg-gray-900 shadow-[0_0_20px_1px_rgba(130,69,236,0.35)] overflow-hidden lg:hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div
                  className={`w-full pl-16 sm:pl-0 sm:max-w-lg ${
                    isEven ? 'sm:pr-24' : 'sm:pl-24'
                  }`}
                >
                  <div className="rounded-3xl border border-purple-500/30 bg-gray-900/90 p-6 sm:p-8 shadow-[0_0_30px_1px_rgba(130,69,236,0.15)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_40px_1px_rgba(130,69,236,0.25)] hover:scale-[1.02]">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-white/10 border border-purple-500/20">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col justify-between flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {experience.role}
                        </h3>
                        <h4 className="text-sm sm:text-base text-gray-400 font-medium">
                          {experience.company}
                        </h4>
                        <p className="text-xs sm:text-sm text-purple-400/80 mt-2 font-semibold">
                          {experience.date}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-gray-300 text-sm sm:text-base leading-relaxed">
                      {experience.desc}
                    </p>

                    {experience.skills?.length ? (
                      <div className="mt-5">
                        <h5 className="font-semibold text-white text-sm">Skills:</h5>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {experience.skills.map((skill, index) => (
                            <span
                              key={`${experience.id}-${index}`}
                              className="bg-gradient-to-r from-purple-600/80 to-purple-500/80 text-white px-3 py-1.5 text-xs sm:text-sm rounded-full border border-purple-400/30 hover:border-purple-400/60 transition-all"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience