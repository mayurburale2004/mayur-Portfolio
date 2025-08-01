import React from 'react';
import About from './components/About/About.jsx'; 
import Contact from './components/Contact/Contact.jsx';
import Education from './components/Education/Education.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Project from './components/Project/Project.jsx';
import Skills from './components/Skills/Skills.jsx';
import BlurBlob from './BlurBlob.jsx';
import CertificateSection from './components/Certificate/Certificate.jsx';

import Experience from "./components/Experience/Experience.jsx";




import './App.css';
import './index.css'
const App = () => {
  return (
    <div className="bg-[#050414]">
<BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Navbar />
        <main>
          <About />
          <Skills />
          <Education />
           <Experience />
          <Project />
          
        <CertificateSection />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
