import React from "react";
import hero from "../../assets/images/hero.png";
import mobile from "../../assets/images/mobile.png";
import { IoHomeOutline } from "react-icons/io5";
import { Ri24HoursFill } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { MdPriceCheck } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../../components/client/Footer";
const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the text is visible
    triggerOnce: true, // Animation triggers only once
  });
  return (
    <>
      {/* hero */}
      <div className="flex flex-col items-center justify-evenly  bg-slate-200 rounded-lg h-[calc(100vh-76px)] ">
        <div className="text-5xl font-thin text-center tracking-tight">
          Welcom To <span className="text-orange-500">E-Shop</span> <br /> Find
          The Best Varitey <br /> On Different Products
        </div>
        <div>
          {" "}
          <img src={hero} alt="" className="w-96" />{" "}
        </div>
      </div>

      {/* category */}
      <h1 className="text-5xl text-center p-2  border-spacing-4 font-thin mb-5">
        Categories
      </h1>
      <div className="flex items-center justify-evenly  w-full flex-wrap gap-4">
        <div className="text-3xl border rounded-lg p-1 tracking-wide font-thin bg-slate-50 w-2/5 h-60  overflow-hidden text-center shadow-lg hover:shadow-sm cursor-pointer">
          <h3 className="font-3xl pb-1">Mobile</h3>
          <img src={mobile} alt="" className="w-full h-full object-contain " />
        </div>

      </div>
      {/* Services */}
      <h1 className="text-5xl text-center p-2  border-spacing-4 font-thin mb-5">
        Services
      </h1>
      <div className="flex items-center justify-evenly flex-wrap w-full gap-2">
        <div className="text-3xl border rounded-lg p-1 tracking-wide font-thin bg-orange-400 w-96   overflow-hidden text-center shadow-lg hover:shadow-sm cursor-pointer ">
          <IoHomeOutline size={34} className="w-full"/>
          <h3 className="text-3xl pb-1 tracking-tight "> Home Delivery </h3>
          <p className="text-lg font-normal text-center tracking-tight text-slate-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sunt optio omnis accusantium quisquam aut sint ab, velit reprehenderit fugiat.</p>
        </div>
        <div className="text-3xl border rounded-lg p-1 tracking-wide font-thin bg-pink-400 text-white w-96   overflow-hidden text-center shadow-lg hover:shadow-sm cursor-pointer ">
          <Ri24HoursFill size={34} className="w-full"/>
          <h3 className="text-3xl pb-1 font-thin tracking-tighter "> 24 Hours Service </h3>
          <p className="text-lg font-normal text-center tracking-tight  text-gray-100 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sunt optio omnis accusantium quisquam aut sint ab, velit reprehenderit fugiat.</p>
        </div>
        <div className="text-3xl border rounded-lg p-1 tracking-wide font-thin bg-sky-400 w-96   overflow-hidden text-center shadow-lg hover:shadow-sm cursor-pointer ">
          <TbTruckReturn  size={34} className="w-full"/>
          <h3 className="text-3xl pb-1 tracking-tight "> Easy Return </h3>
          <p className="text-lg font-normal text-center tracking-tight text-slate-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sunt optio omnis accusantium quisquam aut sint ab, velit reprehenderit fugiat.</p>
        </div>
        <div className="text-3xl border rounded-lg p-1 tracking-wide font-thin bg-green-400 w-96   overflow-hidden text-center shadow-lg hover:shadow-sm cursor-pointer ">
          <MdPriceCheck  size={34} className="w-full"/>
          <h3 className="text-3xl pb-1 tracking-tight "> Best Price </h3>
          <p className="text-lg font-normal text-center tracking-tight text-slate-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sunt optio omnis accusantium quisquam aut sint ab, velit reprehenderit fugiat.</p>
        </div>
      </div>
      {/* About Us */}
      <div className="bg-gray-50 rounded-lg py-3 m-1">
      <h1 className="text-5xl text-center p-1  border-spacing-4 font-thin mb-5 ">
        About Us
      </h1>
      <motion.div
      ref={ref}
      className="text-5xl font-thin text-center tracking-tight"
      initial={{ opacity: 0, y: 50 }} // Start position (invisible and moved down)
      animate={inView ?{ opacity: 1, y: 0 }:{}} // End position (visible and in place)
      transition={{ type: "spring", stiffness: 200 }} // Animation duration and easing
    >
      At <span className="text-orange-500">E-Shop</span>, we bring you quality products at unbeatable prices. 
      Discover convenience, style, and satisfaction in every purchase!
    </motion.div>
        </div>
      {/* Feedback */}
      <h1 className="text-5xl text-center p-2  border-spacing-4 font-thin mb-5">
        FeedBack
      </h1>
      <div className="flex items-center justify-center">
      <div className="text-3xl border rounded-lg p-1 tracking-wide font-thin bg-green-400 w-96   overflow-hidden text-center shadow-lg hover:shadow-sm cursor-pointer ">
          <h3 className="text-3xl pb-1 tracking-tight "> <i>Jon Doe</i> </h3>
          <p className="text-lg font-normal text-center tracking-tight text-slate-700 p-2"><i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sunt optio omnis accusantium quisquam aut sint ab, velit reprehenderit fugiat.</i></p>
        </div>
      </div >
      <br />
      {/* <Footer />       */}
    </>
  );
};

export default Home;
