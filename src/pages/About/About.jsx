import React from 'react';
import cart1 from "../../images/msg.jpg"
const About = () => {
    return (
        <section className={"about"}>
           <div className="container">
               <div className="about__row">
                   <div className="about__me">
                       <h2 className="about__title">
                           Основная информатция
                       </h2>
                       <p className="about__texts">
                           Токтогулова Чинара, 17лет
                       </p>
                       <p className="about__texts">
                           Проживаю в городе Бишкек
                       </p>
                       <p className="about__texts">
                           Образование - среднее
                       </p>
                   </div>
                   <div className="about__skills">
                       <h2 className="about__title">
                           Мои ключевые навыки:
                       </h2>
                       <ul className="about__list">
                           <li className="about__list-item">
                               HTML5
                           </li>
                           <li className="about__list-item">
                               CSS, Scss, Sass, Less
                           </li>
                           <li className="about__list-item">
                               JavaScript
                           </li>
                           <li className="about__list-item">
                               ReactJS, Redux
                           </li>
                           <li className="about__list-item">
                               Git, GitHUB
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
            <section className="study">
                <div className="container">
                    <div className="about__row">
                        <h2 className="about__title">
                            Курсы:
                        </h2>
                        <p className="about__text">
                            Закончила 7 месячные курсы "Frontend-development" в It-run
                        </p>
                        <img src={cart1} alt="#" width={"700"} height={"500"}/>
                    </div>
                    </div>
            </section>
        </section>
    );
};

export default About;