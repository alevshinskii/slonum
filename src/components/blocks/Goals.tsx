import Card from "../ui/Card";

function Goals() {
    return (
        <div className="goals">
            <div className="block-title">
                <h2>
                    Для чего <span className="text-underlined">нужно</span>{" "}
                    участвовать
                </h2>
            </div>
            <div className="goals-content container">
                <Card>
                    <div>
                        <img
                            src={require("../../img/star.svg").default}
                            alt=""
                        />
                        <div>
                            Шанс занять 1 место — в вашем городе и по всей
                            России
                        </div>
                    </div>
                </Card>
                <Card>
                    <div>
                        <img
                            src={require("../../img/winne.svg").default}
                            alt=""
                        />
                        <div>
                            Развитие самостоятельности + свободное время для
                            родителей ;)
                        </div>
                    </div>
                </Card>
                <Card>
                    <div>
                        <img
                            src={require("../../img/certification.svg").default}
                            alt=""
                        />
                        <div>
                            Персональный диплом в разных номинациях каждому
                            участнику
                        </div>
                    </div>
                </Card>
                <Card>
                    <div>
                        <img
                            src={require("../../img/gift.svg").default}
                            alt=""
                        />
                        <div>
                            Призы и скидки для подписчиков и авторизованных
                            пользователей
                        </div>
                    </div>
                </Card>
                <Card>
                    <div>
                        <img
                            src={require("../../img/email.svg").default}
                            alt=""
                        />
                        <div>
                            Бесплатный диплом на email — через 1 день после
                            конкурса
                        </div>
                    </div>
                </Card>
                <Card>
                    <div>
                        <img src={require("../../img/vk.svg").default} alt="" />
                        <div>
                            Публикация работ победителей во ВКонтакте.{" "}
                            <a
                                href="/#"
                                className="color-main-accent-light link"
                            >
                                Подписывайтесь!
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Goals;
