function Diplom() {
    return (
        <div className="diplom">
            <div className="container">
                <div className="block-text">
                    <div className="block-title">
                        <h2>
                            Выдаём{" "}
                            <span className="text-underlined">дипломы</span>{" "}
                            участникам
                        </h2>
                    </div>
                    <div>
                        <p>
                            Жюри конкурса рассмотрит работы и выделит
                            победителей по городам и возрастным категориям, а
                            также определит другие номинации, подчеркнув
                            уникальную особенность каждого конкретного рисунка —
                            дипломы получат все дети!
                        </p>
                        <p>
                            Скачать диплом можно будет в личном кабинете через
                            сутки после окончания конкурса, дополнительно вышлем
                            его на e-mail.
                        </p>
                        <p>Со слоном к победам напролом!</p>
                    </div>
                </div>
                <div className="block-img">
                    <img src={require("../img/diplom.png")} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Diplom;
