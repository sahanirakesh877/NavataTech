import React from "react";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Teams from "./Teams";
import ClientReview from "./ClientReview";
import { Link } from "react-router-dom";
import CounterPage from "./CounterPage";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet titleTemplate="NAVATA TECH" />

            <div class="home  overflow-hidden ">
                <div class="content container mx-auto">
                    <h5>
                        Welcome To Our <span className="text-sec">NAVATA</span>{" "}
                        TECH
                    </h5>
                    <h1>
                        Innovations <span class="changecontent"></span>
                    </h1>
                    <p className="text-white text-[15px] font-light mt-[5px] mb-[30px] ">
                        Empower your business with advanced technology solutions
                        designed for success.
                    </p>
                    <Link to="/inquiry">
                        <button className="rounded-full bg-primary btn py-2 px-10 text-white hover:bg-yellow-600">
                            Get Inquiry
                        </button>
                    </Link>
                </div>
            </div>
            <Services />
            <CounterPage />
            <About />
            <Teams />
            <Contact />
            <ClientReview />
        </>
    );
};

export default Home;
