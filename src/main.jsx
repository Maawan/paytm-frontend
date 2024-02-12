import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { Toaster } from 'react-hot-toast'
import TransferAmount from './pages/TransferAmount.jsx'
import TransactionReciept from './pages/TransactionReciept.jsx'
import MyTransactions from './pages/MyTransactions.jsx'
import Header from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Toaster />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/transfer' element={<TransferAmount />} />
        <Route path='/receipt' element={<TransactionReciept />} />
        <Route path='/mytransactions' element={
        <MyTransactions />} />
      </Routes>
    </BrowserRouter>
)
