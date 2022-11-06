import 'admin-lte/dist/css/alt/adminlte.light.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import React, {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import Footer from "./components/layout/Footer";
import Content from "./components/layout/Content";

function App() {
    const dispatch = useDispatch();

    return (
        <div className="wrapper">
            <Header/>
            <SideBar/>

            <Content />

            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
                <div className="p-3">
                    <h5>Title</h5>
                    <p>Sidebar content</p>
                </div>
            </aside>
            {/* /.control-sidebar */}

            <Footer />
        </div>
    );
}

export default App;
