import React from "react";
import TeamData from "../Data/TeamData";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
const Teams = () => {
  return (
    <>
      <Helmet>
        <title>Our Team</title>
        <meta
          name="description"
          content="Learn about [NAVATA TECH], your trusted partner for web development, app development, graphic design, digital marketing, and SEO optimization services. Elevate your digital experiences for success with our innovative solutions."
        />
        <meta
          name="keywords"
          content="web development, app development, graphic design, digital marketing, SEO optimization, innovative solutions, digital experiences, [NAVATA TECH], technology company"
        />
      </Helmet>
      <div className="  py-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="container md:py-[80]   mx-auto relative ">
            <h1 className="text-4xl text-center text-primary font-semibold pb-3">
              Our {""}
              <span className="text-secondary hover-border-b">
                Creative Team
              </span>
            </h1>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
              <div className="w-[200px]   h-1 bg-sec"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-10 text-center mt-12">
            {TeamData.map((a, id) => {
              return (
                <>
                  <div key={a.id}>
                    <img
                      src={a.img}
                      className="w-36 border  h-36 rounded-full object-contain inline-block"
                    />
                    <div className="py-4">
                      <h4 className="text-base font-extrabold">{a.name}</h4>
                      <p className="text-xs mt-1">{a.role}</p>
                      <div className="space-x-4 mt-4">
                        <button
                          type="button"
                          className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-primary hover:text-white "
                        >
                          <FaFacebook />
                        </button>
                        <button
                          type="button"
                          className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-primary hover:text-white "
                        >
                          <FaInstagram />
                        </button>
                        <button
                          type="button"
                          className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-primary hover:text-white "
                        >
                          <FaLinkedinIn />
                        </button>
                        <button
                          type="button"
                          className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-primary hover:text-white "
                        >
                          <FaWhatsapp />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
