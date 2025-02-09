import React from "react";
import Navbar from "./Navbar";
import home from '../Assests/images/home.jpeg';
import { Link } from "react-router-dom";

function Homepage() {
  return (
    // <div className="bg-gradient-to-br from-background1 via-secondary to-background1 min-h-screen">
    //   <Navbar />
    //   <main className="flex flex-col items-center justify-center h-screen text-center px-4">
    //     <h1 className="text-primary font-bold text-6xl md:text-8xl">Panic</h1>
    //     <p className="text-accent mt-4 text-lg md:text-2xl max-w-md">
    //       Panic is an animation studio rocking the world from Riga, Latvia.
    //     </p>
    //   </main>
    // </div>

    <div>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0  bg-background1 transform -skew-y-0  origin-top-left "></div>
        <div className="absolute bottom-56 left-0 h-80 w-full -skew-y-6   bg-secondary  transform"></div>

        {/* <div className="absolute inset-0 h-1/3 bg-secondary transform -skew-y-12  translate-y-36  origin-top-left"></div> */}
        {/* <div className="absolute inset-0 bg-background1 transform -skew-y-12  origin-top-left "></div> */}

        {/* Content */}
        <Navbar />
        <main className="flex relative  -skew-y-6  items-center justify-evenly">
          <div className=" flex flex-col items-center justify-center h-screen  text-center px-4">
            <h1 className="text-background1 font-extrabold text-6xl font-cursive"> Discover Your Perfect Look</h1>
            <p className="text-white mt-4 text-lg  max-w-md">
              Let our smart algorithm recommend eyeglasses, outfits, and color combinations
              tailored to your face shape and skin tone. Style made simple, just for you!
            </p>
            {/* /* <!-- CTA Button --> */}
            <Link to="/userdetails" className="bg-black hover:bg-background2 text-white font-semibold mt-8 py-3 px-8 rounded-full shadow-lg transition-all">
              Get Started
            </Link>


          
      </div>

      {/* image in homepage */}
      <div>
        <img src=" "
          alt="homePageImage"
          className="text-white h-64 w-80 bg-black"
        />
      </div>
    </main >
      </div >
    
    </div >




  );
}

export default Homepage;
