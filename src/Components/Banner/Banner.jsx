import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="relative min-h-[70vh] bg-accent">
      {/* <div className="absolute inset-0 bg-black/60 "></div> */}
      <div className=" w-11/12 mx-auto  flex lg: justify-between lg:items-center lg:flex-row md:flex-row md:items-center  flex-col-reverse   rounded-md p-6  ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="space-y-3 z-10"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="lg:text-7xl text-4xl text-white font-extrabold"
          >
            Discover the World with Us
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-white font-semibold"
          >
            Whether you're chasing mountain peaks or tranquil beaches <br /> we
            help you travel deeper, safer, and smarter..
          </motion.p>
          <Link to={"/allPackage"}>
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
            >
              Explore All Packages
            </motion.button>
          </Link>
        </motion.div>
        <motion.div 
        initial={{opacity:0,x:-200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6, ease:"easeIn"}}
        viewport={{amount:3}}
        >
          <img
            
            src="https://i.ibb.co.com/zTG78Dws/Tour-Hero-Img.webp"
            alt="Banner"
         
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
