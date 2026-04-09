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
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Utkarsh kushwaha
                    </h2>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                        <span className="text-white">I am a </span>
                        <span className="inline-block min-w-[17ch] text-[#8245ec]">
                            {displayText}
                        </span>

                    </h3>

          /* About me paragraph */
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I am a full-stack developer with over 2 years of experience in building scalable web applications.
                        Skilled in both front-end and back-end development, I specialize in the MERN stack and other
                        modern technologies to create seamless user experiences and efficient solutions.
                    </p>

/* Resume Button */
                    <a
                        href="https://drive.google.com/file/d/1-HDB1IuysGMTupTgpPsm_d_TQCiRt6_2/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-150"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >DOWNLOAD CV
                    </a>
                </div>

                /* Right Side */
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt className='w-48 h-48 sm:w-64 md:w-120 md:h-120  border-4 border-purple-700 rounded-full'>
                        <img
                            src={profileImage}
                            alt="Utkarsh kushwaha"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>

                </div>
            </div>
        </section>
    )
}

export default About
