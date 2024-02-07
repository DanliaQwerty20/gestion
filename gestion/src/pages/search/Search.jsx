import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Button from '../../button/Button.jsx';
import Header from '../../header/Header.jsx';
import Footer from '../../footer/Footer.jsx';
import LeftBar from '../../leftBar/LeftBar.jsx';
import RightBar from '../../rightBar/RightBar.jsx';
import {Bounce, toast, ToastContainer} from "react-toastify";

export function Search() {
    const [services, setServices] = useState([]);
    const { keyword } = useParams();
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

    const fetchData = async (searchText) => {
        try {
            console.log("http://localhost:8080/services/search/" + keyword);
            const response = await axios.get("http://localhost:8080/services/search/" + keyword);
            console.log(response.data)
            setServices(response.data);
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    useEffect(() => {
        console.log(keyword);

        // Check if keyword is defined before calling fetchData
        if (keyword !== undefined) {
            fetchData(keyword || '');
        }
    }, [keyword]);

    return (
        <>
            <Header key={headerKey}></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 className="center_text">Услуги</h1>
                    <div id="service_main">
                        {services.map((service) => (
                            <div key={service.id} id="service_card">
                                <img src={service.photo} alt="абонентское юридическое обслуживание" id="service_img" />
                                <div id="sum">
                                    <span className="dics">{service.price} ₽</span>
                                </div>
                                <p className="center_text">
                                    <b>{service.name}</b>
                                </p>
                                <span className="center_text" id="info_text">
                                    <Link to={service.url}>Подробнее об услуге</Link>
                                </span>
                                <Button serviceId={service.id} notifyAccept={notifyAccept} notifyError={notifyError} setHeaderKey={setHeaderKey}></Button>
                            </div>
                        ))}
                    </div>
                </div>
                <ToastContainer />
                <RightBar></RightBar>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Search;