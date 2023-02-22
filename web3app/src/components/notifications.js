import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToastMessage = (type, message,time) => {
    
    if (type === "success") {
        toast.success(message, {
            autoClose: time,
            position: toast.POSITION.TOP_RIGHT
        });
    } else if (type === "error") {
        toast.error(message, {
            autoClose: time,
            position: toast.POSITION.TOP_RIGHT
        });
    } else if (type === "warning") {
        toast.warn(message, {
            autoClose: time,
            position: toast.POSITION.TOP_RIGHT
        });
    } else if (type === "info") {
        toast.info(message, {
            autoClose: time,
            position: toast.POSITION.TOP_CENTER,
        });
    }

}