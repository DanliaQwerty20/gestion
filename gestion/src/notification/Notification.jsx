import React, { useState, useEffect } from 'react';

const Notification = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0' }}>
            {message}
        </div>
    );
};
export default Notification;