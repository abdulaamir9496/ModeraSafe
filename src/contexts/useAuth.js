import { useContext } from 'react';  // Import useContext
import { AuthContext } from './AuthContext';  // Import AuthContext

// Create a custom hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};