import React from 'react';
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import LeftBar from "./leftBar/LeftBar.jsx";
import RightBar from "./rightBar/RightBar.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./app.css"; // Подключаем стили для кнопок свайпа

export function App() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };

    // Функции для кастомных кнопок влево и вправо
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return <div id="butn" className="slick-arrow slick-prev" onClick={onClick}><span>&lt;</span></div>;
    }

    function SampleNextArrow(props) {
        const { onClick } = props;
        return <div id="butn" className="slick-arrow slick-next" onClick={onClick}><span>&gt;</span></div>;
    }

    return (
        <>
            <Header />
            <div id="content">
                <LeftBar />
                <div id="main_content">
                    <h1 className="center_text">С вами юридическая компания Гестион</h1>
                    <p className="center_text">
                        Приглашаем к сотрудничеству собственников нежилых помещений в Москве и Санкт-Петербурге. Ваша
                        недвижимость может приносить регулярный дополнительный доход при использовании ее в качестве
                        «юридического адреса» для регистрации юридических лиц.
                    </p>

                    <Slider {...sliderSettings}>
                        <div>
                            <img id="pht" src="/cover.jpg"/>
                        </div>
                        <div>
                            <img id="pht" src="/1000_F_426962178_xcM3K7AHMOXYQDiwBMqErghQLwFPMyX9.jpg"/>
                        </div>
                        <div>
                            <img id="pht" src="/kak-ip-opredelit-sistemu-nalogooblozheniya-768x512.jpg"/>
                        </div>
                        <div>
                            <img id="pht" src="/office_msk.jpg"/>
                        </div>
                    </Slider>
                    <br/>
                    <br/>
                    <table>
                        <tbody>
                        <tr>
                            <td rowSpan={3}>ИП</td>
                        </tr>
                        <tr>
                            <td>Срок «под ключ»</td>
                            <td>Бесплатный расчётный счёт</td>
                        </tr>
                        <tr>
                            <td>В одно посещение, либо онлайн</td>
                            <td>Подробная консультация по всем вопросам</td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>OOO</td>
                        </tr>
                        <tr>
                            <td>Срок «под ключ»</td>
                            <td>Через реестродержателя онлайн</td>
                        </tr>
                        <tr>
                            <td>Бесплатный расчётный счёт</td>
                            <td>Подробная консультация по всем вопросам</td>
                        </tr>
                        </tbody>
                    </table>
                    <br/>
                    <ul>
                        <li> Лист записи о государственной регистрации юридического лица (на бумаге или в электронном виде);</li>
                        <li> Свидетельство о постановке на учет в налоговом органе (на бумаге или в электронном виде);</li>
                        <li> Уведомление о присвоении кодов статистики (в электронном виде).</li>
                    </ul>
                    <ol>
                        <li> Устав (на бумаге или в электронном виде);</li>
                            <li>
                                Решение о создании Общества (в случае единственного учредителя) или протокол общего собрания
                                учредителей (в случае, если учредителей несколько);</li>
                                <li>
                                    Приказ о вступлении в должность генерального директора;</li>
                    </ol>
                    <ul>
                        <li>Приказ о назначении главного бухгалтера (или возложения обязанностей главного бухгалтера на
                            генерального директора);</li>
                        <li> Уведомление о присвоении кодов статистики (в электронном виде).</li>
                            <ul>
                                <li>Документы о регистрации выпуска и отчета об итогах выпуска акций, размещаемых при
                                    учреждении.</li>
                                <li>Приказ о вступлении в должность генерального директора;</li>
                            </ul>
                            <li> Решение о создании Общества (в случае единственного учредителя) или протокол общего собрания
                                учредителей и договор о создании (в случае, если учредителей несколько);</li>
                    </ul>
                </div>
                <RightBar></RightBar>
            </div>
            <Footer></Footer>
        </>
)
}
