import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import UsersAppComponent from './Components/UsersApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <UsersAppComponent/>
    </>
);
