// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext'; // Import the AuthProvider
// import Home from './pages/Home';
// import SignInPage from './pages/SignInPage';
// import SignUpPage from './pages/SignUpPage';
// import ModerationHub from './pages/ModerationHub';
// import ErrorBoundary from './components/ErrorBoundary';  // Import ErrorBoundary

import Body from "./pages/HomePage/Body/Body";
import NavbarBottom from "./pages/HomePage/Header/NavbarBottom";
import NavbarTop from "./pages/HomePage/Header/NavbarTop";



const App = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                {/* Navbar Sections */}
                <NavbarTop />
                <NavbarBottom />

                {/* Main Body */}
                <Body />
            </div>
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
