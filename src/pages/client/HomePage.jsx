import { Outlet } from "react-router";
import Footer from "../../components/client/home/Footer";
import Header from "../../components/client/home/Header";

function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/50 to-blue-50/30">
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;