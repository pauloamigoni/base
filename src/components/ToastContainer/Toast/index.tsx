import React, { useEffect } from 'react';
import {
    // FiAlertCircle,
    // FiCheckCircle,
    // FiInfo,
    FiXCircle,
} from 'react-icons/fi';

import ImgSuccess from '../../../assets/success.jpg';
import ImgInfo from '../../../assets/info.jpg';
import ImgError from '../../../assets/error.jpg';

import { ToastMessage, useToast } from '../../../hooks/toast';
import { BodyContaniner, Body, Chat, PopUp, Message, User } from './styles';

interface ToastProps {
    message: ToastMessage;
    style: object;
}

const img = {
    info: <img src={ImgInfo} alt="" />,
    error: <img src={ImgError} alt="" />,
    success: <img src={ImgSuccess} alt="" />,
};

// const icons = {
//     info: <FiInfo size={24} />,
//     error: <FiAlertCircle size={24} />,
//     success: <FiCheckCircle size={24} />,
// };
const Toast: React.FC<ToastProps> = ({ message, style }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [removeToast, message.id]);

    return (
        <>
            <BodyContaniner>
                <Body>
                    <Chat>
                        <PopUp>{img[message.type || 'info']}</PopUp>
                        <Message
                            type={message.type}
                            hasDescription={!!message.description}
                            style={style}
                        >
                            {message.description && (
                                <p>{message.description}</p>
                            )}
                        </Message>
                        <User
                            type={message.type}
                            hasDescription={!!message.description}
                            style={style}
                        >
                            <button
                                onClick={() => removeToast(message.id)}
                                type="button"
                            >
                                <FiXCircle size={18} />
                            </button>
                        </User>
                    </Chat>
                </Body>
            </BodyContaniner>
        </>
        // <PopUp
        //     type={message.type}
        //     hasDescription={!!message.description}
        //     style={style}
        // >
        //     {icons[message.type || 'info']}
        //     <div>
        //         <strong>{message.title}</strong>
        //         {message.description && <p>{message.description}</p>}
        //         <button onClick={() => removeToast(message.id)} type="button">
        //             <FiXCircle size={18} />
        //         </button>
        //     </div>
        // </PopUp>
    );
};

export default Toast;
