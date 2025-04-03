import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Programs from './components/Programs/Programs';
import Testimonials from './components/Testimonials/Testimonials';
import Title from './components/Title/Title';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Blog from './pages/Blog'; // Updated import for Blog page
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import Privacy Policy page
import TermsOfService from './pages/TermsOfService'; // Import Terms of Service page

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <div className="edu-container">
              <Title subTitle='I Create Professionals' title='Subjects Taught by Professor Ch' />
              <Programs />
              <About setPlayState={setPlayState} />
              <Title subTitle='Gallery of Teaching and Learning Moments' title='A Visual Journey of Innovation and Inspiration' content='Explore snapshots of impactful moments in teaching, featuring hands-on projects, workshops, and innovations in full-stack and blockchain development.' />
              <Campus />
              <Title subTitle='What My Students Say About My Teaching' title='Student Feedback' />
              <Testimonials />
              <Title subTitle='Contact Us' title='Get in Touch with Professor Ch' />
              <Contact />
            </div>
            <GetStarted />
            <div className="edu-container">
              <Footer />
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
          </div>
        } />

        {/* Blog Page */}
        <Route path="/blog" element={
          <div>
            <Navbar />
            <Blog />  {/* Blog page component */}
            <Footer />
          </div>
        } />

        {/* Terms of Service Page */}
        <Route path="/terms-of-service" element={
          <div>
            <Navbar />
            <TermsOfService />
            <Footer />
          </div>
        } />

        {/* Privacy Policy Page */}
        <Route path="/privacy-policy" element={
          <div>
            <Navbar />
            <PrivacyPolicy />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
