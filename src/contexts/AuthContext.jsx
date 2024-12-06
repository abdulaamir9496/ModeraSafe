import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';


// Create Context
export const AuthContext = createContext();

// Create a custom hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // SignIn function to authenticate the user
    const signIn = (userData) => {
        setUser(userData);
        console.log('User signed in:', userData);
    };

    // SignUp function to register a user
    const signUp = (userData) => {
        setUser(userData);
        console.log('User signed up:', userData);
    };

    // SignOut function to log out the user
    const signOut = () => {
        setUser(null);
        console.log('User signed out');
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}