import React from 'react'
import { education } from '../../constants'

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A timeline of my educational background and the learning experiences that shaped my foundation.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-white/70"></div>

        <div className="space-y-12 sm:space-y-16">
          {education.map((edu, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={edu.id}
                className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-0 ${
                  isEven ? 'sm:justify-end' : 'sm:justify-start'
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 top-8 sm:top-10 z-10 h-12 w-12 sm:h-16 sm:w-16 -translate-x-1/2 rounded-full border-4 border-[#8245ec] bg-gray-900 shadow-[0_0_20px_1px_rgba(130,69,236,0.35)] overflow-hidden lg:hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
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
                          src={edu.img}
                          alt={edu.school}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col justify-between flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <h4 className="text-sm sm:text-base text-gray-400 font-medium">
                          {edu.school}
                        </h4>
                        <p className="text-xs sm:text-sm text-purple-400/80 mt-2 font-semibold">
                          {edu.date}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-gray-300 text-sm sm:text-base leading-relaxed">{edu.desc}</p>

                    <div className="mt-5">
                      <span className="inline-block bg-gradient-to-r from-purple-600/80 to-purple-500/80 text-white text-xs sm:text-sm font-bold rounded-full px-4 py-2 border border-purple-400/30">
                        Grade: {edu.grade}
                      </span>
                    </div>
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

export default Education
