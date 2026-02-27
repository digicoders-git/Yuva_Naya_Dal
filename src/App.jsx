import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Connect from './pages/Connect';
 
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // Initial page load simulation
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Handle route changes for the animated loader
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 1s loader on route change for a premium feel

        // Smooth scroll to top on route change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <>
            {/* Animated Loader Overlay */}
            <AnimatePresence mode="wait">
                {loading && <PageLoader key="global-loader" />}
            </AnimatePresence>

            {!loading && (
                <div className="relative min-h-screen flex flex-col selection:bg-saffron selection:text-white">
                    {/* Main Header */}
                    <Header />

                    {/* Main Content Area */}
                    <main className="flex-grow overflow-x-hidden bg-slate-50/50">
                        <AnimatePresence mode="wait">
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<AboutUs />} />
                                <Route path="/gallery" element={<Gallery />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/connect" element={<Connect />} />
                          
                                <Route path="/terms" element={<Terms />} />
                                <Route path="/privacy" element={<Privacy />} />
                            </Routes>
                        </AnimatePresence>
                    </main>

                    {/* Main Footer */}
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
