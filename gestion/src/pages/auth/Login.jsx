import React, { useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

import Header from '../.././header/Header.jsx';
import Footer from '../.././footer/Footer.jsx';
import LeftBar from '../.././leftBar/LeftBar.jsx';
import RightBar from '../.././rightBar/RightBar.jsx';
import {Bounce, toast, ToastContainer} from "react-toastify";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [headerKey, setHeaderKey] = useState(0);

    const notifyAccept = () => toast.success('🦄 Успешный вход!', {
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
    const notifyError = () => toast.error('🦄 Ошибка входа', {
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
            // Выполнение запроса на сервер для входа пользователя

            const response = await axios.post('http://localhost:8080/log', {
                email: email,
                password: password,
            });


            // Если запрос успешен, обновляем куку
            if (response.status === 200) {
                const sessionId  = response.data.userSession.sessionId;
                console.log(sessionId)
                // Обновляем куку "sessionId"
                document.cookie = `sessionId=${sessionId}; path=/`;

                // Перенаправляем пользователя на другую страницу, если нужно
                notifyAccept()
                setHeaderKey(prevKey => prevKey + 1);
            } else {
                notifyError()
            }
        } catch (error) {
            console.error('Ошибка при входе:', error);
            notifyError()
        }
    };

    return (
        <>
            <Header key={headerKey}></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 className="center_text">Вход</h1>
                    <div className="auth-container">
                        <form onSubmit={handleSubmit} className="auth-form" id="login-form">
                            <label htmlFor="login-email" className="form-label">
                                Ваша почта:
                            </label>
                            <input
                                type="email"
                                id="login-email"
                                name="login-email"
                                className="form-input"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor="login-password" className="form-label">
                                Пароль:
                            </label>
                            <input
                                type="password"
                                id="login-password"
                                name="login-password"
                                className="form-input"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button type="submit" className="form-button">
                                Войти
                            </button>
                            <p className="auth-link">
                                Нет аккаунта? <Link to={'/req'}>Зарегистрируйтесь здесь</Link>.
                            </p>
                        </form>
                    </div>
                </div>
                <ToastContainer />
                <RightBar></RightBar>

            </div>
            <Footer></Footer>
        </>
    );
}

export default Login;
