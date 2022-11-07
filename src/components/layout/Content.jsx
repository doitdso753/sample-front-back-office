import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Dashboard from "../../pages/Dashboard";
import Board from "../../pages/Board";
import BoardDetail from "../../pages/Board/Detail";
import {Route, Routes} from "react-router-dom";

function Content() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/board" element={<Board />} />
            <Route path="/board/:id" element={<BoardDetail />} />
        </Routes>
    );
}

export default Content;
