// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext'; // Import the AuthProvider
// import Home from './pages/Home';
// import SignInPage from './pages/SignInPage';
// import SignUpPage from './pages/SignUpPage';
// import ModerationHub from './pages/ModerationHub';
// import ErrorBoundary from './components/ErrorBoundary';  // Import ErrorBoundary

import Section1 from "./pages/HomePage/Body/Section1";
import Section2 from "./pages/HomePage/Body/Section2";
import Section3 from "./pages/HomePage/Body/Section3";
import Footer from "./pages/HomePage/Footer/Footer";
import NavbarBottom from "./pages/HomePage/Header/NavbarBottom";
import NavbarTop from "./pages/HomePage/Header/NavbarTop";



const App = () => {
    return (
        <>
            {/* Navbar Sections */}
            <NavbarTop />
            <NavbarBottom />
            
            {/* Main Body */}
            <Section1 />
            <Section2 />
            <Section3 />
            
            {/* Footer */}
            <Footer />
        </>
        // <AuthProvider>
        //     <Router>
        //         <ErrorBoundary>
        //             <Routes>
        //                 <Route path="/" element={<Home />} />
        //                 <Route path="/sign-in" element={<SignInPage />} />
        //                 <Route path="/sign-up" element={<SignUpPage />} />
        //                 <Route path="/moderation-hub" element={<ModerationHub />} />
        //             </Routes>
        //         </ErrorBoundary>
        //     </Router>
        // </AuthProvider>
    );
};

export default App;
