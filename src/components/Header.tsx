import Logo from "./Logo";
import LogInButton from "./LogInButton";
import HeaderBackgroundImage from "./HeaderBackgroundImage";
import SubmitButton from "./SubmitButton";
import Counter from "./Counter";
import SubmitButtonType from "./SubmitButtonType";

function Header() {
    return (
        <div className="header">
            <HeaderBackgroundImage />
            <div className="nav container">
                <div className="nav-left">
                    <Logo />
                    <div className="brand">
                        <span className="first-part">Слон</span>
                        <span className="second-part">УМ</span>
                    </div>
                </div>
                <div className="nav-right">
                    <LogInButton />
                </div>
            </div>
            <div className="header-content container">
                <label>От компании СлонУМ</label>
                <h1>Всероссийский конкурс Детского рисунка</h1>
                <p>
                    Участвуйте в конкурсе и получайте призы в различных
                    номинациях детского рисунка для всех возрастов
                </p>
                <div className="btn-and-counter">
                    <SubmitButton type={SubmitButtonType.primary}>
                        <div>Участвовать</div>
                    </SubmitButton>
                    <Counter />
                </div>
            </div>
        </div>
    );
}

export default Header;
