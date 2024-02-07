import '../.././app.css'
import Header from "../.././header/Header.jsx";
import Footer from "../.././footer/Footer.jsx";
import LeftBar from "../.././leftBar/LeftBar.jsx";
import RightBar from "../.././rightBar/RightBar.jsx";

export function ReqO() {
    return (
        <>
            <Header></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 className="center_text">Регистрация OOO</h1>
                    <img src="/услуги/рек ип.PNG" alt="" />
                    <br/>
                    <h1>Открыть ООО: быстро и просто с «Гестион»</h1>
                    <span>
                        Компания «Гестион» предлагает комплекс услуг по регистрации ООО «под ключ». В пакет входит не только сама регистрация, но и консультация по выбору ОКВЭД, консультация по выбору наиболее выгодной формы налогообложения, получение печати, предоставление бесплатного расчетного счета. Услуга предоставляется как онлайн, так и офлайн. Открытие ООО с опытными юристами существенно снизит риски для вашего бизнеса и убережет от расходов в будущем.
                    </span>
                    <br/>
                    <h1 className="center_text">Преимущества регистрации фирмы с юристами</h1>
                    <div id="free_main">
                        <div id="free_card">
                            <img src="/услуги/free1.svg" alt="беслпатно" id="free_img" />
                            <h2 className="center_text">Расчетный счёт бесплатно</h2>
                            <span className="center_text">
                                Открытие расчетного счета для бизнеса бесплатно в банках-партнерах, без выезда в банк
                            </span>
                        </div>
                        <div id="free_card">
                            <img src="/услуги/one2.svg" alt="одно посещение" id="free_img" />
                            <h2 className="center_text">Регистрация в одно посещение</h2>
                            <span className="center_text">Оформление фирмы в одно посещение (доставку документов для регистрации осуществляет курьер). У нас есть офисы в Москве и Санкт-Петербурге.</span>
                        </div>
                        <div id="free_card">
                            <img src="/услуги/browser.svg" alt="планета" id="free_img" />
                            <h2 className="center_text">Либо полностью онлайн</h2>
                            <span className="center_text">
                                Зарегистрируем организацию полностью в электронном виде с помощью электронной подписи учредителя без посещения нотариуса и даже нашего офиса
                            </span>
                        </div>
                        <div id="free_card">
                            <img src="/услуги/badge.svg" alt="палец вверх" id="free_img" />
                            <h2 class="center_text">Сопровождение «под ключ»</h2>
                            <span class="center_text">
                                Полное сопровождение на всех этапах и представление интересов клиента, в том числе у нотариуса и в ИФНС
                            </span>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <button id="sama">В корзину</button>
                </div>
                <RightBar></RightBar>
            </div>
            <Footer></Footer>
        </>
)
}

export default ReqO;