import React from 'react';
import "../styles/global.css"
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Feature from "@/components/Features"
import OurService from '@/components/OurService';
import Team from '@/components/Team';
import Locations from '@/components/Locations';
import Testimonials from '@/components/Testimonials';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';


const index = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Feature/>
    <OurService/>
    <Team/>
    <Locations/>
    <Testimonials/>
    <Banner/>
    <Footer/>
    
    </>
  )
}

export default index