import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various projects
        </p>
      </div>

      {/* Skills Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            className="bg-gray-900/80 backdrop-blur-md px-6 sm:px-8 py-8 rounded-3xl border border-purple-500/30 shadow-[0_0_30px_1px_rgba(130,69,236,0.2)] hover:shadow-[0_0_40px_1px_rgba(130,69,236,0.3)] transition-all duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-800/80 border border-purple-500/20 hover:border-purple-500/60 rounded-2xl py-3 px-2 transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <span className="text-xs sm:text-xs text-gray-300 text-center font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  )
}

export default Skills