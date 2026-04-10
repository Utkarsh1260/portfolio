import { useEffect, useState } from 'react'
import profileImage from '../../assets/profile2.png'
import Tilt from 'react-parallax-tilt';

const roles = [
    'Fullstack Developer',
    'App Developer',
    'UI/UX Designer',
    'Coder',
]

const About = () => {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText === currentRole) {
                    setIsDeleting(true)
                    return
                }

                setDisplayText(currentRole.slice(0, displayText.length + 1))
                return
            }

            if (displayText === '') {
                setIsDeleting(false)
                setRoleIndex((prev) => (prev + 1) % roles.length)
                return
            }

            setDisplayText(currentRole.slice(0, displayText.length - 1))
        }, isDeleting ? 60 : displayText === currentRole ? 1600 : 100)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, roleIndex])

    return (
        <section
            id="about"
            className="px-[7vw] md:px-[8vw] lg:px-[20vw] pt-24 md:pt-32 pb-12 font-sans"
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
                <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1 leading-tight">
                        Hi, I am
                    </h1>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight whitespace-nowrap">
                        <span>Utkarsh</span> <span>Kushwaha</span>
                    </h3>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 leading-tight">
                        <span className="text-white">I am a </span>
                        <span className="inline-block min-w-[17ch] text-[#8265ff]">
                            {displayText}
                        </span>
                    </h3>

                    {/* About me paragraph */}
                    <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
                        I am a full-stack developer with over 2 years of experience in building scalable web applications.
                        Skilled in both front-end and back-end development, I specialize in the MERN stack and other
                        modern technologies to create seamless user experiences and efficient solutions.
                    </p>

                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1-HDB1IuysGMTupTgpPsm_d_TQCiRt6_2/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-2xl mt-2 text-lg font-bold transition duration-300 hover:-translate-y-0.5 hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #6f58ff 0%, #8f6dff 55%, #a682ff 100%)',
                            boxShadow: '0 8px 26px rgba(126, 95, 255, 0.55)',
                        }}
                    >
                        DOWNLOAD CV
                    </a>
                </div>

                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-[#735fff] opacity-45 blur-2xl"></div>
                            <Tilt className="relative w-56 h-56 sm:w-[19rem] sm:h-[19rem] md:w-[25rem] md:h-[25rem] rounded-full border-[6px] border-[#8466ff] overflow-hidden shadow-[0_0_44px_rgba(130,101,255,0.75)]">
                            <img
                                src={profileImage}
                                alt="Utkarsh kushwaha"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
