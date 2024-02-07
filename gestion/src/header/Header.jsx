import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ServicesService } from '../api/services.service.js';

export function Header() {
    const [isCartAvailable, setIsCartAvailable] = useState(false);
    const [user, setUser] = useState();
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const checkSession = async () => {
            try {
                const cartAvailable = await ServicesService.checkAndHandleSession();
                setIsCartAvailable(cartAvailable ? true : false);
                const us = await ServicesService.checkUser();
                setUser(us);
            } catch (error) {
                console.error('Ошибка при проверке сессии:', error);
            }
        };

        checkSession();
    }, []);


    const handleLogout = async () => {
        // Удаление айди сессии из куков
        document.cookie = 'sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // Повторная проверка сессии после выхода
        await checkSession();
    };

    const handle = (e) => {
        // Удаление айди сессии из куков

        setSearchText(e.target.value)
        console.log(searchText)
        // Повторная проверка сессии после выхода
    };
    return (
        <>
            <header>
                <img src="/logo.svg" alt="logo" id="logo"></img>
                <span id="logo_text">Gestion</span>
                <div id="registration_bar">
                    {user ? (
                        <>
                            <span id="req">{user.name}</span>
                            <span id="log" onClick={handleLogout}>
                                <Link to={'/'}>Выйти</Link>
                            </span>
                        </>
                    ) : (
                        <>
                            <span id="req">
                                <Link to={'/req'}>Регистрация</Link>
                            </span>
                            <span id="log">
                                <Link to={'/login'}>Войти</Link>
                            </span>
                        </>
                    )}

                    {isCartAvailable ? (
                        <Link to={'/shop'}>
                            <img src="/icon-verification.png" id="bag_buy" />
                        </Link>
                    ) : (
                        <Link to={'/shop'}>
                            <img src="/shopping-carts.png" id="bag_buy" />
                        </Link>
                    )}
                </div>
            </header>
            <div id="botton_header">
                <Link to={'/'}>
                    <a>Главная</a>
                </Link>
                <Link to={'/service'}>
                    <a>Услуги</a>
                </Link>
                <Link to={'/about'}>
                    <a>О компании</a>
                </Link>
                <Link to={'/contacts'}>
                    <a>Контакты</a>
                </Link>
                <div id="search_div">
                    <input
                        type="name"
                        value={searchText}
                        onChange={handle}
                    />
                    {/* Используем функцию handleSearch при клике на изображение поиска */}
                    <Link to={`/search/${searchText}`}>
                        <img src="/search.svg" alt="search" id="search" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;