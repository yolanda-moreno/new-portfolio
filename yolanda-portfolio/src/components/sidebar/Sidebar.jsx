import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
    return (
        <>
            <aside className='aside'>
                <a href="#home" className="nav__logo">
                    <img src={Logo} alt="" />
                </a>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className='nav__link'>
                                    <i className="fa fa-home"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className='nav__link'>
                                    <i className="fa fa-user"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className='nav__link'>
                                    <i className="fa fa-heart"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#resume" className='nav__link'>
                                    <i className="fa fa-graduation-cap"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className='nav__link'>
                                    <i className="fa fa-link"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#blog" className='nav__link'>
                                    <i className="fa fa-code"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className='nav__link'>
                                    <i className="fa fa-comment"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">
                        &copy; 2023 - 2024.
                    </span>
                </div>
            </aside>
            <div className="nav__toggle">
                <i className="icon-menu"></i>
            </div>
        </>
    )
}

export default Sidebar