import axios from 'axios';
import Header from "../header/Header.jsx";

export const ServicesService = {
    // Функция для получения sessionId из cookies
    getSessionIdFromCookies() {
        const name = "sessionId=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }

        return null;
    },

    // Функция для проверки наличия sessionId в cookies и выполнения соответствующих действий
    async checkAndHandleSession() {
        // Проверка наличия sessionId в cookies
        const existingSessionId = this.getSessionIdFromCookies();

        if (existingSessionId) {
            console.log("Найден существующий sessionId в cookies:", existingSessionId);
            console.log(existingSessionId)
            const data = await axios.get("http://localhost:8080/catalog/" + existingSessionId);
            if(data.data.length === 0) {
                return false
            }
        } else {
            try {
                const response = await axios.get("http://localhost:8080/session");
                console.log(response); // Вывод ответа сервера в консоль

                if (response.status === 200) {
                    const data = response.data;
                    const newSessionId = data.sessionId;

                    // Сохранение нового номера сессии в cookies
                    document.cookie = "sessionId=" + newSessionId + "; path=/";

                    console.log("Новая сессия успешно сохранена в cookies:", newSessionId);
                } else {
                    console.error("Не удалось создать сессию на бэке.");
                }
            } catch (error) {
                console.error("Произошла ошибка при создании сессии на бэке:", error);
            }
        }

        return existingSessionId; // Возвращаем existingSessionId
    },

    async checkUser() {
        try {
            const response = await axios.get("http://localhost:8080/log/" + this.getSessionIdFromCookies());
            console.log(response); // Вывод ответа сервера в консоль

            if (response.status === 200) {
                return response.data
            } else {
                console.error("Не залогинится");
            }
        } catch (error) {
            console.error("Такого юзера пока нет", error);
        }
    }
};