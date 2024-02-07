import React from 'react';
import {ServicesService} from "../api/services.service.js";
import Header from "../header/Header.jsx";
import {Bounce, toast, ToastContainer, Zoom} from "react-toastify";

export function Button({serviceId, userSessionId, notifyAccept, notifyError, setHeaderKey}) {



    const saveToCatalog = async (serviceId) => {
        try {
            // Преобразуем serviceId к строке (или другому примитивному типу)
            const stringServiceId = String();
            console.log("THIS IS =" + serviceId)

            const response = await fetch('http://localhost:8080/catalog/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userSessionId: ServicesService.getSessionIdFromCookies(),
                    serviceId: serviceId,
                }),
            });

            if (response.ok) {
                // window.location.reload();
                notifyAccept()
                setHeaderKey(prevKey => prevKey + 1);
            } else {
                console.error("Не удалось сохранить в каталог.");
                notifyError()
            }
        } catch (error) {
            notifyError()
            console.error("Произошла ошибка при сохранении в каталог:", error);
        }
    };

    const handleClick = () => {
        saveToCatalog(serviceId, userSessionId);
    };

    return (
        <button onClick={handleClick}>
            В корзину
        </button>

    );
}
export default Button;
