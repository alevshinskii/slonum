import CheckBox from "../ui/CheckBox";
import SubmitButton from "../ui/SubmitButton";
import SubmitButtonType from "../ui/SubmitButtonType";
import TextInput from "../ui/TextInput";

function Subscribe() {
    const background = require("../../img/subscribe-bg.png");
    return (
        <div className="subscribe">
            <div className="container">
                <div className="subscribe-bg">
                    <img src={background} alt="" />
                </div>
                <div className="subscribe-content">
                    <h4>Подпишись на нашу рассылку</h4>
                    <p>
                        Обещаем присылать только самое важное
                        <br />и интересное <span className="fw-bold">:)</span>
                    </p>
                    <form action="post">
                        <div className="subscribe-input">
                            <TextInput placeholder="Email"></TextInput>
                            <CheckBox checked={true}>
                                <div>
                                    Отправляя данные я соглашаюсь с{" "}
                                    <a
                                        href="/"
                                        className="link color-extra fw-bold"
                                    >
                                        Условиями конкурса
                                    </a>{" "}
                                    и{" "}
                                    <a
                                        href="/"
                                        className="link color-extra fw-bold"
                                    >
                                        Политикой обработки данных
                                    </a>
                                </div>
                            </CheckBox>
                        </div>
                        <SubmitButton type={SubmitButtonType.primary}>
                            Отправить
                        </SubmitButton>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
