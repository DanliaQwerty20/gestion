import '../.././app.css'
import Header from "../.././header/Header.jsx";
import Footer from "../.././footer/Footer.jsx";
import LeftBar from "../.././leftBar/LeftBar.jsx";
import RightBar from "../.././rightBar/RightBar.jsx";

import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Button from "../../button/Button.jsx";
import getSessionIdFromCookies from "../../header/Header.jsx"
import {ServicesService} from "../../api/services.service.js";
import {Bounce, toast, ToastContainer, Zoom} from "react-toastify";


export function Service() {
    const [services, setServices] = useState([])
    const [headerKey, setHeaderKey] = useState(0);

    const notifyAccept = () => toast.success('🦄 Успешно сохранено в корзину', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    const notifyError = () => toast.error('🦄 Произошла ошибка, услугу возможно добавить только один раз!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8080/services")
            setServices(response.data)
        }

        fetchData()
    }, [])

    return (
        <>
            <Header key={headerKey}></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 className="center_text">Услуги</h1>
                    <div id="service_main">
                        {services.map(service => (
                            <div key={service.id} id="service_card">
                                <img src={service.photo} alt="абонентское юридическое обслуживание" id="service_img"/>
                                <div id="sum">
                                    <span className="dics">{service.price} ₽</span>
                                </div>
                                <p className="center_text"><b>{service.name}</b></p>
                                <span className="center_text" id="info_text"><Link to={service.url}>Подробнее об услуге</Link></span>
                                <Button serviceId={service.id} notifyAccept={notifyAccept} notifyError={notifyError} setHeaderKey={setHeaderKey}></Button>
                            </div>
                        ))}
                    </div>
                </div>
                <RightBar></RightBar>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </>
    )
}

export default Service;