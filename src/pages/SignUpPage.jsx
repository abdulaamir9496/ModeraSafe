import SignUpForm from '../components/Auth/SignUpForm';
import { useAuth } from '../contexts/AuthContext';

const SignUpPage = () => {
    const { user, signOut } = useAuth();

    return (
        <div>
            {!user ? (
                <SignUpForm />
            ) : (
                <div>
                    <h2>Welcome, {user.email}</h2>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
};

export default SignUpPage;
