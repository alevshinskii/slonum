import RoundBtn from "./RoundBtn";

function Footer() {
    const vk = require("../img/footer-vk.svg").default;
    const tg = require("../img/footer-tg.svg").default;
    const ya = require("../img/footer-ya.svg").default;

    const arrow = require("../img/arrow.svg").default;

    return (
        <div className="footer">
            <div className="container">
                <div className="footer-socials">
                    <h5>Наши соцсети:</h5>
                    <div>
                        <img src={tg} alt="" />
                        <img src={ya} alt="" />
                        <img src={vk} alt="" />
                    </div>
                </div>
                <div className="footer-main">
                    <div className="footer-nav">
                        <ul>
                            <li>Главная</li>
                            <li>Личный кабинет</li>
                            <li>Контакты</li>
                            <li>Конфиденциальность</li>
                        </ul>
                    </div>
                    <div className="footer-rights">
                        @ Все права защищены. ООО”Слонум” 2022
                    </div>
                </div>
                <div
                    className="footer-arrow "
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        })
                    }
                >
                    <RoundBtn diameter="56px">
                        <img src={arrow} alt="" />
                    </RoundBtn>
                </div>
            </div>
        </div>
    );
}

export default Footer;
