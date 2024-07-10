import React from 'react';
import FooterLogo from "../assets/Smile-Loft-logo 1.png";
import Social from "../assets/Social Media 1.jpg";
import Image from 'next/image';

const FooterSection = ({ title, items }) => (
  <div className='mt-20 lg:mt-0 flex flex-col items-start'>
    <p className='text-xl font-bold'>{title}</p>
    <div className='text-[18px] my-2 flex flex-col'>
      {items.map((item, index) => (
        <p className="mt-4" key={index}>{item}</p>
      ))}
      {title === "Quick Links" &&
      <div className='mt-6' >
        <p className='text-xl font-bold ' >Connect with us</p>
        {/* <Image src={Social} alt='social-icons' /> */}
      </div>
      
      }
    </div>
  </div>
);

const Footer = () => {
  const locations = ["Affinity Dental", "Glen Burnie", "Landover", "Laurel", "North Potomac", "Shady Grove", "Towne Centre"];
  const doctors = ["Dr. Vaibhav Rai, DDS", "Dr. Laxmi Reddy, DDS", "Dr. Yasmin Akhlagi, DDS", "Dr. Kathee Douglas, DMD", "Dr. Ariana Frank, DMD", "Dr. Trushen Patel, DMD", "Dr. Wachiraya Poonnak, DDS", "Dr. Jeremy Way, DDS", "Dr. Li-Yin Chiang, DDS"];
  const links = ["Home", "About us", "Services", "Contact us", "Blogs"];

  return (
    <>
    <div className='md:py-20 md:px-24 px-12 py-16 bg-primary flex flex-col lg:flex-row justify-between text-white'>
      <div>
        <Image src={FooterLogo} alt='footer-logo' />
      </div>
      <div className='flex flex-1 flex-col lg:flex-row justify-around md:ml-10 xl:mr-20'>
        <FooterSection title="Our Locations" items={locations} />
        <FooterSection title="Meet All Doctors" items={doctors} />
        <FooterSection title="Quick Links" items={links} />
      </div>

    </div>
    <div className='md:py-20 md:px-24 px-12 py-4 bg-primary text-white' >&copy; 2024 Smile Loft Dental LLC</div>
    </>
  );
}

export default Footer;
