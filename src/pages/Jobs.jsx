import React from "react";
import { Helmet } from "react-helmet";
import navataLogo from "/navata-logo.png";

const Jobs = () => {
  return (
    <>
      <Helmet>
        <title>Jobs</title>
        <meta
          name="description"
          content="Learn about [NAVATA TECH], your trusted partner for web development, app development, graphic design, digital marketing, and SEO optimization services. Elevate your digital experiences for success with our innovative solutions."
        />
        <meta
          name="keywords"
          content="web development, app development, graphic design, digital marketing, SEO optimization, innovative solutions, digital experiences, [NAVATA TECH], technology company"
        />
      </Helmet>
      <div className="text-center text-primary py-12 overflow-hidden">
        <p className="text-4xl  font font-semibold inline-block border-b-2 border-sec">
          Latest Job Vacancy
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12 container mx-auto">
        <div className="flex-1">
          <div className="group bg-gray-200 p-4 lg:p-8">
            <div className="flex items-center gap-x-2">
              <img className="aspect-[2/2] w-16" src={navataLogo} alt="Logo" />
              <div>
                <h3 className="text-xl font-bold text-gray-90">NAVATA TECH</h3>
                <span className="text-xs text-gray-500">
                  Naya Thimi, Bhaktapur
                </span>
              </div>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-medium text-primary">
                UI/UX Designer
              </h3>
              <div className="text-sm font-medium">
                <span className="m-1 ml-0 inline-block text-blue-500">
                  HTML
                </span>
                <span className="m-1 ml-0 inline-block text-yellow-500">
                  CSS
                </span>
                <span className="m-1 ml-0 inline-block text-pink-500">
                  FIGMA
                </span>
                <span className="m-1 ml-0 inline-block text-lime-500">
                  Ad. XD
                </span>
                <span className="m-1 ml-0 inline-block text-blue-500">
                  Illustrator
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                Salary: <span className="text-red-400">Negotiable</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-90">
                Full Time / Part Time
              </span>
              <a
                href="#"
                className="font-medium text-white  bg-primary py-1.5 px-1.5 rounded-full "
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="group bg-gray-200 p-4 lg:p-8">
            <div className="flex items-center gap-x-2">
              <img className="aspect-[2/2] w-16" src={navataLogo} alt="Logo" />
              <div>
                <h3 className="text-xl font-bold text-gray-90">NAVATA TECH</h3>
                <span className="text-xs text-gray-500">
                  Naya Thimi, Bhaktapur
                </span>
              </div>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-medium text-primary">
                MERNSTACK Developer
              </h3>
              <div className="text-sm font-medium">
                <span className="m-1 ml-0 inline-block text-blue-500">
                  HTML
                </span>
                <span className="m-1 ml-0 inline-block text-yellow-500">
                  CSS
                </span>
                <span className="m-1 ml-0 inline-block text-pink-500">
                  JAVASCRIPT
                </span>
                <span className="m-1 ml-0 inline-block text-lime-500">
                  REACTJS
                </span>
                <span className="m-1 ml-0 inline-block text-blue-500">
                  MONGODB
                </span>
                <span className="m-1 ml-0 inline-block text-red-500">
                  EXPRESSJS
                </span>
                <span className="m-1 ml-0 inline-block text-green-500">
                  NODEJS
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                Salary: <span className="text-red-400">Negotiable</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-90">
                Full Time / Part Time
              </span>
              <a
                href="#"
                className="font-medium text-white  bg-primary py-1.5 px-1.5 rounded-full "
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="group bg-gray-200 p-4 lg:p-8">
            <div className="flex items-center gap-x-2">
              <img className="aspect-[2/2] w-16" src={navataLogo} alt="Logo" />
              <div>
                <h3 className="text-xl font-bold text-gray-90">NAVATA TECH</h3>
                <span className="text-xs text-gray-500">
                  Naya Thimi, Bhaktapur
                </span>
              </div>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-medium text-primary">
                DIGITAL MARKETING
              </h3>
              <div className="text-sm font-medium">
                <span className="m-1 ml-0 inline-block text-blue-500">SEO</span>
                <span className="m-1 ml-0 inline-block text-yellow-500">
                  SEM
                </span>
                <span className="m-1 ml-0 inline-block text-pink-500">CRO</span>
                <span className="m-1 ml-0 inline-block text-lime-500">SMM</span>
                <span className="m-1 ml-0 inline-block text-blue-500 capitalize">
                  email marketing
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                Salary: <span className="text-red-400">Negotiable</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-90">
                Full Time / Part Time
              </span>
              <a
                href="#"
                className="font-medium text-white  bg-primary py-1.5 px-1.5 rounded-full "
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="group bg-gray-200 p-4 lg:p-8">
            <div className="flex items-center gap-x-2">
              <img className="aspect-[2/2] w-16" src={navataLogo} alt="Logo" />
              <div>
                <h3 className="text-xl font-bold text-gray-90">NAVATA TECH</h3>
                <span className="text-xs text-gray-500">
                  Naya Thimi, Bhaktapur
                </span>
              </div>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-medium text-primary">
                FLUTTER Developer
              </h3>
              <div className="text-sm font-medium">
                <span className="m-1 ml-0 inline-block text-blue-500">
                  DART
                </span>
                <span className="m-1 ml-0 inline-block text-yellow-500">
                  NoSQL
                </span>
                <span className="m-1 ml-0 inline-block text-pink-500">
                  MobX
                </span>
                <span className="m-1 ml-0 inline-block text-lime-500">
                  Riverpod
                </span>
                <span className="m-1 ml-0 inline-block text-blue-500">
                  RESTful API
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                Salary: <span className="text-red-400">Negotiable</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-90">
                Full Time / Part Time
              </span>
              <a
                href="#"
                className="font-medium text-white  bg-primary py-1.5 px-1.5 rounded-full "
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
