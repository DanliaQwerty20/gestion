import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../.././app.css';
import Header from '../.././header/Header.jsx';
import Footer from '../.././footer/Footer.jsx';
import LeftBar from '../.././leftBar/LeftBar.jsx';
import RightBar from '../.././rightBar/RightBar.jsx';
import {ServicesService} from "../../api/services.service.js";
import {Bounce, toast, ToastContainer} from "react-toastify";

export function Req() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const notifyError = () => toast.error('🦄 Ошибка регистрации', {
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Отправка POST-запроса на /create для регистрации пользователя
            document.cookie = 'sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            const cartAvailable = await ServicesService.checkAndHandleSession();
            const response = await axios.post('http://localhost:8080/req/' + ServicesService.getSessionIdFromCookies(), {
                name,
                email,
                password,
            });

            console.log(response.data); // Вывод ответа сервера в консоль

            if (response.status === 200) {
                history.back()
                window.location.reload();
            } else {
                notifyError()
            }
            // Возможно, здесь нужно добавить обработку успешной регистрации
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            notifyError()
            // Возможно, здесь нужно добавить обработку ошибок регистрации
        }
    };

    return (
        <>
            <Header></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 className="center_text">Регистрация</h1>
                    <div className="auth-container">
                        <form onSubmit={handleSubmit} className="auth-form" id="register-form">
                            <h2 className="form-title">Регистрация</h2>
                            <label htmlFor="register-name" className="form-label">
                                Ваше имя:
                            </label>
                            <input
                                type="text"
                                id="register-name"
                                name="register-name"
                                className="form-input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label htmlFor="register-email" className="form-label">
                                Ваша почта:
                            </label>
                            <input
                                type="email"
                                id="register-email"
                                name="register-email"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <label htmlFor="register-password" className="form-label">
                                Пароль:
                            </label>
                            <input
                                type="password"
                                id="register-password"
                                name="register-password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button type="submit" className="form-button">
                                Зарегистрироваться
                            </button>
                        </form>
                        <br />
                        <span className="auth-link">
                            Уже зарегистрированы? <Link to={'/login'}>Войдите здесь</Link>.
                        </span>
                    </div>
                </div>
                <ToastContainer />
                <RightBar></RightBar>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Req;
