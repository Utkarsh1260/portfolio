import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='hidden md:flex space-x-4'>
            <a
                href='https://github.com/Utkarsh1260'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-[#8245ec]'>
                <FaGithub size={24} />
            </a>
            <a
                href='https://www.linkedin.com/in/utkarsh1260'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-[#8245ec]'>
                <FaLinkedin size={24} />
            </a>
        </div>
    )
}

export default SocialMedia