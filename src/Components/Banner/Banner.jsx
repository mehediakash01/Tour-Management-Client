import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className=" my-12  ">
      <div className="flex lg: justify-around lg:items-center lg:flex-row md:flex-row md:items-center  flex-col-reverse  bg-accent rounded-md p-6 ">
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
          className="space-y-3"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl text-white font-extrabold"
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
        <div>
          <motion.img
            className="w-[550px]"
            src="https://i.ibb.co/V0vLjkZv/flyBan.png"
            alt="Banner"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
