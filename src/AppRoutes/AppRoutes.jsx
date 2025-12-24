import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import AboutPage from '../Pages/AboutPage/AboutPage'
import NewsroomPage from '../Pages/NewsroomPage/NewsroomPage'
import PartnersPage from '../Pages/PartnersPage/PartnersPage'
import PandaadsPage from '../Pages/PandaadsPage/PandaadsPage'
import ContactPage from '../Pages/ContactPage/ContactPage'
import CareersPage from '../Pages/CareersPage/CareersPage'

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/newsroom" element={<NewsroomPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/panda-ads" element={<PandaadsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareersPage />} />
            </Routes>
        </>
    )
}
