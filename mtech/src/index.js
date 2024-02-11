import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomHeaderFilterSingleDataGridPro from './Component/Testt/CustomHeaderFilterSingleDataGridPro';
// import Main from './Pages/Main';
// import Employee from './Pages/Ilham/Employee.jsx';
// import Login from './Pages/Login';
// import { BrowserRouter } from 'react-router-dom/dist';//for react contaxt that is for move the props
// import Rout from './Rout';
// import Filter from './Pages/Ilham/Filter';
//to all routs we have routs as perant
//all the components of our path as element
//a (Link) href(to)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <BrowserRouter>
<Rout/> */}
{/* </BrowserRouter> */}
    {/* <Main/> */}
    {/* <Login/> */}
    {/* <Employee/> */}
    <CustomHeaderFilterSingleDataGridPro/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

