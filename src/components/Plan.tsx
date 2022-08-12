import RoundBtn from "./RoundBtn";

function Plan() {
    return (
        <div className="plan">
            <div className="container">
                <div className="block-title">
                    <h2>
                        Пошаговый <span className="text-underlined">план</span>
                    </h2>
                </div>
                <div className="plan-content">
                    <img src={require("../img/plan-line.svg").default} alt="" />
                    <div className="plan-chapter chapter-1">
                        <RoundBtn diameter={"80px"}>1</RoundBtn>
                        <div>
                            Зарегистрируйтесь
                            <br />
                            на конкурс{" "}
                            <a href="/" className="link color-main">
                                Здесь
                            </a>
                        </div>
                    </div>
                    <div className="plan-chapter chapter-2">
                        <RoundBtn diameter={"80px"}>2</RoundBtn>
                        <div>
                            Выполните все
                            <br />
                            условия конкурса
                        </div>
                    </div>
                    <div className="plan-chapter chapter-3">
                        <RoundBtn diameter={"80px"}>3</RoundBtn>
                        <div>
                            Загрузите рисунок{" "}
                            <a href="/" className="link color-main">
                                Здесь
                            </a>
                            <br /> или в Личном кабинете
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plan;
