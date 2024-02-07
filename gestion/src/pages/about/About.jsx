import '../.././app.css'
import Header from "../.././header/Header.jsx";
import Footer from "../.././footer/Footer.jsx";
import LeftBar from "../.././leftBar/LeftBar.jsx";
import RightBar from "../.././rightBar/RightBar.jsx";

export function About() {
    return (
        <>
            <Header></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 className="center_text">О компании</h1>
                    <div id="about">
                        <div id="card">
                            <img src="/сертификаты и лицензии сотрудников/1.jpg" alt="" id="card_img" />
                                <span>Сертификат о Повышении квалификации. 2020 г. Охрина Д.Б.</span>
                        </div>
                        <div id="card">
                            <img src="/сертификаты и лицензии сотрудников/2.jpg" alt="" id="card_img" />
                                <span>Удостоверение о повышении квалификации. 2021 г. Охрина Д.Б.</span>
                        </div>
                        <div id="card">
                            <img src="/сертификаты и лицензии сотрудников/3.jpg" alt="" id="card_img" />
                                <span>Экзамен по профстандарту ч. 1 2021 г. Охрина Д.Б.</span>
                        </div>
                        <div id="card">
                            <img src="/сертификаты и лицензии сотрудников/4.jpg" alt="" id="card_img" />
                                <span>Экзамен по профстандарту ч. 2 2021 г. Охрина Д.Б.</span>
                        </div>
                        <div id="card">
                            <img src="/сертификаты и лицензии сотрудников/5.jpg" alt="" id="card_img" />
                                <span>Экзамен по профстандарту ч. 3 2021 г. Охрина Д.Б.</span>
                        </div>
                        <div id="card">
                            <img src="/сертификаты и лицензии сотрудников/6.jpg" alt="" id="card_img" />
                                <span>Сертификат о прохождении курса. 2019 г. Охрина Д.Б.</span>
                        </div>
                    </div>
                </div>
                <RightBar></RightBar>
            </div>
            <Footer></Footer>
        </>
)
}

export default About;