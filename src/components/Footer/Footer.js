import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer__links">
                    <a href="#" className="footer__link">
                        About
                    </a>
                    <a href="#" className="footer__link">
                        Services
                    </a>
                    <a href="#" className="footer__link">
                        Support
                    </a>
                    <a href="#" className="footer__link">
                        Gallery
                    </a>
                    <a href="#" className="footer__link">
                        Terms
                    </a>
                    <a href="#" className="footer__link">
                        Locations
                    </a>
                </div>
                        {/* Responsive à faire ici
                        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d655.7271556241211!2d2.1133862999999997!3d48.8980786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e662888ceca6eb%3A0x64b601a697f1ae6a!2sSan%20Lazzaro%20Veneziano.!5e0!3m2!1sfr!2sfr!4v1664760334118!5m2!1sfr!2sfr"
  width={650}
  height={350}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/> */}

                <div className="footer__grid">
                    <div className="footer__grid-item">
                        <h5 className="footer__grid-title">Main Menu</h5>
                        <a href="#" className="footer__grid-link">
                            Pickup
                        </a>
                        <a href="#" className="footer__grid-link">
                            Delivery
                        </a>
                    </div>
                    <div className="footer__grid-item">
                        <h5 className="footer__grid-title">Orders</h5>
                        <a href="#" className="footer__grid-link">
                            Upcoming Orders
                        </a>
                        <a href="#" className="footer__grid-link">
                            Recent Orders
                        </a>
                    </div>
                    <div className="footer__grid-item">
                        <h5 className="footer__grid-title">Profile</h5>
                        <a href="#" className="footer__grid-link">
                            Promos & Credits
                        </a>
                        <a href="#" className="footer__grid-link">
                            Rewards
                        </a>
                    </div>
                    <div className="footer__grid-item">
                        <h5 className="footer__grid-title">Support</h5>
                        <a href="#" className="footer__grid-link">
                            Contact Us
                        </a>
                        <a href="#" className="footer__grid-link">
                            Live Chat
                        </a>
                    </div>
                </div>

                <div className="footer__texts">
                    <p className="footer__text footer__text--light">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                    </p>
                    <p className="footer__text">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                    </p>
                </div>

                <div className="footer__info">
                    <div>
                        <span>Powered by</span>
                        <a
                            href="https://seyedmahdijalali.ir/"
                            className="footer__info-link footer__info-link--dark"
                            target="_blank"
                        >
                            &copy; Seyed Mahdi Jalali
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.instagram.com/seyedmahdii_/"
                            className="footer__info-link"
                            target="_blank"
                        >
                            <InstagramIcon className="footer__icon" />
                        </a>
                        <a
                            href="https://twitter.com/seyedmahdii_"
                            className="footer__info-link"
                            target="_blank"
                        >
                            <TwitterIcon className="footer__icon" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/seyed-mahdi-jalali-730578210/"
                            className="footer__info-link"
                            target="_blank"
                        >
                            <LinkedInIcon className="footer__icon" />
                        </a>
                        <a
                            href="https://github.com/seyedmahdii"
                            className="footer__info-link"
                            target="_blank"
                        >
                            <GitHubIcon className="footer__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
