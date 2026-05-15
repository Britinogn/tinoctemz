import MainLayout from "./layouts/MainLayout";
import Home from "@/pages/Home"
import ProjectDetails from "@/pages/ProjectDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/:id" element={<ProjectDetails />} />
                </Routes>
            </MainLayout>

            <Analytics />
        </BrowserRouter>
    );
}


export default  App
