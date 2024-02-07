import '../app.css'
import {Link} from "react-router-dom";

export function LeftBar() {
    return (
        <div id="left_bar">
            <Link to={"/subscription"} id="left_bar_text"><a>Абонентское обслуживание</a></Link>
            <Link to={"/reporting"} id="left_bar_text"><a>Нулевая отчётность</a></Link>
            <Link to={"/reqIp"} id="left_bar_text"><a>Регистрация ИП</a></Link>
            <Link to={"/reqO"} id="left_bar_text"><a>Регистрация ООО «под ключ»</a></Link>
            <Link to={"/consultation"} id="left_bar_text"><a>Консультация адвоката</a></Link>
            <Link to={"/failure"} id="left_bar_text"><a>Ведение дел о банкротстве</a></Link>
        </div>
)
}

export default LeftBar;
