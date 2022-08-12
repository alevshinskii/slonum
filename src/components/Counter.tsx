import { useState } from "react";
import CounterInput from "./CounterInput";

function Counter() {
    const dotsSvg = require("../img/dots.svg").default;

    const [hours] = useState("01");
    const [minutes] = useState("09");
    const [seconds] = useState("43");

    return (
        <div className="counter">
            <div>
                <CounterInput value={hours} />
                <h4>дней</h4>
            </div>
            <div className="dots animation-timer">
                <img src={dotsSvg} alt="" />
            </div>
            <div>
                <CounterInput value={minutes} />
                <h4>часов</h4>
                <label className="msk">по МСК</label>
            </div>
            <div className="dots animation-timer">
                <img src={dotsSvg} alt="" />
            </div>
            <div>
                <CounterInput value={seconds} />
                <h4>минут</h4>
            </div>
        </div>
    );
}

export default Counter;
