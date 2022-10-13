import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../assets/images/SanLazzaroBlack.svg";
import WhiteLogo from "../../assets/images/SanLazzaroWhite.svg";
import CloseIcon from "@material-ui/icons/Close";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
    const headerRef = useRef(null);
    const headerList = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    window.addEventListener("scroll", () => {
        const scrollHeight = window.pageYOffset;
        if (scrollHeight > 120) {
            headerRef.current.className="header header--fixed";
            setIsHeaderFixed(true);
        } else {
            headerRef.current.className="header";
            setIsHeaderFixed(false);
        }
    });

    const sideMenuHandler = () => {
        if (isMenuOpen) {
            headerList.current.classList.remove("header__list--open");
        } else {
            headerList.current.classList.add("header__list--open");
        }
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header" ref={headerRef}>
            <div className="container container--header">
                <div className="header-container">
                    <div className="header__logo-container">
                        <a href="#">
                            <img
                                src={isHeaderFixed ? Logo : WhiteLogo}
                                alt="Logo"
                                className="header__logo"
                            />
                        </a>
                    </div>

                    <div className="header__right">
                        <div className="header__list" ref={headerList}>
                            <div className="header__buttons">
                            </div>                            
                            <a href="" >
                                <Link to="#venir-manger" className="header__list-item">
                                Venir manger
                                    </Link> 
                            </a>
                            <a href="">
                                <Link to="#tablereservation" className="header__list-item"> Réserver une table </Link>
                            </a>

                            <a href="" >
                                <Link to="#Italianfoods" className="header__list-item">
                                Notre carte
                                    </Link> 
                            </a>
                        </div>
                        <div>
                            <IconButton className="header__main-btn">
                                <ShoppingBasketIcon className="header__icon" />
                            </IconButton>
                            <IconButton
                                className="header__main-btn header__menu-btn"
                                onClick={sideMenuHandler}
                            >
                                {isMenuOpen ? (
                                    <CloseIcon className="header__icon header__menu-icon" />
                                ) : (
                                    <MenuIcon className="header__icon header__menu-icon" />
                                )}
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
