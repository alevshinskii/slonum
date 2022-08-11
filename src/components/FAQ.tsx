import Question from "./Question";

function FAQ() {
    return (
        <div className="faq">
            <div className="container">
                <h2 className="block-title">Вопрос/Ответ</h2>
                <Question>Может ли ребёнок заниматься самостоятельно?</Question>
                <Question>Как происходит оплата?</Question>
                <Question>Есть ли гарантии усвоения материала?</Question>
                <Question>С кем будет общаться мой ребёнок?</Question>
                <Question>Каковы принципы обучения?</Question>
                <Question>Сколько раз в неделю можно заниматься?</Question>
            </div>
        </div>
    );
}

export default FAQ;
