import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import './index.css';

const GlobalStyle = createGlobalStyle`
    html{
      /* scroll-snap-type:y mandatory; */
      /* scroll-padding-top  : 27px;
      scroll-padding-bottom : 100px; */
    }
    html, body {
      overflow-y: visible;
      padding : 0;
      margin : 0;
      scroll-behavior: smooth;
      font-family : 'Noto Sans KR';
      font-size: 14px;
      height : 100%;
      width : 100%;
      @media (max-width: 1200px) {
        font-size: 14px
      }
      @media (max-width: 1024px) {
        font-size: 10px
      }
      @media (max-width: 768px) {
        font-size: 8px
      }
    }
    #root{
      width : 100%;
      height : 100%;
      margin : 0px;
      padding : 0px;
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
