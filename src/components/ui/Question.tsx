import RoundBtn from "./RoundBtn";

interface QuestionProps {
    children: string | JSX.Element;
}

function Question({ children }: QuestionProps) {
    const plusImg = require("../../img/cross.svg").default;
    return (
        <div className="question">
            <h5>{children}</h5>

            <RoundBtn diameter="48px">
                <img src={plusImg} alt="" />
            </RoundBtn>
        </div>
    );
}

export default Question;
