import CheckBox from "./CheckBox";
import SubmitButton from "./SubmitButton";
import SubmitButtonType from "./SubmitButtonType";
import TextInput from "./TextInput";
import PriceFormImg from "./PriceFormImg";

function Registration() {
    const priceFormImg = require("../img/price-form.svg").default;
    const okImg = require("../img/socials-ok.svg").default;
    const vkImg = require("../img/socials-vk.svg").default;

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
