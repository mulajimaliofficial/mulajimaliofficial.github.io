import { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Loader from "./components/common/Loader/Loader";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ScrollToTop />
                <AppRoutes />

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    theme="dark"
                    pauseOnHover
                />
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
