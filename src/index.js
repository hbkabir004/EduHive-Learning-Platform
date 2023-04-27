import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { CustomRouter } from "./components/Shared/customRouter";
import { YScroll } from "./components/Shared/yScroll";
import UserContext from './contexts/UserContext';
import './index.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// const history = createBrowserHistory();
// wrapHistory(history);

ReactDOM.render(

  <React.StrictMode>
    <CustomRouter>
      <YScroll>
        <UserContext>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"></ToastContainer>

          <App />
          
        </UserContext>
      </YScroll>
    </CustomRouter>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
