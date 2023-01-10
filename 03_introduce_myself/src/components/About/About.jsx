import React from "react";
import Infor from "./Infor";
import "./about.css";
import ProfileImg from "../../assets/profile.png";
import CV from "../../assets/CV_SoftwareEngineer_NguyenTienTuanAnh.pdf";
const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={ProfileImg} alt="" className="about__img" />
                <div className="about__data">
                    <Infor />
                    <p className="about__description">
                        Frontend developer, I create webpages with UI/UX user
                        interface, I have years of experience and many clients
                        are happy with the projects carried out.
                    </p>

                    <a href={CV} download="" className="button button--flex">
                        Download CV <i className="uil uil-file-download-alt"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
