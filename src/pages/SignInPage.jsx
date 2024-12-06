import SignInForm from '../components/Auth/SignInForm';
import { useAuth } from '../contexts/AuthContext'

const SignInPage = () => {
    const { user, signOut } = useAuth();

    return (
        <div>
            {!user ? (
                <SignInForm />
            ) : (
                <div>
                    <h2>Welcome, {user.email}</h2>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
};

export default SignInPage;
