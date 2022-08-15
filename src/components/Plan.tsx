import { useRef } from "react";
import RoundBtn from "./RoundBtn";
import useIntersection from "./useIntersection";

function Plan() {
    const plane = require("../img/single-plane.svg").default;

    const planeref = useRef(null);
    const inViewport = useIntersection(planeref, "0px"); // Trigger as soon as the element becomes visible
    const planeElement = document.getElementById("plane");
    const text1 = document.getElementById("plan-text1");
    const text2 = document.getElementById("plan-text2");
    const text3 = document.getElementById("plan-text3");
    if (inViewport) {
        planeElement?.classList.add("animation-plan-plane");

        text1?.classList.add("animation-plan-text1");
        text2?.classList.add("animation-plan-text2");
        text3?.classList.add("animation-plan-text3");
    }

    return (
        <div className="plan">
            <div className="plane">
                <img src={plane} alt="" id="plane" />
            </div>
            <div className="container">
                <div className="block-title">
                    <h2>
                        Пошаговый <span className="text-underlined">план</span>
                    </h2>
                </div>
                <div className="plan-content">
                    <img src={require("../img/plan-line.svg").default} alt="" />

                    <div className="plan-chapter chapter-1" ref={planeref}>
                        <RoundBtn diameter={"80px"}>1</RoundBtn>
                        <div id="plan-text1">
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
                        <div id="plan-text2">
                            Выполните все
                            <br />
                            условия конкурса
                        </div>
                    </div>
                    <div className="plan-chapter chapter-3">
                        <RoundBtn diameter={"80px"}>3</RoundBtn>
                        <div id="plan-text3">
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
