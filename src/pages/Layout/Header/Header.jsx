import React from 'react';
import { IoIosCall } from "react-icons/io";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className={"header"}>
            <div className="container">
                <div className="header__nav">
                    <ul className="header__menu">
                        <Link to={"/about"}>
                            <li className="header__menu-item">
                                Обо мне
                            </li>
                        </Link>
                        <Link to={"/Projects"}>
                            <li className="header__menu-item">
                                Мои проекты
                            </li>
                        </Link>
                        <Link to={"/contacts"}>
                        <li className="header__menu-item">
                            <div className="header__contacts">

                                    <div className="header__call">
                                        <IoIosCall />
                                    </div>
                                    <div className="header__contact">
                                        Контакты
                                    </div>
                            </div>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;