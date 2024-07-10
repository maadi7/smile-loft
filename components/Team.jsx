import React from 'react';
import Image from 'next/image';
import founder1 from "@/assets/team/business-man-suit-white-transparent-background_457222-20077 1.jpg";
import founder2 from "@/assets/team/amazing-cheerful-business-woman-standing-with-arms-crossed 1.jpg";
import doctor1 from "@/assets/team/Layer 0 4.jpg";
import doctor2 from "@/assets/team/Layer 2 4.jpg";

const Team = () => {
  return (
    <div className='md:py-32 md:px-24 px-12 py-16 w-full  bg-[#F5F5F5]'>
        <div className='flex flex-wrap mb-20' >
            <div className='flex flex-col  mt-2' >
                <p className='xs:text-5xl text-4xl font-bold' >Meet Our Team</p>
                <p className='xs:text-[22px] text-xl lg:max-w-xs mt-5  lg:mt-10 font-semibold' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <button className='bg-primary text-white max-w-[200px] max-h-[48px] mb-10 px-4 py-2 mt-5 rounded-lg font-bold' >Meet All Teams</button>
            </div>
            <div className='flex flex-col md:flex-row lg:ml-24  justify-around items-center flex-1' >
                <div className='flex flex-col items-center lg:text-xl text-base' >
                <Image className='bg-secondary rounded-lg' src={founder1} alt='founder1' width={400} height={100} />
                <p className='text-primary font-bold mt-2 mb-1 ' >Dr. Vaibhav Rai, DDS</p>
                <p className='text-primary ' > Board Certified Dental Surgeon</p>
                </div>
                <div className='flex flex-col items-center  lg:text-xl text-base' >
                <Image className='bg-secondary ml-5 rounded-lg' src={founder2} alt='founder2'  width={400} height={100} />
                <p className='text-primary font-bold mt-2 mb-1' >Laxmi Reddy, DDS</p>
                <p className='text-primary' >Board Certified Dental Surgeon</p>
                </div>
            </div>
            <div>
            </div>
        </div>
        {/* <div className='flex mt-20' >
            <div className='flex flex-col  mt-2' >
                <p className='text-5xl font-bold' >Meet Our Doctors</p>
                <p className='text-[22px] max-w-xs mt-10 font-semibold' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <button className='bg-primary text-white max-w-[200px] max-h-[48px]  px-4 py-2 mt-5 rounded-lg font-bold' >Meet All Doctors</button>
            </div>
            <div className='flex ml-10 justify-around items-center flex-1' >
                <div className='flex flex-col items-center text-xl' >
                <Image className=' rounded-lg' src={doctor1} alt='founder1' width={400} height={80} />
                <p className='text-primary font-bold mt-2 mb-1' >Dr. Kathee Douglas, DMD</p>
                <p className='text-primary' >General & Cosmetic Dentist</p>
                </div>
                <div className='flex flex-col items-center text-xl' >
                <Image className='ml-5 rounded-lg' src={doctor2} alt='founder2'  width={380} height={10} />
                <p className='text-primary font-bold mt-2 mb-1' >Laxmi Reddy, DDS</p>
                <p className='text-primary' >Board Certified Dental Surgeon</p>
                </div>
            </div>
            <div>
            </div>
        </div> */}
        <div className='flex flex-wrap mt-20' >
            <div className='flex flex-col  mt-2' >
                <p className='xs:text-5xl text-4xl font-bold' >Meet Our Doctors</p>
                <p className='xs:text-[22px] text-xl lg:max-w-xs mt-5  lg:mt-10 font-semibold' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <button className='bg-primary text-white max-w-[200px] max-h-[48px] mb-10 px-4 py-2 mt-5 rounded-lg font-bold' >Meet All Teams</button>
            </div>
            <div className='flex flex-col md:flex-row lg:ml-24  justify-around items-center flex-1' >
                <div className='flex flex-col items-center lg:text-xl text-base' >
                <Image className='bg-secondary rounded-lg' src={doctor1} alt='founder1' width={400} height={100} />
                <p className='text-primary font-bold mt-2 mb-1 ' >Dr. Vaibhav Rai, DDS</p>
                <p className='text-primary' > Board Certified Dental Surgeon</p>
                </div>
                <div className='flex flex-col items-center lg:text-xl text-base' >
                <Image className='bg-secondary ml-5 rounded-lg' src={doctor2} alt='founder2'  width={400} height={100} />
                <p className='text-primary font-bold mt-2 mb-1' >Laxmi Reddy, DDS</p>
                <p className='text-primary' >Board Certified Dental Surgeon</p>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default Team