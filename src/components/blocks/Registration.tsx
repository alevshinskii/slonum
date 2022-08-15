import CheckBox from "../ui/CheckBox";
import SubmitButton from "../ui/SubmitButton";
import SubmitButtonType from "../ui/SubmitButtonType";
import TextInput from "../ui/TextInput";
import PriceFormImg from "../ui/PriceFormImg";
import { useRef } from "react";
import useIntersection from "../../scripts/useIntersection";

function Registration() {
    const okImg = require("../../img/socials-ok.svg").default;
    const vkImg = require("../../img/socials-vk.svg").default;

    const plane1 = require("../../img/registration-plane1.svg").default;
    const plane2 = require("../../img/registration-plane2.svg").default;
    const singlePlane = require("../../img/registration-plane.svg").default;

    const planeref = useRef(null);
    const inViewport = useIntersection(planeref, "100px"); // Trigger as soon as the element becomes visible
    const singlePlaneElement = document.getElementById("reg-plane");
    const plane1Element = document.getElementById("reg-plane1");
    const plane2Element = document.getElementById("reg-plane2");
    if (inViewport) {
        singlePlaneElement?.classList.add("animation-reg-single-plane");
        plane1Element?.classList.add("animation-reg-plane-1");
        plane2Element?.classList.add("animation-reg-plane-2");
    }

    return (
        <div className="registration">
            <div className="container">
                <div className="registration-price">
                    <div className="registration-price-container">
                        <PriceFormImg />
                        <div className="registration-price-text">
                            <div className="registration-price-title">
                                <h4>Скидка за репост</h4>
                            </div>
                            <div className="registration-price-content">
                                <label>Стоимость участия:</label>
                                <div className="registration-price-price">
                                    <h3>149₽</h3>
                                    <h5>
                                        {""}299₽{""}
                                    </h5>
                                </div>
                                <label>При наличии репоста в соцсетях :)</label>
                            </div>

                            <div className="registration-price-socials">
                                <h4>Получить скидку:</h4>
                                <a href="/">
                                    <img
                                        src={vkImg}
                                        alt=""
                                        style={{
                                            width: "35px",
                                            height: "auto",
                                        }}
                                    />
                                </a>
                                <a href="/">
                                    <img
                                        src={okImg}
                                        alt=""
                                        style={{
                                            width: "35px",
                                            height: "auto",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="registration-form">
                    <div className="plane-1" ref={planeref} id="reg-plane1">
                        <img src={plane1} alt="" />
                    </div>
                    <div className="plane-2" id="reg-plane2">
                        <img src={plane2} alt="" />
                    </div>
                    <div className="single-plane" id="reg-plane">
                        <img src={singlePlane} alt="" />
                    </div>
                    <h2>Зарегистрируйтесь, чтобы участвовать</h2>
                    <TextInput placeholder="ФИО ребёнка"></TextInput>
                    <TextInput placeholder="Дата рождения"></TextInput>
                    <TextInput placeholder="Город"></TextInput>
                    <TextInput placeholder="Email"></TextInput>
                    <TextInput placeholder="Пароль" type="password"></TextInput>
                    <CheckBox checked={true}>
                        <div>
                            Отправляя данные я соглашаюсь с{" "}
                            <a href="/" className="link color-main fw-bold">
                                Условиями конкурса
                            </a>{" "}
                            и{" "}
                            <a href="/" className="link color-main fw-bold">
                                Политикой обработки данных
                            </a>
                        </div>
                    </CheckBox>
                    <SubmitButton type={SubmitButtonType.secondary}>
                        Участвовать
                    </SubmitButton>
                </form>
            </div>
        </div>
    );
}

export default Registration;
