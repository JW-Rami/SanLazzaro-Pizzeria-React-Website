import React from "react";
import "./Footer.css";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import WhiteLogo from "../../assets/images/SanLazzaroWhite.svg";

function Footer() {
  return (
    <footer className="footer">
      {/* <img className="logo-footer" src={WhiteLogo} alt="" /> */}
      <div className="container footer-container">
        <div className="footer__links">Notre emplacement:</div>
        <div className="horaire-et-maps" id="venir-manger">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d655.7271556241211!2d2.1133862999999997!3d48.8980786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e662888ceca6eb%3A0x64b601a697f1ae6a!2sSan%20Lazzaro%20Veneziano.!5e0!3m2!1sfr!2sfr!4v1664760334118!5m2!1sfr!2sfr"
            className="googlemap"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div>
            124bd Carnot
            <br /> <br />
            Le Vésinet 78110
            <br /> <br />
            Tél: <a href="tel:0139764525"> 01 39 76 45 25</a>.
          </div>
          <div className="horaires">
            <div>
              <ul className="jour">
                <li>Lundi</li>
                <li>Mardi</li>
                <li>Mercredi</li>
                <li>Jeudi</li>
                <li>Vendredi</li>
                <li>Samedi</li>
                <li>Dimanche</li>
              </ul>
            </div>
            <div>
              <ul className="heure">
                <li>12:00-14:30</li>
                <li>12:00-14:30 & 18:30-22:30</li>
                <li>12:00-14:30 & 18:30-22:30</li>
                <li>12:00-14:30 & 18:30-22:30</li>
                <li>12:00-14:30 & 18:30-22:30</li>
                <li>12:00-14:30 & 18:30-22:30</li>
                <li>Fermé</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__texts">
          <p className="footer__text footer__text--light">
            Venez dégustez nos plats directement au Vésinet, cliquez sur
            "Itinéraires" pour connaître le meilleur chemin pour venir chez San
            Lazzaro Veneziano
          </p>
        </div>
        <div className="footer__info">
          <div>
            <span>Developped by</span>
            <a
              href="https://twitter.com/RamiAbdou_jw"
              className="footer__info-link footer__info-link--dark"
              target="_blank"
            >
              &copy; Rami Abdou
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
