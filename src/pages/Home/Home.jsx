import React from 'react';
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <div className={"home"}>
            <div className="container">
                <div className="home__row">
                    <div className="home__info">
                        <h2 className="home__title">
                            Здраствуйте,меня зовут Чинара.
                        </h2>
                        <p className="home__text">
                            Я начинающий фронтенд-разработчик с опытом работы с HTML, CSS и JavaScript. У меня также есть опыт работы с фреймворком React.
                        </p>
                    </div>
                    <Link to={"/about"}>
                        <div className="home__more">
                            <div className="home__btn">
                                Больше обо мне
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;