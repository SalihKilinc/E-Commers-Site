import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/scss/bootstrap.scss";
import { ThemeProvider } from './GlobalComponents/ThemeProvider';
import { CartProvider } from 'react-use-cart';
// import "bootstrap"; Bu import eğer bootstrap static olarak kullanılacaksa Javascript i etkinleştirmek için kullanılmalıdır. Dinamik yapıda buna gerek yoktur.

//const root = ReactDOM.createRoot(document.getElementById('root'));
render(
    <React.StrictMode>
    <ThemeProvider>  
        <CartProvider> <App/>
          </CartProvider>


    </ThemeProvider>
    </React.StrictMode>   // alt ogeleri kontrol eder ve uyarilari etkin hale getirir 
    ,
    document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
