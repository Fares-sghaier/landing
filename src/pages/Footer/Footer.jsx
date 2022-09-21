import styles from "../../style";

import { footerLinks, socialMedia } from "../../constants";
import { NavLink, Route, Routes } from "react-router-dom";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h1 className="text-white">E-Tafakna</h1>
        <p className={`${styles.paragraph} mt-4 max-w-[312px] text-white`}>
          A new way to make your contract easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Check
          </h4>
          <ul className="list-none mt-4 text-white">
            <NavLink to="/term">
              {" "}
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-gray-400 cursor-pointer `}
                onClick={ window.scrollTo(0, 0)}
              >
                Terms and Conditions
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 E-Tafakna. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 ">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
