import UnderlinedText from "./UnderlinedText";

function Goals() {
    return (
        <div className="goals">
            <div className="goals-title">
                <h2>
                    Для чего <UnderlinedText>нужно</UnderlinedText> участвовать
                </h2>
            </div>
            <div className="goals-content container">
                <div className="card">
                    <img src={require("../img/star.svg").default} alt="" />
                    Шанс занять 1 место — в вашем городе и по всей России
                </div>
                <div className="card">
                    <img src={require("../img/winne.svg").default} alt="" />
                    Развитие самостоятельности + свободное время для родителей
                    ;)
                </div>
                <div className="card">
                    <img
                        src={require("../img/certification.svg").default}
                        alt=""
                    />
                    Персональный диплом в разных номинациях каждому участнику
                </div>
                <div className="card">
                    <img src={require("../img/gift.svg").default} alt="" />
                    Призы и скидки для подписчиков и авторизованных
                    пользователей
                </div>
                <div className="card">
                    <img src={require("../img/email.svg").default} alt="" />
                    Бесплатный диплом на email — через 1 день после конкурса
                </div>
                <div className="card">
                    <img src={require("../img/vk.svg").default} alt="" />
                    <div>
                        Публикация работ победителей во ВКонтакте.{" "}
                        <a href="/#" className="color-main-accent-light link">
                            Подписывайтесь!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Goals;
