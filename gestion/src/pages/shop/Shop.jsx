import React, { useEffect, useState } from 'react';
import { ServicesService } from '../../api/services.service.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../header/Header.jsx';
import Footer from '../../footer/Footer.jsx';
import LeftBar from '../../leftBar/LeftBar.jsx';
import RightBar from '../../rightBar/RightBar.jsx';
import Button from '../../button/Button.jsx';

export function Shop() {
    const [shopping, setShopping] = useState([]);
    const [services, setServices] = useState([]);
    const [headerKey, setHeaderKey] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`http://localhost:8080/catalog/${ServicesService.getSessionIdFromCookies()}`);
            setShopping(data.data);
        };

        fetchData();
    }, [headerKey]); // Перезапускайте эффект, когда обновляется headerKey

    const handleRemove = async (id) => {
        setHeaderKey((prevKey) => prevKey + 1);
        try {
            await axios.delete(`http://localhost:8080/catalog/${id}`);
            setShopping((prevShopping) => prevShopping.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Ошибка при удалении из корзины:', error);
            setHeaderKey((prevKey) => prevKey + 1);
        }
        if (shopping.length === 0) {
            setHeaderKey((prevKey) => prevKey + 1);
        }
        setHeaderKey((prevKey) => prevKey + 1);
    };

    const totalCost = shopping.reduce(
        (accumulator, currentItem) => accumulator + parseFloat(currentItem.service.price),
        0
    );

    useEffect(() => {
        // Здесь вы можете добавить код, который нужно выполнить при каждом изменении headerKey
        // Например, обновление других частей компонента или вызов других функций
    }, [headerKey]);

    return (
        <>
            <Header key={headerKey}></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 className="center_text">Корзина</h1>
                    <div id="shop_div">
                        {shopping.map(shop => (
                        <div key={shop.id} id="shop_card">
                            <img src={shop.service.photo} id="shop_img"/>
                            <div id="texting">
                                <p id="shope_name">{shop.service.name}</p>
                                <p id="shope_price">{shop.service.price}</p>
                                <span className="shope_info" id="info_text"><Link to={shop.service.url}>Подробнее об услуге</Link></span>
                            </div>
                            <button
                                id="remove_button"
                                onClick={() => handleRemove(shop.id)}
                            >
                                Удалить
                            </button>
                        </div>
                        ))}
                        <div id="right">
                            <p className="center_text">Общая Стоимость: {totalCost}</p>
                            <Link id="buy"  to={shopping.length > 0 ? '/buy' : '/service'}><button>КУПИТЬ</button></Link>
                        </div>
                    </div>
                </div>
                <RightBar></RightBar>
            </div>
            <Footer></Footer>
        </>
)
}

export default Shop;
