import React from "react";
import serviceData from "../Data/ServicesData";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services</title>
            </Helmet>
            <div className="container md:py-[80]  pt-10 mx-auto relative overflow-hidden">
                <h1 className="text-4xl text-center text-primary font-semibold pb-3">
                    What We{" "}
                    <span className="text-secondary hover-border-b">Build</span>
                </h1>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
                    <div className="w-[200px]   h-1 bg-sec"></div>
                </div>
            </div>

            <div className="container mx-auto pb-[100px]   pt-10 grid lg:grid-cols-3 sm:grid-cols-1 px-10 gap-10 lg:gap-24 ">
                {serviceData.map((a, id) => {
                    return (
                        <>
                            <div key={a.id}>
                                <Link to={`/services/${a.id}`}>
                                    <div className="group shadow-xl  p-4 text-center hover:bg-primary hover:text-white rounded duration-1000 bg-gray-50">
                                        <i className={a.iconClass} />
                                        <h3 className="text-2xl py-2 text-sec whitespace-nowrap">
                                            {a.title}
                                        </h3>
                                        <p className="text-justify lg:text-center">
                                            {a.description.substring(0, 160)}. .
                                            . .
                                        </p>
                                        <p className="py-3 items-center flex gap-2 justify-center text-primary group hover:text-sec">
                                            {" "}
                                            Read More{" "}
                                            <span>
                                                <FaArrowRight />
                                            </span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Services;
