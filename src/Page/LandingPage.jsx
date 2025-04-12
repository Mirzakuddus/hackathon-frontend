import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaAddressCard, FaCalculator, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, y: 50 },
      {
        scrollTrigger: featuresRef.current,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">

      <div className="absolute inset-0 bg-[url('/Image/construction-7194274_1280.png')] bg-cover bg-center opacity-80" />
      <div className="absolute inset-0 bg-black/80 z-0" />


      <section
        ref={heroRef}
        className="relative z-10 flex flex-col items-center justify-center text-center pt-32 pb-20 px-6"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-yellow-400"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          Build Smarter. Estimate Faster.
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          A next-gen construction cost estimator built for modern civil engineers. Optimize your project in minutes.
        </p>

        <div className="mt-8 space-x-4">
          <motion.a href="/login" whileHover={{ scale: 1.1 }}>
            <Link to={"/project-input"}>  <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">New Project</Button></Link>
          </motion.a>
          <motion.a href="/signup" whileHover={{ scale: 1.1 }}>
            <Link to={"/loginpage"} ><Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
              Create Account
            </Button></Link>
          </motion.a>
        </div>
      </section>


      <div
        onClick={() => navigate('/dashboard')}
        className="fixed top-6 right-6 z-50 w-16 h-16 rounded-full bg-cover bg-center cursor-pointer border-2 border-white shadow-lg"
        style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=14')` }}
        title="Go to Dashboard"
      />


      <section
        ref={featuresRef}
        className="relative z-10 px-6 py-20 max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaCalculator className="w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Estimation</h3>
            <p className="text-gray-400">AI-based cost calculations that save time and money.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaTools className="w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cost Optimization</h3>
            <p className="text-gray-400">Get alternative suggestions and material efficiency tips.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaAddressCard className="w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
            <p className="text-gray-400">Export your data with breakdowns in just one click.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;