import React, { useState } from 'react';
import '../.././app.css';
import Header from '../.././header/Header.jsx';
import Footer from '../.././footer/Footer.jsx';
import LeftBar from '../.././leftBar/LeftBar.jsx';
import RightBar from '../.././rightBar/RightBar.jsx';
import {Flip, toast, ToastContainer} from "react-toastify";

export function Buy() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ваш код обработки отправки формы, например, запрос к серверу
        toast.error('🦄 Временно не работает оплата!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        });

    };

    return (
        <>
            <Header></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 className="center_text">Купить</h1>
                    <form action="/submit_form" method="post" className="question-form" onSubmit={handleSubmit}>
                        <label htmlFor="phone" className="form-label">
                            Телефон:
                        </label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />

                        <label htmlFor="email" className="form-label">
                            Адрес:
                        </label>
                        <input type="email" id="email" name="email" className="form-input" required />

                        <label htmlFor="question" className="form-label">
                            Комментарий к доставке
                        </label>
                        <textarea id="question" name="question" className="form-textarea" rows="5" required></textarea>

                        <button type="submit" id="login-button1">
                            Купить
                        </button>
                    </form>
                </div>
                <RightBar></RightBar>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </>
    );
}

export default Buy;
