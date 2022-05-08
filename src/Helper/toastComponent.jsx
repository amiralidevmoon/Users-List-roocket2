import {toast, ToastContainer} from "react-toastify";
import React from "react";

export const ToastAlert = (message, TYPE='success') => {

    return toast(message, {
        position: "bottom-right",
        type: TYPE,
        autoClose: 3000,
        rtl: true,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
}