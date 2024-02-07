import '../.././app.css';
import Header from "../.././header/Header.jsx";
import Footer from "../.././footer/Footer.jsx";
import LeftBar from "../.././leftBar/LeftBar.jsx";
import RightBar from "../.././rightBar/RightBar.jsx";
import axios from "axios";
import React, { useState } from 'react';
import {ServicesService} from "../../api/services.service.js";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Contacts() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [question, setQuestion] = useState()
    const [notification, setNotification] = useState(null)

    const notifyAccept = () => toast.success('🦄 Обращение успешно зарегистрированно', {
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
    const notifyError = () => toast.error('🦄 Произошла ошибка при образении !', {
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
            const response = await axios.post('http://localhost:8080/review', {
                name,
                email,
                question,
            });

            console.log(1)
            console.log(response.data); // Вывод ответа сервера в консоль
            console.log(2)

            if (response.status === 200) {
                notifyAccept()
            } else {
                notifyError()
            }
        } catch (error) {
            notifyError()
        }
    };
    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };

    const handleQuestion= (e) => {
        setQuestion(e.target.value)
    };

    return (
        <>
            <Header></Header>
            <div id="content">
                <LeftBar></LeftBar>
                <div id="main_content">
                    <h1 className="center_text">Контакты</h1>
                    <div>
                        <p className="center_text"><b>Режим работы:</b> 10.00-19.00</p>
                        <p className="center_text"><b>Выходные дни:</b> суббота, воскресенье</p>
                        <p className="center_text"><b>Единый бесплатный телефон:</b> <a href="tel:88005558325">8-800-555-83-25</a></p>
                    </div>
                    <br/>
                    <h1 className="center_text">Остались вопросы? Напишите нам!</h1>
                    <br/>
                    <form action="/submit_form" method="post" className="question-form" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="form-label">Ваше имя:</label>
                        <input onChange={handleName} type="text" id="name" name="name" className="form-input" required />

                        <label htmlFor="email" className="form-label">Ваша почта:</label>
                        <input onChange={handleEmail} type="email" id="email" name="email" className="form-input" required />

                        <label htmlFor="question" className="form-label">Ваш вопрос:</label>
                        <textarea onChange={handleQuestion} id="question" name="question" className="form-textarea" rows="5" required></textarea>

                        <button type="submit" id="login-button">Отправить вопрос</button>
                    </form>
                    {notification && <Notification message={notification} onClose={closeNotification} />}
                </div>
                <ToastContainer />
                <RightBar></RightBar>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Contacts;