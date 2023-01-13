import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Modes from './components/Modes/Modes';
import Navbar from './components/Navbar/Navbar';
import Technology from './components/Technology/Technology';
import UserShow from './components/UserShow/UserShow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Landing = () => {
  // React.useEffect(() => {
  //   toast.success('Welcome to the Home Page');
  // }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <UserShow />
      <About />
      <Modes />
      <Technology />
      <Features />
      <Contact />
      <Footer />
      {/* <ToastContainer /> */}
    </>
  )
}

export default Landing