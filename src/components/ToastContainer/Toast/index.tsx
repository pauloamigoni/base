import React, { useEffect } from 'react';
import {
    // FiAlertCircle,
    // FiCheckCircle,
    // FiInfo,
    FiXCircle,
} from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/toast';
import { BodyContaniner, Body, Chat, PopUp, Message, User } from './styles';

interface ToastProps {
    message: ToastMessage;
    style: object;
}

const img = {
    info: (
        <img
            src="https://image.freepik.com/fotos-gratis/homem-barbudo-pensativo-sendo-profundo-em-pensamentos-olha-com-expressao-pensativa_95891-653.jpg"
            alt=""
        />
    ),

    error: (
        <img
            src="https://image.freepik.com/fotos-gratis/foto-de-um-jovem-homem-bravo-barbudo-esta-gritando-com-a-camera-no-espaco-amarelo_182527-391.jpg"
            alt=""
        />
    ),
    success: (
        <img
            src="https://image.freepik.com/fotos-gratis/feliz-homem-barbudo-com-olhos-azuis-e-expressao-alegre-aperta-os-punhos-sente-se-vencedor_95891-638.jpg"
            alt=""
        />
    ),
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
