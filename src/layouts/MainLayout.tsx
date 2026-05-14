import type { ReactNode  } from "react";
import Nav from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

interface MainLayoutProps{
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return(
        <div>
            <Nav />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout

// const MainLayout = () => {
//     return (
//         <>
//             <Nav />

//             <main>
//                 <Home />
//                 <Projects />
//             </main>
//         </>
//     );
// };
