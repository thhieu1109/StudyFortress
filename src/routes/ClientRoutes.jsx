import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from '../pages/client/HomePage';

function ClientRoutes(props) {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}

export default ClientRoutes;