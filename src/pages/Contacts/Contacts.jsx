import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const Contacts = () => {
    return (
        <div className={"contacts"}>
            <div className="container">
                <div className="contacts__row">
                    <p className="contacts__info">
                        <a href="https://github.com/Chinara06"> <FaGithub /> GitHub: Chinara06 </a>
                    </p>
                    <p className="contacts__info">
                        <a href="https://bishkek.headhunter.kg/resume/9207d7ddff0d0769020039ed1f384f6d39536f"> Headhunter: Токтогулова Чинара </a>
                    </p>
                    <p className="contacts__info">
                        <IoCallOutline /> Номер телефона: +996 0552 44 11 57
                    </p>
                    <div className="contacts__info">
                            <MdOutlineMail />
                            Email: toktogulovacinara8@gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;