import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/work_logo/maayur.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-[7vw] md:px-[10vw] lg:px-[15vw] font-sans mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left max-w-xl">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Mayur Burale
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec]">
            <span className="text-white">I am a </span>

            <ReactTypingEffect
              text={[
                'Full Stack Developer',
                'MERN Stack Developer',
                'Java Full Stack Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed text-justify">
            I am an Information Technology student with a strong interest in Java Full Stack Development.
            I have experience in both frontend and backend technologies. On the backend side,
            I work with Java, JDBC, Hibernate, Spring, and Spring Boot to build scalable
            and efficient applications. On the frontend, I have knowledge of HTML, CSS,
            JavaScript, and React.js. I also have experience with MongoDB, Node.js, and
            Express.js (MERN Stack).
          </p>

          <a
            href="https://drive.google.com/file/d/1S5mMuzJmAVUZyu2Nr-prczq2KMrF3QDA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 15px #8245ec',
            }}
          >
            DOWNLOAD RESUME
          </a>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">

          <Tilt
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={800}
          >
            <img
              src={profileImage}
              alt="Mayur Burale"
              className="w-full h-full rounded-full object-cover"
            />
          </Tilt>

        </div>

      </div>
    </section>
  );
};

export default About;