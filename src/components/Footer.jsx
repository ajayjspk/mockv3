import React from "react";
import './Footer.css'
import logo from '../images/Group 33524.svg';
import Facebook from '../images/Facebook-1 1.svg';
import Instagram from '../images/Instagram 1 1.svg';
import Youtube from "../images/Youtube-1 1.svg";
import LinkedIn from "../images/Instagram 1 1.svg";
import Quora from "../images/Quora-1 1.svg";
import Twitter from '../images/Twitter-1 1.svg'

function Footer() {
    return (
        <div className="footer">

            <div className="fotter-main-menu">
                <div className="icons">
                    <img className="brand" src={logo} alt="" />
                    <div className="social-media-icons">
                        <a><img src={Youtube}/></a>
                        <a><img src={LinkedIn}/></a>
                        <a><img src={Facebook}/></a>
                        <a><img src={Twitter}/></a>
                        <a><img src={Instagram}/></a>
                        <a><img src={Quora}/></a>
                    </div>
                </div>
                <ul><h4>Solutions</h4>
                    <li><a href="#">Career Paths</a></li>
                    <li><a href="#"> parameters test</a></li>
                    <li><a href="#">Mocx</a></li>
                    <li><a href="#">Resume Builder</a></li>
                    <li><a href="#">Certifications</a></li>
                    <li><a href="#">Startup support</a></li>
                </ul>
                <ul><h4>Explore</h4>
                    <li><a href="#">Front end development</a></li>
                    <li><a href="#">Backend development</a></li>
                    <li><a href="#">Full stack</a></li>
                    <li><a href="#">DSA</a></li>
                    <li><a href="#">AI & ML</a></li>
                </ul>
                <ul><h4>Company</h4>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Join discard</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cockie Policy</a></li>
                </ul>

               
            </div>
            <hr className="footer-hr-line" />
            {/* <div className="horizontal-line"></div> */}

            <div className="footer-final">
                <p className="final"><a href="" >Tutorials</a></p>
                <div className="divide"></div>
                <p className="final"><a href="">Blog’s</a></p>
                <div className="divide"></div>
                <p className="final"><a href="">Articles</a></p>
                <div className="divide"></div>
                <p className="final"><a href="">Videos</a></p>
            </div>
            <div className="footer-copyright">
                <p className="copy-right">Copyright@2023, scimics</p>
            </div>
        </div>
    )
};

export default Footer;