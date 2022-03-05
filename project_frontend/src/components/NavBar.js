import React from "react";
import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";


const style = {
  wrapper: `bg-gray-900 px-[1.2rem] py-[0.8rem] flex justify-between `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center `,
  headerItem: `text-white px-3 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

const NavBar = () => {
  return (
    <div className={style.wrapper}>
      <Link to="/">
      <div className={style.logoContainer}>
        
          <img
            className="h-[2.25rem] rounded-md"
            src="https://ictkerala.org/wp-content/uploads/2019/01/cropped-ict-ico.png"
            height={40}
            width={40}
            alt="NFT Blog Logo"
          />
          <div className={style.logoText}>ICTAK</div>
        
      </div>
      </Link>
      <div className={style.headerItems}>
        <Link to="/" className={style.headerItem}>
          Home
        </Link>
        <Link to="/about-us" className={style.headerItem}>
          About
        </Link>
        <Link to="/courses" className={style.headerItem}>
          Courses
          {console.log('/course')}
        </Link>
        <Link to="/services" className={style.headerItem}>
          Services
        </Link>
        <Link to="/partnership" className={style.headerItem}>
          Partnership
        </Link>
        <Link to="/membership" className={style.headerItem}>
          Membership
        </Link>
        <Link to="/events" className={style.headerItem}>
          Events
        </Link>
        <a href="https://retail.ictkerala.org" target="_blank" className={style.headerItem} rel="noreferrer">
          Paatshala
        </a>
        <Link to="/news" className={style.headerItem}>
          News
        </Link>
        <a href="https://ictkerala.zohorecruit.com/jobs/Careers" target="_blank" className={style.headerItem} rel="noreferrer">
          Careers
        </a>
        <Link to="/Login" className={style.headerItem}>
          Login
        </Link>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
