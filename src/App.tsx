import MainLayout from "./layouts/MainLayout";
import Home from "@/pages/Home"
import Projects from "@/components/pages/Project";
import ProjectDetails from "@/pages/ProjectDetails";
import GithubStat from "@/pages/GithubStats";
import NotFound from "@/pages/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetails />} />
                    <Route path="/github" element={<GithubStat />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </MainLayout>

            <Analytics />
        </BrowserRouter>
    );
}


export default  App
