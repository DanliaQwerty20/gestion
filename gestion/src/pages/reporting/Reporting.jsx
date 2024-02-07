import '../.././app.css'
import Header from "../.././header/Header.jsx";
import Footer from "../.././footer/Footer.jsx";
import LeftBar from "../.././leftBar/LeftBar.jsx";
import RightBar from "../.././rightBar/RightBar.jsx";

export function Reporting() {
    return (
        <>
            <Header></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 class="center_text">Нулевая отчетность</h1>
                    <span>
                        Согласно российскому законодательству предприниматели без образования юридического лица и юридические лица обязаны своевременно отчитываться во внебюджетных фондах по месту своей регистрации и в ИФНС, даже, если за отчетный период организация не провела ни одной финансово-хозяйственной операции.
                    </span>
                    <br/>
                    <br/>
                    <span>
                        Нулевой отчетностью является комплект отчетности по организации, которая не осуществляла на протяжении отчетного периода какой-либо деятельности.
                    </span>
                    <span>
                        Нулевая отчетность оформляется в полном соответствии с установленной законом формой и сдается в строго установленный срок. Следует помнить, что нарушение сроков влечет за собой штрафные санкции.
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <i>Более подробную информацию об услуге Вы можете получить у наших специалистов.</i>
                    </span>
                    <br/>
                    <br/>
                    <img src="/услуги/нул отчёт.jpg" alt="нулевая отчётность" />
                    <br/>
                    <button id="sama">В корзину</button>
                </div>
                <RightBar></RightBar>
            </div>
            <Footer></Footer>
        </>
)
}

export default Reporting;